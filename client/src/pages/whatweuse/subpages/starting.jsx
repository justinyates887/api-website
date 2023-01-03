import React from "react";
import {Swiper, SwiperSlide, } from'swiper/react/swiper-react.js'
import { EffectCube, Mousewheel  } from 'swiper'
import { Footer, NavHeader } from "../../../components";

export function Starting() {

    const selectHotspot = (e) => {
        const clickedHotspot = e.target.parentElement;
        const container = clickedHotspot.parentElement;
        
        const hotspots = container.querySelectorAll(".lg-hotspot"); 
        hotspots.forEach(hotspot => {
          if (hotspot === clickedHotspot) {
            hotspot.classList.toggle("lg-hotspot--selected");
          } else {
            hotspot.classList.remove("lg-hotspot--selected");
          }
        });
      }

    return(
        <>
        <NavHeader />

        <Swiper
            modules={[EffectCube, Mousewheel]}
            mousewheel={true}
            effect="cube"
            spaceBetween={30}
        >

        <SwiperSlide>
            <div className="container mt-5" id="starting">
            <div className="lg-container">
                <img className="lg-image" alt="Equipment pad"
                src="https://ik.imagekit.io/associatedpoolsinc/API/IMG_0865.HEIC_YkTCC_MfM_KhVogF137ev.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1646664038334" />

                <div style={{top: "22.5%", left: "25.5%"}} className="lg-hotspot lg-hotspot--top-left">
                <div className="lg-hotspot__button" onClick={selectHotspot}></div>
                <div className="lg-hotspot__label">
                    <h4>Robot Thingy</h4>
                    <p>An automatic pool cleaning robot to help keep you pool spotless!</p>
                </div>
                </div>

                <div style={{top: "28%", left: "74%"}} className="lg-hotspot lg-hotspot--top-right">
                <div className="lg-hotspot__button" onClick={selectHotspot}></div>
                <div className="lg-hotspot__label">
                    <h4>Intellicenter</h4>
                    <p>
                        Your entire equipment pad will be at the touch of your fingers.
                    </p>
                </div>
                </div>

                <div style={{top: "43.5%", left: "57%"}} className="lg-hotspot lg-hotspot--top-right">
                <div className="lg-hotspot__button" onClick={selectHotspot}></div>
                <div className="lg-hotspot__label">
                    <h4>Cartridge Filter</h4>
                    <p>This contraption catches all of the leaves that fall into your pool, and its easy to clean!</p>
                </div>
                </div>

                <div style={{top: "62%", left: "20%"}} className="lg-hotspot lg-hotspot--bottom-left">
                <div className="lg-hotspot__button" onClick={selectHotspot}></div>
                <div className="lg-hotspot__label">
                    <h4>Raypack Heater</h4>
                    <p>Sometimes you wanna swim in November. That's cool, this heater will keep your water as warm as you want!</p>
                </div>
                </div>

                <div style={{top: "72%", left: "82%"}} className="lg-hotspot lg-hotspot--bottom-right">
                <div className="lg-hotspot__button" onClick={selectHotspot}></div>
                <div className="lg-hotspot__label">
                    <h4>Pool Pump</h4>
                    <p>This little guy circulates all of the water in your pool.</p>
                </div>
                </div>

                <div style={{top: "78%", left: "67%"}} className="lg-hotspot lg-hotspot--bottom-right">
                <div className="lg-hotspot__button" onClick={selectHotspot}></div>
                <div className="lg-hotspot__label">
                    <h4>Booster Pump</h4>
                    <p>This pump will help water get to your accessories.S</p>
                </div>
                </div>

                <div style={{top: "85%", left: "30%"}} className="lg-hotspot lg-hotspot--bottom-right">
                <div className="lg-hotspot__button" onClick={selectHotspot}></div>
                <div className="lg-hotspot__label">
                    <h4>Intellichlor</h4>
                    <p>This converts salt into chlorine to keep your pool algea free.</p>
                </div>
                </div>


            </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="container mt-5" id="starting">
            <div className="lg-container">
                <img className="lg-image" alt="Swimming pool at night"
                src="https://ik.imagekit.io/associatedpoolsinc/API/download_z8OweNfo3p.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646749284392" />

                <div style={{top: "81%", left: "25.5%"}} className="lg-hotspot lg-hotspot--top-left">
                <div className="lg-hotspot__button" onClick={selectHotspot}></div>
                <div className="lg-hotspot__label">
                    <h4>Coping</h4>
                    <p>A beautiful, and customizable edging for your pool.</p>
                </div>
                </div>

                <div style={{top: "28%", left: "74%"}} className="lg-hotspot lg-hotspot--top-right">
                <div className="lg-hotspot__button" onClick={selectHotspot}></div>
                <div className="lg-hotspot__label">
                    <h4>Intellicenter</h4>
                    <p>
                        Your entire equipment pad will be at the touch of your fingers.
                    </p>
                </div>
                </div>

                <div style={{top: "43.5%", left: "57%"}} className="lg-hotspot lg-hotspot--top-right">
                <div className="lg-hotspot__button" onClick={selectHotspot}></div>
                <div className="lg-hotspot__label">
                    <h4>Cartridge Filter</h4>
                    <p>This contraption catches all of the leaves that fall into your pool, and its easy to clean!</p>
                </div>
                </div>

                <div style={{top: "75%", left: "37%"}} className="lg-hotspot lg-hotspot--bottom-left">
                <div className="lg-hotspot__button" onClick={selectHotspot}></div>
                <div className="lg-hotspot__label">
                    <h4>Spa</h4>
                    <p>Who doesn't love spa time?</p>
                </div>
                </div>

                <div style={{top: "72%", left: "82%"}} className="lg-hotspot lg-hotspot--bottom-right">
                <div className="lg-hotspot__button" onClick={selectHotspot}></div>
                <div className="lg-hotspot__label">
                    <h4>Pool Pump</h4>
                    <p>This little guy circulates all of the water in your pool.</p>
                </div>
                </div>

                <div style={{top: "78%", left: "67%"}} className="lg-hotspot lg-hotspot--bottom-right">
                <div className="lg-hotspot__button" onClick={selectHotspot}></div>
                <div className="lg-hotspot__label">
                    <h4>Booster Pump</h4>
                    <p>This pump will help water get to your accessories.S</p>
                </div>
                </div>

                <div style={{top: "87%", left: "50%"}} className="lg-hotspot lg-hotspot--bottom-right">
                <div className="lg-hotspot__button" onClick={selectHotspot}></div>
                <div className="lg-hotspot__label">
                    <h4>LED Globrite Pool Lights</h4>
                    <p>Smart, app controlled, LED pool lights to make your pool shine.</p>
                </div>
                </div>


            </div>
            </div>
        </SwiperSlide>

        </Swiper>

        <Footer />
        </>
    )
}