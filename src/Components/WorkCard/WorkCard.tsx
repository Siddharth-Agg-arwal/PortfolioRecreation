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
                <h2>{caseStudyLink}</h2>
                </div>
            </div>
            <Image 
                src={projectImage}
                alt={projectTitle}
                width={300}
                height={250}
                className={styles.projectImage}
            />
        </div>
    </div>
  )
}

export default WorkCard