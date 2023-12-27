// 'use client'
import React from 'react'
import styles from './WorkPage.module.css';
import WorkCard from '@/Components/WorkCard/WorkCard';
import Link from 'next/link';

const WorkPage = () => {
  return (
    <div className={styles.workpage}>
      {/* card 1 */}
     <WorkCard 
        jobTitle='(Product Design)'
        projectTitle='BOLDVOICE'
        description='Accent coaching for nonnative English speakers.'
        caseStudyIcon='/enter.png'
        caseStudyLink='CASE STUDY'
        projectImage='/boldvoice.png'
        projectRoute='/work/boldvoice'
        projectVideo=''
        videoType=''
      />
      <div className="navHorizontalRule"><hr /></div>

      {/* card 2 */}
      <WorkCard
        jobTitle='(Product Design)'
        projectTitle='SKILLI'
        description='Playing mini-games to earn real rewards.'
        caseStudyIcon='/enter.png'
        caseStudyLink='CASE STUDY'
        projectImage='/skilli.png'
        projectRoute=''
        projectVideo=''
        videoType=''
      />
      <div className="navHorizontalRule"><hr /></div>

      {/* card 3 */}
      <WorkCard
        jobTitle='(DEVELOPMENT)'
        projectTitle='JEFFSTAPLE'
        description='Personal worklog & archive for creative visionary, jeffstaple.'
        caseStudyIcon='/enter.png'
        caseStudyLink='CASE STUDY'
        projectImage=''
        projectRoute='/work/jeffstaple'
        projectVideo='/jeffStaple.webm'
        videoType='video/webm'
      />
      <div className="navHorizontalRule"><hr /></div>

      {/* card 4 */}
      <WorkCard
        jobTitle='(WEB DESIGN)(DEVELOPMENT)'
        projectTitle='CHET FAKER'
        description='Album release splash page for musician, Chet Faker.'
        caseStudyIcon='/enter.png'
        caseStudyLink='CASE STUDY'
        projectImage='/chet-faker.png'
        projectRoute='/work/chetfaker'
        projectVideo=''
        videoType=''
      />
      <div className="navHorizontalRule"><hr /></div>

      {/* card 5 */}
      <WorkCard
        jobTitle='(DEVELOPMENT)'
        projectTitle='LA BAMBA'
        description="Colorful e-commerce shop for women's wetsuit brand, La Bamba."
        caseStudyIcon='/enter.png'
        caseStudyLink='CASE STUDY'
        projectImage='/la-bamba.png'
        projectRoute='/work/labamba'
        projectVideo=''
        videoType=''
      />
      <div className="navHorizontalRule"><hr /></div>

      {/* card 6 */}
      <WorkCard
        jobTitle='(UX RESEARCH)'
        projectTitle='GOOGLE'
        description='Reflections from my UX Research Internship with Accenture at Google.'
        caseStudyIcon='/enter.png'
        caseStudyLink='CASE STUDY'
        projectImage='/google.png'
        projectRoute='/work/google'
        projectVideo=''
        videoType=''
      />
      <div className="navHorizontalRule"><hr /></div>

      {/* card 7 */}
      <WorkCard
        jobTitle='(PRODUCT DESIGN)(UX RESEARCH)'
        projectTitle='LINKEDIN EVENTS FEATURE'
        description="Adding an events feature to LinkedIn's existing app ecosystem."
        caseStudyIcon='/enter.png'
        caseStudyLink='CASE STUDY'
        projectImage='/linkedin-events-feature.png'
        projectRoute='/work/linkedin'
        projectVideo=''
        videoType=''
      />
      <div className="navHorizontalRule"><hr /></div>

      {/* card 8 */}
      <WorkCard
        jobTitle='(DEVELOPMENT)(WEB DESGIN SUPPORT'
        projectTitle='LISA MARIE RUNFOLA'
        description='Marketing site & podcast blog for author and life coach.'
        caseStudyIcon='/enter.png'
        caseStudyLink='CASE STUDY'
        projectImage='/lisa-marie-runfola.png'
        projectRoute='/work/lisamarie'
        projectVideo=''
        videoType=''
      />
      <div className="navHorizontalRule"><hr /></div>

      {/* card  */}
      <WorkCard
        jobTitle='(DEVELOPMENT SUPPORT)'
        projectTitle='COVERA HEALTH'
        description='Helping build a marketing site for a healthtech startup pioneering clinical analytics.'
        caseStudyIcon='/enter.png'
        caseStudyLink='CASE STUDY'
        projectImage=''
        projectRoute='/work/covera'
        projectVideo='https://prabhavkhandelwal.com/assets/img/work/covera-health.webm'
        videoType='video/webm'
      />
      <div className="navHorizontalRule"><hr /></div>

      {/* card 10 */}
      <WorkCard
        jobTitle='(WEB DESIGN)(DEVELOPMENT'
        projectTitle='THE ZINE'
        description='Revamping a publication— content structure, desing and development.'
        caseStudyIcon='/enter.png'
        caseStudyLink='CASE STUDY'
        projectImage='/the-zine.png'
        projectRoute='/work/thezine'
        projectVideo=''
        videoType=''
      />
      <div className="navHorizontalRule"><hr /></div>

      {/* card 11 */}
      <WorkCard
        jobTitle='(WEB DESIGN)(DEVELOPMENT)'
        projectTitle='VARUN CHOPRA'
        description='Portfolio for the youngest Indian filmmaker to selected at Cannes Film Festival, Varun Chopra.'
        caseStudyIcon='/enter.png'
        caseStudyLink='CASE STUDY'
        projectImage=''
        projectRoute='/work/varunchopra'
        projectVideo='https://prabhavkhandelwal.com/assets/img/work/varun-chopra.webm'
        videoType='video/webm'
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