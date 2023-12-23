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
            <p>ROLE.....................PRODUCT DESIGN</p>
          </div>
          <div className={styles.role}>
            <p>ROLE.......................UX RESEARCH</p>
          </div>
          <div className={styles.team}>
            <p>TEAM......ROSHAN FERNANDO & EDWARD CHEN</p>
          </div>
          </div>
        </div>
        <div className={styles.rightContent}>
          <Image 
            src='/static/projectpages/linkedin/linkedin-events-feature.png'
            alt='linkedIn events feature'
            width={1200}
            height={800}
          />
          <div className={styles.research}>
            <p>
              <h1>Research Questions</h1>
              <ol>
                <li className={styles.bullet}>Understand how people sustain relationships with LinkedIn connections</li>
                <li className={styles.bullet}>Discover how people interact with previous and new connections at conferences</li>
                <li className={styles.bullet}>Understand how recruiters utilize LinkedIn before and during conferences</li>
              </ol>
            </p>
            <p>
              <h1>Core Pain Points</h1>
              <ul>
                {/* <li >Without trying to erase their natural accent, BoldVoice seeks to approach accent coaching as a skill they can pick up to enhance their pronunciation and confidence by:</li> */}
                <li className={styles.bullet}>Conference attendees don't know which of their LinkedIn connections will also be there</li>
                <li className={styles.bullet}>Company recruiters struggle to source conference attendees, and verify them as attending.</li>
              </ul>
            </p>
          </div>

          {/* EVENTS PAGE */}
          <div className={styles.linkedin_eventspage}>
            <div className={styles.boldvoice_hometext}>
              <h1>Events Page — Iterations</h1>
              <h2>ADDING CONTEXT</h2>
              <p className={styles.para}>Major issues laid out here were the placement of the 'Create Group' button, unintuitive way to add members to a group as well as decreased visibility of filters</p>
              <br />
            </div>
            <div className={styles.linkedin_groups}>
              <Image
                src="/static/projectpages/linkedin/linkedin_groups.png"
                alt="linkedin_groups"
                width={1200}
                height={800}
              />
            </div>
          </div>
          <br />

          {/* POPUPS */}
          <div className={styles.linkedin_popups}>
            <div className={styles.linkedin_popupstext}>
              <h1>Confirmation Popup — Iterations</h1>
              <h2>ADDING CONTEXT</h2>
              <p className={styles.para}>Major issues highlighted were - 'congrats' text wasn't using the real estate well; no call-to-action from the popup alert.</p>
              <br />
            </div>
            <div className={styles.linkedin_popupsimage}>
              <Image
                src="/static/projectpages/linkedin/linkedin_popup.png"
                alt="linkedin_popups"
                width={1200}
                height={800}
              />
            </div>
          </div>
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

          <div className={styles.groups_events}>
            <div className={styles.groups_eventsVideo}>
                <h1>Creating Groups</h1>
                <h2>MAKE SURE YOU CONNECT WITH YOUR FRIENDS</h2>
                <br />
                <video 
                    autoPlay
                    loop
                    muted
                    >
                    <source src="https://prabhavkhandelwal.com/assets/img/work/linkedin/linkedin_create_group.webm" type="video/webm" />
                </video>
                <p className={styles.para}>We changed the primary message of the pop-up from “Congrats!” to the name of the group. Congrats was generic and did not remind the user what group was created. The updated message is more personal, and clonfirms to the user which group was created. We also added a “View Group button”. Similarly to above, this button clearly tells the user what the next step is: to view the group that they created. This makes navigation less ambiguous.</p>

            </div>
            <div className={styles.groups_eventsVideo}>
            <h1>Register for Events</h1>
            <h2>FIND OLD FRIENDS, MAKE NEW ONES</h2>
            <br />
              <video 
                autoPlay
                loop
                muted
                >
                <source src="https://prabhavkhandelwal.com/assets/img/work/linkedin/linkedin_event.webm" type="video/webm" />
              </video>
              <p className={styles.para}>By changing the color, size, and location of the “Create Group” button, we made group creation much more intuitive. Users know how to create the group and, because we changed the icon from the message icon to the add icon, how to add attendees to the group. There is now much more clarity on what the next steps should be, which better facilitates navigation.<br />‎</p>
            </div>
        </div>
        </div>
      </div>


      {/* Footer */}
      {/* Footer */}
      <div className={styles.blogpage_footer}>
        <div className="navHorizontalRule"><hr /></div>
          <div className={styles.footerContent}>
            <Link href="https://blog.prototypr.io/my-summer-as-a-ux-research-intern-for-accenture-at-google-1ac353119717"><p className={styles.leftFooter}>←  CHET FAKER</p></Link>
            <Link href="/work/lisamarie"><p className={styles.rightFooter}>LISA MARIE RUNFOLA  →</p></Link>
         </div>
      </div>
    </div>
  )
}


export default LinkedIn