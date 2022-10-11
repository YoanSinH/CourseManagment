import React, { useState } from "react";
import "../styles/Modal.css";

export function Modal({ setIsOpen, data}) {

    if(!data) {
        return (
            <><h4>loading</h4></>
    )}
    console.log("modal",data);

    return(
        <>
        <div className="darkBG" onClick={() => setIsOpen(false)}/>
        <div className="centered">
            <div className="modal">
                <button className="closeBtn" onClick={() => setIsOpen(false)}>X</button>
                <div className="modalHeader">
                    <h5 className="heading">{data.type}: {data.name}</h5>
                </div>
                <div className="modalContent">
                    
                    <div className="col">
                        <div className="card">
                            <p><span>Modalidad </span><br/>{data.modality}</p>
                        </div>
                        <div className="card">
                            <p><span>Horario </span><br/>{data.schedule}</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <p><span>Horario </span><br/>{data.schedule}</p>
                        </div>
                        <div className="card">
                            <p><span>Precio </span><br/>${data.price}</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <p><span>Intensidad </span><br/>{data.intensity} horas</p>
                        </div>
                        <div className="card">
                        <p><span>Temáticas </span><br/>{data.topics}</p>
                        </div>
                    </div>

                    <a href={data.url_inscription} target={'_blank'} rel="noopener noreferrer"><button className="button">Inscribirse</button></a>
                </div>
            </div>
        </div>
        </>
    )
}