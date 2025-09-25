import React from 'react'
import './Program.css'
import program_1 from '../../assets/portfolio.png'
import program_2 from '../../assets/aiproject.png'
import program_3 from '../../assets/banner.png'
import program_icon_1 from '../../assets/program-icon-3.png'
import program_icon_2 from '../../assets/program-icon-1.png'
import program_icon_3 from '../../assets/program-icon-2.png'

function Program() {
  return (
    <div className='programs '>
        <div className="program">
            <img src={program_1} alt="" />
            <div className="caption">
                <img src={program_icon_1} alt="" />
                <p>🎨 WorkShowcase</p>
            </div>
        </div>
        <div className="program">
            <img src={program_2} alt="" />
            <div className="caption">
                <img src={program_icon_2} alt="" />
                <p>🤖 HelpBot</p>
            </div>
        </div>
        <div className="program">
            <img src={program_3} alt="" />
            <div className="caption">
                <img src={program_icon_3} alt="" />
                <p>⏳DealTimer</p>
            </div>
        </div>
    </div>
  )
}

export default Program
