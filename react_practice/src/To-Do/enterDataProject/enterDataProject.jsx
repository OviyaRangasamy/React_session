import { useEffect } from 'react';
import { useState } from 'react';

const Project1 = () => {
    const [data, setData] = useState("")
    const [list, setList] = useState([])

    const keyDownEvent = (event,value) => {
        if (event === "Enter")
           if(value.length === 0){
            alert("Enter input")
           }else{
            setData(value)
            setList((prevData)=>[...prevData,data])
            setData("")
           }            
    }

    useEffect(()=>{
       list.map((item)=>{
        return (localStorage.setItem(item,true))
       }) 
    },[list])
    useEffect(() => {
        setList(Object.keys(localStorage));
      }, []);
    

    return (
        <>
            <input
                value={data}
                onChange={(e) => setData(e.target.value)}
                onKeyDown={(e) => { keyDownEvent(e.key,e.target.value) }}
            />
            <div>{list.length === 0?"Enter data":<></>}</div>
            <p>{list.map((item)=>{
                return (<>

                    <li>
                        {item}
                    </li>
               
                </>)
            })}</p>
        </>
    )
}

export default Project1;