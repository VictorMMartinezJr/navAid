import { Stage, Layer, Line, Circle, Image as KonvaImage } from "react-konva";
import { useEffect, useRef, useState, useContext } from "react";
import NavigationContext from "../context/NavigationContext";
import map from "../assets/map.jpg";

export default function MapWithLine() {
  const { path } = useContext(NavigationContext);
  const containerRef = useRef(null);
  const [image, setImage] = useState(null);
  const stageRef = useRef(null);

  // Load image manually for full control
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
      path.length === 0 ||
      !stageRef.current ||
      !containerRef.current ||
      !image
    )
      return;

    const stage = stageRef.current;
    const containerWidth = containerRef.current.clientWidth;
    const containerHeight = containerRef.current.clientHeight;

    const xs = path.map((p) => p.x);
    const ys = path.map((p) => p.y);
    const minX = Math.min(...xs);
    const maxX = Math.max(...xs);
    const minY = Math.min(...ys);
    const maxY = Math.max(...ys);

    const pathWidth = maxX - minX;
    const pathHeight = maxY - minY;

    // Padding around the path (in pixels)
    const padding = 100;

    // Calculate scale to fit path + padding into container
    const scaleX = containerWidth / (pathWidth + padding * 2);
    const scaleY = containerHeight / (pathHeight + padding * 2);
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
  }, [path, image]);

  const flatPoints = path.flatMap((p) => [p.x, p.y]);
  const endPoint = path[path.length - 1];

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
                  strokeWidth={4}
                  lineCap="round"
                  lineJoin="round"
                />
                <Circle
                  x={endPoint?.x}
                  y={endPoint?.y}
                  radius={8}
                  fill="blue"
                  stroke="white"
                  strokeWidth={2}
                />
              </>
            )}
          </Layer>
        </Stage>
      )}
    </div>
  );
}
