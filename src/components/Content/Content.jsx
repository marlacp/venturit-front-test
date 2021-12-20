import React from 'react';
import './../../assets/styles/Content.css';
import {ContentPlatform} from '../Content/ContentPlatform';
import {SideNav} from '../Content/SideNav';
export const Content = () => {
    return (
        <div className="Container__Platform">
            <nav className='Container__Platform__SideNav'>
                <SideNav/>
            </nav>

            <div className='Container__Platform__Conten'>
                <ContentPlatform/>
            </div>
        </div>
    );
};

export default Content;