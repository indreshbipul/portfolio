import Navbar from "./components/Navbar"
import Contact from "./sections/Contact"
import Education from "./sections/Education"
import Home from "./sections/Home"
import Project from "./sections/Project"
import Skill from "./sections/Skill"

function App() {
  return (
    <div className="bg-gray-50">
        <Navbar />
        <Home />
        <Project />
        <Education />
        <Skill />
        <Contact />
    </div>
  )
}

export default App