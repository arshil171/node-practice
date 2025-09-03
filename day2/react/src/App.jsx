import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const App = () => {
  const [data, setData] = useState([]);

 async function getData() {
    let data1 = await axios.get("http://localhost:8080")
    console.log(data1)
  }
  useEffect(()=>{
      getData()
  },[])

  return <div>App</div>;
};

export default App;
