import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/about.module.css'

export default function About() {
  const Emoji = (props) => {
    return (
      <span
        className={styles.AboutFooterEmoji}
        role="img"
        aria-label={props.label ? props.label : ''}
        aria-hidden={props.label ? 'false' : 'true'}
      >
        {props.symbol}
      </span>
    )
  }
  return (
    <div className={styles.About}>
      <Head>
        <title>About</title>
      </Head>
      <header className={styles.AboutHeader}>
        <h3 className={styles.AboutHeaderHeading}>About</h3>
      </header>
      <article className={styles.AboutTextWrapper}>
        <p>
          Hi there. My name&apos;s Rafael, and I&apos;m a Caribbean self-taught
          web developer.
        </p>
        <p>
          I speak Spanish and English. Some of my favorite subjects are biology,
          psychology and tech. My favorite movie genre is horror and I once
          tried to be a musician so you could say I play a little guitar.
        </p>
        <p>Welcome to my mind&apos;s digital home. Enjoy your stay.</p>
      </article>
      <footer className={styles.AboutFooter}>
        <Emoji symbol="✏️" label="pencil" />
        <p>Written by</p>
        <Link href="https://twitter.com/rafdidact">
          <a className={styles.AboutFooterLink}>@rafdidact</a>
        </Link>
      </footer>
    </div>
  )
}
