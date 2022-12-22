import React, {useState } from 'react'
import Axios from 'axios'
import "./styles/Register.css"
import {MdOutlineCancel} from 'react-icons/md'
import { Alert, Button, Snackbar } from '@mui/material'




const Register = (props) => {
  const [open, setOpen] = useState(false);
  const [openError, setOpenError] = useState(false);
  const handleClose = () => setOpen(false);
  const handleCloseError = () => setOpenError(false);

    const [address, setAddress] = useState("")
    const [email, setEmail] = useState("")
    const [phno, setPhno] = useState("")

    const [errorMessage, setErrorMessage] = useState("")
    const [fetchedAddresses, setFetchedAddresses] = useState([{
      address:'',
      email:''
    }])

    const handleClick = () => {
      setOpen(true);
    };

    const handleErrorClick = () => {
      setOpenError(true);
    }

    // const userAddress = props.userAddress_inner2
    // const [modalShow, setModalShow] = React.useState(false);

    

    // const submitData = (e) => {
    //     e.preventDefault()
    //     var data = {
    //       address: address,
    //       email: email,
    //       phno: phno
    //     }
    // }

    
    const addUser = (event) => {
      event.preventDefault()

      if(address === "" || email === "" ){
        setErrorMessage("Please fill all the fields")
        // openError(true)
        handleErrorClick()

      }
      else if(!email.match("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")){
        // alert("Invalid email")
        setErrorMessage("Invalid email")
        // openError(true)
        handleErrorClick()
      }
      else
      if(address.match("^0x[a-fA-F0-9]{40}$")){
        Axios.post('http://localhost:3002/adduser', {address:address, email: email})
        .then(() => {
          // alert("Successfully Whitelisted")
          handleClick()
        })
        .catch(() => {
          setErrorMessage("Error in Whitelisting / Address Already Whitelisted")
          // openError(true)
          handleErrorClick()
        })
      }
      else{
        setErrorMessage("Incorrect Wallet Address Type")
        // openError(true)
        handleErrorClick()
      }
      
    }


  return (
        <div style={{display: "flex",justifyContent:"center", alignItems:"center"}}>
          
          <div className='reg-div' style={{zIndex:11, borderRadius:"5px", width:"63%", margin:"5rem", display: "flex",justifyContent:"center", alignItems:"center"}}>
            <form id="wl-form" style={{display:"flex", borderRadius:"10px", flexDirection:"column", alignItems:"center",  justifyContent:"center"}} >
              <h2 style={{color:"black",textAlign:"center"}}>Get yourself Whitelisted!</h2>
              {/* <input onChange={e => setAddress(e.target.value)} style={{border:"black 1px solid", borderRadius:"6px",color:"black", margin:"1rem", padding:".5rem"}} placeholder="address" id='blockchain-address' type="text" /> */}
              <input onChange={e => setEmail(e.target.value)} style={{border:"black 1px solid", borderRadius:"6px",color:"black", margin:"1rem", padding:".5rem", width:"100%"}} id='user-email' type="email" placeholder='Email (i.e chandlerbing007@gmail.com)' required />
              <input onChange={e => setAddress(e.target.value)} style={{border:"black 1px solid", borderRadius:"6px",color:"black", margin:"1rem", padding:".5rem", width:"100%"}} id='phno' type="text" placeholder='Wallet Address (i.e 0x6830973f43r34gf5hyY)' required />
              <p style={{textAlign:"center", color:"rgb(10, 10, 10)"}}>*Metamask recommended.</p>
              <button className='hoverBtn' onClick={addUser} style={{}} >Register</button>
            </form>
          </div>
          <div>


              <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%', backgroundColor:"green" }}>
                  Voila! Successfully Whitelisted
                </Alert>
              </Snackbar>
              <Snackbar open={openError} autoHideDuration={4000} onClose={handleCloseError}>
                <Alert onClose={handleCloseError} severity="error" sx={{ width: '100%', backgroundColor:"red" }}>
                  {errorMessage}
                </Alert>
              </Snackbar>
          </div>
        </div>
  )
}


export default Register