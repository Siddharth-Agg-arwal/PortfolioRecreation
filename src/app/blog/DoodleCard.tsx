import React from 'react'
import Image from 'next/image';
import styles from './DoodleCard.module.css';

interface Props{
    src:string;
    title: string;
}

const DoodleCard = ({src, title} : Props) => {
  return (
    <div className={styles.card}>
        <div className={styles.image}>
            <Image 
                src={src}
                alt={title}
                width={550}
                height={300}
            />
        </div>
    </div>
  )
}

export default DoodleCard