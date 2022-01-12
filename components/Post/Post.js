import Image from "next/image"
import Link from "next/link"
import styles from "./Post.module.css"

export default function Post({post}) {
    const Emoji = (props) => {
        return (
            <span
                className={styles.PostCardBtnEmoji}
                role="img"
                aria-label={props.label ? props.label : ""}
                aria-hidden={props.label ? "false" : "true"}
            >
                {props.symbol}
            </span>
        )
    }
    return (
        <div className={styles.PostCard}>
            <Image className={styles.PostCardImg} src={post.frontmatter.cover_image} alt="cover" width="200px" height="120px"/>
            <div className={styles.PostCardAbout}>
                <h3 className={styles.PostCardTitle}>{post.frontmatter.title}</h3>
                <p className={styles.PostCardDescrip}>{post.frontmatter.description}</p>
            </div>
            <Link href={`/essays/${post.slug}`}>
                <a className={styles.PostCardBtn}>Read More<Emoji symbol="🔎" label="magnifying glass"/></a>
            </Link>
        </div>
    )
}
