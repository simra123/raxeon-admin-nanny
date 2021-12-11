import React from "react"
import "react-step-progress-bar/styles.css"
import { ProgressBar, Step } from "react-step-progress-bar"
import './index.scss'
 
const Bar = () => {
    return (
        <>
      <ProgressBar
        percent={80}
        filledBackground="#025690"
      >
        <Step transition="scale">
          {({ accomplished }) => (
              <div>
              <h4 style={{border:'1px ', filter: `grayscale(${accomplished ? 0 : 80}%)`, backgroundColor:'#025690', padding:'10px 15px', borderRadius:'50%', color :'white'}}>1</h4>
             </div>
          )}
        
        </Step>
        <p className="progress-text d-none d-md-block">pending</p>

        <Step transition="scale">
          {({ accomplished }) => (
              <div>
              <h4 style={{border:'1px ', filter: `grayscale(${accomplished ? 0 : 80}%)`, backgroundColor:'#025690', padding:'10px 15px', borderRadius:'50%', color :'white'}}>2</h4>
             </div>
          )}
        
        </Step>
        <p className="progress-text d-none d-md-block">accepted</p>

        <Step transition="scale">
          {({ accomplished }) => (
              <div>
              <h4 style={{border:'1px ', filter: `grayscale(${accomplished ? 0 : 80}%)`, backgroundColor:'#025690', padding:'10px 15px', borderRadius:'50%', color :'white'}}>3</h4>
             </div>
          )}
        
        </Step>
        <p className="progress-text d-none d-md-block">assigned</p>

        <Step transition="scale">
          {({ accomplished }) => (
              <div>
              <h4 style={{border:'1px ', filter: `grayscale(${accomplished ? 0 : 80}%)`, backgroundColor:'#025690', padding:'10px 15px', borderRadius:'50%', color :'white'}}>4</h4>
             </div>
          )}
        
        </Step>
        <p className="progress-text d-none d-md-block">completed</p>

        <Step transition="scale">
          {({ accomplished }) => (
              <div>
              <h4 style={{border:'1px ', filter: `grayscale(${accomplished ? 0 : 80}%)`, backgroundColor:'#025690', padding:'10px 15px', borderRadius:'50%', color :'white'}}>5</h4>
             </div>
          )}
        
        </Step>
        <p className="progress-text d-none d-md-block">finished</p>

        {/* <Step transition="scale">
          {({ accomplished }) => (
            <img
              style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
              width="30"
              src="https://orig00.deviantart.net/493a/f/2017/095/5/4/raichu_icon_by_pokemonshuffle_icons-db4ryym.png"
            />
          )}
        </Step> */}
      </ProgressBar>

</>
    )
  }
export default Bar
