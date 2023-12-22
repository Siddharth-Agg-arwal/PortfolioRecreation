import Image from 'next/image'
import styles from './Skilli.module.css';
import Link from 'next/link';
// import ProjectDescription from '../ProjectDescription';

const image1 = 'https://prabhavkhandelwal.com/assets/img/work/boldvoice.png';

const BoldVoice = () => {
  return (
    <div className={styles.projectpage}>
      <div className={styles.projectpagecontent}>
        <div className={styles.leftContent}>
          <div className={styles.leftContentContainer}>
          <div className={styles.projectTitle}>
            Playing mini-games to earn real rewards.
          </div>
          <br />
          <div className={styles.para1}>
         Skilli is an esports gaming app conceptualized by the <a href="https://www.pokerstars.bet/">PokerStars</a> India team. It lets users compete for cash prizes and rewards. Players can go head to head in 1v1 battles as well as compete for larger prizes in tournaments. Enthusiasts can also rack up points and compete for grand prizes on weekly leaderboards.
          </div>
          <br />
          <div className={styles.para2}>
          I worked with the team to translate their product vision into user flows and design the mobile app for Android. The app is currently in development.
          </div>
          <br /><br /><br />
          <br />
          <div className={styles.role}>
            <p>ROLE..................................PRODUCT DESIGN</p>
            </div>
          </div>
        </div>
        <div className={styles.rightContent}>
          <Image 
            src='/static/projectpages/skilli/skilli.png'
            alt='skilli'
            width={1200}
            height={800}
          />
          <div className={styles.keygoals}>
            <p>
              <h1>Key Goals</h1>
              <ol>
                <li className={styles.bullet}>Let users test the waters and dip their feet with 1v1 gaming to earn small rewards.</li>
                <li className={styles.bullet}>Eventually drive them towards live tournaments where they can compete in a bigger group and earn bigger rewards.</li>
                <li className={styles.bullet}>Enforce more competition with ranking on leaderboards, giving out bonus cash prizes and coupons/vouchers.</li>
              </ol>
            </p>
          </div>
          <div className={styles.early}>
            <div className={styles.earlyImage}>
                <Image 
                src='/static/projectpages/skilli/skilli_early.png'
                alt='skilli'
                width={1200}
                height={800}
            />
              <p className={styles.imageCaption}>EARLY EXPLORATIONS</p>
            </div>
          </div>
          <br />

          {/* HOME */}
          <div className={styles.skilli_home}>
            <div className={styles.skilli_hometext}>
              <h1>Home</h1>
              <h2>EMPHASIS ON TOURNAMENTS</h2>
              <p className={styles.para}>While giving an overview of what the app has to offer, tournaments and stats like “players joined”, “prize pool” help players decide which tournament to join.</p>
              <br />
            </div>
            <div className={styles.skilli_homeimage}>
              <Image
                src="/static/projectpages/skilli/skilli_home.png"
                alt="skilli_home"
                width={1200}
                height={800}
              />
            </div>
          </div>
          <br /><br /><br /><br /><br /><br />

          {/* GAMEPLAY */}
          <div className={styles.gameplay}>
            <div className={styles.gameplayVideo}>
                <h1>1v1 Gameplay</h1>
                <h2>CHOOSE YOUR BET AND PLAY</h2>
                <br />
                <video 
                    autoPlay
                    loop
                    muted
                >
                    <source src="https://prabhavkhandelwal.com/assets/img/work/skilli/skilli_1v1.webm" type="video/webm" />
                </video>
                <p className={styles.para}>While giving an overview of what the app has to offer, tournaments and stats like “players joined”, “prize pool” help players decide which tournament to join.</p>
              {/* <p className={styles.imageCaption}>SELECTING SUBSCRIPTION PLAN</p> */}
            </div>
            <div className={styles.gameplayVideo}>
            <h1>Tournaments</h1>
            <h2>COMPETE WITH THE BEST</h2>
            <br />
              <video 
                autoPlay
                loop
                muted
              >
                <source src="https://prabhavkhandelwal.com/assets/img/work/skilli/skilli_tourney.webm" type="video/webm" />
              </video>
              <p className={styles.para}>While giving an overview of what the app has to offer, tournaments and stats like “players joined”, “prize pool” help players decide which tournament to join.</p>
            </div>
        </div>
        <br /><br /><br /><br /><br /><br />

          {/* LEADERBOARD */}
          <div className={styles.skilli_leaderboard}>
            <div className={styles.skilli_leaderboardtext}>
              <h1>Leaderboard</h1>
              <h2>SEE WHERE YOU RANK</h2>
              <p className={styles.para}>The overarching goal of a expert player would be to rank on the leaderboard to compete for the biggest prizes. Ranks are showcased with the respective rewards to incentivize the players to rank higher.</p>
              <br />
            </div>
            <div className={styles.skilli_leaderboardimage}>
              <Image
                src="/static/projectpages/skilli/skilli_leaderboard.png"
                alt="skilli_leaderboard"
                width={1200}
                height={800}
              />
            </div>
          </div>
          <br />

          {/* COINS AND REDEMPTION */}
          <div className={styles.skilli_coins}>
            <div className={styles.skilli_coinstext}>
              <h1>Coins & Redemption</h1>
              <h2>CASH OUT IN CASH OR KIND</h2>
              <p className={styles.para}>The coin wallet functions both as a personal wallet as well as a ledger. Players can check out their coins, corresponding cash values and choose to cash out. Additionally, they can also see all the incoming and outgoing coins form entry fees, winning amounts, bonuses, etc.</p>
              <br />
              <p className={styles.para}>They can also choose to trade in their coins for real-life rewards such as merchandise, coupons, cash vouchers, etc</p>
            <br />
            </div>
            <div className={styles.skilli_coinsimage}>
              <Image
                src="/static/projectpages/skilli/skilli_coins.png"
                alt="skilli_coins"
                width={1200}
                height={800}
              />
              <br />
              <Image
                src="/static/projectpages/skilli/skilli_popups.png"
                alt="skilli_popups"
                width={1200}
                height={800}
              />
              <p className={styles.imageCaption}>MISCELLANEOUS ALERTS</p>
            </div>
          </div>
          <br />
        </div>
      </div>
      {/* Footer */}
      <div className={styles.blogpage_footer}>
        <div className="navHorizontalRule"><hr /></div>
          <div className={styles.footerContent}>
            <Link href="/work/boldvoice"><p className={styles.leftFooter}>←  BOLDVOICE</p></Link>
            <Link href="/work/jeffstaple"><p className={styles.rightFooter}>JEFFSTAPLE   →</p></Link>
         </div>
      </div>
    </div>
  )
}


export default BoldVoice