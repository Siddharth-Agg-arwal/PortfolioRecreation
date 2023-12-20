import React from 'react'
import Image from 'next/image';
import styles from './BlogCard.module.css';

interface Props{
    title:string;
    date: string;
    description: string;
    link:string;
}

const BlogCard = ({title, date, description, link} : Props) => {
  return (
    <div className={styles.card}>
        <div className={styles.content}>
            <div><h1 className={styles.titleText}>{title}</h1></div>
            <div><h2 className={styles.dateText}>{date}</h2></div>
            <div><p className={styles.descriptionText}>{description}</p></div>
            <div><h2 className={styles.linkText}>{link}</h2></div>
        </div>
    </div>
  )
}

export default BlogCard