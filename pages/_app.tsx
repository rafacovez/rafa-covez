import Header from '../components/Header'
import Welcome from '../components/Welcome'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return(
    <>
      <Head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="description" content="My mind's digital home."/>
        <meta name="keywords" content="blog, webdevelopment, nextjs"/>
        <meta name="author" content="Rafa"/>
        <link rel="icon" href="/public/favicon.ico" />
      </Head>
      <Header/>
      <Welcome/>
      <div className="NavAndMainWrapper">
        <Nav/>
        <main className="MainContainer">
          <Component {...pageProps} />
        </main>
      </div>
      <Footer/>
    </>
  )
}

export default MyApp
