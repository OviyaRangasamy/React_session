// Example 2
import { useState } from "react";

import Day11CleanupFunc from "./cleanUpfunction";



const Day11App = () => {
  const [toggleView, setToggleView] = useState(false);

  return (
    <>
      <button onClick={() => setToggleView(() => !toggleView)}>
        {toggleView ? "Hide" : "Show"} Component
      </button>
      {toggleView && <Day11CleanupFunc/>}
    </>
  )
}

export default Day11App;