import { Hero } from "./components/hero/Hero"
import { ThemeProvider } from "./components/theme-provider"
import Navbar from "./components/layout/Navbar"

function App() {


  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Navbar />
        <Hero />
      </ThemeProvider>
    </>
  )
}

export default App
