import React from "react";
import { NavHeader, ResourceCard, SubPageNav } from "../../../components";

export function Equipment() {
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
                <div className="row mt-5 justify-content-md-center">
                    <div className="col-md-3">
                        <ResourceCard 
                            link='https://ik.imagekit.io/associatedpoolsinc/API/brouchures/ccp-pdf_OMu4NlFX_.pdf?ik-sdk-version=javascript-1.4.3&updatedAt=1673542901858'
                            image='https://ik.imagekit.io/associatedpoolsinc/API/brouchures/ccp-png_Kzy9_M6nN.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1673543298265'
                            text='Clean & Clear Plus Manual-English'
                        />
                    </div>
                    <div className="col-md-3">
                        <ResourceCard 
                            link='https://ik.imagekit.io/associatedpoolsinc/API/brouchures/mt-pdf_kMZrpH-dw.pdf?ik-sdk-version=javascript-1.4.3&updatedAt=1673542903140'
                            image='https://ik.imagekit.io/associatedpoolsinc/API/brouchures/mt-png_d6jTcILoZ.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1673543298751'
                            text='MasterTemp Install Guide- Enligh'
                        />
                    </div>
                    <div className="col-md-3">
                        <ResourceCard 
                            link='https://ik.imagekit.io/associatedpoolsinc/API/brouchures/ic-pdf_4StV1hYig.pdf?ik-sdk-version=javascript-1.4.3&updatedAt=1673542901528'
                            image='https://ik.imagekit.io/associatedpoolsinc/API/brouchures/ic-png_1__VVw5Dwlcw.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1673544345156'
                            text='IC Power Center Manual - English'
                        />
                    </div>
                </div>
                <div className="row mt-5 justify-content-md-center">
                    <div className="col-md-3">
                        <ResourceCard 
                            link='https://ik.imagekit.io/associatedpoolsinc/API/brouchures/legend-pdf_7IZZgoG0V.pdf?ik-sdk-version=javascript-1.4.3&updatedAt=1673542901735'
                            image='https://ik.imagekit.io/associatedpoolsinc/API/brouchures/legend-png_i9xEBjWDZ.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1673543298704'
                            text='Pentair Legend Manual-English'
                        />
                    </div>
                    <div className="col-md-3">
                        <ResourceCard 
                            link='https://ik.imagekit.io/associatedpoolsinc/API/brouchures/brite-pdf_02_zv-1bR.pdf?ik-sdk-version=javascript-1.4.3&updatedAt=1673542902963'
                            image='https://ik.imagekit.io/associatedpoolsinc/API/brouchures/brite-png_1__3jwUvjYIA.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1673544438733'
                            text='IntelliBrite 5G Manual - Enligh'
                        />
                    </div>
                </div>
            </div>

        </>
    )
}