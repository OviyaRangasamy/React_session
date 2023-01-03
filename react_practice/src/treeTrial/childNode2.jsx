import React, { useState } from "react";
import { ChildNode } from "./childNode1";

export const ChildNodes = ({ content }) => {
  const [childState, setChildState] = useState(false);
  return (
    <div>
      <p onClick={(e) => setChildState(!childState)}>{content.name}</p>
      {childState && content.children && (
        <ChildNode content={content.children}/>
        
      )}
    </div>
  );
};