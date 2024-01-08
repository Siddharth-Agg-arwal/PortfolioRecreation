import React from 'react'
import styles from './ImageOnHover.module.css';
import Link from 'next/link'
import Image from 'next/image'

interface Props{
    text:string;
    projectVideo:string;
    videoType:string;
    projectImage:string;
    externalLink: string;
    annotation:string;
    classname:string; 
}

const ImageOnHover = ({text, projectVideo, videoType, projectImage, externalLink, annotation, classname} : Props) => {

    const projectMedia =projectVideo.length;

    return (
        <div className={styles.wrapper}>
            <div className={`${styles.text} ${classname}`}>
                <img 
                    src={annotation}
                    alt='annotation'
                    className={styles.annotation}
                />
                <p className={`${styles.box} ${classname}`}>{text}</p>
            </div>
            {projectMedia != 0 ? (
                <video
                autoPlay
                muted
                loop
                className={styles.effect}
            >
                <source src={projectVideo} type={videoType} />
            </video>
            ) : (
            <img
                src={projectImage}
                alt={text}
                className={styles.effect}
            />
            )}
        </div>
    )
}

export default ImageOnHover