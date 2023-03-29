import React ,{useContext,useEffect,useState,createContext}from 'react'
import {useNavigate} from 'react-router-dom'


export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const navigate = useNavigate()
    // const[user,setUser]=useState()
    // const [change, setOnChange] = useState(false)
    const login = (username, password) =>{
        fetch(`http://localhost:3000/login`,{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username, password
            })
        }
        )
        .then(res=>res.json())
        .then(response=>{
            // setOnChange(!change)
            if(response.errors)
            {
                 
                  console.log("errors")
            }
            else if(response.loggedin)
            {
             console.log("logged in") 
                  navigate("/signup")

            }
            else{
             console.log("something went wrong")

            }
            
        })
    }

    const contextData={
        login
    }
  return (
    <AuthContext.Provider value={contextData}>
        {children}
     </AuthContext.Provider>
  )
}

export default AuthProvider