import React from 'react'
import '../Components/Main.css'
import brand from '../assets/images/icon-brand-recognition.svg'
import detailed from '../assets/images/icon-detailed-records.svg'
import custom from '../assets/images/icon-fully-customizable.svg'



export default function Main(props) {

    function copy() {
        const el = document.createElement('input');
        el.value = document.getElementById('copy-text').href
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el); 
      }

    const  styling = {
        backgroundColor: "#2acfcf",
        height: "30px",
        width: "70px",
        position: "relative",
        float: "right",
        margin: "auto",
        borderRadius: "10px",
        color: "white",
        border: "none",
        cursor: "pointer"
    }

      function change(){
          return (
            <button className="copy-button" style={styling}>Copied</button>
          )
      }

    
      function show(org,short){
          if(org,short){
          return(
            <div className="short-link">
                <a className="original-link" href={org}>{(org.slice(0,30))}...</a>
                <a className="Api-link" id="copy-text" href={short}>{short}</a>
                <button className="copy-button" onClick={()=>{copy()}} >Copy</button>
            </div>
          )
          }
      }

      function error(){
          return(
              <>
            <input className="error" type="text" name="link" placeholder="Shorten a link here..." style={mystyle}/>
              <span style={{color:"red" , position:"relative" , top:"42px" , right:"580px" }}>Insert a link here!</span>
          </>
          )
      }

      const mystyle = {
        height:"45px",
        width: "570px",
        borderRadius: "10px",
        fontSize: "15px",
        left: "20px",
        border:"3px solid red",
      };

    return (
        <section id="Hero2">
                <div className="url-shorter">
                    <form onSubmit={props.getlink}>
                        {props.error ? error(): (<input className="text-short" type="text"  name="link" placeholder="Shorten a link here..."/>) }
                        {props.error ? (<button className="shorten" type="submit" style={{ top:"-52px", height: "50px",width: "181px",borderRadius:"10px",position: "relative",left: "600px",backgroundColor: "#2acfcf",color: "white",border: "none",cursor: "pointer"}}>shorten It!</button>)  : (<button className="shorten" type="submit">shorten It!</button>)}
                    </form>
                </div>
                {show(props.Original_link , props.short_link)}
            
                {/* <div className="short-link">
                    <a className="original-link" href={props.Original_link}>{props.Original_link}</a>
                    <button className="copy-button" >Copy</button>
                    <a className="Api-link" id="copy-text" href={props.short_link}>{props.short_link}</a>
                </div> */}
                    <div className="mid-text">
                        <h1>Advanced Statistics</h1>
                        <p>Track how your links are performing across the web with our advanced statistics dashboard</p>
                    </div>

                    <div className="boxes">
                        <div className="b1" >
                            <div className="logo-img">
                            <img src={brand} alt="" />
                            </div>
                            <h3>Brand Recognition</h3>
                            <p>Boost your brand recognition with each click. Generic links doesnt't mean a thing. Branded links help instil confidence in your content.</p>
                        </div>
                        <div className="b1" id="box2">
                            <div className="logo-img">
                            <img src={detailed} alt="" />
                            </div>
                            <h3>Detailed Records</h3>
                            <p>Gain insights into who is clicking your links. Knowing when and where people engage with you content helps inform better decision.</p>
                        </div>
                        <div className="b1" id="box3">
                            <div className="logo-img">
                            <img src={custom} alt="" />
                            </div>
                            <h3>Fully Customizable</h3>
                            <p>Improve brand awareness and content discoverability through customizable links. Supercharging audience engagement.</p>
                        </div>
                    </div>
                        <div className="line"></div>
                        <div className="Boost">
                            <h1>Boost Your links today</h1>
                            <li><a href="#">Get Started</a></li>
                        </div>
        </section>
                            )
                           
}


