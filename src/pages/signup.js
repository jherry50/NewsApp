import React, {useState} from "react";
import { Link, useHistory } from "react-router-dom";
import validators from "../utils/validator";
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


const SignUp =()=>{
    const history = useHistory();

    const initialState = {
        firstName: "",
        lastName: "",
        email:"",
        password:"",
        agreed: false
    }
    const [formStates, setFormStates] = React.useState({
        firstnameError: false,
        firstnameErrorMsg: '',
        lastnameError: false,
        lastnameErrorMsg: '',
        emailError: false,
        emailErrorMsg: '',
        passwordError: false,
        passwordErrorMsg: '',
    })


    const [formValue, setFormValue] = useState({...initialState});

    const handleSubmit = () => {
        if(formValue.email === ""|| formValue.password === "" || formValue.firstName === "" || formValue.lastName === "" ){
            alert("Fields must not be empty");
            return
        }
        if(formValue.agreed === false){
            alert("Must agree to terms and condition");
            return
        }

        localStorage.setItem("authUser", JSON.stringify(formValue));
        alert("Account created successfully,proceed to login")
        history.push("/signin")
    }

    const setIsRequiredError = (value, stateError, stateErrorMsg, len = 1, errorMsg = 'Field is required', max = 0, select = false) => {
        if (!validators.isRequired(value, len, max, select)) {
          setFormStates({ ...formStates, [stateError]: true, [stateErrorMsg]: errorMsg });
          return false;
        }
    
        setFormStates({ ...formStates, [stateError]: false, [stateErrorMsg]: "" });
        return true;
      }

    const handleEmailChange = (e) =>{
        debugger
        setFormStates({...formStates, emailError: false, emailErrorMsg: "",});

        if(e){
            let emailValue = e.target.value;
            setFormValue((prevState) => ({ ...prevState, email: emailValue}));

        if (!validators.isValidEmail(emailValue)) {
            setFormStates({...formStates, emailError: true, emailErrorMsg: "Please enter a valid email or clear your selection",});
            return false;
            }
        }
    }

    const handlePasswordChange = (e) =>{
        if(e){
            let passwordValue = e.target.value;
            setFormValue((prevState) => ({ ...prevState, password: passwordValue}));

            return setIsRequiredError(passwordValue, 'passwordError', 'passwordErrorMsg');

        }
    }

    const handleFirstNameChange = (e) =>{
        if(e){
            let firstNameValue = e.target.value;
            setFormValue((prevState) => ({ ...prevState, firstName: firstNameValue}));
            return setIsRequiredError(firstNameValue, 'firstnameError', 'firstnameErrorMsg');
        }
    }

    const handleLastNameChange = (e) =>{
        if(e){
            let lastNameValue = e.target.value;
            setFormValue((prevState) => ({ ...prevState, lastName: lastNameValue}));
            return setIsRequiredError(lastNameValue, 'lastnameError', 'lastnameErrorMsg');
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
            </div>
            <div className="appForm"> 
                <div className="formCenter">
                    <h2 style={{color: "#fff"}}>Create an Account</h2>
                    <form className="formFields" autoComplete="off">
                        <div className="formField">
                            <label className="formFieldLabel" htmlFor="name">
                                First Name
                            </label>
                            <TextField
                                type="text"
                                variant="standard"
                                id="firstName"
                                InputProps={{
                                    style:{color: 'white'}
                                  }}
                                helperText={formStates.firstnameErrorMsg}
                                error={formStates.firstnameError}
                                className="formFieldInput"
                                placeholder="Enter your first name"
                                name="firstName"
                                value={formValue.firstName}
                                onChange={(e) => handleFirstNameChange(e)}
                            />
                        </div>
                        <div className="formField">
                            <label className="formFieldLabel" htmlFor="name">
                                Last Name
                            </label>
                            <TextField
                                type="text"
                                variant="standard"
                                id="lastName"
                                InputProps={{
                                    style:{color: 'white'}
                                  }}
                                helperText={formStates.lastnameErrorMsg}
                                error={formStates.lastnameError}
                                className="formFieldInput"
                                placeholder="Enter your last name"
                                name="lastName"
                                value={formValue.lastName}
                                onChange={(e) => handleLastNameChange(e)}
                            />
                        </div>
                        <div className="formField">
                            <label className="formFieldLabel" htmlFor="email">
                            E-Mail Address
                            </label>

                             <TextField
                                type="email"
                                id="email"
                                className="formFieldInput"
                                placeholder="Enter your email"
                                name="email"
                                variant="standard"
                                InputProps={{
                                    style:{color: 'white'}
                                  }}
                                helperText={formStates.emailErrorMsg}
                                error={formStates.emailError}
                                value={formValue.email}
                                onChange={(e)=> handleEmailChange(e)}
                            />
                        </div>
                        <div className="formField">
                            <label className="formFieldLabel" htmlFor="password">
                            Password
                            </label>
                            <TextField
                                type="password"
                                id="password"
                                className="formFieldInput"
                                placeholder="Enter your password"
                                name="password"
                                value={formValue.password}
                                onChange={(e) => handlePasswordChange(e)}
                                variant="standard"
                                InputProps={{
                                    style:{color: 'white'}
                                  }}
                                helperText={formStates.passwordErrorMsg}
                                error={formStates.passwordError}
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
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUp;