import { Outlet } from "react-router-dom";
import Header from "./Header/Header"

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <h1>This is home</h1>
        </div>
    );

};

export default Home;