"use client"

import { generateRandomNum } from "@/lib/utils";
import React, { useEffect } from "react";
import AnimatedNumbers from "react-animated-numbers";


export default function Counter() {
  const [num, setNum] = React.useState(43123);

  useEffect(() => {
    setNum(generateRandomNum())
  }, [])
  
  return (
    <div className=" inline font-semibold">
      <AnimatedNumbers
        includeComma
        
        
        transitions={(index) => ({
          type: "spring",
          duration: index + 0.5,
        })}
        animateToNumber={num}
        fontStyle={{
          fontSize: 50,
          color: "green",
          fontWeight: 700,
        }}
        
      />
      
      {/* <div>
        <button onClick={() => setNum((state) => state + 31234)}>+</button>
        <button onClick={() => setNum((state) => state - 31234)}>-</button>
      </div> */}
    </div>
  );
}



