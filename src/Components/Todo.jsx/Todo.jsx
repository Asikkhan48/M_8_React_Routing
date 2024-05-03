import { Link } from "react-router-dom";
import  "./todo.css"
const Todo = ({todo}) => {

   const {id, title, completed} = todo;
    return (
        <div className="todo-style">
            <h3>This is: {title}</h3>
            <p>Function of id: {completed}</p>
            <Link to={`/todo/${id}`}>Details</Link>
        </div>
    );
};

export default Todo;