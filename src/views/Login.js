import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/AuthContext";

export function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const [user, setUser] = useState({
        email:"",
        password:""
    });
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleChange = ({ target: { name, value } }) => {
        setUser({ ...user, [name]: value })
    }

    const handleSubmit = e => {
        e.preventDefault()
    }

    const handleLogin = async() => {
        try {
            await login(user.email,user.password)
            navigate("/dashboard");
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
        <div>
            <div className='item-container'>
            <div className='formcard'>
                <h2>Iniciar Sessión</h2>
        <form onSubmit={handleSubmit}>
            <div>
            <h4 className='formlabel'>Correo</h4>
            <input type="email" placeholder='ejemplo@correo.com' name="email" id="email" value={email} onChange={handleChange} required></input>
            <h4 className='formlabel'>Contraseña</h4>
            <input type="password" placeholder='***********' name="password" id="password" value={password} onChange={handleChange} required></input>
            <br/>
            <button className="button" onClick={handleLogin}>Entrar</button>
            </div>
        </form>
        </div>
        </div>
        </div>
        </>
    )
}