

const User = ({user}) => {

    const {name, username, email, address, id} = user;
    return (
        <>
        <div>
            <h1>Name: {name}</h1>
            <p>Address: {address}</p>
            <p>Email: {email}</p>
            <p>Username: {username}</p>
        </div>
        </>
    );
};
export default User;