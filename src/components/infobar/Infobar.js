import React from 'react';
import './Infobar.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

const Infobar = ()=>{
    return(
        <div className='infobar'>
            <div className='infobar-container'>
                <ul className='element-group'>
                    <li className='element first'><FacebookIcon fontSize='small'/></li>
                    <li className='element'><LinkedInIcon fontSize='small'/></li>
                    <li className='element'><WhatsAppIcon fontSize='small'/></li>
                </ul>
                <ul className='element-group'>
                    <li className='element'>+91 XXXXXXXXXX</li>
                    <li className='element'>pluto@pluto.in</li>
                </ul>
            </div>
        </div>
    );
};

export default Infobar;