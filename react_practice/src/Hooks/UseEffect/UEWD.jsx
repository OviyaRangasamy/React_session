import { useEffect } from "react";
import { useState } from "react";
import InputBox from "../To-Do/addTodo";


const UEWD = () => {
    const [search, setSearch] = useState("")

    useEffect(() => {
        console.log("Mounting")
    }, [])
    useEffect(() => {
        console.log("updating")
    }, [search])

    return (
        <>Container
            <div>
                <InputBox
                    value={search}
                    onChange={(name, value) => { setSearch(value) }}

                />
                <p>{search}</p>
            </div>
        </>
    )
}

export default UEWD;