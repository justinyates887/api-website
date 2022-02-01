import React from "react";
import {Swiper, SwiperSlide, } from'swiper/react/swiper-react.js'
import { EffectCube, Mousewheel  } from 'swiper'

import 'swiper/swiper.scss'; // core Swiper
import "swiper/modules/effect-cube/effect-cube.scss";

export function GallerySlider(){
      return (
        <Swiper
        modules={[EffectCube, Mousewheel]}
        mousewheel={true}
        effect="cube"
        spaceBetween={30}
        >
            {[1, 2, 3].map((i, el) => {
                return (
                    <SwiperSlide>
                        <div className="container-general">
                            <div className={`gallery-wrap wrap-effect-${i}`}>
                                <div className="item"></div>
                                <div className="item"></div>
                                <div className="item"></div>
                                <div className="item"></div>
                                <div className="item"></div>
                            </div>
                        </div>
                    </SwiperSlide>
                );
            })}

        </Swiper>
    )
} 