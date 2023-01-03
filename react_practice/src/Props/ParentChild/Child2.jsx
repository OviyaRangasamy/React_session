// import Child3 from "./child3";

// const Child2 = (props) => {
//   return (
//     <>
//           <p>This is Child2</p>
//           <Child3 name={props.name} />
//     </>
//   );
// };
// export default Child2;

import ChildC from "./Child3"
const ChildB = (props)=>{
  return(<>
  <div>
    <p>ChildB Component</p>
    {props.name}
    <ChildC name = "Dhivya"  age="24">to C</ChildC>
  </div>
  </>)
}

export default ChildB;