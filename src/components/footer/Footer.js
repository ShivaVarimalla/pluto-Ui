import React from 'react'
import './Footer.css'

function Footer (){
    return (
        <div className="footer">
            <div className="main">
                <div className=" content1">
                    <h3 className="head">Top Products</h3>
                        <ul className="Ul">
                            <li>Managed Website</li>
                            <li>Manage Reputation</li>
                            <li>Power Tools</li>
                            <li>Marketing Services</li>
                        </ul>
                </div>
                <div className="content2">
                    <h3  className="head">Quick Links</h3>
                        <ul className="Ul">
                            <li>Jobs</li>
                            <li>Brand Assets</li>
                            <li>Investor Realtions</li>
                            <li>Trems of Service</li>
                        </ul>
                </div>
                <div className="content3">
                    <h3  className="head">Features</h3>
                        <ul className="Ul">
                            <li>Jobs</li>
                            <li>Brand Assets</li>
                            <li>Investor Realtions</li>
                            <li>Trems of Service</li>
                        </ul>
                </div>
                <div className="content3">
                    <h3  className="head">Resoures</h3>
                        <ul className="Ul">
                            <li>Guides</li>
                            <li>Research</li>
                            <li>Expercts</li>
                            <li>Agencies</li>
                        </ul>
                </div>
                <div className="content3">
                    <h3  className="head">NewsLetter</h3>
                        <ul className="Ul">
                            <li>Stay Update with our latest</li>
                        </ul>
                        <input className="input" placeholder="Enter Email Address"/><button className="Button">Enter</button>
                </div>
            </div>
        </div>
    )
}
export default Footer;