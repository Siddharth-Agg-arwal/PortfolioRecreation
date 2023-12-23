import Image from 'next/image'
import styles from './TheZine.module.css';
import Link from 'next/link';
// import ProjectDescription from '../ProjectDescription';

const TheZine = () => {
  return (
    <div className={styles.projectpage}>
      <div className={styles.projectpagecontent}>
        <div className={styles.leftContent}>
          <div className={styles.leftContentContainer}>
          <div className={styles.projectTitle}>
          Revamping a publication—content structure, design and development.
          </div>
          <br />
          <div className={styles.para1}>
          The 'Zine is an online magazine started and run by Meghna Gulati, that seeks to provide a platform for the stories and thoughts of the Indian youth. I was responsible with designing and developing the initial version of the site, back in 2013. Two years after the initial launch, I was contacted again for a redesign.</div>
          <br />
          <div className={styles.para2}>
          My job was mainly to do 3 things: revamping the whole content structure of the magazine, crafting a new visual aesthetic, and coding the whole site with a CMS-backed infrastructure. So yeah, I was pretty much turning the whole magazine over on its head.
          </div>
          <br /><br /><br /><br />

          <div className={styles.role}>
            <p>ROLE.................WEB DESIGN</p>
          </div>
          <div className={styles.role}>
            <p>ROLE...............DEVELOPMENT</p>
          </div>
          </div>
        </div>
        <div className={styles.rightContent}>

          <Image 
              src='/static/projectpages/thezine/shot.png'
              alt='the-zine'
              width={1200}
              height={800}
          />
          <br /><br />

          <div className={styles.mobileView}>
            <Image 
              src='/static/projectpages/thezine/3board.png'
              alt='board-3'
              width={800}
              height={1400}
              className={styles.mobileViewImage}
            />

            <Image 
              src='/static/projectpages/thezine/4board.png'
              alt='thezine-board-4'
              width={800}
              height={1400}
              className={styles.mobileViewImage}
            />
          </div>
          <br /><br />

          <div className={styles.desktopView}>
            <Image 
              src='/static/projectpages/thezine/18.png'
              alt='thezine-18'
              width={400}
              height={400}
              className={styles.desktopViewImage1}
            />

            <Image 
              src='/static/projectpages/thezine/shot2.png'
              alt='thezine'
              width={400}
              height={400}
              className={styles.desktopViewImage2}
            />
          </div>
          <br /><br />
        </div>
      </div>

      {/* Footer */}
      <div className={styles.blogpage_footer}>
        <div className="navHorizontalRule"><hr /></div>
          <div className={styles.footerContent}>
            <Link href="/work/covera"><p className={styles.leftFooter}>←  COVERA HEALTH</p></Link>
            <Link href="/work/varunchopra"><p className={styles.rightFooter}>VARUN CHOPRA   →</p></Link>
         </div>
      </div>
    </div>
  )
}


export default TheZine