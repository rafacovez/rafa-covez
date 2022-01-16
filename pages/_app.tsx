import Header from '../components/Header'
import Welcome from '../components/Welcome'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return(
    <>
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
