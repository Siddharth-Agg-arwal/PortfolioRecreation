import React from 'react'
import styles from './CSS/AboutPage.module.css';

const AboutPage = () => {
  return (
    <div className={styles.aboutpage}>
      <div className={styles.rightContent}>
        
      </div>
      <div className={styles.leftContent}>

      </div>

      {/* Footer */}
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

export default AboutPage