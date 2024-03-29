import { Link } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
import "./register.css"

export default function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const res = await axios.post("/auth/register", {
                username,
                email,
                password
            });
            res.data && window.location.replace("/login");
        } catch (err) {
            setError(true);
        }
    }
    return (
        <div className="register">
            <span className="registerTitle">Register</span>
            <form className="registerForm" onSubmit={handleSubmit}>
                <label>Username</label>
                <input
                    className="registerInput"
                    type="text"
                    placeholder="Enter your username"
                    onChange={event => setUsername(event.target.value)}
                />
                <label>Email</label>
                <input
                    className="registerInput"
                    type="text"
                    placeholder="Enter your email"
                    onChange={event => setEmail(event.target.value)}
                />
                <label>Password</label>
                <input
                    className="registerInput"
                    type="password"
                    placeholder="Enter your password"
                    onChange={event => setPassword(event.target.value)}
                />
                <button className="registerButton" type="submit">Register</button>
            </form>
            <button className="registerLoginButton">
                <Link className="link" to="/login">Login</Link>
            </button>
            {error && <span>Something went wrong!</span>}
        </div>
    )
}