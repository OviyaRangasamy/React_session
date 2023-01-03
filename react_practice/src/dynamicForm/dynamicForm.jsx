import { useState } from "react";
import { v4 } from "uuid";



const DynamicForm = () => {
    const [inputType, setInputType] = useState("")
    const [placeHolder, setPlaceHolder] = useState("")
    const [element, setElement] = useState([])
    const [display, setDisplay] = useState(false)

    const handleType = (type) => {
        return (setInputType(type)
        )
    }

    console.log(placeHolder)

    const createElement = () => {
        setElement((prevState) => {
            return ([...prevState, { id: v4(), type: inputType, placeholder: placeHolder, value: "" }]
            )
        }
        )
        setInputType("")
        setPlaceHolder("")
    }

    const setInput = (id, val) => {
        console.log(id, val)
        element.map((item) => {
            if (item.id === id) {
                item.value = val
            }
            console.log("val", item.value)
        })
    }






    console.log(element)

    return (
        <>

            <div>
                <label htmlFor="Type"></label>
                <select name="Type" id="Type" onClick={(e) => handleType(e.target.value)}>
                    <option>Select type</option>
                    <option value="text">Text</option>
                    <option value="password">PassWord</option>
                    <option value="email">e-mail</option>
                    <option value="Date">Date</option>

                </select>

                <input
                    type="text"
                    value={placeHolder}
                    onChange={(e) => { setPlaceHolder(e.target.value) }}
                />

                <button onClick={createElement}>
                    Create Element
                </button>
            </div>

            <div>
                {element.map((item) => {
                    return (<>
                        {console.log(item)}
                        <div>
                            <input type={item.type}
                                placeholder={item.placeholder}
                                onChange={(e) => setInput(item.id, e.target.value)}
                            />
                        </div>
                    </>)
                })
                }
            </div>
            <button onClick={() => setDisplay(!display)}>Submit</button>
            {console.log("true", display)}
            {display && (<>
                {element.map((item) => {
                    { console.log("vak", item.value) }
                    return (
                        <li>{item.value}</li>
                    )
                })}
            </>)}
        </>
    )

}

export default DynamicForm;

