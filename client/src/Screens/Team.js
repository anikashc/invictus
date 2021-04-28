import React from 'react';
import './Team.css';
import TeamData from './TeamData';

const Team = (props) => {
    return (
        <>
            <main className="page-content">
               {TeamData.map((val)=>{

                    return (
                        <>
                         <div className="card" style={{backgroundImage:`url(${val.imgsrc})`}} >
                    <div className="content">
                        <h2 className="title">{val.designation} </h2>
                        <p className="copy"> {val.MebName}</p>
                        <div>
                            <a href={val.linkedin} target="_blank"><button className="btn" > <i className="bi bi-linkedin"></i> </button> </a>
                            <a href={val.instagram} target="_blank">  <button className="btn"  ><i className="bi bi-envelope-fill"></i></button></a>
                        </div>
                    </div>
                </div>
                        </>
                    )


               })}
               
            </main>
        </>
    )
}


export default Team;
