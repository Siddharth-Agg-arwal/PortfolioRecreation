// MyComponent.tsx
import React, { useEffect } from 'react';
import interact from 'interactjs';
import '../../app/interact-helpers'; // Adjust the path accordingly

const MyComponent: React.FC = () => {
  useEffect(() => {
    interact('.resize-drag')
      .resizable({
        edges: { left: true, right: true, bottom: true, top: true },
        listeners: {
          move(event) {
            const target = event.target;
            const x = parseFloat(target.getAttribute('data-x')) || 0;
            const y = parseFloat(target.getAttribute('data-y')) || 0;

            target.style.width = event.rect.width + 'px';
            target.style.height = event.rect.height + 'px';

            const deltaX = event.rect.left - event.deltaRect.left;
            const deltaY = event.rect.top - event.deltaRect.top;

            target.style.transform = `translate(${x + deltaX}px, ${y + deltaY}px)`;

            target.setAttribute('data-x', (x + deltaX).toString());
            target.setAttribute('data-y', (y + deltaY).toString());
            target.textContent = `${Math.round(event.rect.width)}\u00D7${Math.round(event.rect.height)}`;
          },
        },
        modifiers: [
          interact.modifiers.restrictEdges({
            outer: 'parent',
          }),
          interact.modifiers.restrictSize({
            min: { width: 100, height: 50 },
          }),
        ],
        inertia: true,
      })
      .draggable({
        // listeners: { move: window.dragMoveListener },
        inertia: true,
        modifiers: [
          interact.modifiers.restrictRect({
            restriction: 'parent',
            endOnly: true,
          }),
        ],
      });
  }, []);

  return (
    <div className="resize-drag">
      Resize from any edge or corner
    </div>
  );
};

export default MyComponent;
