import React, { useEffect, useRef } from 'react';
import interact from 'interactjs';
import styles from './ResizeDragComponent.module.css'

const ResizableComponent: React.FC = () => {
  const draggableRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const draggableElement = draggableRef.current;

    if (draggableElement) {
      interact(draggableElement).draggable({
        inertia: true,
        modifiers: [
          interact.modifiers.restrictRect({
            restriction: 'parent',
            endOnly: true,
          }),
        ],
        autoScroll: true,
        listeners: {
          move: dragMoveListener,
          end: (event) => {
            const textEl = event.target.querySelector('p');

            textEl && (textEl.textContent =
              'moved a distance of ' +
              (Math.sqrt(Math.pow(event.pageX - event.x0, 2) +
                         Math.pow(event.pageY - event.y0, 2) | 0))
                .toFixed(2) + 'px');
          },
        },
      });
    }
  }, []);

  const dragMoveListener = (event: any) => {
    const target = event.target;
    const x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
    const y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

    target.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
  };

  return (
    <svg>
    <rect x="50" y="70" width="35" height="20"
        style={{opacity: 0.5 stroke:'green' stroke-width: 2; stroke-dasharray: 5 2 }}/>
    </svg>
  );
};

export default ResizableComponent;


