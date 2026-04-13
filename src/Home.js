import './home.css'
import srh from './search.png'
import { ThemeContext } from './App';
import { useSelector,useDispatch } from "react-redux";
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
export default function Home({ infos }) {
    const dispatch = useDispatch()
    const users = useSelector(state => state.users)
    const {darkMode} = useContext(ThemeContext)
    const [Search,setSearch] = useState("")
    const FilterUsers = users.filter(user =>
                                      Object.values(user)                  
                                            .map(value => value || "")     
                                            .join(" ")                     
                                            .toLowerCase()                 
                                            .includes(Search.toLowerCase()) 
                                    );
    const nav = useNavigate()
    const getLevel = (level) => {
  switch(level) {
    case "1": return "1st Year";
    case "2": return "2nd Year";
    default: return "";
  }
};


  return (
    <div className="card">
      <h1 id={darkMode?"h1":"h0"}>User Information</h1>
        <NavLink to="/Add" className="add-btn">
            Add User
        </NavLink>
      <div className={darkMode?"table-wrapper-dark":"table-wrapper"}>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search..."
            value={Search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <img src={srh} alt="Search" className="search-icon" />
        </div>
        <table className={darkMode?"styled-table-dark":"styled-table"}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Level</th>
              <th>City</th>
              <th>Height</th>
              <th>Ideal Weight</th>
              <th>General Info</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {FilterUsers.map((j, i) => (
              <tr key={j.id} onClick={() => nav(`/Detaille/${j.id}`)}>
                <td className="hover-info">{j.name}</td>
                <td className="hover-info">{j.email}</td>
                <td className="hover-info">{j.age}</td>
                <td className="hover-info">{getLevel(j.level)}</td>
                <td className="hover-info">{j.contry}</td>
                <td className="hover-info">{j.taille}</td>
                <td className="hover-info">{j.wpoids}</td>
                <td  className="hover-info">{j.genaralInfo}</td>
                <td onClick={(e) => {e.stopPropagation();}} className="actions">
                  <NavLink className="btn edit" to={`/Edit/${j.id}`}>
                    Edit
                  </NavLink>
                  <button className="btn delete" onClick={()=>dispatch({type:"Remove_user",id:j.id})}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
