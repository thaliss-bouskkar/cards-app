import './cards.css'
import { useContext } from 'react';
import { ThemeContext } from './App'
import { useSelector } from 'react-redux';
export default function Cards(){
    const { darkMode } = useContext(ThemeContext);
    const users = useSelector(state=>state.users)
return( 
<div className="card">
    <h1 id={darkMode ?"h1":"h0"}>Users Details </h1>
    {users.map((j,i)=> (
        <div className={!darkMode ? "bg" :"bg-dark" } key={i}>
             {j.image && (
                <img
                    src={typeof j.image === "string"
                    ? j.image
                    : URL.createObjectURL(j.image)}
                    alt={j.name}
                    width="200"
                />
            )}
      <h3>{j.name}</h3>
        <span id='stu'>{j.student===true ? "Student" : ""}</span>
        <div className="info">
        <span>Email :</span>
        <span>{j.email}</span>
        </div>

        <div className="info">
        <span>Age :</span>
        <span>{j.age}</span>
        </div>
        <div className="info">
        <span>Level: </span>
        <span>
        {j.level === "1"
            ? "1er year"
            : j.level === "2"
            ? "2ème year" :""}
        </span>
        </div>

        <div className="info">
        <span>City :</span>
        <span>{j.contry}</span>
        </div>
        <div className="info">
        <span>Taille :</span>
        <span>{j.taille} cm</span>
        </div>
        <div className="info">
        <span>Poids ideal :</span>
        <span>{j.wpoids} KG</span>
        </div>

        <p className="general-info">{j.genaralInfo}</p>

        </div>  
    )
    )}
</div>

)
}