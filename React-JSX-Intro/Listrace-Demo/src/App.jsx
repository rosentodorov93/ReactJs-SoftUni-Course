import Blog from "./components/Blog"
import Contacts from "./components/Contacts"
import Explore from "./components/Explore"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Reviews from "./components/Reviews"
import Statistics from "./components/Statistics"
import Topics from "./components/Topics"
import Welcome from "./components/Welcome"
import Works from "./components/Works"

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Welcome />
      <Topics/>
      <Works/>
      <Explore/>
      <Reviews/>
      <Statistics/>
      <Blog/>
      <Contacts/>
      <Footer/>
    </>
  )
}

export default App
