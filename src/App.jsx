import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
{/*import AboutMe from "./pages/HomeComponents/AboutMe";
import Skills from "./pages/HomeComponents/Skills";
import Projects from "./pages/HomeComponents/Projects";
import Coursework from "./pages/HomeComponents/Coursework";*/}

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />} />
                    {/*<Route path="/about" element={<AboutMe />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/coursework" element={<Coursework />} />*/}
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default App