import React, {useState} from "react";
import { Link, useHistory } from "react-router-dom";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import SideImage from "../assets/imgg.jpg";

const SignIn =()=>{
    const history = useHistory();
    const initialState = {
        email:"",
        password:""
    }

    const [formValue, setFormValue] = useState({...initialState});

    const handleSubmit = (e) => {
        e.preventDefault();
        let getAuth = JSON.parse(localStorage.getItem("authUser"));
        console.log(formValue)

        if(getAuth !== null){
            if(formValue.email === "" || formValue.password === ""){
                alert("All fields are required")
                return
            }else if(formValue.email !== getAuth.email || formValue.password !== getAuth.password){
                alert("Invalid credential")
                return
            }else if(formValue.email === getAuth.email && formValue.password === getAuth.password){
                history.push("/dashboard");
                return
            }else{
                return
            }
        }else{
            alert("You need to create an account")
        }
       
    }

    const handleEmailChange = (e) =>{
        if(e){
            e.preventDefault();
            let emailValue = e.target.value;
            setFormValue((prevState) => ({ ...prevState, email: emailValue}));
        }
    }

    const handlePasswordChange = (e) =>{
        if(e){
            e.preventDefault();
            let passwordValue = e.target.value;
            setFormValue((prevState) => ({ ...prevState, password: passwordValue}));
        }
    }


    return(
        <div className="formContainer">
            <div className="appAside">
                <img src={SideImage} alt="Site" width="320" height="220"/>
            </div>
            <div className="appForm"> 
                <div className="formCenter">
                    <h2 style={{color: "#fff"}}>Login to Account</h2>
                    <form className="formFields" autoComplete="off">
                        <div className="formField">
                            <label className="formFieldLabel" htmlFor="email">
                            E-Mail Address
                            </label>
                            <input
                            type="email"
                            id="email"
                            className="formFieldInput"
                            placeholder="Enter your email"
                            name="email"
                            value={formValue.email}
                            onChange={(e) => handleEmailChange(e)}
                            />
                        </div>

                        <div className="formField">
                            <label className="formFieldLabel" htmlFor="password">
                            Password
                            </label>
                            <input
                            type="password"
                            id="password"
                            className="formFieldInput"
                            placeholder="Enter your password"
                            name="password"
                            value={formValue.password}
                            onChange={(e) => handlePasswordChange(e)}
                            />
                        </div>

                        <div className="formField">
                        <Stack spacing={2} direction="row">
                            <Button variant="contained" className="formFieldButton" onClick={handleSubmit}>Sign In</Button>{" "}
                            <Button variant="text">
                                <Link to="/" className="formFieldLink">
                                    Create an account
                                </Link> 
                            </Button>     
                        </Stack>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignIn;