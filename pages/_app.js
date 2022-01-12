import Header from '../components/Header/Header.js'
import Welcome from '../components/Welcome/Welcome.js'
import Nav from '../components/Nav/Nav.js'
import Footer from '../components/Footer/Footer.js'
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
