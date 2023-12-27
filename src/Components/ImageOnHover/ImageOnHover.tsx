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
}

const ImageOnHover = ({text, projectVideo, videoType, projectImage, externalLink} : Props) => {

    const projectMedia =projectVideo.length;

    return (
        <div className={styles.wrapper}>
            <p className={styles.box}>{text}</p>
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