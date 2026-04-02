import "./App.css";
import Header from "../components/Header";

function App() {
  const wrapBase = "";

  return (
    <>
      <video autoPlay muted loop className="fixed">
        <source src="./images/video/main-video.mp4" type="video/mp4" />
      </video>
      <Header wrapBase={wrapBase} />
    </>
  );
}

export default App;
