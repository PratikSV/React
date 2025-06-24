function UserGreating(props) {
    if (props.isLoggedIn) {
        return <h1 className="login-greating">Welcome {props.name}</h1>
    }
    else {
        return <h1 className="guest-greating">Welcome Guest</h1>
    }

}
export default UserGreating;