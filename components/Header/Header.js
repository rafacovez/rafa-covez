import Link from "next/link"
import styles from "./Header.module.css"

export default function Header() {
    const Emoji = (props) => {
        return (
            <span
                className={styles.HeaderEmoji}
                role="img"
                aria-label={props.label ? props.label : ""}
                aria-hidden={props.label ? "false" : "true"}
            >
                {props.symbol}
            </span>
        )
    }
    return (
        <header className={styles.Header}>
            <div className={styles.HeaderCont}>
                <Link href="/">
                    <h2 className={styles.HeaderHeading}>Rafa Cóvez<Emoji symbol="✏️" label="pencil"/></h2>
                </Link>
                <span className={styles.HeaderDescrip}>My mind&apos;s digital home.</span>
            </div>
        </header>
    )
}
