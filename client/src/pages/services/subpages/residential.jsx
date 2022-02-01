import React from 'react'
import { NavHeader, Footer, GallerySlider} from '../../../components/'
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { Meeting, Design, Contract, Excavation, Steel, Shotcrete, Tile, Concrete, Plaster, Equipment } from '../../../components/Icons'

import eOne from '../../../assets/img/eOne.webp'
import eTwo from '../../../assets/img/eTwo.webp'
import eThree from '../../../assets/img/eThree.webp'
import eFour from '../../../assets/img/eFour.webp'
import eFive from '../../../assets/img/eFive.webp'

export function Residential() {
    return (
        <>
            <NavHeader />

            <GallerySlider />

            <div className='row text-center m-5'>
                <div className='col'>
                  <h2>Take a look at the process</h2>
                </div>
            </div>

            <VerticalTimeline>

                <VerticalTimelineElement
                    className="vertical-timeline-element"
                    contentStyle={{ background: "#70aaf5" }}
                    contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
                    date="Step 1"
                    iconStyle={{ background: "#c4c2cf"}}
                    icon={ <Meeting /> }
                >
                    <h3 className="vertical-timeline-element-title">Free Consultation with Owner</h3>
                    <p>
                        Talk to Bryan about your wants and needs, ask quetions, and get a feel for us as a Company.
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element"
                    date="Step 2"
                    iconStyle={{ background: "#c4c2cf" }}
                    icon={ <Design /> }
                >
                    <h3 className="vertical-timeline-element-title">Design</h3>
                    <p>
                        We will design your pool using our VIP3D software, giving you the best possible idea of how your pool will look.
                        This design will include a full 3D walkthrough of your pool and home exterior.
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Step 3"
                    iconStyle={{ background: "#c4c2cf" }}
                    icon={ <Contract /> }
                >
                    <h3 className="vertical-timeline-element-title">Put it In Writing</h3>
                    <p>
                        After approving your desing, you will recieve a full, itemized quote. 
                        Once approved, we sign the contract and get you in the books!
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Phase 1"
                    iconStyle={{ background: "#70aaf5" }}
                    icon={ <Excavation /> }
                >
                    <h3 className="vertical-timeline-element-title">Excavation</h3>
                    <p>
                        Sometimes true beauty only comes from destruction...
                        The very first part of the job will be digging the hole to put your pool in.
                        We know its not pretty, but trust the process.
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="Phase 2"
                    iconStyle={{ background: "#70aaf5" }}
                    icon={ <Steel /> }
                >
                    <h3 className="vertical-timeline-element-title">Form & Steel</h3>
                    <p>
                        After the hole is dug, we start putting up the wooden forms and steel rebar
                        that will support the Gunnite shell.
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="Phase 3"
                    iconStyle={{ background: "#70aaf5" }}
                    icon={ <Shotcrete /> }
                >
                    <h3 className="vertical-timeline-element-title">Shotcrete</h3>
                    <p>
                        Also reffered to as Gunnite, this is where you will start seeing an actual pool.
                        The concrete shell goes up, giving your pool structure and shape.
                    </p>
                </VerticalTimelineElement>
                
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="Phase 4"
                    iconStyle={{ background: "#70aaf5" }}
                    icon={ <Tile /> }
                >
                    <h3 className="vertical-timeline-element-title">Tile & Coping</h3>
                    <p>
                        Once the shell is shot, your tile and coping will be put on. Now we're starting to see some style...
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="Phase 5"
                    iconStyle={{ background: "#70aaf5" }}
                    icon={ <Concrete /> }
                >
                    <h3 className="vertical-timeline-element-title">Concrete Decking</h3>
                    <p>
                        Next step is to pour the concrete decking around your pool where your furniture and ammeneties will go,
                        as well as the pad your equipment will go on.
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="Phase 6"
                    iconStyle={{ background: "#70aaf5" }}
                    icon={ <Plaster /> }
                >
                    <h3 className="vertical-timeline-element-title">Plaster</h3>
                    <p>
                        Getting super close... <br/> 
                        Plaster is the final polish for your pool, protecting the shell and giving it a stylized finish.
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="Phase 7"
                    iconStyle={{ background: "#70aaf5" }}
                    icon={ <Equipment /> }
                >
                    <h3 className="vertical-timeline-element-title">Equipment Hookup</h3>
                    <p>
                        You made it!<br/>
                        The final step is hooking up equipment, gas, and electrical. After that, we fill it on up, balance the chemicals, then...
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
                    date="Its time to swim!"
                    icon={ <Equipment /> }
                />

            </VerticalTimeline>
            <Footer />
        </>
    )
}
