/* eslint-disable jsx-a11y/alt-text */

import React, {useState, useEffect} from 'react';
import Logo_usa from '../../assets/static/IMG/Screen Shot 2020-09-24 at 3.34.23 PM.png';
import background_dash from '../../assets/static/IMG/Headers/header-4.png';
import man_dash from '../../assets/static/IMG/Group 9.png';
import slide1 from '../../assets/static/IMG/3000434.png';
import min_Card1 from '../../assets/static/IMG/thumbnail.png';
import min_Card2 from '../../assets/static/IMG/thumbnail2.png';
import '../../assets/styles/contentPlatform.css';
import arrow_r from '../../assets/static/IMG/icons8-derecha-32.png';
import arrow_r2 from '../../assets/static/IMG/Arrow---Right-2 - Iconly---Bold.png';
import followers from '../../assets/static/IMG/ic-followers.png';
import events from '../../assets/static/IMG/ic-events.png';
import assignments from '../../assets/static/IMG/ic-assignments.png';
//test
import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';
export const ContentPlatform = () => {

    const acordeon = (tap) =>{
        if(act === tap){
            setAct(0) 
        }
        else{
            setAct(tap)
        }
    }   
    

    const [act, setAct] =useState();
    //   const properties = {
    //     duration: 5000,
    //     transitionDuration: 500,
    //     infinite: true,
    //     indicators: true,
    //     arrows: true
    //   }

  return(
  
  <React.Fragment>
    <div className='Conteiner_Platform'>

        <div className='Conteiner_Platform__dashboard'>

            <div className='dashboard__s1'>
                <h1 className='dashboard__s1--title1'>Dashboard</h1>
                <div className='dashboard__s1__card'>
                    <h1 className='dashboard__s1__card--title1'> Currently Learning</h1>
                    <div className='dashboard__s1__card_into'>
                        <img className='dashboard__s1__card_into--icon' src={Logo_usa} alt="" />
                        <h1 className='dashboard__s1__card_into--title'>English</h1>
                    </div>
                </div>
            </div>

            <div className='dashboard__s2'>
                <img className='dashboard__s2--background' src={background_dash} alt="" />
                <img className='dashboard__s2--icon' src={man_dash} alt="" />
                <h1 className='dashboard__s2--text1'>Welcome back, Clarence</h1>
                <h1 className='dashboard__s2--text2'>Ta-da! You’re up to date.</h1>

            </div>

        </div>
        <div className='events'>
            <h1 className='events--Title'>Events</h1>
            <div className='Conteiner_Platform__events'>
                <div className='Platform__events__slide'>
                    <div className="events__slides">
                        <Slide easing="ease">
                            <div className="each-slide">
                                <img src={slide1} alt="" />
                                {/* <div style={{'backgroundImage': `url(${slide1})`}}>                </div> */}
                            </div>
                            </Slide>
                    </div>
                    <div className='events__slide_button'>
                        <a href="">SCIENCE</a>
                    </div>
                    <h1 className='events__slide-text1'>Youth Talent & <br/> Education</h1>
                    <h1 className='events__slide-text2'>May, 20</h1>
                </div>
                <div className='Platform__events_today'>
                    <h1 className='Platform__events_today--title'><span>EVENTS TODAY</span></h1>
                    <div className='Platform__events_today__card1'>
                        <div className='events_today__card__icon'> <img src={min_Card2} alt="" /></div>
                        <div className='events_today__card__content'>
                            <h1 className='events_today__card__content--hour'> 10:30AM</h1>
                            <h1 className='events_today__card__content--title'> Webinar: the basics of…</h1>
                        </div>
                    </div>
                    <div className='Platform__events_today__card2'>
                    <div className='events_today__card2__icon'> <img src={min_Card1} alt="" /></div>
                        <div className='events_today__card2__content'>
                            <h1 className='events_today__card2__content--hour'>2:15 PM</h1>
                            <h1 className='events_today__card2__content--title'>Team Building Activity</h1>
                        </div>
                    </div>

                </div>

            </div>

        </div>

        <div className='Conteiner_Platform__activity'>
            <div className='Platform__activity__head'>
                <h1 className='Platform__activity__head--title'><span>Activity</span></h1>
                <div className='Platform__activity__head--arrow'> <img src={arrow_r} alt="" /></div>
            </div>

            <div className={`Conteiner_Platform__activity__1 ${act === 1 ? "selected" : "" } ${act !==1 ? "notSelected":""}`} onClick={() => {acordeon(1);}}>
                <div className="Platform__activity__1_intro">
                    <div>
                        <img src={followers} alt="" />
                        <h1>You have new 5 followers including <span>Kathryn Crawford</span>  and <span>Piper Shaw</span></h1>
                    </div>
                    <div className='activity__1_arrow2'>
                        <img src={arrow_r2} alt="Platform__activity__1_arrow" />
                    </div>
                </div>
                <div className='Platform__activity__1_content'>
                    <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem</p>
                </div>
            </div>

            <div className={`Conteiner_Platform__activity__2 ${act === 2 ? "selected" : "" } ${act !==2 ? "notSelected":""}`} onClick={() => {acordeon(2);}}>
                <div className="Platform__activity__2_intro">
                    <div>
                        <img src={events} alt="" />
                        <h1>3 new events were added to your calendar</h1>
                    </div>
                    <div  className='activity__2_arrow2'>
                        <img src={arrow_r2} alt="Platform__activity__2_arrow" />
                    </div>
                </div>
                <div className='Platform__activity__2_content'>
                    <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem</p>
                </div>
            </div>

            <div className={`Conteiner_Platform__activity__3 ${act === 3 ? "selected" : "" } ${act !==3 ? "notSelected":""}`} onClick={() => {acordeon(3);}}>
                <div className="Platform__activity__3_intro">
                    <div>
                        <img src={assignments} alt="" />
                        <h1>You have 3 pending readings to complete</h1>
                    </div>
                    <div className='activity__3_arrow3'>
                        <img src={arrow_r2} alt="Platform__activity__3_arrow" />
                    </div>
                </div>
                <div className='Platform__activity__3_content'>
                    <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem</p>
                </div>
            </div>
        </div>

        <div className='onteiner_Platform__progress'>

        </div>

    </div>
  </React.Fragment>);
  }