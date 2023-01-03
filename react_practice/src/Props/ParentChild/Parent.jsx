// import Child1 from "./child1";
// const Parent = () => {
//   return (
//     <>
//       <p>This is parent</p>
//       <Child1 name="Oviya" />
//     </>
//   );
// };
// export default Parent;

import ChildA from "./Child1"
import ChildB from "./Child2";


const Parent = ()=>{
  return(
    <>
    <div>
      <p>Parent Container</p>
      <ChildA name = "Oviya"> </ChildA>
      <ChildB name = "Visalatchi"></ChildB>
    </div>
    </>
  )
}

export default Parent;