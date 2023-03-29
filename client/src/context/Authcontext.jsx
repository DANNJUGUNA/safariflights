import React ,{useContext,useEffect,useState,createContext}from 'react'
import {useNavigate} from 'react-router-dom'
import Swal from 'sweetalert2'

export const AuthContext = createContext();

const AuthProvider = ({children}) => {


    const navigate = useNavigate()
    const [user, setUser] = useState()
    const [change, setOnChange] = useState(false)


    const login = (username, password) =>{
        fetch('/login',{
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
             setOnChange(!change)
            if(response.errors)
            {
                Swal.fire({
                    icon: 'error',
                    title: 'Sorry',
                    text: response.errors
                })
            }
            else if(response.loggedin)
            {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'LoggedIn successfully!',
                    showConfirmButton: false,
                    timer: 1500
                  }) 
                  navigate("/aboutus")
                  
                  
            }
            else{
                Swal.fire({
                    icon: 'error',
                    title: 'Sorry...',
                    text: "Something went wrong!",
                })
            }
            
        })
    }
    const signup=(username,email,password)=>{
     fetch('/users',{
        method:"POST",
        headers:{
            'content-type':"application/json"
        },
        body: JSON.stringify({
            username,email,password
        })
     }).then(response=>response.json())
     .then(response=>{
         setOnChange(!change)
        if(response.errors)
        {
             
              console.log("errors")
        }
        else if(response.loggedin)
        {
         console.log("logged in") 
              navigate("/login")

        }
        else{
         console.log("something went wrong")

        }
        
    })
    }
    useEffect(()=>{
        fetch("/loggedin",{
            method: "GET",
            headers:{
                "Content-Type": "application/json"
            },
        }
        )
        .then(res=>res.json())
        .then(response=>{
            setUser(response)
        }
        )
    }, [change])
    const contextData={
        
        login,
        user,
        signup
    }
  return (
    <AuthContext.Provider value={contextData}>
        {children}
     </AuthContext.Provider>
  )
}

export default AuthProvider