import {
  Header,
  Blog,
  Features,
  Possibility,
  WhatGPT3,
  Footer,
} from "./containers";
import { Brand, Cta, Navbar } from "./components";
import './App.scss';

const App = () => {
  return (
    <div className="App">
      <div className="App__gradient-bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
