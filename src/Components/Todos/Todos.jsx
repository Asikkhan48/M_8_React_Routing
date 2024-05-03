import { useLoaderData } from "react-router-dom";
import Todo from "../Todo.jsx/Todo";
import "./todos.css"


const Todos = () => {

    const todos = useLoaderData();
    console.log(todos);

    return (
        <div>
            <h1>Worksheet: {todos.length} </h1>

            <div className="todos-style">
                {
                    todos.map(todo => <Todo key={todo.id} todo={todo}></Todo>)
                }
            </div>
        </div>
    );
};

export default Todos;