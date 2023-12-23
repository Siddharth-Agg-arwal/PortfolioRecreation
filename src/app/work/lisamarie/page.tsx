import Image from 'next/image'
import styles from './LisaMarie.module.css';
import Link from 'next/link';
// import ProjectDescription from '../ProjectDescription';

const LisaMarie = () => {
  return (
    <div className={styles.projectpage}>
      <div className={styles.projectpagecontent}>
        <div className={styles.leftContent}>
          <div className={styles.leftContentContainer}>
          <div className={styles.projectTitle}>
          Marketing site & podcast blog for author and life coach.
          </div>
          <br />
          <div className={styles.para1}>
          Lisa Marie Runfola is an author and life coach. I teamed up with Studio DBJ for a site redesign and rebuild, and make new home for her offerings and books as well as her new podcast launch.</div>
          <br />
          <div className={styles.para2}>
          Built on Jekyll and content managed with Siteleaf.
          </div>
          <br /><br /><br />
          <div className={styles.externalLinks}>
            <div className={styles.externalLink1}>
            <p><a href="https://lisamarierunfola.netlify.app/">LISAMARIERUNFOLA.COM</a></p>
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
            <p>ROLE..................DEVELOPMENT</p>
          </div>
          <div className={styles.role}>
            <p>ROLE............WEB DESIGN SUPPORT</p>
          </div>
          <div className={styles.team}>
            <p>TEAM.................<a href="https://studiodbj.com/">STUDIO DBJ</a></p>
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
            src='/static/projectpages/lisamarie/lisa-marie-runfola.png'
            alt='lisa-marie-runfola'
            width={1200}
            height={800}
          />
        <br /><br />

          <div className={styles.mobileView}>
            <Image 
              src='/static/projectpages/lisamarie/lmr0.png'
              alt='lisa-marie-mobile0'
              width={800}
              height={1400}
              className={styles.mobileViewImage}
            />

            <Image 
              src='/static/projectpages/lisamarie/lmr1.png'
              alt='lisa-marie-mobile1'
              width={800}
              height={1400}
              className={styles.mobileViewImage}
            />
          </div>
          <br /><br />

          <Image 
            src='/static/projectpages/lisamarie/lmr2.png'
            alt='lisa-marie-runfola-2'
            width={1200}
            height={800}
          />
        <br /><br />

        <Image 
            src='/static/projectpages/lisamarie/lmr3.png'
            alt='lisa-marie-runfola-3'
            width={1200}
            height={800}
          />
        <br /><br />

        <div className={styles.mobileView}>
            <Image 
              src='/static/projectpages/lisamarie/lmr4.png'
              alt='lisa-marie-mobile-4'
              width={800}
              height={1400}
              className={styles.mobileViewImage}
            />

            <Image 
              src='/static/projectpages/lisamarie/lmr5.png'
              alt='lisa-marie-mobile-5'
              width={800}
              height={1400}
              className={styles.mobileViewImage}
            />
          </div>
          <br /><br />

            <Image 
              src='/static/projectpages/lisamarie/lmr6.png'
              alt='lisa-marie-runfola-3'
              width={1200}
              height={800}
            />
        <br /><br />
        </div>
      </div>
      {/* Footer */}
      <div className={styles.blogpage_footer}>
        <div className="navHorizontalRule"><hr /></div>
          <div className={styles.footerContent}>
            <Link href="/work/linkedin"><p className={styles.leftFooter}>←  LINKEDIN EVENTS FEATURE</p></Link>
            <Link href="/work/covera"><p className={styles.rightFooter}>COVERA HEALTH   →</p></Link>
         </div>
      </div>
    </div>
  )
}


export default LisaMarie