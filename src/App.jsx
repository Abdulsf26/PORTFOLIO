import { Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./components/Themes";
import { AnimatePresence } from "motion/react";
import GlobalStyle from "./globalStyles";

//Components
import Main from "./components/Main";
import AboutPage from "./components/AboutPage";
import BlogPage from "./components/BlogPage";
import WorkPage from "./components/WorkPage";
import MySkillsPage from "./components/MySkillsPage";
import CertificationPage from "./components/CertificationPage";
import ContactPage from "./components/ContactPage";
import EducationPage from "./components/EducationPage";
import SoundBar from "./subComponents/SoundBar";

function App() {
  const location = useLocation();
  return (
    <>
      <GlobalStyle />

      <ThemeProvider theme={lightTheme}>
        <SoundBar />

        <AnimatePresence mode="wait">
          <Routes key={location.pathname} location={location}>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/skills" element={<MySkillsPage />} />
            <Route path="/certifications" element={<CertificationPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/education" element={<EducationPage />} />
            {/* Catch-all: send unknown routes to Main */}
            <Route path="*" element={<Main />} />
          </Routes>
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}

export default App;
