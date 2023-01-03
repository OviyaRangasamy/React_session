import Button from "./button";

const EditDelete = ({ item, delete_a, Update }) => {
    return (
    <div>
        <Button
        tagname="Delete"
        functionality={()=>{delete_a(item.id)}}
        ></Button>
        <Button
        tagname="Edit"
        functionality={()=>{Update(item)}}
        ></Button>
    </div>
    );
};

export default EditDelete;