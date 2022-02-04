import React from 'react'
import { NavHeader, Footer, GallerySlider} from '../../../components'

export function Commercial() {
    return (
        <>
        <NavHeader />

        <GallerySlider props={['/eOne_CM-_QTwKgp.webp', '/eTwo_YawzE7Kust.webp', '/eThree_t6LSSU8H1.webp', '/eFour_mbSppmutVWn.webp', '/eFive_uEY1l5_3Rv.webp']}/>

        <Footer />     
        </>
    )
}
