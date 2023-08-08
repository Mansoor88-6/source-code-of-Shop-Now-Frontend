import { Homepage } from "./pages/homepage/homepage"
import { MenSection } from "./pages/menSection/menSection"
import { WomenSection } from "./pages/womenSection/womenSection"
import { KidsSection } from "./pages/kidsSection/kidsSection"
import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {
  
  

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/men" element={<MenSection/>}/>
        <Route path="/women" element={<WomenSection/>}/>
        <Route path="/kids" element={<KidsSection/>}/>

        
      </Routes>
    
    </BrowserRouter>

    </>
  )
}

export default App
