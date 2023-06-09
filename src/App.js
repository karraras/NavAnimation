import React from "react";
import SideBar from "./components/SideBar";
const App = () => {
  return (
    <section className="  flex ">
      <SideBar />
      <main className=" bg-gray-300  h-screen flex-1"></main>
    </section>
  );
};

export default App;
