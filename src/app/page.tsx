"use client"
import React, { useEffect } from 'react';
import DrawingCanvas from '@/Components/DrawingPad/DrawingCanvas';
import styles from './HomePage.module.css';
import ImageOnHover from '@/Components/ImageOnHover/ImageOnHover';

const HomePage = () => {

  return (
    <div className={styles.homepage}>
      <div className={styles.leftText}>
        <div className={styles.text}>
          <p className='selectionEffect'>
            I'm a Delhi-bred and Brooklyn-based Product Designer. Appreciate your eyeballs gracing my humble online home. Tinker around and have fun!
          </p>
        </div>
        <div className={styles.projects}>
          {/* Add the images that appear on hover  */}
        </div>
      </div>
      <div className={styles.rightProjects}>
        <div className={styles.fun_section}>
          <div className={styles.quadrant12}>
            <div className={styles.quadrant1}>
              <div className={styles.resizableBox}>
                {/* <Resizable style={{ width: '200px', height: '150px', background: 'lightblue' }}>
                  This content is resizable!
                </Resizable> */}
                {/* <ResizableComponent /> */}
              </div>
            </div>
            <div className={styles.quadrant2}>
              <div className={styles.wrapper}>
                
                <p className={styles.box} data-src=''>(work, jeffstaple)</p>
                <video
                  autoPlay
                  loop
                  muted
                  className={styles.effect}
                >
                <source src='/jeffStaple.webm' type='video/webm' />
                </video>

                <p className={styles.box} data-src=''>(work, skilli)</p>
                <img
                  src='/chet-faker.png'
                  alt='helo'
                  className={styles.effect}
                />

                <p className={styles.box} data-src=''>(work, boldvoice)</p>
                <img
                  src='/chet-faker.png'
                  alt='helo'
                  className={styles.effect}
                />

                <ImageOnHover
                  text='jeffstaple'
                  projectVideo=''
                  videoType=''
                  projectImage='/boldvoice.png'
                  externalLink=''
                />


              </div>
            </div>
          </div>
          <div className={styles.quadrant34}>
            <div className={styles.quadrant3}>
              hello
            </div>
            <div className={styles.quadrant4}>
              <div className={styles.drawingcanvas}>
                <DrawingCanvas />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
