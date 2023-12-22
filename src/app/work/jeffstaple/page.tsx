import Image from 'next/image'
import styles from './JeffStaple.module.css';
import Link from 'next/link';
// import ProjectDescription from '../ProjectDescription';

const JeffStaple = () => {
  return (
    <div className={styles.projectpage}>
      <div className={styles.projectpagecontent}>
        <div className={styles.leftContent}>
          <div className={styles.leftContentContainer}>
          <div className={styles.projectTitle}>
          Personal worklog & archive for creative visionary, jeffstaple.
          </div>
          <br />
          <div className={styles.para1}>
          A minimal portfolio website for jeffstaple, featuring previous work and press features. A digital drawing pad lets visitors drop in a handwritten personal note for Jeff.          </div>
          <br />
          <div className={styles.para2}>
          I worked with the team to translate their product vision into user flows and design the mobile app for Android. The app is currently in development.
          </div>
          <br /><br /><br />
          <div className={styles.externalLinks}>
            <div className={styles.externalLink1}>
            <p><a href="https://jeffstaple.tv/">JEFFSTAPLE.TV</a></p>
            <Image 
              src='/export.png'
              alt='export-icon'
              width={15}
              height={15}
            />
            </div>

          </div>
          <br />
          <div className={styles.role}>
            <p>ROLE..................................PRODUCT DESIGN</p>
          </div>
          <div className={styles.team}>
            <p>TEAM..................................<a href="https://alright.studio/">ALRIGHT STUDIO</a></p>
            <Image 
                src='/export.png'
                alt='export-icon'
                width={15}
                height={15}
              /> 
          </div>
          </div>
        </div>
        <div className={styles.rightContent}>
          
        <video 
            autoPlay
            loop
            muted>
          <source src="https://prabhavkhandelwal.com/assets/img/work/jeffstaple.webm" type="video/webm" />
        </video>
        <br /><br />

          <div className={styles.mobileView}>
            <Image 
              src='/static/projectpages/jeffstaple/jeffstaple_mobile_work.png'
              alt='skilli'
              width={800}
              height={1400}
              className={styles.mobileViewImage}
            />

            <Image 
              src='/static/projectpages/jeffstaple/jeffstaple_mobile_drawpad.png'
              alt='skilli'
              width={800}
              height={1400}
              className={styles.mobileViewImage}
            />
          </div>
          <br /><br />

          <Image 
            src='/static/projectpages/jeffstaple/jeffstaple_desktop_work.png'
            alt='skilli'
            width={1200}
            height={800}
          />
        </div>
      </div>
      {/* Footer */}
      <div className={styles.blogpage_footer}>
        <div className="navHorizontalRule"><hr /></div>
          <div className={styles.footerContent}>
            <Link href="/work/skilli"><p className={styles.leftFooter}>←  SKILLI</p></Link>
            <Link href="/work/chetfaker"><p className={styles.rightFooter}>CHET FAKER   →</p></Link>
         </div>
      </div>
    </div>
  )
}


export default JeffStaple