import Image from 'next/image'
import styles from './chetfaker.module.css';
import Link from 'next/link';
// import ProjectDescription from '../ProjectDescription';

const ChetFaker = () => {
  return (
    <div className={styles.projectpage}>
      <div className={styles.projectpagecontent}>
        <div className={styles.leftContent}>
          <div className={styles.leftContentContainer}>
          <div className={styles.projectTitle}>
          Album release splash page for musician, Chet Faker.
          </div>
          <br />
          <div className={styles.para1}>
          For Chet Faker's, “Hotel Surrender” album release, I designed and built a splash page for pre-saving the album and subscribing to the mailing list.</div>
          {/* <br />
          <div className={styles.para2}>
          I worked with the team to translate their product vision into user flows and design the mobile app for Android. The app is currently in development.
          </div> */}
          <br /><br /><br />
          <div className={styles.externalLinks}>
            <div className={styles.externalLink1}>
            <p><a href="https://chetfaker.com/">CHETFAKER.COM</a></p>
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
            <p>ROLE....................WEB DESIGN</p>
          </div>
          <div className={styles.role}>
            <p>ROLE....................DEVELOPMENT</p>
          </div>
          <div className={styles.team}>
            <p>TEAM.....<a href="https://www.gordilsandwillis.com/">GORDILS & WILLIS</a></p>
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
          
        <Image 
            src='/static/projectpages/chetfaker/chet-faker.png'
            alt='chetfaker_desktop'
            width={1200}
            height={800}
          />
        <br /><br />

          <div className={styles.mobileView}>
            <Image 
              src='/static/projectpages/chetfaker/chetfaker_mobile1.png'
              alt='chetfaker_mobile'
              width={800}
              height={1400}
              className={styles.mobileViewImage}
            />

            <Image 
              src='/static/projectpages/chetfaker/chetfaker_mobile2.png'
              alt='chetfaker'
              width={800}
              height={1400}
              className={styles.mobileViewImage}
            />
          </div>
          <br /><br />

          
        </div>
      </div>
      {/* Footer */}
      <div className={styles.blogpage_footer}>
        <div className="navHorizontalRule"><hr /></div>
          <div className={styles.footerContent}>
            <Link href="/work/jeffstaple"><p className={styles.leftFooter}>←  JEFFSTAPLE</p></Link>
            <Link href="/work/labamba"><p className={styles.rightFooter}>LA BAMBA   →</p></Link>
         </div>
      </div>
    </div>
  )
}


export default ChetFaker