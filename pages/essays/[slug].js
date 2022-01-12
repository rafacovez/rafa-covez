import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { marked } from "marked"
import Image from "next/image"
import styles from "./[slug].module.css"
import Link from "next/link"
import Head from "next/head"

export default function PostPage({frontmatter: {title, description, date, cover_image}, slug, content}) {
    const Emoji = (props) => {
        return (
            <span
                className={styles.ArticleFooterEmoji}
                role="img"
                aria-label={props.label ? props.label : ""}
                aria-hidden={props.label ? "false" : "true"}
            >
                {props.symbol}
            </span>
        )
    }
    return (
        <article>
            <Head>
              <title>{title}</title>
            </Head>
            <header className={styles.ArticleHeader}>
                <Image className={styles.ArticleImg} src={cover_image} alt="cover" width="300px" height="180px"/>
                <div className={styles.ArticleAbout}>
                    <h3 className={styles.ArticleAboutHeading}>{title}</h3>
                    <span className={styles.ArticleAboutDate}>{date}</span>
                </div>
            </header>
            <div className={styles.ArticleContent} dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
            <footer className={styles.ArticleFooter}>
                <Emoji symbol="✏️" label="pencil"/>
                <p>Written by</p>
                <Link href="https://twitter.com/rafdidact">
                    <a className={styles.ArticleFooterLink}>@rafdidact</a>
                </Link>
            </footer>
        </article>
    )
}

export async function getStaticPaths() {
    const files = fs.readdirSync(path.join("posts"))

    const paths = files.map(filename => ({
        params: {
            slug: filename.replace(".md", "")
        }
    }))

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params: { slug }}) {
    const markdownWithMeta = fs.readFileSync(path.join("posts", slug + ".md"), "utf-8")

    const {data:frontmatter, content} = matter(markdownWithMeta)

    return {
        props: {
            frontmatter,
            slug,
            content,
        },
    }
}