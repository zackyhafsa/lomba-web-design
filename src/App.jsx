// src/App.jsx

import "./style.css";
import DetailMenu from "./DetailMenu";
import Navbar from "./Navbar";
import Login from "./Login";
import Register from "./Register";

function App() {
  return (
    <div className="min-h-screen bg-cover bg-no-repeat">
      <Navbar />
      <div className="mx-auto flex flex-col md:flex-row items-center py-12 px-10 space-x-8">
        <DetailMenu />
      </div>
      <div className="mx-auto bg-[url('./src/assets/bg.svg')] bg-no-repeat bg-cover bg-center py-12 px-10 space-x-8">
        <Login />
      </div>
      <div className="mx-auto bg-[url('./src/assets/bg.svg')] bg-no-repeat bg-cover bg-center py-12 px-10 space-x-8">
        <Register />
      </div>
    </div>
  );
}

export default App;
