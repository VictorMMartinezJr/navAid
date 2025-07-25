import { Stage, Layer, Line, Circle, Image as KonvaImage } from "react-konva";
import { useEffect, useRef, useState, useContext } from "react";
import NavigationContext from "../context/NavigationContext";
import map from "../assets/buildingMap.jpg";
import { rooms } from "../util/rooms";

export default function MapWithLine({ currentRoom }) {
  const { linePath, stageRef, setInitialStageResetFn } =
    useContext(NavigationContext);
  const containerRef = useRef(null);
  const [image, setImage] = useState(null);
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

    const stage = stageRef.current;
    const containerWidth = containerRef.current.clientWidth;
    const containerHeight = containerRef.current.clientHeight;

    const zoom = 1;
    const posX = containerWidth / 2 - (image.naturalWidth / 2) * zoom - 100;
    const posY = containerHeight / 2 - (image.naturalHeight / 2) * zoom - 250;

    stage.scale({ x: zoom, y: zoom });
    stage.position({ x: posX, y: posY });
    stage.batchDraw();

    // ✅ Save a reset function to context
    const resetStagePosition = () => {
      stage.to({
        scaleX: zoom,
        scaleY: zoom,
        x: posX,
        y: posY,
        duration: 0.4,
        easing: Konva.Easings.EaseInOut,
      });
    };

    setInitialStageResetFn(() => resetStagePosition);
  }, [image]);

  // Zoom toward path center when path changes
  // Zoom toward path center when path changes
  useEffect(() => {
    if (!userMarker || !stageRef.current || !containerRef.current || !image)
      return;

    const stage = stageRef.current;
    const containerWidth = containerRef.current.clientWidth;
    const containerHeight = containerRef.current.clientHeight;

    const zoom = 2; // Zoom level you want (adjust as needed)

    const newX = containerWidth / 2 - userMarker.x * zoom;
    const newY = containerHeight / 2 - userMarker.y * zoom;

    new Konva.Tween({
      node: stage,
      duration: 0.6,
      scaleX: zoom,
      scaleY: zoom,
      x: newX,
      y: newY,
      easing: Konva.Easings.EaseInOut,
      onFinish: () => {
        if (stage) {
          stage.batchDraw();
        }
      },
    }).play();
  }, [userMarker, image]);

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
