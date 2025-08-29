import { BrowserRouter } from "react-router-dom"

import { Contact, Experience, Hero, Navbar, Works, StarsCanvas} from './components'


const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>

        <div className="relative z-0 space-y-20">
        <Works />
        <Experience />
        <Contact />
        <StarsCanvas />
        </div>

   </div> 
    </BrowserRouter>
   
  )
}

export default App
