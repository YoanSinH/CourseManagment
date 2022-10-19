import { useEffect, useState } from 'react';
import { db } from '../service/firebase';
import { collection, onSnapshot } from 'firebase/firestore';
import { Modal } from '../components/Modal';
import { Loading } from '../components/Loading';
import '../App.css';

export function AllCurses() {
  const [curses, setCurses] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([])
  const [sid, setSId] = useState(0);

  useEffect(() => {
    onSnapshot(collection(db, 'curses'), (snapshot) => {
      setCurses(snapshot.docs.map(doc => ({
        id: doc.id,
        item: doc.data()
      })))
    })
  }, []);

  function openModal(open, id, sdata) {
    window.scrollTo(0,0)
    try {
      setSId(id)
      if (sdata.item.id === id) {
        setData(sdata.item)
      }
      setIsOpen(open)
    } catch (error) {
      console.error(error)
    }
  }

  if (curses === "") return <Loading/>

  return (
    <div>
      {isOpen ? (<Modal setIsOpen={setIsOpen} data={data} id={sid}/>) : null}
      <div className="App-header">
        <div className="App-header-inner">
          <h2 className="App-title">Cursos y Diplomados<br/>Laboratorio Financiero</h2>
          <a href='/dashboard'><button>Dashboard</button></a>
        </div>
      </div>
      <div className='item-container'>
        <div className='row'>
          {curses.map(curse => {
            return (
                <div className='card' key={curse.id}>
                  <h4 id="name">{curse.item.name}</h4>
                  <p className='text' id="type">{curse.item.type}</p>
                  <p className='text' id="modality">{curse.item.modality}</p>
                  <p className='text' id="start_date">{curse.item.start_date}</p>
                  <div className='buttonsdiv'>
                    <button className='button' onClick={() => openModal(true,curse.item.id,curse)}>Ver más</button>
                    <a href={curse.item.url_inscription} target={'_blank'} rel="noopener noreferrer"><button className='button'>Inscribirse</button></a>
                  </div>
                </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}