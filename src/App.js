import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/LandingPage";
import League from "./components/League";
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
    <div>
      <NavBar />
      <FadeInSection>
        <Home />
      </FadeInSection>
      <FadeInSection>
        <League />
      </FadeInSection>

      
    </div>
    
  );
}

export default App
