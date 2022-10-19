import { db } from '../service/firebase';
import { collection, setDoc, doc } from 'firebase/firestore';
import { useState } from 'react';
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
    const [topicsi, setTopics] = useState();
    const [urli, setUrl] = useState();

    const docRef = doc(collection(db, "curses"))

    async function writeCurse({namei,typei,startDatei,schedulei,intensityi,pricei,discountsi,modalityi,topicsi,urli}) {
        try {
            let data = {
                name: namei,
                type: typei,
                start_date: startDatei,
                schedule: schedulei,
                intensity: intensityi,
                price: pricei,
                discounts: discountsi,
                modality: modalityi,
                topics: topicsi,
                url_inscription: urli,
            }
            await setDoc(docRef, data);
            alert("Curso registrado") 
        } catch (error) {
            alert("Error al crear el curso")
            console.log(error)
        }
    }

    const handleSubmit = e =>{
        e.preventDefault();
        setName("");
        setType("");
        setStartDate("");
        setSchedule("");
        setIntensity("");
        setPrice("");
        setDiscounts("");
        setModality("");
        setTopics("");
        setUrl("");
    }
    
    return (
        <div>
            <div className='item-container'>
            <div className='formcard'>
                <form onSubmit={handleSubmit}>
                <h3>Registrar Curso</h3>

                <h5 className='formlabel'>Nombre</h5>
                <input className='input' placeholder='Nombre del curso' value={namei} onChange={(e) => setName(e.target.value)} required></input>
                
                <h5 className='formlabel'>Tipo</h5>
                <select className='input' onChange={(e) => setType(e.target.value)}>
                    <option value={null}>Seleccionar --</option>
                    <option value="Curso">Curso</option>
                    <option value="Diplomatura">Diplomatura</option>
                </select>

                <h5 className='formlabel'>Fecha de inicio</h5>
                <input className='input' type="date" placeholder='Fecha de inicio' value={startDatei} onChange={(e) => setStartDate(e.target.value)} required></input>
                
                <h5 className='formlabel'>Horario</h5>
                <input className='input' placeholder='L-M/6-4pm' value={schedulei} onChange={(e) => setSchedule(e.target.value)} required></input>{/* divide component*/}
                
                <h5 className='formlabel'>Intensidad</h5>
                <input className='input' placeholder='50' value={intensityi} onChange={(e) => setIntensity(e.target.value)} required></input><label>horas</label>

                <h5 className='formlabel'>Inversion</h5>
                <input className='input' placeholder='50000' value={pricei} onChange={(e) => setPrice(e.target.value)} required></input>
                
                <h5 className='formlabel'>Descuentos</h5>
                <textarea className='input' placeholder='Descuentos' value={discountsi} onChange={(e) => setDiscounts(e.target.value)} required></textarea >
                
                <h5 className='formlabel'>Modalidad</h5>
                <select className='input' onChange={(e) => setModality(e.target.value)} required>
                    <option value={null}>Seleccionar --</option>
                    <option value="Virtual">Virtual</option>
                    <option value="Presencial">Presencial</option>
                </select>

                <h5 className='formlabel'>Temas</h5>
                <textarea className='input' placeholder='Tema1,tema2' value={topicsi} onChange={(e) => setTopics(e.target.value)} required></textarea>

                <h5 className='formlabel'>Link inscripción</h5>
                <input className='input' placeholder='Link' value={urli} onChange={(e) => setUrl(e.target.value)} required></input>
                <br/>
                <button className='button' onClick={() => writeCurse({namei,typei,urli,startDatei,schedulei,intensityi,pricei,discountsi,modalityi,topicsi,urli})}>Enviar</button>
                </form>
            </div>
            </div>
        </div>
    )
}