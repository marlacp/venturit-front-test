
import React from 'react';
import chat from '../../assets/static/IMG/menu/chat.png'; 
import chat_bold from '../../assets/static/IMG/menu/chat_bold.png'; 
import graph from '../../assets/static/IMG/menu/graph.png'; 
import graph_bold from '../../assets/static/IMG/menu/graph_bold.png'; 
import home from '../../assets/static/IMG/menu/home.png'; 
import home_bold from '../../assets/static/IMG/menu/home_bold.png'; 
import note from '../../assets/static/IMG/menu/note.png'; 
import note_bold from '../../assets/static/IMG/menu/note_bold.png'; 
import square from '../../assets/static/IMG/menu/square.png'; 
import square_bold from '../../assets/static/IMG/menu/square_bold.png'; 
import menu from '../../assets/static/IMG/hamburguerMenu.png';
import './../../assets/styles/SideNav.css';
export const SideNav = () => {

  return(
  
  <React.Fragment>
    <div className='Side_Navbar'>
        <div className='Side_Navbar_Hamburguer'>
            <div className='Side_Navbar_Hamburguer--icon'>
                <img src={menu} alt="menu" />
            </div>

            <div className='Side_Navbar_home'>
                <a href="/" className='Side_Nav_home'>
                    <img src={home} alt="home" className='Side_Nav_home--icon' />
                </a>
            </div>


            <div className='Side_Navbar_square'>
                <a href="/" className='Side_Nav_square'>
                    <img src={square} className='Side_Nav_square--icon' alt="square" />
                </a>
            </div>

            <div className='Side_Navbar_note'>
                <a href="/" className='Side_Nav_note'>
                    <img src={note} className='Side_Nav_note--icon' alt="note" />
                </a>

            </div>


            <div className='Side_Navbar_graph'>
                <a href="/" className='Side_Nav_graph'>
                    <img src={graph} className='Side_Nav_graph--icon' alt="graph" />
                </a>

            </div>

            <div className='Side_Navbar_chat'>
                <a href="/" className='Side_Nav_chat'>
                    <img src={chat} className='Side_Nav_chat--icon' alt="chat" />
                </a>
            </div>

        </div>
    </div>
  </React.Fragment>);
  }