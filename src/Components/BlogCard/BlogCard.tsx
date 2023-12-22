import React from 'react'
import Image from 'next/image';
import styles from './BlogCard.module.css';

interface Props{
    title:string;
    date: string;
    description: string;
    link:string;
    exportIcon:string;
}

const BlogCard = ({title, date, description, link, exportIcon} : Props) => {
  return (
    <div className={styles.card}>
        <div className={styles.content}>
            <div><h1 className={`${styles.titleText} ${styles.selectionEffect}`}>{title}</h1></div>
            <div><h2 className={`${styles.dateText} ${styles.selectionEffect}`}>{date}</h2></div>
            <div><p className={`${styles.descriptionText} ${styles.selectionEffect}`}>{description}</p></div>
            <div className={`${styles.redirect} ${styles.selectionEffect}`}>
            <h2 className={`${styles.linkText} ${styles.selectionEffect}`}>{link}</h2>
              <Image 
                src={exportIcon}
                alt='exportIcon'
                width={14}
                height={14}
              />
            </div>
        </div>
    </div>
  )
}

export default BlogCard