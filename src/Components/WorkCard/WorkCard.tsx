import React from 'react'
import Image from 'next/image';
import styles from './WorkCard.module.css';

interface Props{
    jobTitle:string;
    projectTitle:string;
    description:string;
    caseStudyIcon:string;
    caseStudyLink:string;
    projectImage:string;
}

const WorkCard = ({jobTitle, projectTitle, description, caseStudyIcon, caseStudyLink, projectImage}: Props) => {
  return (
    <div className={styles.workcard}>
        <div className={styles.cardStructure}>
            <h1>{jobTitle}</h1>
            <div className={styles.content}>
                <h2>{projectTitle}</h2>
                <h1>{description}</h1>
                <div className={styles.caseStudy}>
                <Image
                    src={caseStudyIcon}
                    alt='caseStudyIcon'
                    width={10}
                    height={10}
                />
                <h2>{caseStudyLink}</h2>
                </div>
            </div>
            <Image 
                src={projectImage}
                alt={projectTitle}
                width={300}
                height={250}
            />
        </div>
    </div>
  )
}

export default WorkCard