import Image from 'next/image'
import styles from './CoveraHealth.module.css';
import Link from 'next/link';
// import ProjectDescription from '../ProjectDescription';

const CoveraHealth = () => {
  return (
    <div className={styles.projectpage}>
      <div className={styles.projectpagecontent}>
        <div className={styles.leftContent}>
          <div className={styles.leftContentContainer}>
          <div className={styles.projectTitle}>
          Helping build a marketing site for a healthtech startup pioneering clinical analytics.
          </div>
          <br />
          <div className={styles.para1}>
          Covera Health is pioneering advanced clinical analytics to reduce misdiagnoses and connect patients with the right care from the start.</div>
          <br />
          {/* <div className={styles.para2}>
          I worked with the team to translate their product vision into user flows and design the mobile app for Android. The app is currently in development.
          </div> */}
          <br /><br /><br />
          <div className={styles.externalLinks}>
            <div className={styles.externalLink1}>
            <p><a href="https://coverahealth.com/">COVERAHEALTH.COM</a></p>
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
            <p>ROLE..............DEVELOPMENT SUPPORT</p>
          </div>
          <div className={styles.team}>
            <p>TEAM................<a href="https://alright.studio/">ALRIGHT STUDIO</a></p>
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
          <source src="https://prabhavkhandelwal.com/assets/img/work/covera-health.mp4" type="video/webm" />
        </video>
        <br /><br /><br /><br />

          <div className={styles.desktopView}>
            <Image 
              src='/static/projectpages/covera/covera0.png'
              alt='covera-0'
              width={400}
              height={400}
              className={styles.desktopViewImage1}
            />

            <Image 
              src='/static/projectpages/covera/covera1.png'
              alt='covera-1'
              width={400}
              height={400}
              className={styles.desktopViewImage2}
            />
          </div>
          <br /><br /><br /><br />

          <Image 
            src='/static/projectpages/covera/covera2.png'
            alt='covera-2'
            width={1200}
            height={800}
          />
          <br /><br /><br /><br />

          <Image 
            src='/static/projectpages/covera/covera3.png'
            alt='covera-3'
            width={1200}
            height={800}
          />
          <br /><br /><br /><br />

        </div>
      </div>
      {/* Footer */}
      <div className={styles.blogpage_footer}>
        <div className="navHorizontalRule"><hr /></div>
          <div className={styles.footerContent}>
            <Link href="/work/lisamarie"><p className={styles.leftFooter}>←  LISA MARIE RUNFOLA</p></Link>
            <Link href="/work/thezine"><p className={styles.rightFooter}>THE ZINE   →</p></Link>
         </div>
      </div>
    </div>
  )
}


export default CoveraHealth