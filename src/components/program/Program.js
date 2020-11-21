import React from 'react'
import './Program.css'

function Program (){
return(
    <div className="program">
        <div className='program-container'>
        <h1 className="H1">Browse Through Our Programs</h1>
            <div className="courses">
                    <div className="sub">
                        <h3 className="H3">Mechanical</h3>
                        <h3 className="H3">Aeronautical</h3>   
                        <h3 className="H3">Civil</h3>
                        <h3 className="H3">CSE</h3>
                            
                    </div>
                    <div className="sub">
                        <h3 className="H3">Mechatronics</h3>
                        <h3 className="H3">Automobile</h3>   
                        <h3 className="H3">IT</h3>
                        <h3 className="H3">ECE</h3>

                    </div>
                    <div className="sub">
                        <h3 className="H3">Chemical</h3>   
                        <h3 className="H3">CCE</h3>
                        <h3 className="H3">EEE</h3>
                    </div>
            </div>
        </div>
    </div>
    )
}
export default Program