import React from 'react'
import Image from 'next/image';
import styles from './WorkCard.module.css';
import Link from 'next/link';

interface Props{
    jobTitle:string;
    projectTitle:string;
    description:string;
    caseStudyIcon:string;
    caseStudyLink:string;
    projectImage:string;
    projectRoute:string;
    projectVideo:string;
    videoType:string;
}


const WorkCard = ({jobTitle, projectTitle, description, caseStudyIcon, caseStudyLink, projectImage, projectRoute, projectVideo, videoType}: Props) => {
    
    const projectMedia =projectVideo.length;

    return (
        <div className={styles.workcard}>
            <div className={styles.cardStructure}>
                <h1 className={styles.jobTitle}>{jobTitle}</h1>
                <div className={styles.content}>
                    <h2 className={styles.projectTitle}>{projectTitle}</h2>
                    <h1>{description}</h1>
                    <div className={styles.caseStudy}>
                    <Image
                        src={caseStudyIcon}
                        alt='caseStudyIcon'
                        width={12}
                        height={7}
                        className={caseStudyIcon}
                    />
                    <Link href={projectRoute}><h2>{caseStudyLink}</h2></Link>
                    </div>
                </div>
                <Link href={projectRoute}>
                    {projectMedia != 0 ? (
                        <video
                        autoPlay
                        muted
                        loop
                        className={styles.video}
                    >
                        <source src={projectVideo} type={videoType} />
                    </video>
                    ) : (
                        <Image 
                        src={projectImage}
                        alt={projectTitle}
                        width={600}
                        height={550}
                        className={styles.projectImage}
                    />
                    )}
                </Link>
            </div>
        </div>
    )
    }

    export default WorkCard