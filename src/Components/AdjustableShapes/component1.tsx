import React, { useEffect } from 'react';
import interact from 'interactjs';
import styles from './GridSnapComponent.module.css'; // Import your CSS module

const YourComponent: React.FC = () => {
  useEffect(() => {
    const interactive = interact('#my-interactive');

    // Your interact.js code here

    return () => {
      // Clean up any interact.js listeners if needed
      interactive.unset();
    };
  }, []); // Empty dependency array ensures that this effect runs once on mount

  return (
    <div className={`${styles.box} ${styles['box--shapes']}`}>
      <div id="my-interactive" className="">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="interactive-0"
          className={`interactive ${styles.group}`}
          width="1000"
          height="1000"
          viewBox="-300 -150 1000 1000"
        >
          {/* Your SVG content here */}
          <g id="group-1" className={`${styles.group}`}>
            <circle cx="-226" cy="76" r="45" id="circle-3" className={`${styles.circle} default`} />
            <line x1="-226" y1="76" x2="-181" y2="76" id="line-4" className={`${styles.line}`} style={{ stroke: 'cornflowerblue' }} />
            {/* Add more SVG elements as needed */}
          </g>
          <g id="group-2" className={`${styles.group}`}>
            {/* Add more SVG elements as needed */}
          </g>
        </svg>
      </div>
    </div>
  );
};

export default YourComponent;
