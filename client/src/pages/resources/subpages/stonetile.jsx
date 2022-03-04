import React from "react";
import { NavHeader, ResourceCard, SubPageNav } from "../../../components";

export function StoneTile() {
    return(
        <>
            <NavHeader />
            <div className="container">
            <SubPageNav />
            
            <div className="row mt-5 justify-content-md-center">
                <div className="col-md-3">
                    <ResourceCard 
                        link='https://ik.imagekit.io/associatedpoolsinc/API/NPTTileCollection__1__11zon_Yg-Z-QwdWZ.pdf?ik-sdk-version=javascript-1.4.3&updatedAt=1646422597607'
                        image='https://ik.imagekit.io/associatedpoolsinc/API/tile-catalog-2022_rlX4ferpug.png?ik-sdk-version=javascript-1.4.3&updatedAt=1646422228022'
                        text='NPT Floor and Tile Catalog 2022'
                    />
                </div>
                <div className="col-md-3">
                    <ResourceCard 
                        link='https://ik.imagekit.io/associatedpoolsinc/API/NPTHardscapesBrochure_ojO9Dk9N-0.pdf?ik-sdk-version=javascript-1.4.3&updatedAt=1646422630021'
                        image='https://ik.imagekit.io/associatedpoolsinc/API/hardscapes-catalog-2022_C7BGgUhAouo.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646422614617'
                        text='NPT Hardscapes Catalog 2022'
                    />
                </div>
                <div className="col-md-3">
                    <ResourceCard 
                        link='https://ik.imagekit.io/associatedpoolsinc/API/NPTPoolFinishBrochure_s2amhOYb-jqa.pdf?ik-sdk-version=javascript-1.4.3&updatedAt=1646422765380'
                        image='https://ik.imagekit.io/associatedpoolsinc/API/pool-finish-catalog-2022_RXPF81tXN.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646422751110'
                        text='NPT Pool Finish Catalog 2022'
                    />
                </div>
            </div>

            <div className="row justify-content-md-center">
                <div className="col-md-3">
                    <ResourceCard 
                        link='https://ik.imagekit.io/associatedpoolsinc/API/NPTOutdoorElementsBrochure_648XhNhptj.pdf?ik-sdk-version=javascript-1.4.3&updatedAt=1646423121502'
                        image='https://ik.imagekit.io/associatedpoolsinc/API/outdoor-elements-2022_BsFvR69p_.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646423109051'
                        text='Outdoor Elements Catalog'
                    />
                </div>
                <div className="col-md-3">
                    <ResourceCard 
                        link='https://ik.imagekit.io/associatedpoolsinc/API/OutdoorLivingMagazine2019_11zon_clcONWOciFG.pdf?ik-sdk-version=javascript-1.4.3&updatedAt=1646423255824'
                        image='https://ik.imagekit.io/associatedpoolsinc/API/outdoor-living-catalog-2022_iB17qwVoI04v.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646423109665'
                        text='Outdoor Living Magazine'
                    />
                </div>
                <div className="col-md-3">
                    <ResourceCard 
                        link='https://ik.imagekit.io/associatedpoolsinc/API/NPTStoneScapes2016_GR5cbskv6N.pdf?ik-sdk-version=javascript-1.4.3&updatedAt=1646423116129'
                        image='https://ik.imagekit.io/associatedpoolsinc/API/stonescapes-catalog-2022_0t6ArE9Q5.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646423109650'
                        text='StoneScapes Catalog'
                    />
                </div>
            </div>

            <div className="row justify-content-md-center">
                <div className="col-md-3">
                    <ResourceCard 
                        link='https://ik.imagekit.io/associatedpoolsinc/API/NPTQuartzScapes_Uln4PvDCMuLX.pdf?ik-sdk-version=javascript-1.4.3&updatedAt=1646423411930'
                        image='https://ik.imagekit.io/associatedpoolsinc/API/quartzscapes-catalog-2022_tMWEtGk-p1.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646423408443'
                        text='QuartzScapes Catalog'
                    />
                </div>
            </div>

            </div>

        </>
    )
}