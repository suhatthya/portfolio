import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Transcript from "./pages/Transcript";
import "./App.css";

function App() {
  const [page, setPage] = useState("Home");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(t);
  }, []);

  const navigate = (p) => {
    setLoading(true);
    setTimeout(() => {
      setPage(p);
      setLoading(false);
      window.scrollTo(0, 0);
    }, 400);
  };

  // ตรวจสอบว่าเป็นแบบนี้ไหม
  const pages = { Home, About, Works: Projects, Skills, Contact, Transcript };
  const PageComponent = pages[page];

  return (
    <>
      {loading && (
        <div className="loader">
          <div className="spinner" />
        </div>
      )}
      <Navbar current={page} navigate={navigate} />
      <main>
        <PageComponent navigate={navigate} />
      </main>
    </>
  );
}

export default App;