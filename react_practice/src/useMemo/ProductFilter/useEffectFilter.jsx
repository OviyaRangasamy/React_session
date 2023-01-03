import { useEffect } from "react"
import { useState } from "react"

export const UseEffectProductFilter = ()=>{
    const [search,setSearch] = useState("")
    const [product,setProduct] = useState([])
    const [filterProduct,setFilterProduct] = useState([])

    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then ((data)=>data.json())
        .then((data)=>
    {    setProduct(data) 
        setFilterProduct(data)})

    },[])
// console.log("product Re- render")

const isMatchingCharacter = (str, char) => {
    console.log("char",char);
    if (!str) return false;
    str = str.toLowerCase();
    char = char.toLowerCase();
    console.log("check",str.match(char));
    return str.match(char);
  };

useEffect(() => {
    const result = product.filter((item) => {
      const { title, description, category } = item;

      if (isMatchingCharacter(title, search)) {
        console.log("yes")
        return true;
      }

      if (isMatchingCharacter(description, search)) {
        console.log("yes")
        return true;
      }

      if (isMatchingCharacter(category, search)) {
        console.log("yes")
        return true;
      }

      return false;
    });
    setFilterProduct(result);
    console.log("res",result)
  }, [search,product]);



console.log("filtered products are:",filterProduct)

    return(
        <>
        <input type="text"
        value={search}
        onChange = {(e)=>setSearch(e.target.value)} />

        <h3>Product List:</h3>
        {filterProduct.map((item)=>{
            return(
            <>
            <p key={item.id}>{item.title}</p>
            <p>{item.description}</p>
            <p>{item.category}</p>

          
            </>
            
            )})}
        </>

    )
}