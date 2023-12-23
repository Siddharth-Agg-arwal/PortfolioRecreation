import Image from 'next/image'
import styles from './LaBamba.module.css';
import Link from 'next/link';
// import ProjectDescription from '../ProjectDescription';

const LaBamba = () => {
  return (
    <div className={styles.projectpage}>
      <div className={styles.projectpagecontent}>
        <div className={styles.leftContent}>
          <div className={styles.leftContentContainer}>
          <div className={styles.projectTitle}>
          Colorful e-commerce shop for women's wetsuit brand, La Bamba.
          </div>
          <br />
          <div className={styles.para1}>
          La Bamba is a women's wetsuit brand that also operates as a creative strategy consultancy, trying to bring more disversity to surf culture. I helped translate the design visions into a custom Shopify theme, including a blog where they share their goings-on.</div>
          <br />
          {/* <div className={styles.para2}>
          I worked with the team to translate their product vision into user flows and design the mobile app for Android. The app is currently in development.
          </div> */}
          <br /><br /><br />
          <div className={styles.externalLinks}>
            <div className={styles.externalLink1}>
            <p><a href="https://labambanyc.com/">LABAMBANYC.COM</a></p>
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
            <p>ROLE.................DEVELOPMENT</p>
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
          <source src="https://prabhavkhandelwal.com/assets/img/work/labamba/desktop_home.webm" type="video/webm" />
        </video>
        <br /><br />

        <video 
            autoPlay
            loop
            muted>
          <source src="https://prabhavkhandelwal.com/assets/img/work/labamba/labamba_shop.webm" type="video/webm" />
        </video>
        <br /><br />

          <div className={styles.desktopView}>
            <Image 
              src='/static/projectpages/labamba/desktop_article.png'
              alt='skilli'
              width={400}
              height={400}
              className={styles.desktopViewImage1}
            />

            <Image 
              src='/static/projectpages/labamba/desktop_blog.png'
              alt='skilli'
              width={400}
              height={400}
              className={styles.desktopViewImage2}
            />
          </div>
          <br /><br />

          <Image 
            src='/static/projectpages/labamba/labamba_mobile.png'
            alt='skilli'
            width={1200}
            height={800}
          />
          <br /><br />

          <div className={styles.mobileView}>
            <video 
              autoPlay
              loop
              muted
              className={styles.mobileVideo1}>
              <source src="https://prabhavkhandelwal.com/assets/img/work/labamba/labamba_mobile.webm" type="video/webm" />
            </video>

            <video 
                autoPlay
                loop
                muted
                className={styles.mobileVideo2}>
              <source src="https://prabhavkhandelwal.com/assets/img/work/labamba/labamba_mobile_shop.webm" type="video/webm" />
            </video>
          </div>
        </div>
      </div>
      {/* Footer */}
      <div className={styles.blogpage_footer}>
        <div className="navHorizontalRule"><hr /></div>
          <div className={styles.footerContent}>
            <Link href="/work/chetfaker"><p className={styles.leftFooter}>←  CHET FAKER</p></Link>
            <Link href="https://blog.prototypr.io/my-summer-as-a-ux-research-intern-for-accenture-at-google-1ac353119717"><p className={styles.rightFooter}>GOOGLE   →</p></Link>
         </div>
      </div>
    </div>
  )
}


export default LaBamba