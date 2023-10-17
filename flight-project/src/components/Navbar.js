import React from 'react'
import './Navbar.css';
import { MenuItems } from './MenuItems';
import {Component} from "react";
class Navbar extends Component {
  state = {clicked: false};
  handleClick = () => {
    this.setState({clicked: !this.state.clicked})
  }
  render(){
    return (
        <nav className="navbar">
            <h1 className="navbar-logo">TRVL</h1>

            <div className="menu-icons" onClick={this.handleClick}>
                <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
            </div>

            <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                {MenuItems.map((item, index)=>{
                    console.log(item)
                    return(
                        <li key={index}>
                            <a className={item.cName} href={item.url}>{item.title}</a>
                        </li>
                    )
                })}
                <button>Sign Up</button>
            </ul>
        </nav>
    )
    }
  }
export default Navbar