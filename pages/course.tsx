import Head from "next/head"
import styles from "../styles/course.module.css"

export default function Course() {
    const Emoji = (props) => {
        return (
            <span
                className={styles.CourseHeaderHeadingEmoji}
                role="img"
                aria-label={props.label ? props.label : ""}
                aria-hidden={props.label ? "false" : "true"}
            >
                {props.symbol}
            </span>
        )
    }
    return (
        <div className={styles.Course}>
            <Head>
                <title>Course</title>
            </Head>
            <header className={styles.CourseHeader}>
                <h3 className={styles.CourseHeaderHeading}>This project is still on the making...</h3>
                <Emoji symbol="🔴" label="red dot"/>
            </header>
        </div>
    )
}
