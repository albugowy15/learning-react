import React from "react";
import HelloWorld from "../Components/HelloWorld";

function Home() {
  return (
    <div>
      <h1 className='font-bold text-2xl'>This is a home page</h1>
      <HelloWorld name="bughowi" />
    </div>
  );
}

export default Home;