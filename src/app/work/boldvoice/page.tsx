import Image from 'next/image'
import styles from './BoldVoice.module.css';
// import ProjectDescription from '../ProjectDescription';

const image1 = 'https://prabhavkhandelwal.com/assets/img/work/boldvoice.png';

const BoldVoice = () => {
  return (
    <div className={styles.projectpage}>
      <div className={styles.projectpagecontent}>
        <div className={styles.leftContent}>
          <div className={styles.projectTitle}>
            Accent coaching for nonnative English speakers.
          </div>
          <br />
          <div className={styles.para1}>
            <a href="https://www.boldvoice.com/">BoldVoice</a> is a Y-Combinator startup that aims to help nonnative English speakers find their most confident and clear voice. Through video lessons with accent coaches, interactive practice sessions and precise AI-driven feedback, it helps users work on and hone their American accent.
          </div>
          <br />
          <div className={styles.para2}>
            I was brought in as the sole designer to work with the team and help conceptualize the app design from scratch — from laying the out the user flow, wire-framing and designing the mobile app for Android and iOS.
          </div>
          <br /><br /><br />
          <div className={styles.externalLinks}>
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
          </div>
          <br />
          <div className={styles.role}>
            <p>ROLE..................................PRODUCT DESIGN</p>
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
        </div>
      </div>
    </div>
  )
}


export default BoldVoice