import Image from 'next/image'
import styles from './VarunChopra.module.css';
import Link from 'next/link';
// import ProjectDescription from '../ProjectDescription';

const VarunChopra = () => {
  return (
    <div className={styles.projectpage}>
      <div className={styles.projectpagecontent}>
        <div className={styles.leftContent}>
          <div className={styles.leftContentContainer}>
          <div className={styles.projectTitle}>
          Portfolio for the youngest Indian filmmaker to be selected at Cannes Film Festival, Varun Chopra.          </div>
          <br />
          <div className={styles.para1}>
          Varun Chopra is a Cannes-nominated filmmaker, student and director studying in Loyola Marymount College in sunny Los Angeles, California. His first film—God on a Leash, is selected to be showcased at the 2016 Cannes Film Festival. I was tasked with creating a website for him and his projects.
          </div>

          <br /><br /><br /><br /><br />


          <div className={styles.role}>
            <p>ROLE..................WEB DESIGN</p>
          </div>
          <div className={styles.role}>
            <p>ROLE.................DEVELOPMENT</p>
          </div>
          </div>
        </div>
        <div className={styles.rightContent}>
          <video 
            autoPlay
            loop
            muted>
            <source src="https://prabhavkhandelwal.com/assets/img/work/varun-chopra.webm" type="video/webm" />
          </video>

          <br /><br /><br /><br />

          <div className={styles.visualConcepts}>
              <h1>Visual Concepts</h1>
              <br /><br />
              <div className={styles.desktopView}>
                <Image 
                  src='/static/projectpages/varunchopra/1.png'
                  alt='vc-1'
                  width={400}
                  height={400}
                  className={styles.desktopViewImage1}
                />

                <Image 
                  src='/static/projectpages/varunchopra/2.png'
                  alt='vc-2'
                  width={400}
                  height={400}
                  className={styles.desktopViewImage2}
                />
              </div>
              <br /><br />

              <div className={styles.desktopView}>
                <Image 
                  src='/static/projectpages/varunchopra/3.png'
                  alt='vc-3'
                  width={400}
                  height={400}
                  className={styles.desktopViewImage1}
                />

                <Image 
                  src='/static/projectpages/varunchopra/5.png'
                  alt='vc-5'
                  width={400}
                  height={400}
                  className={styles.desktopViewImage2}
                />
              </div>
          </div>
          <br /><br /><br /><br />

          <Image
            src="/static/projectpages/varunchopra/4.png"
            alt="vc-4"
            width={1200}
            height={2000}
          />
          <br /><br /><br />


          <div className={styles.directionPlan}>
            <div className={styles.directionPlanVideo}>
              <h1>Direction</h1>
              <p className={styles.context}>Varun agreed with the general aesthetic I was looking to go with, but he still couldn’t see that intuitive message that this was a filmmaker’s website. During one of our conversations, we came up with the idea of playing a short looping video in the background—that would have something to do with filmmaking, or films in general.</p>
              <br />
              <video 
                autoPlay
                loop
                muted
                className={styles.directionVideo1}
              >
                <source src="https://prabhavkhandelwal.com/assets/img/work/vc/project/8--webm.webm" type="video/webm" />
              </video>
              <p className={styles.imageCaption}>The Director's Chair</p>
            </div>

            <div className={styles.directionPlanVideo}>
            <h1>Plan Forward</h1>
            <p className={styles.context}>Thanks to the fact that Varun had access to all the equipment we might need to shoot the video, I had the opportunity to art-direct my own shoot. The general direction of the video was to shoot equipment or scenarios that indicated something "meta-film".<br />‎ </p>
              <br />
              <video 
                autoPlay
                loop
                muted
                className={styles.directionVideo2}
              >
                <source src="https://prabhavkhandelwal.com/assets/img/work/vc/project/9--webm.webm" type="video/webm" />
              </video>
              <p className={styles.imageCaption}>Film set equipment</p>
            </div>
          </div>
          <br /><br /><br />

          <Image
                src="/static/projectpages/varunchopra/shot.png"
                alt="vc-shot"
                width={1200}
                height={800}
          />
          <br /><br /><br />

          <Image
                src="/static/projectpages/varunchopra/1board.png"
                alt="vc-board-1"
                width={1200}
                height={800}
          />
          <br /><br /><br />

          <Image
                src="/static/projectpages/varunchopra/2board.png"
                alt="vc-board-2"
                width={1200}
                height={800}
          />
          <br /><br /><br />

        </div>
      </div>


      {/* Footer */}
      <div className={styles.blogpage_footer}>
        <div className="navHorizontalRule"><hr /></div>
          <div className={styles.footerContent}>
            <Link href="/work/thezine"><p className={styles.leftFooter}>←  THE ZINE</p></Link>
            {/* <Link href=""><p className={styles.rightFooter}></p></Link> */}
         </div>
      </div>
    </div>
  )
}


export default VarunChopra