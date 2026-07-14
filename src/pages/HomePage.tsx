import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import Stats from '../components/Stats/Stats'
import Skills from '../components/Skills/Skills'
import AboutMe from '../components/AboutMe/AboutMe'
import Experience from '../components/Experience/Experience'
import Projects from '../components/Projects/Projects'
import Certifications from '../components/Certifications/Certifications'
import Values from '../components/Values/Values'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'

/** The single-page landing route: header + all content sections + footer. */
export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Skills />
        <AboutMe />
        <Experience />
        <Projects />
        <Certifications />
        <Values />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
