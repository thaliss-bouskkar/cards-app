import { useRef, useState } from "react"
import { useSelector,useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
export default function Card({infos,setInfos}){

const dispatch = useDispatch()
const users = useSelector(state => state.users)

const navigate = useNavigate() 

const Name = useRef("")
const Email = useRef("")
const Age = useRef("")
const Student = useRef(false)
const contry = useRef("")
const image = useRef(null)
const GenaralInfo = useRef("")


const [level, setLevel] = useState("");

const formClick = (e) => {
    e.preventDefault();
    const maxId =users.length > 0 ? Math.max(...users.map(i => i.id)) +1 : 1;
    const info =  {
        id:maxId,
        name:Name.current.value,
        email:Email.current.value,
        age:Age.current.value,
        student:Student.current.checked,
        contry:contry.current.value,
        level:level,
        image:image.current.files[0],
        genaralInfo:GenaralInfo.current.value
    }
    dispatch({type:"Add_user",user:info})
    navigate('/')
}
    return(<form onSubmit={formClick}>
        <label htmlFor="name">Name :</label>
        <input id="name" type="text" name="name" ref={Name} /><br></br>
        <label htmlFor="email">Email :</label>
        <input id="email" type="email" name="email" ref={Email} /><br></br>
        <label htmlFor="age">Age :</label>
        <input id="age" type="number"  name="age" ref={Age} /><br></br>
        Are you student ?  <input type="checkbox" name="student" ref={Student} /><br></br>
        <label htmlFor="contry">City :</label>
        <select id="contry" name="contry" ref={contry}>
            <option value="">select City</option>
            <option value="Zagora" >Zagora</option>
            <option value="Marrakech">Marrakech </option>
            <option value="Casablanca">Casablanca </option>
            <option value="Agadir">Agadir</option>
            <option value="Rabat">Rabat </option>
        </select><br></br>
          <input type="radio" name="level" value="1" onChange={(e)=>setLevel(e.target.value)}  /> 1er year
          <input type="radio" name="level" value="2" onChange={(e)=>setLevel(e.target.value)}/> 2eme year <br></br>
        <label htmlFor="image">Your image :</label>
        <input id="image" type="file" name="image" accept="image/*" ref={image} /><br></br>
        <label htmlFor="genaralInf">Genaral info :</label>
        <textarea id="genaralInf" name="genaralInf" ref={GenaralInfo} /><br /><br />
        <input type="submit" />
    </form>
    )
}