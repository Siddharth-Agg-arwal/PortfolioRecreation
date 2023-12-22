'use client'
import BlogCard from '@/Components/BlogCard/BlogCard'
import React from 'react'
import styles from './BlogPage.module.css';
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

                {/* DOODLE CARD 1 */}
                <DoodleCard
                    src='https://cdn.dribbble.com/users/198568/screenshots/9395374/media/80619d330577c587d93d549031ae9108.png'
                    title='doodle'
                />

                {/* DOODLE CARD 2 */}
                <DoodleCard
                    src='https://cdn.dribbble.com/users/198568/screenshots/6602519/dribbble_shot_hd_2.40.png'
                    title='doodle'
                />

                {/* DOODLE CARD 3 */}
                <DoodleCard
                    src='https://cdn.dribbble.com/users/198568/screenshots/6485791/desktop_hd_copy_13.png'
                    title='doodle'
                />

                {/* DOODLE CARD 4 */}
                <DoodleCard
                    src='https://cdn.dribbble.com/users/198568/screenshots/3120859/criss.jpg'
                    title='doodle'
                />

                {/* DOODLE CARD 5 */}
                <DoodleCard
                    src='https://cdn.dribbble.com/users/198568/screenshots/2712647/mix_bouncer.png'
                    title='doodle'
                />

                {/* DOODLE CARD 6 */}
                <DoodleCard
                    src='https://cdn.dribbble.com/users/198568/screenshots/2653946/squiggle_bouncer.png'
                    title='doodle'
                />

                {/* DOODLE CARD 7 */}
                <DoodleCard
                    src='https://cdn.dribbble.com/users/198568/screenshots/2638990/bouncer.jpg'
                    title='doodle'
                />

                {/* DOODLE CARD 8 */}
                <DoodleCard
                    src='https://cdn.dribbble.com/users/198568/screenshots/9395372/media/94804725a1ea00a23a8a73064b5bff70.png'
                    title='doodle'
                />

                {/* DOODLE CARD 9 */}
                <DoodleCard
                    src='https://cdn.dribbble.com/users/198568/screenshots/1658478/modules-banner.png'
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