import FunctionalComp from "./funcProp";
import ClassComp from "./prop";

const container = {
    backgroundColor: "thistle",
    textAlign: "center",

}

function ComponentRender() {
    return (
        <>
            <div style={container}>
                <h3 >Header</h3>
                <ClassComp name="Oviya"></ClassComp>
                <ClassComp name="Dhivya"></ClassComp>
                <ClassComp></ClassComp>
                <FunctionalComp name="Nivetha"></FunctionalComp>

            </div>
        </>
    )
}

export default ComponentRender;