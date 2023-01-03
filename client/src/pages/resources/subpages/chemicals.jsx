import React from "react";
import { NavHeader, ResourceCard, SubPageNav } from "../../../components";

export function ChemicalMSDS() {
    return(
        <>
            <NavHeader />
            <div className="container">
            <SubPageNav />
            
            <div className="row mt-5 justify-content-md-center">
                <div className="col-md-3">
                    <ResourceCard 
                        link='https://ik.imagekit.io/associatedpoolsinc/API/whisperfloxf-maxeprofxf-vs-pumps-manual-english_i515Ce0S-S.pdf?ik-sdk-version=javascript-1.4.3&updatedAt=1646415408773'
                        image='https://ik.imagekit.io/associatedpoolsinc/API/whisperfloxf-maxeprofxf-vs-pumps-manual-english.pdf.thumb.319.319_ZznPCEsb5N.png?ik-sdk-version=javascript-1.4.3&updatedAt=1646415232643'
                        text='WhisperFloXF VS and Max-E-ProXF VS Manual-English'
                    />
                </div>
                <div className="col-md-3">
                    <ResourceCard 
                        link='https://ik.imagekit.io/associatedpoolsinc/API/whisperflo-DOE-manual-2021-english_2L8cBXMZS.pdf?ik-sdk-version=javascript-1.4.3&updatedAt=1646420868693'
                        image='https://ik.imagekit.io/associatedpoolsinc/API/whisperflo-DOE-manual-2021-english.pdf.thumb.319.319_zw2sGzGjss.png?ik-sdk-version=javascript-1.4.3&updatedAt=1646419169609'
                        text='WhisperFlo Manual - Enligh (2021 DOE Compliant)'
                    />
                </div>
                <div className="col-md-3">
                    <ResourceCard 
                        link='https://ik.imagekit.io/associatedpoolsinc/API/clean-clear-rp-cartridge-filter-manual-english_2ppAgolqM0W.pdf?ik-sdk-version=javascript-1.4.3&updatedAt=1646421148211'
                        image='https://ik.imagekit.io/associatedpoolsinc/API/clean-clear-rp-cartridge-filter-manual-english.pdf.thumb.319.319_kRunayvJW.png?ik-sdk-version=javascript-1.4.3&updatedAt=1646421146462'
                        text='Clean and Clear RP Cartridge Filter Manual - English'
                    />
                </div>
            </div>
            </div>

        </>
    )
}