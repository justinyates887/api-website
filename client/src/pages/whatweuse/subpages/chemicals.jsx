import React from "react";
import { Footer, NavHeader } from "../../../components";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export function Chemicals(){

    return(
        <>
        <NavHeader />
        <div id="header">
            <h1 className="title">
                Knowing What You're Swimming In Is Important...
            </h1>
            <h3 className="before">
                That's why we want to give you a detailed list of every chemical that could be used in
                keeping your pool clean.
            </h3>
        </div>


        
        <VerticalTimeline animate={true} lineColor={'lightBlue'}>
            <VerticalTimelineElement
                className="vertical-timeline-element"
                contentStyle={{ background: "#bfd8fa" }}
                contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
                date="Sanitizers"
            >
                <h3 className="vertical-timeline-element-title">Trichlor</h3>
                <p>
                    Trichlor — available in tablets or sticks — is a solid chlorine that contains 90% available chlorine. 
                    This makes it the highest chlorine content product you can purchase. Trichlor is best used for daily maintenance,
                    due to its high chlorine content and easy to use tablets. When placed in a chlorine float, the trichlor tablets
                    dissolve over time, steadily releasing chlorine into your pool. Another perk of trichlor is that it is a 
                    stabilized chlorine. Meaning it contains Cyanuric Acid, which protects chlorine from the sun’s UV rays, 
                    prolonging its effectiveness.
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element"
                date="Sanitizers"
            >
                <h3 className="vertical-timeline-element-title">Sodium Chloride</h3>
                <p>
                    Also known as common table salt, this chemical is typically added to pool water to help raise alkalinity and lower acidity.
                    It also helps speed up chemical oxidation and can help provide a good source of chlorine for the water. Newly installed pools
                    are required to be salt based systems, due to EPA regulations.
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="Sanitizers"
            >
                <h3 className="vertical-timeline-element-title">Sodium Dichlor</h3>
                <p>
                    Dichlor — available in granular form — is usually in granular form and contains 56% available chlorine.
                    Dichlor also contains Cyanuric Acid, making it a great choice for outdoor pools exposed to the sun. 
                    However, dichlor contains more Cyanuric Acid than trichlor, making it not the best option for daily use. 
                    On the flip side, if your pool water is low in Cyanuric Acid, using dichlor will quickly raise the level 
                    until it is back within its ideal range.
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="Oxidizers"
            >
                <h3 className="vertical-timeline-element-title">Calcium Hypochlorite</h3>
                <p>
                    Calcium Hypochlorite, better known as cal-hypo, is a fast-acting oxidizer that wipes out algae, bacteria, 
                    chloramides, and other contaminants, in addition to boosting chlorine levels. When using cal-hypo, be mindful 
                    of your pool water’s pH level. Cal-hypo will raise pH, so it’s best to start with a low pH before adding shock. 
                    Because of the high chlorine content in cal-hypo, you should wait at least 12-hours after shocking before getting 
                    in the water.
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="Oxidizers"
            >
                <h3 className="vertical-timeline-element-title">Calcium Hypochlorite:</h3>
                <p>
                    Besides the obvious lack of chlorine, chlorine-free shock differs slightly from chlorinated shock. 
                    Also called potassium monopersulfate, oxone, or potassium peroxymonosulfate, chlorine-free shock 
                    dissolves immediately in the water and leaves zero residue. This means you can get back into your 
                    pool almost immediately after administering this type of shock. Chlorine-free shock is also the only 
                    option to use if you use a bromine sanitizer. Because, if you recall from a few paragraphs above, 
                    chlorine and bromine cannot be combined.
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="Water Balancers"
            >
                <h3 className="vertical-timeline-element-title">pH Increaser & Decreaser:</h3>
                <p>
                    pH is an important chemical to have balanced in your pool water. If the pH level falls below 
                    7.2 ppm, use pH Up to increase the level. To decrease the level, if it gets above 7.6 ppm, 
                    pH Down will lower pH about three clicks, from 7.8 to 7.5, in 10,000 gallons of pool water.
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="Water Balancers"
            >
                <h3 className="vertical-timeline-element-title">Alkalinity Increaser</h3>
                <p>
                    Total Alkalinity is another key chemical in your pool water, and works in tandem with pH. 
                    If TA levels fall below 80 ppm, use Alkalinity Increaser to raise TA by about 10 ppm, in 10,000 gallons of pool water.
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="Water Balancers"
            >
                <h3 className="vertical-timeline-element-title">Calcium Hardness Increaser</h3>
                <p>
                    Calcium hardness refers to how soft or hard your pool water is. If the scale tips too far in either direction, 
                    your pool can be damaged. If the calcium hardness level dips below 150 pm, add Calcium Increaser. One pound of 
                    Calcium Increaser will raise CH by 10 ppm, but always refer to the packaging for the proper dosing amount
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="Water Balancers"
            >
                <h3 className="vertical-timeline-element-title">Chlorine Neutralizer</h3>
                <p>
                    A chlorine neutralizer will decrease the chlorine concentration in your pool if it gets too high. 
                    One pound of Thiosulfate will lower free chlorine levels by about 10 ppm, in 10,000 gallons of pool water.
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="Specialty Chemicals"
            >
                <h3 className="vertical-timeline-element-title">Algaecides</h3>
                <p>
                    Algaecides are either copper-based or non-metallic polymers. They help prevent algae growth and help 
                    eliminate algae if it does develop. Keeping pool shock and an algaecide on hand is the best way to 
                    stay ahead of any algae problems.
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="Specialty Chemicals"
            >
                <h3 className="vertical-timeline-element-title">Clarifiers & Flocculants</h3>
                <p>
                    Pool clarifiers help clear your pool water of dirt and debris by clumping particles together, making them 
                    easier to filter or vacuum out. Similarly, flocculants attract particles into heavy clumps that sink to the 
                    floor for vacuuming to waste.
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="Specialty Chemicals"
            >
                <h3 className="vertical-timeline-element-title">Filter Cleaners</h3>
                <p>
                    Filter cleaners are used to clean sand, D.E., and cartridge filters. These cleaners help your filter 
                    run smoothly by removing oils, minerals, metals, and other filter clogging debris.
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="Specialty Chemicals"
            >
                <h3 className="vertical-timeline-element-title">Phosphate Removers</h3>
                <p>
                    Products like PhosFree break down phosphates in the water. Phosphates are the main food source for algae.
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="Specialty Chemicals"
            >
                <h3 className="vertical-timeline-element-title">Stain/Scale Removers:</h3>
                <p>
                    Prevents or removes surface stains, scaling, and colored water due to minerals and metals in the water.
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="Specialty Chemicals"
            >
                <h3 className="vertical-timeline-element-title">Tile and Vinyl Cleaner</h3>
                <p>
                    Tile and vinyl cleaners remove oils and grease build up around the waterline, or on furniture, skimmers, diving boards, and slides.
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="Specialty Chemicals"
            >
                <h3 className="vertical-timeline-element-title">Enzymes</h3>
                <p>
                    Pool enzymes like Pool Perfect break down oils and other forms of non-living organic contaminants in your pool water.
                </p>
            </VerticalTimelineElement>

        </VerticalTimeline>
        <Footer />
        </>
    )
}