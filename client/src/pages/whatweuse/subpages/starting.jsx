import React from "react";
import { Footer, NavHeader, Waves } from "../../../components";

// Eventually make this a component

export function Starting() {

    return(
        <>
        <NavHeader />

        <div className="container" style={{height: '100vh', width: '100vw'}}>
            <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel" style={{height: "100%"}}>
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="5" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="6" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="7" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="8" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="9" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="10" aria-label="Slide 3"></button>
                </div>

                <div className="carousel-inner top-50 start-50 translate-middle">

                    <div className="carousel-item active" data-bs-interval="15000">
                        <div class="profile-card card-blog">
                            <div class="card-image">
                                <img class="img-responsive" alt="Associated Pools Inc Logo" src="https://ik.imagekit.io/associatedpoolsinc/API/Associated_Pools_Inc._lyJHeVRxn.gif?ik-sdk-version=javascript-1.4.3&updatedAt=1652470757516"/>
                                <div class="ripple-cont"></div>
                            </div>
                            <div class="table mt-5">
                                <h6 class="category text-info">Your Equipment Matters</h6>
                                <p class="card-description mt-4"> 
                                    That's why we give it all to you from the get-go. Your pool will come equipped, from the start, with the best of the best.
                                    Here at Associated Pools, we only trust Pentair equipment. They are proven to be long lasting, efficient, and keep your pool 
                                    in the best possible condition. Take a look at all of the equipment that will come standard in your pool!
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item" data-bs-interval="15000">
                        <div class="profile-card card-blog">
                            <div class="card-image">
                                <img class="img-responsive" alt="Intelliflow VSF Pump" src="https://ik.imagekit.io/associatedpoolsinc/API/equipment/vsf-ed_NMK61arqv.png?ik-sdk-version=javascript-1.4.3&updatedAt=1673446314487"/>
                                    <div class="card-caption">IntelliFlo VSF</div>
                                <div class="ripple-cont"></div>
                            </div>
                            <div class="table mt-5">
                                <h6 class="category text-info">Energy Efficient with a Punch</h6>
                                <p class="card-description mt-4"> 
                                    The Pentair WhisperFlo VSF is the top of the line swimming pool pump. Its variable speed allows for automatic adjustments of flow, saving you energy costs 
                                    while keeping your pool circulating. Standard in every pool, this pump adjusts to changes in flow conditions to maintain its preprogrammed flow rate to run 
                                    optimally throughout the entire filtration cycle. It's like having cruise control for your pump.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item" data-bs-interval="15000">
                        <div class="profile-card card-blog">
                            <div class="card-image">
                                <img class="img-responsive" alt="MasterTemp Heater" src="https://ik.imagekit.io/associatedpoolsinc/API/equipment/mt-ed_xAf18wYP_.png?ik-sdk-version=javascript-1.4.3&updatedAt=1673446450342"/>
                                    <div class="card-caption">MasterTemp</div>
                                <div class="ripple-cont"></div>
                            </div>
                            <div class="table mt-5">
                                <h6 class="category text-info">Hot Diggity Dog</h6>
                                <p class="card-description mt-4"> 
                                Keep your pool warm and ready to go, even on those chilly days. Save money and energy with the MasterTemp High-Performance Heater. Already known as being dependable and efficient, MasterTemp now offers smart 
                                features and an optional energy-saving Smart Bypass Valve Kit to help you ensure your pool is ready whenever you are.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item" data-bs-interval="15000">
                        <div class="profile-card card-blog">
                            <div class="card-image">
                                <img class="img-responsive" alt="Intellichlor Salt Cell" src="https://ik.imagekit.io/associatedpoolsinc/API/equipment/chlor-ed_lOMADhnc1.png?ik-sdk-version=javascript-1.4.3&updatedAt=1673446523580"/>
                                    <div class="card-caption">IntelliChlor Salt Cell</div>
                                <div class="ripple-cont"></div>
                            </div>
                            <div class="table mt-5">
                                <h6 class="category text-info">Chlorine is a Thing of the Past</h6>
                                <p class="card-description mt-4"> 
                                IntelliChlor uses common table salt to produce all the chlorine a pool needs, safely, effectively and automatically. 
                                It provides the same sanitation performance as harsh chlorine additives without the drawbacks. There’s no need to buy, handle and store chemicals.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item" data-bs-interval="15000">
                        <div class="profile-card card-blog">
                            <div class="card-image">
                                <img class="img-responsive" alt="EZ Touch Automation panel and controls" src="https://ik.imagekit.io/associatedpoolsinc/API/equipment/ez-ed_VRMk2TQJi.png?ik-sdk-version=javascript-1.4.3&updatedAt=1673446473380"/>
                                    <div class="card-caption">EZ Touch Automation</div>
                                <div class="ripple-cont"></div>
                            </div>
                            <div class="table mt-5">
                                <h6 class="category text-info">All at the Touch of a Button</h6>
                                <p class="card-description mt-4"> 
                                The EasyTouch Control System eliminates the inconvenience of trips to your pool equipment pad, memorizing operating sequences, opening and closing valves and resetting 
                                time clocks and thermostats. With push-button operation and clear, intuitive instructions and displays, your EasyTouch system includes all circuitry and fully 
                                programmable controls in a single Load Center installed near your pool or spa equipment. This avoids expensive wiring and installation costs to make an EasyTouch system affordable for any budget.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item" data-bs-interval="15000">
                        <div class="profile-card card-blog">
                            <div class="card-image">
                                <img class="img-responsive" alt="Pentair Legend" src="https://ik.imagekit.io/associatedpoolsinc/API/equipment/legend-ed_EBH5uLJ-d.png?ik-sdk-version=javascript-1.4.3&updatedAt=1673446509052"/>
                                    <div class="card-caption">Pentair Legend</div>
                                <div class="ripple-cont"></div>
                            </div>
                            <div class="table mt-5">
                                <h6 class="category text-info">Why Waste Your Time</h6>
                                <p class="card-description mt-4"> 
                                Kreepy Krauly Legend pressure side cleaner features a highly efficient booster pump for optimum power and unimpeded surface skimming, plus a large intake throat to handle large and small debris.
                                It will keep the bottom of your pool clean from leaves, dirt, and debris.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item" data-bs-interval="15000">
                        <div class="profile-card card-blog">
                            <div class="card-image">
                                <img class="img-responsive" alt="Clean and Clear Plus Filter" src="https://ik.imagekit.io/associatedpoolsinc/API/equipment/ccp-ed_M9_4QBy1F.png?ik-sdk-version=javascript-1.4.3&updatedAt=1673446488523"/>
                                    <div class="card-caption">Clean & Clear Plus</div>
                                <div class="ripple-cont"></div>
                            </div>
                            <div class="table mt-5">
                                <h6 class="category text-info">Four is More</h6>
                                <p class="card-description mt-4"> 
                                Clean & Clear Plus Cartridge Pool Filters have a corrosion-resistant, injection-molded, fiberglass-reinforced, polypropylene filter tank featuring superior strength and reliability. The cartridge
                                 assembly uses four, nonwoven, polyester cartridges. There is no need for backwashing. Simply remove the cartridges and rinse with a garden hose, reducing water consumption.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item" data-bs-interval="15000">
                        <div class="profile-card card-blog">
                            <div class="card-image">
                                <img class="img-responsive" alt="Intellibrite 5G Color Chaning LED Light" src="https://ik.imagekit.io/associatedpoolsinc/API/equipment/brite-ed_9qmdU9Be1.png?ik-sdk-version=javascript-1.4.3&updatedAt=1673446434676"/>
                                    <div class="card-caption">IntelliBrite 5G LED</div>
                                <div class="ripple-cont"></div>
                            </div>
                            <div class="table mt-5">
                                <h6 class="category text-info">Add Some Color to your Life</h6>
                                <p class="card-description mt-4"> 
                                LED technology is the wave of the future in energy efficiency, lifetime value, quality of light and the ability to control it. 
                                With its custom reflector and innovative lens design, the IntelliBrite 5G light is one of the most efficient underwater lights available. 
                                Choose from 5 predetermined fixed colors (blue, green, magenta, white and red) or 7 popular preprogrammed "color shows"
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item" data-bs-interval="15000">
                        <div class="profile-card card-blog">
                            <div class="card-image">
                                <img class="img-responsive" alt="NPT Tile Catalog" src="https://ik.imagekit.io/associatedpoolsinc/API/equipment/tile_FLNKSr6IRl.png?ik-sdk-version=javascript-1.4.3&updatedAt=1673452904155"/>
                                    <div class="card-caption">NPT Tiles</div>
                                <div class="ripple-cont"></div>
                            </div>
                            <div class="table mt-5">
                                <h6 class="category text-info">Add Some Flare</h6>
                                <p class="card-description mt-4"> 
                                    Your pool tile will go around the inside edge of your pool, at the water line. NPT has the widest selection of readily available tiles. Make your pool truly yours. Check out the catalog below for available tiles!
                                </p>
                                <a href="/resources/stoneandtile" className="button mt-5">
                                    <span>Catalog</span>
                                    <i></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item" data-bs-interval="15000">
                        <div class="profile-card card-blog">
                            <div class="card-image">
                                <img class="img-responsive" alt="NPT Pool Finish Catalog" src="https://ik.imagekit.io/associatedpoolsinc/API/equipment/finish_Ty8q4o1_B2.png?ik-sdk-version=javascript-1.4.3&updatedAt=1673452930303"/>
                                    <div class="card-caption">NPT Finishes</div>
                                <div class="ripple-cont"></div>
                            </div>
                            <div class="table mt-5">
                                <h6 class="category text-info">Not Just an Edge</h6>
                                <p class="card-description mt-4"> 
                                    Make your pool come to life with coping and stone finishes. After all, what surrounds the pool is just as important as the pool itself. Check out 
                                    the wide selection of stone available from NPT.
                                </p>
                                <a href="/resources/stoneandtile" className="button mt-5">
                                    <span>Catalog</span>
                                    <i></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item" data-bs-interval="15000">
                        <div class="profile-card card-blog">
                            <div class="card-image">
                                <img class="img-responsive" alt="NPT Quartz Finish Catalog" src="https://ik.imagekit.io/associatedpoolsinc/API/equipment/quartz_JenvM2veX.png?ik-sdk-version=javascript-1.4.3&updatedAt=1673452916968"/>
                                    <div class="card-caption">QuartzScapes Plaster</div>
                                <div class="ripple-cont"></div>
                            </div>
                            <div class="table mt-5">
                                <h6 class="category text-info">Not Just Another Pool</h6>
                                <p class="card-description mt-4"> 
                                    With QuartzScapes pool finishes, you can really make your pool pop. Straying from the normal white-bottom pools, you can chose a wide variety of colors to fit 
                                    the vibe you are going for. Take a look at some of the options QuartzScapes has to offer!
                                </p>
                                <a href="/resources/stoneandtile" className="button mt-5">
                                    <span>Catalog</span>
                                    <i></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                

                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                </div>
            </div>

            
        <Waves />

        <Footer 
            title="Only the Brands You Trust"
            text="At Associated Pools Inc, we believe in using the best products to ensure the best results. 
                That's why we only use Pentair products for our clients' swimming pools. Pentair is a leading manufacturer 
                of high-quality pool and spa equipment, known for their innovative and reliable products. By choosing 
                Pentair, we can guarantee that your pool is getting the best treatment and maintenance possible."
        />
        </>
    )
}