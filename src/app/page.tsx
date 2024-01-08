"use client"
import React, { useEffect } from 'react';
import DrawingCanvas from '@/Components/DrawingPad/DrawingCanvas';
import styles from './HomePage.module.css';
import ImageOnHover from '@/Components/ImageOnHover/ImageOnHover';
import GraphBackground from './Grid';

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
        <div className={styles.graph}>
          <GraphBackground />
        </div>
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
                <div className={styles.jeffstaple}>
                  <ImageOnHover
                    annotation='/static/homepage/red-triangle.png'
                    text='(work, jeffstaple)'
                    projectVideo='/jeffStaple.webm'
                    videoType='video/webm'
                    projectImage=''
                    externalLink=''
                    classname=''
                  />
                </div>

                <div className={styles.skilli}>
                  <ImageOnHover
                    annotation='/static/homepage/red-square.png'
                    text='(work, skilli)'
                    projectVideo=''
                    videoType=''
                    projectImage='/skilli.png'
                    externalLink=''
                    classname=''
                  />
                </div>
                
                <div className={styles.boldvoice}>
                  <ImageOnHover
                    annotation='/static/homepage/red-circle.png'
                    text='(work, boldvoice)'
                    projectVideo=''
                    videoType=''
                    projectImage='/boldvoice.png'
                    externalLink=''
                    classname=''
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.quadrant34}>
            <div className={styles.quadrant3}>
            
            <div className={styles.haptictouch}>
              <ImageOnHover
                    annotation='/static/homepage/yellow-square.png'
                    text='(listening, haptic touch)'
                    projectVideo='/jeffStaple.webm'
                    videoType='video/webm'
                    projectImage=''
                    externalLink=''
                    classname=""
                  />
                </div>
                {/* #FCC419 */}

                <div className={styles.getback}>
                  <ImageOnHover
                    annotation='/static/homepage/yellow-circle.png'
                    text='(watching, get back)'
                    projectVideo=''
                    videoType=''
                    projectImage='/skilli.png'
                    externalLink=''
                    classname=''
                  />
                </div>
                
                <div className={styles.deephouse}>
                  <ImageOnHover
                    annotation='/static/homepage/yellow-triangle.png'
                    text='(listening, deep house)'
                    projectVideo=''
                    videoType=''
                    projectImage='/boldvoice.png'
                    externalLink=''
                    classname=''
                  />
                </div>
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
