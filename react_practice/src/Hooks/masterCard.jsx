import { useEffect } from "react";
import { useState } from "react";

const MasterCard = () => {
    const [list, setList] = useState([])
    const [item, setitem] = useState({})

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products`)
            .then((data) => (data.json()))
            .then((data) => setList(data))

    }, [])

    const display = (data) => {
        setitem(data)
        // const getItem = ()=>{
        //     return(list.filter((item)=>item.id === id))
        // }
        // return list;
        // getItem;

    }
    console.log(list)
    return (
        // <>
        // <div>
        //     {list.map((item) => {
        //         return (
        //             <>
        //                 <div style={
        //                     {
        //                         display: "flex",
        //                         justifyContent:"space-between"
        //                     }
        //                 }>
        //                     <div style={{
        //                         // width: "25%",
        //                         display: "flex",
        //                         justifyContent:"space-between"

        //                     }}>
        //                         <div onClick={() => { display(item) }}>{item.title}</div>
        //                     <div>
        //                         <div style={{
        //                             width: "75%",
        //                         }} >
        //                             <p>{item.description}</p>
        //                         </div>
        //                         </div>

        //                     </div>
        //                 </div>
        //             </>

        //         )
        //     })}
        //     <p>Container</p>
        //     </div>
        // </>
    
        <>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
  
          <div style={{ width: "50%" }}>
  
            <h1>TITLES</h1>
  
  
  
            {list.map((element) => {
  
              return (
  
                <p
  
                  onClick={() => display(element)}
  
                  style={{ backgroundColor: "#D3D3D3", padding: "30px" }}>
  
                  {element.title}
  
                </p>
  
              );
  
            })}
  
          </div>
  
  
  
          <div style={{ width: "50%", padding: "50px" }}>
  
            <h2>{item.category}</h2>
  
            {/* <p><img src={item.image} style={{height:"50px",width:"100px",objectFit:"contain"}}></img>Product Image</p> */}
  
            <p>{item.price}</p>
  
            <p>{item.description}</p>
  
          </div>
  
        </div>
  
      </>
        )
}

export default MasterCard;