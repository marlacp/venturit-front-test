/* eslint-disable jsx-a11y/alt-text */

import React, {useState} from 'react';
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
import confirm_back from '../../assets/static/IMG/Oval + Oval + Oval Mask.png';
import assignments from '../../assets/static/IMG/ic-assignments.png';
//slide
import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';
//progress
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CircularProgress, {
  circularProgressClasses,
} from '@mui/material/CircularProgress';

export const ContentPlatform = (props) => {

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
        {/* PROGRESSS************************************************** */}
        <div className='conteiner_Platform__progress'>
            <div className='progress__overview'>
                <h1 className='progress__overview--title'>Progress overview</h1>

                <div className='progress__overview_circle'>
                    <Box sx={{ position: 'relative' }}>
                    <CircularProgress
                        variant="determinate"
                        sx={{
                        color: (theme) =>
                            theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
                        }}
                        size={130}
                        thickness={4}
                        {...props}
                        value={100}
                    />
                    <CircularProgress
                        variant="determinate"
                        disableShrink
                        value={40}
                        sx={{
                        color: (theme) => (theme.palette.mode === 'light' ? '#FED200' : '#FED200'),
                        animationDuration: '550ms',
                        position: 'absolute',
                        left: 0,
                        [`& .${circularProgressClasses.circle}`]: {
                            strokeLinecap: 'round',
                        },
                        }}
                        size={130}
                        thickness={4}
                        {...props}
                    />
                    </Box>

                    <h1 className='progress__overview_circle--porcent'>40%</h1>
                </div>

                <div className='progress__overview_card'>

                        <div className='progress__overview_card__complete'>
                            <div className='progress__overview_card__completeT'>
                                <div></div>
                                <h1> Completed</h1>
                            </div>
                            <h1 className='progress__overview_card__complete--number'>20 <span>hours</span></h1>
                        </div>

                        <div className='progress__overview_card__left'>
                            <div className='progress__overview_card__left_title'>
                                <div></div>
                                <h1>Left to go</h1>
                            </div>
                            <h1 className='progress__overview_card__left--number'>30 <span>hours</span></h1>
                        </div>
                        <div className='progress_line_vertical'>

                        </div>

                </div>

            </div>
            <div className='progress__cards'>
                <div className='progress__cards1'>
                    <h1 className='progress__cards1--title'>
                        <span>Progress</span>
                    </h1>
                </div>

                <div className='progress__cards2'>
                    <div className='progress__cards2__cont1'>

                        <div className='progress__cards2__cont1_webinars'>
                            <h1 className='progress__cards2__cont1_webinars--title'>Total <br/> Webinars</h1>
                            <h1 className='progress__cards2__cont1_webinars--number'> 9 </h1>
                        </div>

                        <div className='progress__cards2__cont1_pending'>
                            <h1 className='progress__cards2__cont1_pending--title'>Pending <br/> Assignments</h1>
                            <h1 className='progress__cards2__cont1_pending--number'> 0 </h1>
                        </div>

                        <div className='progress__cards2__cont1_tunits'>
                            <h1 className='progress__cards2__cont1_tunits--title'>Total <br/> Units</h1>
                            <h1 className='progress__cards2__cont1_tunits--number'> 5 </h1>
                        </div>
                    </div>

                    <div className='progress__cards2__cont2'>

                        <div className='progress__cards2__cont2_readings'>
                            <h1 className='progress__cards2__cont2_readings--title'>Total Readings</h1>
                            <h1 className='progress__cards2__cont2_readings--number'> 14 </h1>
                        </div>

                        <div className='progress__cards2__cont2_videos'>
                            <h1 className='progress__cards2__cont2_videos--title'>Total Videos</h1>
                            <h1 className='progress__cards2__cont2_videos--number'> 5 </h1>
                        </div>

                        <div className='cont1_empty'>

                        </div>

                    </div>

                </div>

                <div className='progress__cards3'>
                    <img className='progress__cards3--img' src={confirm_back} alt="" />
                    <h1 className='progress__cards3--text'>Confirm your account details <span>Please confirm your email and phone number.</span></h1>

                </div>

            </div>

        </div>

    </div>
  </React.Fragment>);
  }