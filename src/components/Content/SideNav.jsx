
import React, {useState} from 'react';
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


    const icons = {
        1:{
            icono: home,
            icono_bold: home_bold
        },
        2:{
            icono: square,
            icono_bold: square_bold
        },
        3:{
            icono: note,
            icono_bold: note_bold
        },
        4:{
            icono: graph,
            icono_bold: graph_bold
        },
        5:{
            icono: chat,
            icono_bold: chat_bold
        }
    };

    const [icon, setIcon] = useState(1);

  return(

  <React.Fragment>
    <div className='Side_Navbar'>
        <div className='Side_Navbar_Hamburguer'>
            <div className='Side_Navbar_Hamburguer--icon'>
                <img src={menu} alt="menu" />
            </div>

            <div className={`Side_Navbar_home ${icon === 1 ?  "selected" : ""} ${icon !==1 ? "notSelected":""}`} onClick={() => {setIcon(1);}}>
                <a href="/" className='Side_Nav_home'>
                    <img src={`${icon === 1 ?   icons[icon].icono_bold : ""} ${icon !==1 ?   icons[1].icono : ""} `} alt="home" className='Side_Nav_home--icon' />
                </a>
            </div>


            <div className={`Side_Navbar_home ${icon === 2 ?  "selected" : ""} ${icon !==2 ? "notSelected":""}`} onClick={() => {setIcon(2);}}>
                <a href="#nav" className='Side_Nav_square'>
                    <img src={`${icon === 2 ?   icons[icon].icono_bold : ""} ${icon !==2 ?   icons[2].icono : ""} `} className='Side_Nav_square--icon' alt="square" />
                </a>
            </div>

            <div className={`Side_Navbar_home ${icon === 3 ?  "selected" : ""} ${icon !==3 ? "notSelected":""}`} onClick={() => {setIcon(3);}}>
                <a href="#nav" className='Side_Nav_note'>
                    <img src={`${icon === 3 ?   icons[icon].icono_bold : ""} ${icon !==3 ?   icons[3].icono : ""} `} className='Side_Nav_note--icon' alt="note" />
                </a>

            </div>


            <div className={`Side_Navbar_home ${icon === 4 ?  "selected" : ""} ${icon !==4 ? "notSelected":""}`} onClick={() => {setIcon(4);}}>
                <a href="#nav" className='Side_Nav_graph'>
                    <img src={`${icon === 4 ?   icons[icon].icono_bold : ""} ${icon !==4 ?   icons[4].icono : ""} `} className='Side_Nav_graph--icon' alt="graph" />
                </a>

            </div>

            <div className={`Side_Navbar_home ${icon === 5 ?  "selected" : ""} ${icon !==5 ? "notSelected":""}`} onClick={() => {setIcon(5);}}>
                <a href="#nav" className='Side_Nav_chat'>
                    <img src={`${icon === 5 ?   icons[icon].icono_bold : ""} ${icon !==5 ?   icons[5].icono : ""} `} className='Side_Nav_chat--icon' alt="chat" />
                </a>
            </div>

        </div>
    </div>
  </React.Fragment>);
  }