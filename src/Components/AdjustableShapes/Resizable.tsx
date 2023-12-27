import React, { useEffect, useRef } from 'react';
import interact from 'interactjs';

interface ResizableProps {
  style?: React.CSSProperties;
  className?: string;
  children: React.ReactNode;
}

const Resizable: React.FC<ResizableProps> = ({ style, className, children }) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {

    
    interact('.resizable')
      .resizable({
        edges: { top: true, left: true, bottom: true, right: true },
        listeners: {
          move: (event) => {
            if (elementRef.current) {
              const { x = 0, y = 0 } = event.target.dataset;
              const newX = parseFloat(x) + event.deltaRect.left;
              const newY = parseFloat(y) + event.deltaRect.top;

              elementRef.current.style.width = `${event.rect.width}px`;
              elementRef.current.style.height = `${event.rect.height}px`;
              elementRef.current.style.transform = `translate(${newX}px, ${newY}px)`;

              elementRef.current.dataset.x = newX.toString();
              elementRef.current.dataset.y = newY.toString();
            }
          },
        },
      })
      .draggable({ // Add draggable functionality
        inertia: true, // Enable smooth dragging
        onmove: (event) => {
          if (elementRef.current) {
            elementRef.current.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
          }
        },
      }
      )
      .draggable({
        modifiers: [
          interact.modifiers.restrict({
            restriction: 'parent',
            endOnly: true
          })
        ]
      });
  }, [elementRef]);

  return (
    <div ref={elementRef} className={`resizable ${className}`} style={style}>
      {children}
    </div>
  );
};

export default Resizable;
