import React from 'react';
import { Link, NavLink, useHistory } from "react-router-dom";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Header = (props) =>{
    const history = useHistory();

    const logoutHandler =()=>{
        let getAuth = localStorage.getItem("authUser");
        if(getAuth){
            localStorage.removeItem("authUser");
            history.push("/signin");
        }
    }
    return(
        <div className="headerContainer">
            <div className="logoWrapper">
                <NavLink className="headLink" exact to="/dashboard"><h3>News Online</h3></NavLink>
            </div>
            <div className="menuWrapper">
                <Stack spacing={2} direction="row">
                    <Button variant="text">
                        <Link className="headLink" to="/news">
                            News
                        </Link> 
                    </Button>  
                    <Button variant="contained" className="formFieldButton" onClick={logoutHandler}>LogOut</Button> 
                </Stack>
            </div>
        </div>
    )
}

export default Header;