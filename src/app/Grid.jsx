// import React from 'react';

// class GridBox extends React.Component {
//   render() {
//     return (
//       <div className="wall">
//         <img className="axis--v" src="https://prabhavkhandelwal.com/assets/img/axis--gray.svg" alt="" />
//         <img className="axis--h" src="https://prabhavkhandelwal.com/assets/img/axis--gray.svg" alt="" />

//         <div className="box box--shapes">
//           <div id="my-interactive" className="">
//             <svg xmlns="http://www.w3.org/2000/svg" id="interactive-0" className="interactive" width="1000" height="1000" viewBox="-300 -150 1000 1000">
//               <g id="group-1" className="group">
//                 <circle cx="-205" cy="80" r="55" id="circle-3" className="circle default"></circle>
//                 <line x1="-205" y1="80" x2="-150" y2="80" id="line-4" className="line"></line>
//                 <g id="group-17" className="group" clipPath="url(#clippath-22)">
//                   <path d="M -4 -100 L -4 128 L -124 128z" id="path-18" className="path"></path>
//                   <rect x="-23.75" y="108.25" width="39.5" height="39.5" id="rectangle-20" className="rectangle"></rect>
//                   <circle cx="-124" cy="128" r="30" id="circle-21" className="circle"></circle>
//                 </g>
//                 <path d="M -4 -100 L -4 128 L -124 128z" id="path-19" className="path"></path>
//                 <clipPath id="clippath-22" className="clippath">
//                   <path d="M -4 -100 L -4 128 L -124 128z" id="path-23" className="path"></path>
//                 </clipPath>
//                 <rect x="-250" y="-100" width="150" height="91" id="rectangle-24" className="rectangle default"></rect>
//               </g>
//               <g id="group-2" className="group">
//                 {/* ... (Controls and handles) */}
//               </g>
//             </svg>
//           </div>
//         </div>

//         <div className="box box--work">
//           <a className="point" href="/work/jeffstaple/" id="jeffstaple">
//             <img className="shape" src="https://prabhavkhandelwal.com/assets/img/triangle--red.svg" alt="red triangle" />
//             <span className="caption label">(work, jeffstaple)</span>
//           </a>

//           <a className="point" href="/work/skilli/" id="skilli">
//             <img className="shape" src="https://prabhavkhandelwal.com/assets/img/square--red.svg" alt="red square" />
//             <span className="caption label">(work, skilli)</span>
//           </a>

//           <a className="point" href="/work/boldvoice/" id="boldvoice">
//             <img className="shape" src="https://prabhavkhandelwal.com/assets/img/circle--red.svg" alt="red circle" />
//             <span className="caption label">(work, boldvoice)</span>
//           </a>
//         </div>

//         {/* Uncomment the following lines if you want to include the mood section */}
//         {/* <div className="box box--mood">
//           <a target="_blank" className="point" id="haptic" href="https://open.spotify.com/playlist/72SDJhgLd15veW9QIZrSgJ?si=318ee9660a3c4399">
//             <img className="shape" src="https://prabhavkhandelwal.com/assets/img/square--yellow.svg" alt="yellow square" />
//             <span className="caption label">(listening, haptic touch)</span>
//           </a>
//           <a target="_blank" className="point" id="beatles" href="https://www.imdb.com/title/tt9735318/">
//             <img className="shape" src="https://prabhavkhandelwal.com/assets/img/triangle--yellow.svg" alt="yellow triangle" />
//             <span className="caption label">(watching, get back)</span>
//           </a>
//           {/* <a target="_blank" className="point" id="house" href="https://open.spotify.com/playlist/56VUADHOYrHtnUEjBXomOP?si=8c058a708a7b43be"/>
//             <img className="shape" src="https://prabhavkhandelwal.com/assets/img/circle--yellow.svg" alt="yellow circle" />
//             <span className="caption label">(listening, deep house)</span>
//           </a> */}
//         {/* </div> */}

//         <div className="box box--sketchpad" id="sketchpadapp">
//           <canvas id="sketchpad" height="400" width="400%"></canvas>
//           <p className="caption">
//             Can I have your autograph?<span className="cursor">|</span>
//           </p>
//         </div>
//       </div>
//     );
//   }
// }

// export default GridBox;


// import React from 'react';

// class GridComponent extends React.Component {
//   renderGrid = () => {
//     const rows = 3; // Number of rows
//     const cols = 3; // Number of columns

//     const gridSize = 100; // Adjust the size of each grid item
//     const svgStyle = { width: gridSize, height: gridSize };

//     const grid = [];

//     for (let i = 0; i < rows; i++) {
//       for (let j = 0; j < cols; j++) {
//         const key = `${i}-${j}`;
//         grid.push(
//           <div key={key} style={{ display: 'inline-block', margin: '5px' }}>
//             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={svgStyle}>
//               {/* Your SVG content goes here */}
//               <circle cx="12" cy="12" r="10" fill="blue" />
//             </svg>
//           </div>
//         );
//       }
//     }

//     return grid;
//   };

//   render() {
//     return (
//       <div>
//         <h2>SVG Grid</h2>
//         <div style={{ display: 'flex', flexWrap: 'wrap' }}>
//           {this.renderGrid()}
//         </div>
//       </div>
//     );
//   }
// }

// export default GridComponent;


import React from 'react';
import styles from './HomePage.module.css';

class GraphBackground extends React.Component {
  renderGridLines = () => {
    const gridSize = 40; // Adjust the size of each grid square
    const gridColor = '#F22613'; // Color of the grid lines

    const rows = 30; // Number of horizontal lines
    const cols = 30; // Number of vertical lines

    const gridLines = [];

    for (let i = 0; i < rows; i++) {
      const y = i * gridSize;
      gridLines.push(
        <line key={`horizontal-${i}`} x1="0" y1={y} x2="100%" y2={y} stroke={gridColor} strokeWidth="1" />
      );
    }

    for (let j = 0; j < cols; j++) {
      const x = j * gridSize;
      gridLines.push(
        <line key={`vertical-${j}`} x1={x} y1="0" x2={x} y2="100%" stroke={gridColor} strokeWidth="1" />
      );
    }

    return gridLines;
  };

  render() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100% 100%" style={{ backgroundColor: '' }} className={styles.svg} opacity={0.5}>
        {this.renderGridLines()}
      </svg>
    );
  }
}

export default GraphBackground;
