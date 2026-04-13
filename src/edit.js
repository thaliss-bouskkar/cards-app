import { useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"

export default function Edite(){
    const nav = useNavigate()
   const users = useSelector(state=>state.users)
   const dispatch = useDispatch()

   const {id}=useParams()

   const user = users.find((u)=>u.id===Number(id))

    const [level, setLevel] = useState(user ? user.level : "");
    const [isStudent, setIsStudent] = useState(user.student);
   const Name = useRef("")
   const Email = useRef("")
   const Age = useRef("")
   const contry = useRef("")
   const taille = useRef("")
   const image = useRef(null)
   const GenaralInfo = useRef("")
    const formClick = (e)=>{
        e.preventDefault();
        const info =  {
        id:user.id,
        name:Name.current.value,
        email:Email.current.value,
        age:Age.current.value,
        student:isStudent,
        contry:contry.current.value ?contry.current.value : user.contry ,
        level:level,
        image:image.current.files[0] ?image.current.files[0]:user.image,
        genaralInfo:GenaralInfo.current.value,
        wpoids: user.genre = "homme" ?taille.current.value - 100 - ((taille.current.value - 150)/4):taille.current.value - 100 - (( taille.current.value- 150)/2.5),
        taille: taille.current.value
    }
    dispatch({type:"Edit_user",edit_user:info})
    nav("/")
    }
    return(
        <form onSubmit={formClick}>
        <label htmlFor="name">Name :</label>
        <input id="name" type="text" name="name"  defaultValue={user.name} ref={Name} /><br></br>
        <label htmlFor="email">Email :</label>
        <input id="email" type="email" name="email" defaultValue={user.email} ref={Email} /><br></br>
        <label htmlFor="age">Age :</label>
        <input id="age" type="number"  name="age" defaultValue={user.age} ref={Age} /><br></br>
        Are you student ?  <input type="checkbox" checked={isStudent} name="student" onChange={(e) => setIsStudent(e.target.checked)}/><br></br>
        <label htmlFor="contry">City :</label>
        <select id="contry" name="contry" defaultValue={user.contry} ref={contry}>
            <option value="">select City</option>
            <option value="Zagora" >Zagora</option>
            <option value="Marrakech">Marrakech </option>
            <option value="Casablanca">Casablanca </option>
            <option value="Agadir">Agadir</option>
            <option value="Rabat">Rabat </option>
        </select><br></br>
          <input type="radio" name="level" value="1" checked={level === "1"} onChange={(e)=>setLevel(e.target.value)}  /> 1er year
          <input type="radio" name="level" value="2" checked={level === "2"} onChange={(e)=>setLevel(e.target.value)}/> 2eme year <br></br>
        <label htmlFor="image">Your image :</label>
        <input id="image" type="file" name="image"  accept="image/*" ref={image} /><br></br>
        <label htmlFor="genaralInf">Genaral info :</label>
        <textarea id="genaralInf" name="genaralInf" defaultValue={user.genaralInfo} ref={GenaralInfo} /><br /><br />
        <label htmlFor="Taille">Taille :</label>
        <input id="Taille" type="text" name="Taille"  defaultValue={user.taille} ref={taille} /><br></br>
        <input type="submit" />
    </form>
    )
}