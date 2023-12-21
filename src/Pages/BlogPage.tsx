import BlogCard from '@/Components/BlogCard/BlogCard'
import React from 'react'
import styles from './CSS/BlogPage.module.css';
// import Image from 'next/image';
import DoodleCard from '@/Components/DoodleCard/DoodleCard';

const BlogPage = () => {
  return (
    <div className={styles.blogPage}>
            <div className={styles.blogGrid}>

                <a href="https://mindsparklemag.com/design/interview/interview-with-sdco-partners/">
                    <BlogCard
                        title='INTERVIEW WITH SDCO PARTNERS'
                        date='06 JANUARY 2020'
                        description='SDCO Partners is an award-winning, multi-disciplinary stuido of designers, developers and thinkers.'
                        link='READ ON MINDSPARKLE'
                        exportIcon='/export.png'
                    />
                </a>
                
                <a href="https://mindsparklemag.com/design/series/interview-with-verena-michelitsch/">
                    <BlogCard
                        title='INTERVIEW WITH VERENA MICHELITSCH'
                        date='04 DECEMBER 2019'
                        description='Taking the leap from Austria to New York, working for greats like Stefan Sagmeister & Pentagram and going full-time freelance.'
                        link='READ ON MINDSPARKLE'
                        exportIcon='/export.png'
                    />
                </a>
                
                <a href="https://mindsparklemag.com/design/series/interview-with-dennis-plucinik-2/">
                    <BlogCard
                        title='INTERVIEW WITH DENNIS PLUCINIK'
                        date='06 MAY 2019'
                        description='Dennis shares with us what’s it like working in huge ad agencies, the lessons he learned and why he ultimately chose to give up that life to start his own studio ATTCK.'
                        link='READ ON MINDSPARKLE'
                        exportIcon='/export.png'/>
                </a>
                
                <a href="https://mindsparklemag.com/design/interview/interview-with-garrett-derossett/">
                    <BlogCard
                        title='INTERVIEW WITH GARRETT DEROSSETT'
                        date='01 AUGUST 2018'
                        description='Garrett opens up about his journey from dropping out of college, picking up random internships, catapulting himself to lead design at charity: water to now establishing Alright Studio with his partner and best friend.'
                        link='READ ON MINDSPARKLE'
                        exportIcon='/export.png'/>
                </a>

            </div>
        <div className={styles.doodleSection}>
            <div className={styles.doodleGrid}>
                <DoodleCard
                    src='/doodleImage.png'
                    title='doodle'
                />
                <DoodleCard
                    src='/doodleImage.png'
                    title='doodle'
                />
                <DoodleCard
                    src='/doodleImage.png'
                    title='doodle'
                />
                <DoodleCard
                    src='/doodleImage.png'
                    title='doodle'
                />
                <DoodleCard
                    src='/doodleImage.png'
                    title='doodle'
                />
                <DoodleCard
                    src='/doodleImage.png'
                    title='doodle'
                />
                <DoodleCard
                    src='/doodleImage.png'
                    title='doodle'
                />
                <DoodleCard
                    src='/doodleImage.png'
                    title='doodle'
                />
            </div>
        </div>
        <div className={styles.blogpage_footer}>
        <div className="navHorizontalRule"><hr /></div>
        <div className={styles.footerContent}>
          <p className={styles.leftFooter}>THE WEB SURE IS FLUID & DYNAMIC, BUT THAT ALSO MAKES THE THINGS IT HOLDS EPHEMERAL.</p>
          <p className={styles.rightFooter}>THANKS FOR STOPPING BY!</p>
        </div>
      </div>
    </div>
  )
}

export default BlogPage