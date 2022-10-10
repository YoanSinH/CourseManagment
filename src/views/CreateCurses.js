import { db } from '../service/firebase';
import { getDatabase, ref, set } from 'firebase/database'
import { collection, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import '../App.css';

export function CreateCurses() {
    const [name, setName] = useState();
    const [tipo, setTipo] = useState();
    
    /*function writeCurse(name,tipo){
        const db = getDatabase();
        set(ref(db, 'curses' + ))
    }*/
    return (
        <div>
            <center>
                <input placeholder='Curse name' value={name} onChange={(e) => setName(e.target.value)}></input>
                <input placeholder='Curse tipo' value={tipo} onChange={(e) => setTipo(e.target.value)}></input>
                <button onClick={null}>enviar</button>
            </center>
        </div>
    )
}