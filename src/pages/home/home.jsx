import React from 'react'

import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import Intro from '../../components/intro/intro'
import AboutMeSectiono from '../../components/about/about'

function HomePage() {
  return (
    <div>
        <header>
            <Header/>
        </header>

        <section>
            <Intro/>
            <AboutMeSectiono/>
        </section>
        <footer>
            <Footer/>
        </footer>
    </div>
  )
}

export default HomePage