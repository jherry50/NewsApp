import React, {useState} from "react";
import { Link } from "react-router-dom";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const SignIn =()=>{
    const initialState = {
        email:"",
        password:""
    }

    const buttonState = {
        buttonState: false,
        buttonText: "Submit"
    }
    const [formValue, setFormValue] = useState({...initialState});

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValue)
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
            <div className="appAside" />
            <div className="appForm"> 
                <div className="formCenter">
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
                            <Button variant="contained" className="formFieldButton" onClick={(e)=>handleSubmit(e)}>Sign In</Button>{" "}
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