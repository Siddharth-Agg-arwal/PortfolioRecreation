import React from 'react'
import styles from './CSS/AboutPage.module.css';
import Image from 'next/image';

const AboutPage = () => {
  return (
    <div className={styles.aboutpage}>
      <div className={styles.aboutpageContent}>
        <div className={styles.rightContent}>
          <p className={styles.firstPara}>
          I'm a designer and developer, born and bred in Delhi, India and currently based in Brooklyn, NY. I love making internet things and am obsessed with the web and its power for expression and community.
          </p>
          <br></br>
          <p className={styles.secondPara}>
          In the past, I've been fortunate enough to learn from and grow with the teams at <a href="https://blog.prototypr.io/my-summer-as-a-ux-research-intern-for-accenture-at-google-1ac353119717">Google</a>, <a href="https://alright.studio/">Alright Studio</a>, <a href="https://www.gordilsandwillis.com/">Gordils & Willis</a>, <a href="https://studiodbj.com/">Studio DBJ</a>,<a href="https://www.boldvoice.com/">BoldVoice</a>, and <a href="https://mindsparklemag.com/">Mindsparkle</a>. Check out my <a href="https://prabhavkhandelwal.com/assets/img/Resume_Prabhav_Khandelwal.pdf">resume</a> to learn more.
          </p>
          <br></br>
          <p className={styles.thirdPara}>
          You can usually find me watching a lot of football (the kind you play with your legs), making playlists nobody asked for or munching on overly spicy vegetarian food.
          </p>
          <br></br>
          <p className={styles.fourthPara}>
          Thanks for coming to my little corner on the web. Don't be shy, say hi →
          </p>
          <br></br>
          <ul className={styles.socialHandles}>
            <li><a href="https://twitter.com/helloprabhav">TWITTER</a></li>
            <li><a href="https://www.instagram.com/helloprabhav/">INSTAGRAM</a></li>
            <li><a href="https://open.spotify.com/user/helloprabhav?si=ce6efdcf67504112">SPOTIFY</a></li>
            <li><a href="https://www.linkedin.com/in/prabhavkhandelwal/">LINKEDIN</a></li>
            <li><a href="me@prabhavkhandelwal.com">EMAIL</a></li>
          </ul>
        </div>
        <div className={styles.leftContent}>
          <Image
            src='/cartoon.png'
            alt='cartoon portrait'
            width={300}
            height={500}
          />
          <p className={styles.portraitcaption}>Portrait by <a href='https://a-savage.com/'>A. Savage.</a></p>
        </div>
      </div>
      
      {/* Footer */}
      <div className={styles.blogpage_footer}>
        <div className="navHorizontalRule"><hr /></div>
          <div className={styles.footerContent}>
            <p className={styles.leftFooter}></p>
            <p className={styles.rightFooter}>THANKS FOR STOPPING BY!</p>
         </div>
      </div>
    </div>
  )
}

export default AboutPage