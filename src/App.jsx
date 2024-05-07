import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import { NavBar } from "./components/NavBar";
import { Home } from "./components/Home";

function App() {
  return (
    <main className="container">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route />
        </Routes>
      </BrowserRouter>
      <section className="mainContent">
        <Home/>
      </section>
    </main>
  );
}

export default App;
