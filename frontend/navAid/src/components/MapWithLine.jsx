import { Stage, Layer, Line, Circle, Image as KonvaImage } from "react-konva";
import { useEffect, useRef, useState, useContext } from "react";
import NavigationContext from "../context/NavigationContext";
import map from "../assets/buildingMap.jpg";
import { rooms } from "../util/rooms";

export default function MapWithLine({ currentRoom }) {
  const { linePath } = useContext(NavigationContext);
  const containerRef = useRef(null);
  const [image, setImage] = useState(null);
  const stageRef = useRef(null);
  const userMarker = currentRoom ? rooms[currentRoom] : null;
  const markerRef = useRef(null);

  // Load map
  useEffect(() => {
    const img = new window.Image();
    img.src = map;
    img.onload = () => setImage(img);
  }, []);

  // Initial idle position offset
  useEffect(() => {
    if (!stageRef.current || !containerRef.current || !image) return;

    const containerWidth = containerRef.current.clientWidth;
    const containerHeight = containerRef.current.clientHeight;

    // Image natural size
    const imgNaturalWidth = image.naturalWidth;
    const imgNaturalHeight = image.naturalHeight;

    // No zoom initially
    const zoom = 1;

    stageRef.current.scale({ x: zoom, y: zoom });
    stageRef.current.position({
      x: containerWidth / 2 - (imgNaturalWidth / 2) * zoom - 100,
      y: containerHeight / 2 - (imgNaturalHeight / 2) * zoom - 250, // move map visually up by shifting stage down 250px
    });
    stageRef.current.batchDraw();
  }, [image]);

  // Zoom toward path center when path changes
  useEffect(() => {
    if (
      linePath.length === 0 ||
      !stageRef.current ||
      !containerRef.current ||
      !image
    )
      return;

    const stage = stageRef.current;
    const containerWidth = containerRef.current.clientWidth;
    const containerHeight = containerRef.current.clientHeight;

    const xs = linePath.map((p) => p.x);
    const ys = linePath.map((p) => p.y);
    const minX = Math.min(...xs);
    const maxX = Math.max(...xs);
    const minY = Math.min(...ys);
    const maxY = Math.max(...ys);

    const linePathWidth = maxX - minX;
    const linePathHeight = maxY - minY;

    // Padding around the path (in pixels)
    const padding = 100;

    // Calculate scale to fit path + padding into container
    const scaleX = containerWidth / (linePathWidth + padding * 2);
    const scaleY = containerHeight / (linePathHeight + padding * 2);
    const rawScale = Math.min(scaleX, scaleY);

    // Clamp zoom to never zoom out beyond 1 (100%) or zoom in beyond 2 (200%)
    const scale = Math.min(Math.max(rawScale, 1), 2);

    // Center of the path
    const centerX = (minX + maxX) / 2;
    const centerY = (minY + maxY) / 2;

    // Calculate new position to center path in container
    const newX = containerWidth / 2 - centerX * scale;
    const newY = containerHeight / 2 - centerY * scale;

    new Konva.Tween({
      node: stage,
      duration: 0.6,
      scaleX: scale,
      scaleY: scale,
      x: newX,
      y: newY,
      easing: Konva.Easings.EaseInOut,
      onFinish: () => {
        stage.batchDraw();
      },
    }).play();
  }, [linePath, image]);

  useEffect(() => {
    if (!userMarker || !markerRef.current) return;

    const marker = markerRef.current;

    if (marker.x() === 0 && marker.y() === 0) {
      // First time: set position manually
      marker.position({ x: userMarker.x, y: userMarker.y });
      marker.getLayer().batchDraw();
      return;
    }

    new Konva.Tween({
      node: marker,
      duration: 0.5,
      x: userMarker.x,
      y: userMarker.y,
      easing: Konva.Easings.EaseInOut,
      onFinish: () => {
        marker.getLayer().batchDraw();
      },
    }).play();
  }, [userMarker]);

  const flatPoints = linePath.flatMap((p) => [p.x, p.y]);
  const endPoint = linePath[linePath.length - 1];

  return (
    <div
      ref={containerRef}
      className="w-full h-full relative overflow-hidden bg-white"
    >
      {image && (
        <Stage
          ref={stageRef}
          width={containerRef.current?.clientWidth || 960}
          height={containerRef.current?.clientHeight || 1024}
          className="absolute top-0 left-0"
        >
          <Layer>
            <KonvaImage
              image={image}
              x={0}
              y={0}
              width={image.naturalWidth}
              height={image.naturalHeight}
            />
            {flatPoints.length > 0 && (
              <>
                <Line
                  points={flatPoints}
                  stroke="blue"
                  strokeWidth={8}
                  lineCap="round"
                  lineJoin="round"
                />
                <Circle
                  ref={markerRef}
                  radius={8}
                  fill="blue"
                  stroke="white"
                  strokeWidth={2}
                  shadowBlur={10}
                />
                <Circle
                  x={endPoint?.x}
                  y={endPoint?.y}
                  radius={8}
                  fill="darkblue"
                  stroke="blue"
                  strokeWidth={2}
                  shadowBlur={10}
                />
              </>
            )}
          </Layer>
        </Stage>
      )}
    </div>
  );
}
