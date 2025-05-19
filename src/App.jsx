import './App.css'
import Footer from './assets/component/Footer'
import Header from './assets/component/Header'
import Hero from './assets/component/Hero'
import InstagramFeed from './assets/component/InstagramFeed'
import LatestReleases from './assets/component/LatestReleases'
import Newsletter from './assets/component/Newsletter'
import TourDates from './assets/component/TourDates'
import VideoSection from './assets/component/VideoSection'
import NewsSection from './assets/NewsSection'
function App() {
  return (
    <>
    <Header/>
   <Hero/>
   <LatestReleases/>
   <TourDates/>
   <VideoSection/>
   <NewsSection/>
   <InstagramFeed/>
   <Newsletter/>
   <Footer/>
    </>
   
  )
}

export default App
