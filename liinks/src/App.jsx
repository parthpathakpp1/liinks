import Features from "./components/features/Features"
import Footer from "./components/footer/Footer"
import Hero from "./components/hero/Hero"
import Navbar from "./components/navbar/Navbar"
import Newsletter from "./components/newsletter/Newsletter"
import Organize from "./components/organize/Organize"
import Social from "./components/social/Social"
import SocialTwo from "./components/social/SocialTwo"
import TryNow from "./components/trynow/TryNow"
import WhoUse from "./components/whouse/WhoUse"
import WhyUs from "./components/whyus/WhyUs"

function App() {


  return (
    <>
       <Navbar />
       <Hero />
       <Features />
       {/* <WhyUs /> */}
       <WhoUse />
       <Social />
       <SocialTwo />
       <Organize />
       <Features />
       <TryNow />
       <Newsletter />
       <Footer />
    </>
  )
}

export default App
