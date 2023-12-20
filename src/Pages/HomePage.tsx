'use client'

import React from 'react'
// import grid from '../../assets/grid.png';

// import grid from '../../assets/grid.png';

const HomePage = () => {
  return (
    <div className="homepage">
        <div className="leftText">
            <div className="text">
                <p className='selectionEffect'>I'm a Delhi-bred and Brooklyn-based Product Designer. Appreciate your eyeballs gracing my humble online home. Tinker around and have fun!</p>
            </div>
            <div className="projects">
                {/* Add the images that appear on hover  */}
            </div>
        </div>
        <div className='rightProjects'>
            {/* Add the grid for projects and fun stuff */}
            {/* <img src={grid} alt=""/> */}
        </div>
    </div>
  )
}

export default HomePage