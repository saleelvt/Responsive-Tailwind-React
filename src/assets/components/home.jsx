// import React from 'react'

import { useEffect, useState } from "react";
import './home.css'

function Home() {

  let carData=[
    "https://www.bmw.in/content/dam/bmw/common/all-models/m-series/m2-coupe/2022/Navigation/bmw-m-series-m2-coupe-lci-modelfinder.png",
    "https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/model-navigation/bmw-m340i-xdrive-sedan-flyout-new.png",
    "https://www.bmw-me.com/content/dam/bmw/common/all-models/m-series/m8-coupe/2022/navigation/bmw-8series-coupe-modellfinder.png",
    "https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/model-navigation/bmw-m3-cs-flyout.png",
  ]

  let  [count,setCount]=useState(0)


  useEffect(()=>{

    let timer=setInterval(()=>{
      handleCount()
    },2000)

   
      return  ()=> clearInterval(timer)
    

  },[count])

  let handleCount=()=>{
    if(count>carData.length-1){
      count=0
    }
    setCount(count++)
  }

  let handleDown=()=>{
    if(count==0){
      count=carData.length-1
    }
    setCount(count--)
    }



  return (
    <section className="grid gap-8 bg-red-500">
      <div>
        
        <div className=" flex justify-center">
          <button onClick={handleCount} className="">Next</button>
          <h1>Home Page</h1>

          <button onClick={handleDown} className="m-8">Previous</button>
        </div>

        <img
          src={`${carData[count]}`}
          alt=""
          className="image"
        />
      </div>
    </section>
  );
}

export default Home;
