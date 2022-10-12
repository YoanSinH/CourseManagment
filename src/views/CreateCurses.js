import { db } from '../service/firebase';
import { collection, setDoc, doc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import '../App.css';

export function CreateCurses() {
    const [namei, setName] = useState();
    const [typei, setType] = useState();
    const [startDatei, setStartDate] = useState();
    const [schedulei, setSchedule] = useState();
    const [intensityi, setIntensity] = useState();
    const [pricei, setPrice] = useState();
    const [discountsi, setDiscounts] = useState();
    const [modalityi, setModality] = useState();
    const [urli, setUrl] = useState();

    const navigate = useNavigate();

    const docRef = doc(collection(db, "curses"))

    async function writeCurse(na, ty, ur) {
        let data = {
            name: na,
            type: ty,
            url_inscription: ur,
        }
        await setDoc(docRef, data);
        back();
    }

    function back(){
        try {
            navigate("/curses")
          } catch (error) {
            console.error(error);
          }
    }
    
    return (
        <div>
            <div className='item-container'>
            <div className='card'>
                <h3>Registrar Curso</h3>
                <input placeholder='Nombre' value={namei} onChange={(e) => setName(e.target.value)}></input>
                <input placeholder='Tipo' value={typei} onChange={(e) => setType(e.target.value)}></input>
                <input type="date" placeholder='Fecha de inicio' value={startDatei} onChange={(e) => setStartDate(e.target.value)}></input>
                <input placeholder='Horario' value={schedulei} onChange={(e) => setSchedule(e.target.value)}></input>{/* divide component*/}
                <input placeholder='Intensidad' value={intensityi} onChange={(e) => setIntensity(e.target.value)}></input>
                <input placeholder='Inversion' value={pricei} onChange={(e) => setPrice(e.target.value)}></input>
                <input placeholder='Descuentos' value={discountsi} onChange={(e) => setDiscounts(e.target.value)}></input>
                <input placeholder='Modalidad' value={modalityi} onChange={(e) => setModality(e.target.value)}></input>
                <input placeholder='Link' value={urli} onChange={(e) => setUrl(e.target.value)}></input>

                <button className='button' onClick={() => writeCurse(namei,typei,urli)}>Enviar</button>
                <button className='button' onClick={() => back()}>Volver</button>
            </div>
            </div>
        </div>
    )
}