import React from 'react'
import './Footer.css'
import TrendingFlatIcon from '@material-ui/icons/TrendingFlat';

function Footer (){
    return (
        <div className="footer">
            <div className="main">
                <div className=" content">
                    <h3 className="head">Top Products</h3>
                        <ul className="Ul">
                            <li className="list-element">Managed Website</li>
                            <li className="list-element">Manage Reputation</li>
                            <li className="list-element">Power Tools</li>
                            <li className="list-element">Marketing Services</li>
                        </ul>
                </div>
                <div className="content">
                    <h3  className="head">Quick Links</h3>
                        <ul className="Ul">
                            <li className="list-element">Jobs</li>
                            <li className="list-element">Brand Assets</li>
                            <li className="list-element">Investor Realtions</li>
                            <li className="list-element">Trems of Service</li>
                        </ul>
                </div>
                <div className="content">
                    <h3  className="head">Features</h3>
                        <ul className="Ul">
                            <li className="list-element">Jobs</li>
                            <li className="list-element">Brand Assets</li>
                            <li className="list-element">Investor Realtions</li>
                            <li className="list-element">Trems of Service</li>
                        </ul>
                </div>
                <div className="content">
                    <h3  className="head">Resoures</h3>
                        <ul className="Ul">
                            <li className="list-element">Guides</li>
                            <li className="list-element">Research</li>
                            <li className="list-element">Expercts</li>
                            <li className="list-element">Agencies</li>
                        </ul>
                </div>
                {/* <div className="content5">
                    <h3  className="head">NewsLetter</h3>
                        <ul className="Ul">
                            <li className="list-element">Stay Update with our latest</li>
                        </ul>
                       <div classname="containerInput"> <input className="input" placeholder="Enter Email Address"/><div className="Button"><TrendingFlatIcon classname="icon"/></div></div>
                </div> */}
            </div>
            <p className="text">Copyright ©2020 All rights reserved</p>
        </div>
    )
}
export default Footer;