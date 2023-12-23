import Image from 'next/image'
import styles from './LinkedIn.module.css';
import Link from 'next/link';
// import ProjectDescription from '../ProjectDescription';

// const image1 = 'https://prabhavkhandelwal.com/assets/img/work/boldvoice.png';

const LinkedIn = () => {
  return (
    <div className={styles.projectpage}>
      <div className={styles.projectpagecontent}>
        <div className={styles.leftContent}>
          <div className={styles.leftContentContainer}>
          <div className={styles.projectTitle}>
          Adding an events feature to LinkedIn's existing app ecosystem.
          </div>
          <br />
          <div className={styles.para1}>
          For Prof. Guo's Interaction Design class at UCSD, my team and I tried to tackle the question: what if we could reframe networking as <b>building on relationships</b> instead of just forming new ones.
          </div>
          <br />
          <div className={styles.para2}>
          The result was an in depth research process, lots of wireframing and a finished prototype that would add an Events feature in LinkedIn's app ecosystem.
          </div>
          <br /><br /><br />
          {/* <div className={styles.externalLinks}>
            <div className={styles.externalLink1}>
            <p><a href="https://play.google.com/store/apps/details?id=com.wellocution.androidapp">ANDROID APP</a></p>
            <Image 
              src='/export.png'
              alt='export-icon'
              width={15}
              height={15}
            />
            </div>
            <div className={styles.externalLink2}>
              <p><a href="https://apps.apple.com/us/app/wellocution/id1567841142">IOS APP</a></p>
              <Image 
                src='/export.png'
                alt='export-icon'
                width={15}
                height={15}
              /> 
            </div>
          </div> */}
          <br />
          <div className={styles.role}>
            <p>ROLE..................................PRODUCT DESIGN</p>
          </div>
          <div className={styles.role}>
            <p>ROLE..................................UX RESEARCH</p>
          </div>
          <div className={styles.team}>
            <p>TEAM................ROSHAN FERNANDO & EDWARD CHEN</p>
          </div>
          </div>
        </div>
        <div className={styles.rightContent}>
          <Image 
            src={image1}
            alt='boldvoice'
            width={1200}
            height={800}
          />
          <div className={styles.problem}>
            <p>
              <h1>Problem Space</h1>
              <ol>
                <li className={styles.bullet}>Immigrants and nonnative English speakers constantly face a challenge to communicate themselves properly in a variety of situations: be it at school, at work, socially, etc.</li>
                <li className={styles.bullet}>As a result, they sometimes feel left out of conversations, being ignored at work, and being badgered constantly by the infamous — “I didn't quite get that”.</li>
                <li className={styles.bullet}>Dedicated accent coaching costs a lot, and BoldVoice seeks to make the power of 1:1 accent coaching accessible to everyone.</li>
              </ol>
            </p>
            <p>
              <h1>BoldVoice's Proposition</h1>
              <ul>
                <li >Without trying to erase their natural accent, BoldVoice seeks to approach accent coaching as a skill they can pick up to enhance their pronunciation and confidence by:</li>
                <li className={styles.bullet}>Offering a tailor-made coursework according to user's linguistic background</li>
                <li className={styles.bullet}>Video lessons by Hollywood accent coaches</li>
                <li className={styles.bullet}>Practice sessions with instant & detailed feedback down to each syllable</li>
              </ul>
            </p>
          </div>
          <div className={styles.subscription}>
            <div className={styles.subscriptionImage}>
              <Image
                src='/static/projectpages/boldvoice/boldvoice_sub.png'
                alt='boldvoice_sub'
                width={800}
                height={1400}
              />
              <p className={styles.imageCaption}>SELECTING SUBSCRIPTION PLAN</p>
            </div>
            <div className={styles.subscriptionVideo}>
              <video 
                autoPlay
                loop
                muted
              >
                <source src="https://prabhavkhandelwal.com/assets/img/work/boldvoice/boldvoice_onboarding.webm" type="video/webm" />
              </video>
              <p className={styles.imageCaption}>ONBOARDING QUESTIONS</p>
            </div>
          </div>
          <br />

          {/* HOME */}
          <div className={styles.boldvoice_home}>
            <div className={styles.boldvoice_hometext}>
              <h1>Home</h1>
              <h2>A DAILY PRACTICE, NOT A SPRINT</h2>
              <p className={styles.para}>Instead of approaching the lessons in a sprint-type fashion, our research showed that a routine-based structured approach works better for picking up new skills. So, the homepage shows the users their “tasks of the day” with the goal to check each of them off every day.</p>
              <br />
            </div>
            <div className={styles.boldvoice_homeimage}>
              <Image
                src="/static/projectpages/boldvoice/boldvoicehome.png"
                alt="boldvoice_home"
                width={1200}
                height={800}
              />
            </div>
          </div>
          <br />

          {/* VIDEO LESSONS */}
          <div className={styles.boldvoice_videolessons}>
            <div className={styles.boldvoice_videolessonstext}>
              <h1>Video Lessons</h1>
              <h2>LEARNING FROM THE BEST</h2>
              <p className={styles.para}>Users can watch lessons with accent coaches and practice key words and sentences as they're learning. They can also check detailed syllable-by-syllable feedback and can rate the lesson after they're done.</p>
              <br />
            </div>
            <div className={styles.boldvoice_videolessonsimage}>
              <Image
                src="/static/projectpages/boldvoice/boldvoice_video.png"
                alt="boldvoice_videolessons"
                width={1200}
                height={800}
              />
            </div>
          </div>
          <br />

          {/* PRACTISE SESSIONS */}
          <div className={styles.boldvoice_practiselessons}>
            <div className={styles.boldvoice_practiselessonstext}>
              <h1>Practice Sessions</h1>
              <h2>HONING YOUR SKILLS</h2>
              <p className={styles.para}>Every video lesson is coupled with a practice set, which helps users hone in on the concepts they've just learned. They can hear an example from the coach, try their hand and get detailed feedback on how they did.</p>
              <br />
            </div>
            <div className={styles.boldvoice_practiselessonsimage}>
              <Image
                src="/static/projectpages/boldvoice/boldvoice_practice.png"
                alt="boldvoice_practiselessons"
                width={1200}
                height={800}
              />
            </div>
          </div>
          <br />

          {/* LESSON PLANS */}
          <div className={styles.boldvoice_lessonplans}>
            <div className={styles.boldvoice_lessonplanstext}>
              <h1>Lesson Plans</h1>
              <h2>A BIRD'S EYE VIEW</h2>
              <p className={styles.para}>All lessons are structured into thematic units, which are further divided into video lessons coupled with their dedicated practice set. We experimented with a couple approaches on how to showcase overall progress through the coursework—overall progress bars and a streak-based approach.</p>
              <br />
            </div>
            <div className={styles.boldvoice_lessonplansimage}>
              <Image
                src="/static/projectpages/boldvoice/boldvoice_lessons.png"
                alt="boldvoice_lessonplans"
                width={1200}
                height={800}
              />
            </div>
          </div>
          <br />

          {/* FINAL THOUGHTS */}
          <div className={styles.boldvoice_finalthoughts}>
            <div className={styles.boldvoice_finalthoughtstext}>
              <h1>Final Thoughts</h1>
              <p className={styles.para}>BoldVoice has evolved and grown since my initial designs and continues to rack up downloads on both the Apple App Store and Google Play Store — helping nonnative English speakers discover their most clear and confident voice.</p>
              <br />
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <div className={styles.blogpage_footer}>
        <div className="navHorizontalRule"><hr /></div>
          <div className={styles.footerContent}>
            <p className={styles.leftFooter}></p>
            <Link href="/work/skilli"><p className={styles.rightFooter}>SKILLI   →</p></Link>
         </div>
      </div>
    </div>
  )
}


export default LinkedIn