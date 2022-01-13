import Link from "next/link"
import styles from "./Nav.module.css"

export default function Nav() {
    const Emoji = (props) => {
        return (
            <span
                className={styles.NavLinkEmoji}
                role="img"
                aria-label={props.label ? props.label : ""}
                aria-hidden={props.label ? "false" : "true"}
            >
                {props.symbol}
            </span>
        )
    }
    return (
        <nav className={styles.Nav}>
            <div className={styles.NavLinkWrapper}>
                <Emoji symbol="🎓" label="graduation cap"/>
                <Link href="/course">
                    <a className={styles.NavLink}>Course</a>
                </Link>
            </div>
            <div className={styles.NavLinkWrapper}>
                <Emoji symbol="✏️" label="pencil"/>
                <Link href="/essays/archive">
                    <a className={styles.NavLink}>Essays</a>
                </Link>
            </div>
            <div className={styles.NavLinkWrapper}>
                <Emoji symbol="🧩" label="puzzle piece"/>
                <Link href="/projects">
                    <a className={styles.NavLink}>Projects</a>
                </Link>
            </div>
            <div className={styles.NavLinkWrapper}>
                <Emoji symbol="📚" label="books"/>
                <Link href="https://github.com/rafdidact/what-I-read">
                    <a target="_blank" className={styles.NavLink}>Books Track</a>
                </Link>
            </div>
            <div className={styles.NavLinkWrapper}>
                <Emoji symbol="🍅" label="tomato"/>
                <Link href="https://sicko-mode-pomodoro.vercel.app">
                    <a target="_blank" className={styles.NavLink}>Pomodoro</a>
                </Link>
            </div>
            <div className={styles.NavLinkWrapper}>
                <Emoji symbol="❓" label="question mark"/>
                <Link href="/about">
                    <a className={styles.NavLink}>About</a>
                </Link>
            </div>
        </nav>
    )
}
