import React from "react";
import { ChildNodes } from "./childNode2";

export const ChildNode = ({ content }) => {
  //listData
  return (
    <div>
      <ul>
        {content.map((elem) => {
          return <ChildNodes key={elem.name} content={elem} />;
        })}
      </ul>
    </div>
  );
};