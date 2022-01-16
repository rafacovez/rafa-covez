import fs from "fs"
import path from "path"
import matter from "gray-matter"
import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/archive.module.css"

export default function Archive({posts}) {
    return (
        <div className={styles.Archive}>
            <Head>
                <title>Archive</title>
            </Head>
            <header className={styles.ArchiveHeader}>
                <h3 className={styles.ArchiveHeaderHeading}>Essays Archive</h3>
            </header>
            <ul className={styles.ArchiveEssaysCont}>
               {posts.map((post, index) => (
                   <li key={index}>
                       -
                       <Link href={`/essays/${post.slug}`}>
                            <a className={styles.ArchiveEssayLink}>{post.frontmatter.title}</a>
                       </Link>
                       <span className={styles.ArchiveEssayDate}>{post.frontmatter.date}</span>
                   </li>
               ))}
            </ul>
        </div>
    )
}

export async function getStaticProps() {
  // get files from the posts dir
  const files = fs.readdirSync(path.join("posts"))

  // get slug and frontmatter from posts
  const posts = files.map(filename => {
    // create slug
    const slug = filename.replace(".md", "")

    //get frontmatter
    const markdownWithMeta = fs.readFileSync(
        path.join("posts", filename),
        "utf-8",
      )

    const {data:frontmatter} = matter(markdownWithMeta)

    return {
      slug,
      frontmatter,
    }
  })

  return {
    props: {
      posts,
    }
  }
}