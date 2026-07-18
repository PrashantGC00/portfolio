import Sidebar from './components/Sidebar.jsx'
import Background3D from './components/Background3D.jsx'
import About from './components/About.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Footer from './components/Footer.jsx'
import Loader from './components/Loader.jsx'
import { SceneReadyProvider } from './context/screen-ready.jsx'

export default function App() {
  return (
    <SceneReadyProvider>
      <Loader />
      <div className="lg:flex relative bg-ink z-20 transition-colors duration-300 ease-in-out">
        <Background3D />
        <div className="relative lg:flex lg:w-full">
          <Sidebar />
          <main className="lg:ml-[300px] z-20 px-8 lg:pr-16 max-w-3xl">
            <About />
            <Experience />
            <Projects />
            <Footer />
          </main>
        </div>
      </div>
    </SceneReadyProvider>
  )
}
