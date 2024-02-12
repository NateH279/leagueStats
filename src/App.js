import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Welcome from "./components/Welcome"
import League from "./features/League";
import './styles/App.css'


function FadeInSection(props) {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  }, []);
  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Welcome />} />
        <Route path="leagues">
          <Route index element={<League />} />
        </Route>
      </Route>
    </Routes>
    
  );
}

export default App
