import { Link } from "react-router-dom";
import "./post.css"


const Post = ({post}) => {

    const {id, title, body} = post;
    return (
        <div className="post-style">
            <h4>Post of id: {id}</h4>
            <p>{title}</p>
            <Link to={`/post/${id}`}> Post Details</Link>
        </div>
    );
};

export default Post;