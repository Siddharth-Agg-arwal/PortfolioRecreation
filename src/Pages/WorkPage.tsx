import React from 'react'
import WorkCard from '@/Components/WorkCard/WorkCard'
import styles from './CSS/WorkPage.module.css';
import { NavLink } from "react-router-dom";

const WorkPage = () => {
  return (
    <div className={styles.workpage}>
      {/* card 1 */}
    <NavLink to='/work/boldvoice'>
     <WorkCard 
        jobTitle='(Product Design)'
        projectTitle='BOLDVOICE'
        description='Accent coaching for nonnative English speakers.'
        caseStudyIcon='/enter.png'
        caseStudyLink='CASE STUDY'
        projectImage='/boldvoice.png'
      />
    </NavLink>
      <div className="navHorizontalRule"><hr /></div>

      {/* card 2 */}
      <WorkCard
        jobTitle='(Product Design)'
        projectTitle='BOLDVOICE'
        description='Accent coaching for nonnative English speakers.'
        caseStudyIcon='/enter.png'
        caseStudyLink='CASE STUDY'
        projectImage='/boldvoice.png'
      />
      <div className="navHorizontalRule"><hr /></div>

      {/* card 3 */}
      <WorkCard
        jobTitle='(Product Design)'
        projectTitle='BOLDVOICE'
        description='Accent coaching for nonnative English speakers.'
        caseStudyIcon='/enter.png'
        caseStudyLink='CASE STUDY'
        projectImage='/boldvoice.png'
      />
      <div className="navHorizontalRule"><hr /></div>

      {/* card 4 */}
      <WorkCard
        jobTitle='(Product Design)'
        projectTitle='BOLDVOICE'
        description='Accent coaching for nonnative English speakers.'
        caseStudyIcon='/enter.png'
        caseStudyLink='CASE STUDY'
        projectImage='/boldvoice.png'
      />
      <div className="navHorizontalRule"><hr /></div>

      {/* card 5 */}
      <WorkCard
        jobTitle='(Product Design)'
        projectTitle='BOLDVOICE'
        description='Accent coaching for nonnative English speakers.'
        caseStudyIcon='/enter.png'
        caseStudyLink='CASE STUDY'
        projectImage='/boldvoice.png'
      />
      <div className="navHorizontalRule"><hr /></div>

      {/* card 6 */}
      <WorkCard
        jobTitle='(Product Design)'
        projectTitle='BOLDVOICE'
        description='Accent coaching for nonnative English speakers.'
        caseStudyIcon='/enter.png'
        caseStudyLink='CASE STUDY'
        projectImage='/boldvoice.png'
      />
      <div className="navHorizontalRule"><hr /></div>

      {/* card 7 */}
      <WorkCard
        jobTitle='(Product Design)'
        projectTitle='BOLDVOICE'
        description='Accent coaching for nonnative English speakers.'
        caseStudyIcon='/enter.png'
        caseStudyLink='CASE STUDY'
        projectImage='/boldvoice.png'
      />
      <div className="navHorizontalRule"><hr /></div>

      {/* card 8 */}
      <WorkCard
        jobTitle='(Product Design)'
        projectTitle='BOLDVOICE'
        description='Accent coaching for nonnative English speakers.'
        caseStudyIcon='/enter.png'
        caseStudyLink='CASE STUDY'
        projectImage='/boldvoice.png'
      />
      <div className="navHorizontalRule"><hr /></div>

      {/* card  */}
      <WorkCard
        jobTitle='(Product Design)'
        projectTitle='BOLDVOICE'
        description='Accent coaching for nonnative English speakers.'
        caseStudyIcon='/enter.png'
        caseStudyLink='CASE STUDY'
        projectImage='/boldvoice.png'
      />
      <div className="navHorizontalRule"><hr /></div>

      {/* card 10 */}
      <WorkCard
        jobTitle='(Product Design)'
        projectTitle='BOLDVOICE'
        description='Accent coaching for nonnative English speakers.'
        caseStudyIcon='/enter.png'
        caseStudyLink='CASE STUDY'
        projectImage='/boldvoice.png'
      />
      <div className="navHorizontalRule"><hr /></div>

      {/* card 11 */}
      <WorkCard
        jobTitle='(Product Design)'
        projectTitle='BOLDVOICE'
        description='Accent coaching for nonnative English speakers.'
        caseStudyIcon='/enter.png'
        caseStudyLink='CASE STUDY'
        projectImage='/boldvoice.png'
      />
      <div className={styles.workpage_footer}>
        <div className="navHorizontalRule"><hr /></div>
        <div className={styles.footerContent}>
          <p className={styles.leftFooter}>THE WEB SURE IS FLUID & DYNAMIC, BUT THAT ALSO MAKES THE THINGS IT HOLDS EPHEMERAL.</p>
          <p className={styles.rightFooter}>THANKS FOR STOPPING BY!</p>
        </div>
      </div>
    </div>
  )
}

export default WorkPage