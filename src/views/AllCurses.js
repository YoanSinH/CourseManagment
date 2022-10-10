import { db } from '../service/firebase';
import { collection, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import '../App.css';

export function AllCurses() {
  const [curses, setCurses] = useState([]);

  useEffect(() => {
    onSnapshot(collection(db, 'curses'), (snapshot) => {
      setCurses(snapshot.docs.map(doc => ({
        id: doc.id,
        item: doc.data()
      })))
    })
  }, []);

  return (
    <div>
      <div className="App-header">
        <div className="App-header-inner">
          <h1 className="App-title">Cursos Lab Financiero</h1>
        </div>
      </div>
      <div className='item-container'>
        <div className='row'>
        {curses.map(curse => {
          return (
            <div className='col' key={curse.item.id}>
            <div className='card'>
              <h4 id="name">{curse.item.name}</h4>
              <p className='text' id="type">{curse.item.type}</p>
              <p className='text' id="modality">{curse.item.modality}</p>
              <p className='text' id="start_date">{curse.item.start_date}</p>
              <div className='buttonsdiv'>
              <button className='button'>Ver más</button>
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