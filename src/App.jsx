import { BrowserRouter } from "react-router-dom"

import { About, HowPage, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas} from './components'


const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>

        {/* <About /> */}

        <div className="relative z-0">
        <Works />
        <Experience />
        <Contact />
        <StarsCanvas />
        </div>
        
        {/* <HowPage /> */}
        
        {/* <Tech /> */}
        
        {/* <Feedbacks /> */}

   </div> 
    </BrowserRouter>
   
  )
}

export default App
