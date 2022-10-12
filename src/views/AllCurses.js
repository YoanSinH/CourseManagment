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
    console.log("open",open);
    console.log("id",id);
    console.log("sdata",sdata.item.id);
    try {
      setSId(id)
      if (sdata.item.id == id) {
        setData(sdata.item)
        console.log("data",data);
      }
      setIsOpen(open)
    } catch (error) {
      console.error(error)
    }
  }

  if (curses == "") return <Loading/>

  return (
    <div>
      {isOpen ? (<Modal setIsOpen={setIsOpen} data={data} id={sid}/>) : null}
      <div className="App-header">
        <div className="App-header-inner">
          <h1 className="App-title">Cursos Lab Financiero</h1>
        </div>
      </div>
      <div className='item-container'>
        <div className='row'>
          {curses.map(curse => {
            console.log("curse",curse.item.id);
            return (
              <div className='col' key={curse.item.id}>
                <div className='card'>
                  <h4 id="name">{curse.item.name}</h4>
                  <p className='text' id="type">{curse.item.type}</p>
                  <p className='text' id="modality">{curse.item.modality}</p>
                  <p className='text' id="start_date">{curse.item.start_date}</p>
                  <div className='buttonsdiv'>
                    <button className='button' onClick={() => openModal(true,curse.item.id,curse)}>Ver más</button>
                    <a href="https://google.com" target={'_blank'} rel="noopener noreferrer"><button className='button'>Inscribirse</button></a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

    </div>
  );
}