import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/projects.module.css'
import Pomodoro from '../images/sicko-mode-pomodoro-preview.png'

export default function Projects() {
  const Emoji = (props) => {
    return (
      <span
        className={styles.ProjectsCardBtnEmoji}
        role="img"
        aria-label={props.label ? props.label : ''}
        aria-hidden={props.label ? 'false' : 'true'}
      >
        {props.symbol}
      </span>
    )
  }
  return (
    <div className={styles.Projects}>
      <Head>
        <title>Projects</title>
      </Head>
      <header className={styles.ProjectsHeader}>
        <h3 className={styles.ProjectsHeaderHeading}>Projects</h3>
      </header>
      <div className={styles.ProjectsCardCont}>
        <div className={styles.ProjectsCard}>
          <Image
            className={styles.ProjectsCardImg}
            src={Pomodoro}
            alt="cover"
            width="200px"
            height="120px"
          />
          <div className={styles.ProjectsCardAbout}>
            <h3 className={styles.ProjectsCardTitle}>Sicko Mode Pomodoro</h3>
            <p className={styles.ProjectsCardDescrip}>A simple pomodoro app.</p>
          </div>
          <Link href="https://sicko-mode-pomodoro.vercel.app">
            <a className={styles.ProjectsCardBtn}>
              Go to site
              <Emoji symbol="🔎" label="magnifying glass" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}
