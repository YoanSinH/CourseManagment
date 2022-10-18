import React, {useState} from "react";

export function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    return (
        <>
        <form>
            <div>
            <h4>Correo</h4>
            <input placeholder='ejemplo@correo.com' value={email} onChange={(e) => setEmail(e.target.value)}></input>
            <h4>Contraseña</h4>
            <input type="password" placeholder='***********' value={password} onChange={(e) => setPassword(e.target.value)}></input>
            <button >Entrar</button>
            </div>
        </form>
        </>
    )
}