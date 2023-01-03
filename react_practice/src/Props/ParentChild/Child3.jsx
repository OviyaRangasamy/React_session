// const Child3 = (props) => {
//     return (
//       <>
//         <p>This is Child3 {props.name}</p>
//       </>
//     );
//   };
//   export default Child3;

const ChildC = (props)=>{
    return(
      <>
      <div>
        <p>
          Last Child: ChildC Component
        </p>
        <p>My name is {props.name}</p>
        <p>
          age {props.age}
        </p>
      </div>
      </>
    )
  }
  
  export default ChildC;