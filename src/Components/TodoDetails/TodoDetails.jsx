import { useLoaderData } from "react-router-dom";

const TodoDetails = () => {

    const todo =useLoaderData();
    const {id, title, completed} = todo;

    return (
        <div>
            <h1>Detais: { title}</h1>
            <p>Hi Hi: {id}</p>
        </div>
    );
};

export default TodoDetails;