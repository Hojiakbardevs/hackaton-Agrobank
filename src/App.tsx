import { Hero } from "./components/hero/Hero"
import { ThemeProvider } from "./components/theme-provider"
import Navbar from "./components/layout/Navbar"
import { Problem } from "./components/problems/Problems"
import { Solution } from "./components/solution/Solution"

function App() {


  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Navbar />
        <Hero />
        <Problem />
        <Solution />
      </ThemeProvider>
    </>
  )
}

export default App
