import { db } from '../service/firebase';
import { collection, setDoc, doc, onSnapshot, deleteDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import '../App.css';

export function EditCurses() {
    const [curses, setCurses] = useState([]);

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

    useEffect(() => {
        onSnapshot(collection(db, 'curses'), (snapshot) => {
            setCurses(snapshot.docs.map(doc => ({
                id: doc.id,
                item: doc.data()
            })))
        })
    }, []);

    async function writeCurse({ namei, typei, startDatei, schedulei, intensityi, pricei, discountsi, modalityi, topicsi, urli }) {
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

    async function deleteCurse(id) {
        try {
            const res = await deleteDoc(doc(db, "curses", id));
            console.log(res);
            alert("Curso eliminado")
        } catch (error) {
            console.log(error);
        }
    }

    const handleSubmit = e => {
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
        <>
            <div>
                <div className='item-container'>
                    <div className='row'>
                        <h3>Editar cursos</h3>
                        {curses.map(curse => {
                            return (
                                <div className='card' key={curse.id}>
                                    <h4 id="name">{curse.item.name}</h4>
                                    <p className='text' id="type">{curse.item.type}</p>
                                    <p className='text' id="modality">{curse.item.modality}</p>
                                    <p className='text' id="start_date">{curse.item.start_date}</p>
                                    <div className='buttonsdiv'>
                                        <button className='button' onClick={() => deleteCurse(curse.id)}>Eliminar</button>
                                        <button className='button' disabled>Editar</button>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}