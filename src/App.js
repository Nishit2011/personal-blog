import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import Home from "./components/Home";
import WebDev from "./components/WebDev";
import Cloud from "./components/Cloud";
import Docker from "./components/Docker";
import K8S from "./components/K8S";
import Arch from "./components/Arch";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/webdev" element={<WebDev />}></Route>
          <Route path="/cloud" element={<Cloud />}></Route>
          <Route path="/docker" element={<Docker />}></Route>
          <Route path="/k8s" element={<K8S />}></Route>
          <Route path="/arch" element={<Arch />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
