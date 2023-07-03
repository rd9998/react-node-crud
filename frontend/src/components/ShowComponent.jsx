// import React , {useState} from "react";
import { useState, useEffect } from "react";
import postService from "../services/postService";


function ShowComponent() {
    const [posts, setPosts] = useState({});
    const fetchPosts = async () => {
        setPosts(await postService.getPosts());
    }
   
    useEffect(() => {
        fetchPosts();
    }, []);
    const handleDelete= async (id,event) => {
        var response = await postService.deletePost(id);
        if(response.data.success == true){
            alert(response.data.msg);
            document.getElementById(id).parentElement.parentElement.remove();
        }else{
            alert(response.data.msg);
        }
    };
    return (
        <div className="App">
            <h1>Posts</h1>
            {posts.data != undefined && posts.data.data.length > 0 && (
                <table style={{ width: '100%' }} border='1'>
                    <thead>
                        <th>Title</th>
                        <th>Date</th>
                        <th>Image</th>
                        <th>Action</th>
                    </thead>
                    <tbody>
                        {
                            posts.data.data.map(
                                post => (
                                    <tr>
                                        <td>{post.title}</td>
                                        <td>{post.date}</td>
                                        <td><img src={"http://localhost:8000/api/postImages/" + post.image} style={{ width: '100px' }} /></td>
                                        <td>
                                            <button id={post._id} onClick={(e) =>handleDelete(post._id,e)} >Delete</button>
                                        </td>
                                </tr>
                    )
                    )
                    }
                </tbody>
            </table>
    )
}
        </div >
    );
}

export default ShowComponent;