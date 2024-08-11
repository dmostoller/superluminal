import React, { useState, useEffect } from 'react';
import { Menu, Dropdown, DropdownMenu } from 'semantic-ui-react'
import { NavLink, Link } from "react-router-dom";
import { useUser } from "../context/user.js"
import { useAdmin } from '../context/admin.js';
import Search from './Search.js';

function Nav({onLogout}) {
    const { user } = useUser()
    const { isAdmin } = useAdmin()

    function handleLogout() {
        fetch("/logout", {
        method: "DELETE",
        }).then(() => onLogout());
    }

    const [deviceSize, setDeviceSize] = useState(window.innerWidth);

    useEffect(() => {
      const resizeW = () => setDeviceSize(window.innerWidth);
      window.addEventListener("resize", resizeW); // Update the width on resize
      return () => window.removeEventListener("resize", resizeW);
    });
  // console.log(deviceSize)


    return (
        <Menu className='ui top fixed inverted borderless menu large' style={{marginBottom: "25px"}}>
        {(deviceSize <= 768) && 
            <>
            <Dropdown     
            icon='large inverted hamburger'
            style={{padding: "1em"}}
            floating
            className='inverted fluid dropdown icon'>
                <DropdownMenu>
                    <Dropdown item
                        className='inverted dropdown'
                        style={{padding: "1em"}}
                        text="Music"
                        >
                        <DropdownMenu>
                            <NavLink className="item" to='/music/superluminal'><h4>Superluminal</h4></NavLink>
                            <NavLink className="item" to='/music/kabayun'><h4>Kabayun</h4></NavLink>
                        </DropdownMenu>
                    </Dropdown>
                    <NavLink className="item"  to='/learn'><h4>Video</h4></NavLink>
                    <NavLink className="item" to='/events'><h4>Events</h4></NavLink>
                    <NavLink className="item" to='/about'><h4>Bio</h4></NavLink>
                    <NavLink className="item" to='/study'><h4>Learn</h4></NavLink>
                    <NavLink className="item" to='/forum'><h4>Forum</h4></NavLink>
                    <a href='https://kabayun.bandcamp.com/' className='item' target='_blank' rel="noreferrer"><h4>Shop</h4></a>  
                </DropdownMenu>
            </Dropdown>
            </>
        }
            <div className="header item">
                <Link to='/'><i className="galactic republic icon"></i>Superluminal</Link>
            </div>   

        {(deviceSize > 768) &&
        <>
            <Dropdown item
                className='inverted dropdown'
                style={{padding: "1em"}}
                text='Music'
                >
                <DropdownMenu>
                    <NavLink className="item" to='/music/superluminal'>Superluminal</NavLink>
                    <NavLink className="item" to='/music/kabayun'>Kabayun</NavLink>
                </DropdownMenu>
            </Dropdown>
            <NavLink className="item"  to='/learn'>Video</NavLink>
            <NavLink className="item" to='/events'>Events</NavLink>
            <NavLink className="item" to='/about'>Bio</NavLink>
            <NavLink className="item" to='/study'>Learn</NavLink>
            <NavLink className="item" to='/forum'>Forum</NavLink>  
            <a href='https://kabayun.bandcamp.com/' className='item' target='_blank' rel="noreferrer">Shop</a>  
        </>
        }
            <div className='right menu'>
                <Search deviceSize={deviceSize}/>
            </div>
            <div className="item">
                { !user ? (
                    <>
                    <Link to='/login' style={{marginRight: '3px'}} data-inverted="" data-tooltip="Login" data-position="bottom center" className="ui circular violet icon button">
                        <i className="sign in alternate icon"></i>
                    </Link>
                    <Link to='/signup' style={{marginRight: '3px'}} data-inverted="" data-tooltip="Sign Up" data-position="bottom right" className="ui circular violet icon button">
                        <i className="plus icon"></i>
                    </Link>
                    </>
                ) : (
                    <>
                    <button onClick={handleLogout} style={{marginRight: '3px'}} data-inverted="" data-tooltip="Logout" data-position="bottom center" className="ui circular violet icon button">
                        <i className="sign out alternate icon"></i>
                    </button>
                    {isAdmin &&
                    <Link to='/dashboard' style={{marginRight: '3px'}} data-inverted="" data-tooltip="Dashboard" data-position="bottom center" className="ui circular violet icon button">
                        <i className="chartline icon"></i>
                    </Link>
                    }
                    <Link to='/user' style={{marginRight: '3px'}} data-inverted="" data-tooltip="User Profile" data-position="bottom right" className="ui circular violet icon button">
                        <i className="user icon"></i>
                    </Link>
                    </>
                )
                }
            </div>
        </Menu>


    );
};

export default Nav