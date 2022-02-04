import React from "react";
import {Swiper, SwiperSlide, } from'swiper/react/swiper-react.js'
import { EffectCube, Mousewheel  } from 'swiper'
import { IKContext, IKImage } from 'imagekitio-react'

import 'swiper/swiper.scss'; // core Swiper
import "swiper/modules/effect-cube/effect-cube.scss";

const CDN = 'https://ik.imagekit.io/associatedpoolsinc/API'

export function GallerySlider( props ){
      return (
        <Swiper
        modules={[EffectCube, Mousewheel]}
        mousewheel={true}
        effect="cube"
        spaceBetween={30}
        >
            {[1, 2, 3].map((i, el) => {
                let count;
                switch(i){
                    case i = 1:
                        count = 0;
                        break;
                    case i = 2:
                        count = 5;
                        break;
                    case i = 3:
                        count = 10;
                        break;
                }
                return (
                    <SwiperSlide key={i}>
                        <div className="container-general">
                            <div className={`gallery-wrap wrap-effect`}>
                                <div className="item" style={{backgroundImage: `url(${CDN + props.props[count]})`}}/>
                                <div className="item" style={{backgroundImage: `url(${CDN + props.props[count + 1]})`}}/>
                                <div className="item" style={{backgroundImage: `url(${CDN + props.props[count + 2]})`}}/>
                                <div className="item" style={{backgroundImage: `url(${CDN + props.props[count + 3]})`}}/>
                                <div className="item" style={{backgroundImage: `url(${CDN + props.props[count + 4]})`}}/>
                            </div>
                        </div>
                    </SwiperSlide>
                );
            })}

        </Swiper>
    )
} 