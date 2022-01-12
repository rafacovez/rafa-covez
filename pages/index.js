import fs from "fs"
import path from "path"
import matter from "gray-matter"
import Head from "next/head"
import Post from "../components/Post/Post"
import styles from "../components/Post/Post.module.css"
import Link from "next/link"

export default function Home({posts}) {
  return (
    <div className="Home">
      <Head>
        <title>Rafa Cóvez</title>
        <meta name="description" content="My mind's digital home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles.PostCardWrapper}>
        <header className={styles.PostCardHeader}>
          <h3 className={styles.PostCardHeaderHeading}>This year&apos;s essays ↓</h3>
          <Link href="/">
            <a className={styles.PostCardHeaderLink}>See archive</a>
          </Link>
        </header>
        <div className={styles.PostCardCont}>
          {posts.map((post, index) => (
            <Post key={index} post={post}/>
          ))}
        </div>
      </section>
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