import image1 from "./assets/imagesrc.jpg";
import "./App.css"
import ReactPlayer from "react-player";
// import video1 from "./assets/video-player.mp4"
function App() {
  return (
    <div className="App">
      <div className="contenu">
        <h1 className="titlered">Emna Zouaghi</h1>
        <img classeName="image" height={500} width={600} src={image1} alt="imagesrc" />
        <img classeName="image" height={500} width={600} src="/imagepublic.png" alt="imagepublic" />
      </div>
      <ReactPlayer width='320px' height='240px' controls  url="https://youtu.be/7sDY4m8KNLc" />
    </div>
  );
}

export default App;
