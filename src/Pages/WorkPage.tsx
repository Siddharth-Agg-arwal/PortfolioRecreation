import React from 'react'
import WorkCard from '@/Components/WorkCard/WorkCard'
import styles from './CSS/WorkPage.module.css';

const WorkPage = () => {
  return (
    <div className={styles.workpage}>
      <WorkCard
        jobTitle='(Product Design)'
        projectTitle='BOLDVOICE'
        description='Accent coaching for nonnative English speakers.'
        caseStudyIcon='/enter.png'
        caseStudyLink='CASE STUDY'
        projectImage='/boldvoice.png'
      />
    </div>
  )
}

export default WorkPage