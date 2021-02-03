import React, {Fragment} from 'react'
import {Link, withRouter} from "react-router-dom"
import {signout, isAuthenticated} from "../auth/helper"


const currentTab = (history,path) => {
    if(history.location.pathname === path) {
        return {color: "#2ecc72"}
    }else {
        return {color: "#FFFFFF"}
    }
}
const Menu = ({history,path}) => {
    return (
        <div>
            <ul className="nav na-tabs bg-dark">
                <li className="nav-item">
                    <Link 
                    style={currentTab(history,"/")} 
                    className="nav-link" to="/">
                        Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link 
                    style={currentTab(history,"/cart")} 
                    className="nav-link" to="/cart">
                        Cart
                    </Link>
                </li>
                {isAuthenticated() && (
                    <li className="nav-item">
                    <Link 
                    style={currentTab(history,"/user/dashboard")} 
                    className="nav-link" to="/user/dashboard">
                        Dashboard
                    </Link>
                </li>
                )}
                {!isAuthenticated() && (
                    <Fragment>
                        <li className="nav-item">
                        <Link 
                        style={currentTab(history,"/signup")} 
                        className="nav-link" to="/signup">
                            Sign Up
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link 
                        style={currentTab(history,"/signin")} 
                        className="nav-link" to="/signin">
                            Sign In
                        </Link>
                    </li>
                    </Fragment>
                )}
                {isAuthenticated() && (
                    <li className="nav-item">
                        <Link>
                    <span 
                    onClick={()=> {
                        signout(()=> {
                            history.push("/")
                        })
                    }}
                    className="nav-link text-warning">
                        Sign Out
                    </span>
                    </Link>
                    </li>
                    
                )}
            </ul>
        </div>
    )
}

export default withRouter(Menu);