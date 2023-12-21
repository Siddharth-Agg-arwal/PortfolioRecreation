import BlogCard from '@/Components/BlogCard/BlogCard'
import React from 'react'
import styles from './CSS/BlogPage.module.css';
// import Image from 'next/image';
import DoodleCard from '@/Components/DoodleCard/DoodleCard';

const BlogPage = () => {
  return (
    <div className={styles.blogPage}>
            <div className={styles.blogGrid}>
                <BlogCard
                    title='INTERVIEW WITH SDCO PARTNERS'
                    date='06 JANUARY 2020'
                    description='SDCO Partners is an award-winning, multi-disciplinary stuido of designers, developers and thinkers.'
                    link='READ ON MINDSPARKLE'/>
                <BlogCard
                    title='INTERVIEW WITH SDCO PARTNERS'
                    date='06 JANUARY 2020'
                    description='SDCO Partners is an award-winning, multi-disciplinary stuido of designers, developers and thinkers.'
                    link='READ ON MINDSPARKLE'/>
                <BlogCard
                    title='INTERVIEW WITH SDCO PARTNERS'
                    date='06 JANUARY 2020'
                    description='SDCO Partners is an award-winning, multi-disciplinary stuido of designers, developers and thinkers.'
                    link='READ ON MINDSPARKLE'/>
                <BlogCard
                    title='INTERVIEW WITH SDCO PARTNERS'
                    date='06 JANUARY 2020'
                    description='SDCO Partners is an award-winning, multi-disciplinary stuido of designers, developers and thinkers.'
                    link='READ ON MINDSPARKLE'/>
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