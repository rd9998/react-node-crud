import React , {useState} from "react";
import postService from "../services/postService";


function CreateComponent(){
    const [title,setTitle] = useState('');
    const [date,setDate] = useState('');
    const [image,setImage] = useState('');
    const [message,setMessage] = useState('');
    
    const handleSubmit = async(event)=>{
        event.preventDefault();
        try {
            const formData=new FormData();
            formData.append('title',title);
            formData.append('date',date);
            formData.append('image',image);

            const response = await postService.create(formData);
            if(response.data.success == true){
                setMessage("Post Created Successfully");
            }else{
                setMessage("Post Failed");
            }
            setTimeout(function(){
                setMessage("");
            },2000);
            event.target.reset();
        } catch (e) {
            message.channel.stopTyping();
            console.log(e);
        }
    };
    return (
        <div className="App">
            <h2>Create Post</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" id="titleInput" placeholder="Enter Post title" onChange={event => setTitle(event.target.value)} required/> <br/><br/>
                <input type="date" name="date" id="titleInput" placeholder="Enter Post date" onChange={event => setDate(event.target.value)} required/> <br/><br/>
                <input type="file" name="image" id="titleInput" placeholder="Enter Post date" onChange={event => setImage(event.target.files[0])} required/> 
                <br/><br/>
                <button>Submit</button>
                <p>{message}</p>
            </form>
        </div>
    )
}

export default CreateComponent;
