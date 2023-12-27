import React, { useRef, useState, useEffect } from 'react';
import styles from './drawingCanvas.module.css';

const DrawingCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState<boolean>(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');

    if (!context) {
      console.error('Canvas context is null');
      return;
    }

    const startDrawing = (e: MouseEvent) => {
      setIsDrawing(true);
      context.beginPath();
      context.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    };

    const draw = (e: MouseEvent) => {
      if (!isDrawing) return;
      context.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
      context.stroke();
    };

    const stopDrawing = () => {
      setIsDrawing(false);
      context.closePath();
    };

    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing);

    return () => {
      canvas.removeEventListener('mousedown', startDrawing);
      canvas.removeEventListener('mousemove', draw);
      canvas.removeEventListener('mouseup', stopDrawing);
      canvas.removeEventListener('mouseout', stopDrawing);
    };
  }, [isDrawing]);

  return (
    <canvas
      ref={canvasRef}
      // textToShow="Can I have your signature?!"
      width={900}
      height={1000}
      className={styles.drawingCanvas}
    ></canvas>
  );
};

export default DrawingCanvas;
