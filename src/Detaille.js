import { useParams } from "react-router-dom";
import NotFound from "./NotFound";
import { ThemeContext } from './App'
import { useContext} from 'react';
import './Detaille.css'
import { useDispatch, useSelector } from "react-redux";
export default function Detaille(){
const users = useSelector(state=>state.users)
const dispatch = useDispatch()
const { darkMode } = useContext(ThemeContext);
const {id} = useParams()
const user = users.find((j)=>(id===String(j.id)))
const handleChangeImage = (e) => {
  const file = e.target.files[0];
  if (!file) return;

  const imageURL = URL.createObjectURL(file);

  dispatch({
    type: "Edite_image",
    image_user: {
      id: user.id,
      image: imageURL
    }
  });
};

if (!user) {
    return <NotFound />;
  }

return(<div className={`bc ${darkMode ? "dark-mode" : ""}`} key={user.id}>
             <div className="image-wrapper">
                {user.image && (
                    <img
                    className="profile-img"
                    src={
                        typeof user.image === "string"
                        ? user.image
                        : URL.createObjectURL(user.image)
                    }
                    alt={user.name}
                    />
                )}
                <input
                    id="image32"
                    type="file"
                    name="image"
                    accept="image/*"
                    className="file-input"
                    onChange={(e)=>handleChangeImage(e)}
                />
                    <label htmlFor="image32" className="edit-icon">
                      ✏️
                    </label>
                </div>

      <h3>{user.name}</h3>
        <span id='sta'>{user.student===true ? "Student" : ""}</span>
        <div className="info1">
        <span>Email :</span>
        <span>{user.email}</span>
        </div>
        <div className="info1">
        <span>Age :</span>
        <span>{user.age}</span>
        </div>
        <div className="info1">
        <span>Level: </span>
        <span>
        {user.level === "1"
            ? "1er year"
            : user.level === "2"
            ? "2ème year" :""}
        </span>
        </div>

        <div className="info1">
        <span>City :</span>
        <span>{user.contry}</span>
        </div>
        <div className="info1">
        <span>Taille :</span>
        <span>{user.taille} cm</span>
        </div>
        <div className="info1">
        <span>Poids ideal :</span>
        <span>{user.wpoids} KG</span>
        </div>
        <p className="general-info1">{user.genaralInfo}</p>
        </div>)
}