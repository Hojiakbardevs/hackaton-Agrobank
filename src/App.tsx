import { Hero } from "./components/hero/Hero"
import { ThemeProvider } from "./components/theme-provider"
import Navbar from "./components/layout/Navbar"
import { Problem } from "./components/problems/Problems"
import { Solution } from "./components/solution/Solution"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs"
import { Team } from "./components/team/Team"

function App() {


  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Navbar />
        <Hero />
        <div>
          <Tabs defaultValue="problem" className="w-full">
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mt-8">
              <TabsTrigger value="problem" className="text-base font-medium">Muammo</TabsTrigger>
              <TabsTrigger value="solution" className="text-base font-medium">Yechim</TabsTrigger>
            </TabsList>
            <TabsContent value="problem" className="space-y-0">
              <Problem />
            </TabsContent>
            <TabsContent value="solution" className="space-y-0">
              <Solution />
            </TabsContent>
          </Tabs>
        </div>
        <Team />
      </ThemeProvider>
    </>
  )
}

export default App
