/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import '../../assets/styles/Header.css';
import Logo from '../../assets/static/IMG/Group.png'; 
import perfil from '../../assets/static/IMG/Placeholders/Profile/Picture.png';
import notification from '../../assets/static/IMG/Notification - Iconly---Bold.png';
import arrowDown from '../../assets/static/IMG/Arrow---Down-2 - Iconly---Bold.png';
import chat from '../../assets/static/IMG/Chat - Iconly---Bold.png';
export const Header = () => {
    return (
        <header className="Header__container">
            <div className='Header__nav__left'>
                <img className='Header__nav__left--icon' src={Logo} alt="Logo" />
            </div>

            <div className='Header__nav__rigth'>
                <form action="" className="nav__rigth__search">
                    <input className="nav__rigth--searchInput" type="text" placeholder="Search and Find" />
                    <div className="nav__rigth__box">
                        <div className="nav__rigth__box--icon"></div>
                    </div>
                </form>

                <div className='nav__rigth_button'>
                    <a className='nav__rigth_button--add'>+ ADD </a>
                </div>
                <div className='nav__rigth_notifCont'>
                    <img className='nav__rigth_notifCont--icon' src={notification} alt="notification" />
                    <div></div>
                    <div className='nav__rigth_notifCont--card'>

                    </div>
                </div>
                <img className='nav__rigth--chat' src={chat} alt="chat" />
                <a className='nav__rigth--name' href="">Clarence Russell</a>
                <img className='nav__rigth--perfil' src={perfil} alt="perfil" />
                <img className='nav__rigth--arrowdown' src={arrowDown} alt="arrowDown" />

            </div>
        </header>
    )
}


