import React, {useState} from "react";
import { Link, useHistory } from "react-router-dom";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import SideImage from "../assets/imgg.jpg";

const SignUp =()=>{
    const history = useHistory();
    const initialState = {
        firstName: "",
        lastName: "",
        email:"",
        password:"",
        agreed: false
    }

    const buttonState = {
        buttonState: false,
        buttonText: "Submit"
    }
    const [formValue, setFormValue] = useState({...initialState});

    const handleSubmit = () => {
        console.log(formValue);
        localStorage.setItem("authUser", JSON.stringify(formValue));
        alert("Account created successfully,proceed to login")
        history.push("/signin")
    }

    const handleEmailChange = (e) =>{
        if(e){
            let emailValue = e.target.value;
            setFormValue((prevState) => ({ ...prevState, email: emailValue}));
        }
    }

    const handlePasswordChange = (e) =>{
        if(e){
            
            let passwordValue = e.target.value;
            setFormValue((prevState) => ({ ...prevState, password: passwordValue}));
        }
    }

    const handleFirstNameChange = (e) =>{
        if(e){
            let firstNameValue = e.target.value;
            setFormValue((prevState) => ({ ...prevState, firstName: firstNameValue}));
        }
    }

    const handleLastNameChange = (e) =>{
        if(e){
            let lastNameValue = e.target.value;
            setFormValue((prevState) => ({ ...prevState, lastName: lastNameValue}));
        }
    }

    const handleAgreedChange = (e) =>{
        if(e){
            let agreedValue = e.target.checked;
            setFormValue((prevState) => ({ ...prevState, agreed: agreedValue}));
        }
    }

    return(
        <div className="formContainer">
            <div className="appAside">
                <img src={SideImage} width="320" height="220"/>
            </div>
            <div className="appForm"> 
                <div className="formCenter">
                    <h2 style={{color: "#fff"}}>Create an Account</h2>
                    <form className="formFields" autoComplete="off">
                        <div className="formField">
                            <label className="formFieldLabel" htmlFor="name">
                                First Name
                            </label>
                            <input
                            type="text"
                            id="name"
                            className="formFieldInput"
                            placeholder="Enter your first name"
                            name="name"
                            value={formValue.firstName}
                            onChange={(e) => handleFirstNameChange(e)}
                            />
                        </div>
                        <div className="formField">
                            <label className="formFieldLabel" htmlFor="name">
                                Last Name
                            </label>
                            <input
                            type="text"
                            id="name"
                            className="formFieldInput"
                            placeholder="Enter your last name"
                            name="name"
                            value={formValue.lastName}
                            onChange={(e) => handleLastNameChange(e)}
                            />
                        </div>
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
                            onChange={(e)=> handleEmailChange(e)}
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
                            <label className="formFieldCheckboxLabel">
                            <input
                                className="formFieldCheckbox"
                                type="checkbox"
                                name="hasAgreed"
                                value={formValue.hasAgreed}
                                onChange={(e) => handleAgreedChange(e)}
                            />{" "}
                            I agree all statements in{" "}
                            <a href="null" className="formFieldTermsLink">
                                terms of service
                            </a>
                            </label>
                        </div>

                        <div className="formField">
                            <Stack spacing={2} direction="row">
                                <Button variant="contained" className="formFieldButton" onClick={(e)=>handleSubmit(e)}>Sign Up</Button>{" "}
                                <Button variant="text">
                                    <Link to="/signin" className="formFieldLink">
                                        I'm already a member
                                    </Link> 
                                </Button>     
                            </Stack>
                            {/* <button onSubmit={handleSubmit} className="formFieldButton">Sign Up</button>{" "}
                            <Link to="/signin" className="formFieldLink">
                            I'm already member
                            </Link> */}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUp;