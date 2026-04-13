import image1 from '../ay.webp'
import image2 from '../thaliss.jpg'
import image3 from '../abdo.png'
import image4 from '../saif.png'
import image5 from '../aymn.png'
import image6 from '../nadi.jpg'
import image7 from '../sma.jpg'
const initialState = {
   users : [
  {
    id: 1,
    name: "Ayoub El Amrani",
    email: "ayoub@gmail.com",
    age: "24",
    student: true,
    contry: "Zagora",
    level: "2",
    genre: "homme",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    genaralInfo: "React Developer",
    wpoids: "70",
    taille: "175"
  },
  {
    id: 2,
    name: "Sara Benali",
    email: "sara@gmail.com",
    age: "22",
    student: true,
    contry: "Marrakech",
    level: "1",
    genre: "femme",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    genaralInfo: "UI/UX Designer",
    wpoids: "58",
    taille: "165"
  },
  {
    id: 3,
    name: "Mohamed Idrissi",
    email: "mohamed@gmail.com",
    age: "30",
    student: true,
    contry: "Casablanca",
    level: "2",
    genre: "homme",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    genaralInfo: "Backend Developer",
    wpoids: "82",
    taille: "180"
  },
  {
    id: 4,
    name: "Imane Zahraoui",
    email: "imane@gmail.com",
    age: "21",
    student: true,
    contry: "Agadir",
    level: "1",
    genre: "femme",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    genaralInfo: "Computer Science Student",
    wpoids: "55",
    taille: "160"
  },
  {
    id: 5,
    name: "Yassine Chraibi",
    email: "yassine@gmail.com",
    age: "27",
    student: true,
    contry: "Rabat",
    level: "2",
    genre: "homme",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    genaralInfo: "Full Stack Developer",
    wpoids: "76",
    taille: "178"
  },
  {
    id: 6,
    name: "Khadija Amine",
    email: "khadija@gmail.com",
    age: "26",
    student: true,
    contry: "Marrakech",
    level: "2",
    genre: "femme",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    genaralInfo: "Digital Marketing Specialist",
    wpoids: "62",
    taille: "168"
  },
  {
    id: 7,
    name: "Omar Lahlou",
    email: "omar@gmail.com",
    age: "35",
    student: true,
    contry: "Marrakech",
    level: "2",
    genre: "homme",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    genaralInfo: "Data Scientist",
    wpoids: "90",
    taille: "185"
  },
  {
    id: 8,
    name: "Salma Tazi",
    email: "salma@gmail.com",
    age: "29",
    student: true,
    contry: "Casablanca",
    level: "1",
    genre: "femme",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    genaralInfo: "Project Manager",
    wpoids: "60",
    taille: "162"
  },
  {
    id: 9,
    name: "Anas Fassi",
    email: "anas@gmail.com",
    age: "23",
    student: true,
    contry: "Agadir",
    level: "1",
    genre: "homme",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    genaralInfo: "Web Development Student",
    wpoids: "68",
    taille: "172"
  },
  {
    id: 10,
    name: "Hicham Ait Ali",
    email: "hicham@gmail.com",
    age: "32",
    student: true,
    contry: "Rabat",
    level: "2",
    genre: "homme",
    image: "https://randomuser.me/api/portraits/men/10.jpg",
    genaralInfo: "DevOps Engineer",
    wpoids: "85",
    taille: "180"
  },
  {
    id: 11,
    name: "Ayoub Bouawaoui",
    email: "Bouawaoui@gmail.com",
    age: "23",
    student: true,
    contry: "Mrirt",
    level: "2",
    genre: "homme",
    image: image1,
    genaralInfo: "Domain investor",
    wpoids: "85",
    taille: "180"
  },
  {
    id: 12,
    name: "AYYOUB BOUSKKAR",
    email: "ayoubbouskkar@gmail.com",
    age: "22",
    student: true,
    contry: "Zagora",
    level: "2",
    genre: "homme",
    image: image2,
    genaralInfo: "Full Stack Developer | Graphic Designer",
    wpoids: "70.25",
    taille: "177"
  },
  {
    id: 13,
    name: "Abdelouahid Assekouri",
    email: "AbdelouahidAssekouri@gmail.com",
    age: "22",
    student: true,
    contry: "Zagora",
    level: "2",
    genre: "homme",
    image: image3,
    genaralInfo: "Passionné par le développement web",
    wpoids: "85",
    taille: "180"
  },
  {
    id: 14,
    name: "Saif BEN KADDOUR",
    email: "Saif34@gmail.com",
    age: "23",
    student: true,
    contry: "Marrakech",
    level: "2",
    genre: "homme",
    image: image4,
    genaralInfo: "Stagiaire en Développement Digital",
    wpoids: "71",
    taille: "178"
  },
  {
    id: 15,
    name: "Aimen Younous",
    email: "Aimen4@gmail.com",
    age: "22",
    student: true,
    contry: "El Jadida",
    level: "2",
    genre: "homme",
    image: image5,
    genaralInfo: "Full-Stack Developer",
    wpoids: "70.25",
    taille: "177"
  },
  {
    id: 16,
    name: "Mohamed Nadi",
    email: "nadi4@gmail.com",
    age: "20",
    student: true,
    contry: "BENI MELLAL",
    level: "2",
    genre: "homme",
    image: image6,
    genaralInfo: "Étudiant à cités des métiers et des compétencesr",
    wpoids: "71.75",
    taille: "179"
  },
  {
    id: 17,
    name: "ISMAIL ASSABIR",
    email: "ismailassabir@gmail.com",
    age: "24",
    student: true,
    contry: "AZILAL",
    level: "2",
    genre: "homme",
    image: image7,
    genaralInfo: "the best Full-Stack Developer",
    wpoids: "72.5",
    taille: "180"
  }
]

}

const Reducer = (state = initialState,action) => {
    switch (action.type){

        case "Add_user" : return {...state, users: [...state.users,action.user]}

        case "Remove_user" : return {...state,users:state.users.filter((user) => user.id !== action.id )}

        case "Edit_user" :return  {
                                        ...state,
                                        users: state.users.map(user =>
                                        user.id === action.edit_user.id
                                            ? action.edit_user
                                            : user
                                        )
                                    };
        case "Poids" : return  {
                                    ...state,
                                    users: state.users.map(user =>
                                    user.id === action.poids_user.id
                                        ? {
                                            ...user,
                                            wpoids: action.poids_user.wpoids,
                                            taille: action.poids_user.taille,
                                            genre :action.poids_user.genre
                                        }
                                        : user
                                    )
                                };
        case "Edite_image" : return {
                                      ...state,
                                      users : state.users.map(user=>
                                        user.id === action.image_user.id
                                        ? {
                                          ...user,image:action.image_user.image
                                        }:user
                                      )
        }
        default : 
        return state
    }
}

export default Reducer