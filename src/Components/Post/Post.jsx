import { Link, useNavigate } from "react-router-dom";
import "./post.css"


const Post = ({post}) => {

    const {id, title, body} = post;
    const navigate = useNavigate();


    const handleShowDetails = () =>{
        navigate(`/post/${id}`);
    }
    return (
        <div className="post-style">
            <h4>Post of id: {id}</h4>
            <p>{title}</p>
            <Link to={`/post/${id}`}> Post Details</Link>
            <button onClick={handleShowDetails}>Click to see Details</button>
        </div>
    );
};

export default Post;