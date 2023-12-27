import React, { useEffect, useRef } from 'react';
import styles from './GraphSheet.module.css';
import AdjustableShapesCanvas from '../AdjustableShapes/AdjustableShapes'; // Import the AdjustableShapesCanvas component
import CursorDrawCanvas from '../DrawingPad/DrawingCanvas'; // Import the CursorDrawCanvas component

const GraphSheet: React.FC = () => {
  const quadrant1Ref = useRef<HTMLCanvasElement | null>(null);
  const quadrant2Ref = useRef<HTMLCanvasElement | null>(null);
  const quadrant3Ref = useRef<HTMLCanvasElement | null>(null);
  const quadrant4Ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const drawAxes = (context: CanvasRenderingContext2D, width: number, height: number) => {
      context.beginPath();
      context.moveTo(width / 2, 0);
      context.lineTo(width / 2, height);
      context.moveTo(0, height / 2);
      context.lineTo(width, height / 2);
      context.strokeStyle = "#ccc";
      context.stroke();
    };

    const drawQuadrant = (canvasRef: React.RefObject<HTMLCanvasElement>) => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const context = canvas.getContext("2d");
      if (!context) {
        console.error('Canvas context is null');
        return;
      }

      const width = canvas.width;
      const height = canvas.height;

      // Clear the canvas
      context.clearRect(0, 0, width, height);

      // Draw axes
      drawAxes(context, width, height);
    };

    // Draw each quadrant
    drawQuadrant(quadrant1Ref);
    drawQuadrant(quadrant2Ref);
    drawQuadrant(quadrant3Ref);
    drawQuadrant(quadrant4Ref);
  }, []);

  return (
    <div>
      {/* First Quadrant */}
      <canvas id={styles.quadrant1} ref={quadrant1Ref} className={styles.quadrantCanvas} width={400} height={300}></canvas>
      
      {/* Second Quadrant */}
      <canvas id={styles.quadrant2} ref={quadrant2Ref} className={styles.quadrantCanvas} width={400} height={300}></canvas>
      
      {/* Third Quadrant */}
      <canvas id={styles.quadrant3} ref={quadrant3Ref} className={styles.quadrantCanvas} width={400} height={300}></canvas>
      
      {/* Fourth Quadrant */}
      <div className={styles.quadrant4}>
        {/* Render the AdjustableShapesCanvas component in the fourth quadrant */}
        <AdjustableShapesCanvas />
      </div>

      {/* Cursor Draw Canvas in the First Quadrant */}
      <div className={styles.quadrant1}>
        <CursorDrawCanvas />
      </div>
    </div>
  );
};

export default GraphSheet;


