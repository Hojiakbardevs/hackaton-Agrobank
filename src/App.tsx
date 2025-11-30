import { Hero } from "./components/hero/Hero";
import { ThemeProvider } from "./components/theme-provider";
import Navbar from "./components/layout/Navbar";
import { Problem } from "./components/problems/Problems";
import { Solution } from "./components/solution/Solution";
import { Team } from "./components/team/Team";
import { Contact } from "./components/contact/Contact";
import { Footer } from "./components/fotter";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Roadmap from "./components/roadmap/Roadmap";
import HowToSolutionTech from "./components/technical/howtoSolutiontech";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <div>
                  <Tabs defaultValue="problem" className="w-full">
                    <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mt-8">
                      <TabsTrigger
                        value="problem"
                        className="text-base font-medium">
                        Muammo
                      </TabsTrigger>
                      <TabsTrigger
                        value="solution"
                        className="text-base font-medium">
                        Yechim
                      </TabsTrigger>
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
                <Roadmap />
                <HowToSolutionTech />
                <Footer />
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <Contact />
                <Footer />
              </>
            }
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
