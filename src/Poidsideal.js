import { useState,useContext } from "react";
import femme from "./femme.png";
import homme from "./homme.png";
import './poids.css';
import { ThemeContext  } from "./App";
import { useDispatch, useSelector } from "react-redux";




function Poids({ infos, setInfos }){
    const users = useSelector(state=>state.users)
    const dispatch = useDispatch()

    const [taille,setTaille] = useState('');
    const [genre,setGenre] = useState('');
    const [image , setImage] = useState('');
    const [rest,setRest] = useState('')
    const { darkMode } = useContext(ThemeContext);


const Ximage = (genre) => {
     if(genre === "homme"){
            setImage(homme)
        }
        if(genre === "femme"){
            setImage(femme)
        }
        if(genre === ""){
            setImage('')
        }
}

let wpoids;

const resultat = (e) => {
    const t = Number(taille) ;
    e.preventDefault();
    if(!taille || isNaN(t)){
        setRest('la taille doit étre un entier !')
        return;
    }

    if(t<=150){
        setRest('la taille doit supérieure à 150 cm ') 
        return;
    }
    
    if(genre === ""){
            setRest(`Choisissez le Genre`)
            return;
        }
    if(genre === "homme"){
        wpoids = t - 100 - ((t - 150)/4);
    } else if(genre === "femme"){
        wpoids = t - 100 - ((t - 150)/2.5);
    }

    setRest(`Poids idéal est : ${wpoids} KG`);
    if (users.length > 0) {
     const maxId = Math.max(...users.map(i => i.id))
     dispatch({type:"Poids",poids_user:{id:maxId,taille:taille,wpoids:wpoids,genre:genre}})
    }
    setGenre('')
    setImage('')
}
return(<>
    <h2 id={darkMode?"h1":"h0"}>Ajoutez la taille et le poids à vos informations</h2>
<form onSubmit={resultat}>
        <label htmlFor="taille">Taille en CM :</label> <br/>
        <input id="taille" type="text" value={taille} onChange={(e) => setTaille(e.target.value)} /><br/>
        <div className="genre">
           <label htmlFor="genre">Genre :</label><br/>
            <select value={genre} onChange={(e) => {setGenre(e.target.value);Ximage(e.target.value)}}>
                <option value="">Choisissez le Genre</option>
                <option value="homme">Homme</option>
                <option value="femme">Femme</option>
            </select>
           {image && <img src={image} alt="genre" width={40} />} 
        </div>
        <label htmlFor="poids">Poids ideal :</label><br/>
        <p className={darkMode ? "pp1" : "pp"} >{rest}</p>
        <input type="submit" value="Calculer" /><br/><br/>
    </form> 
    </>)
}
export default Poids;