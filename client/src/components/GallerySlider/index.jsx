import React from "react";
import {Swiper, SwiperSlide, } from'swiper/react/swiper-react.js'
import { EffectCube, Mousewheel  } from 'swiper'
//import { IKContext, IKImage } from 'imagekitio-react'

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
                    default:
                        count = 0;
                }
                return (
                    <SwiperSlide key={i}>
                        <div className="container-general">
                            <div className={`gallery-wrap wrap-effect`}>
                                <div className="item wp-caption" style={{backgroundImage: `url(${CDN + props.props[count]})`}}>
                                    { props.text ? 
                                        <div className="wp-caption-text">{props.text[count]}</div>
                                        : null                                                       
                                    }
                                </div>
                                <div className="item wp-caption" style={{backgroundImage: `url(${CDN + props.props[count + 1]})`}}>
                                    { props.text ? 
                                        <div className="wp-caption-text">{props.text[count + 1]}</div>
                                        : null                                                       
                                    }
                                </div>
                                <div className="item wp-caption" style={{backgroundImage: `url(${CDN + props.props[count + 2]})`}}>
                                    { props.text ? 
                                        <div className="wp-caption-text">{props.text[count + 2]}</div>
                                        : null                                                       
                                    }
                                </div>
                                <div className="item wp-caption" style={{backgroundImage: `url(${CDN + props.props[count + 3]})`}}>
                                    { props.text ? 
                                        <div className="wp-caption-text">{props.text[count + 3]}</div>
                                        : null                                                       
                                    }
                                </div>
                                <div className="item wp-caption" style={{backgroundImage: `url(${CDN + props.props[count + 4]})`}}>
                                    { props.text ? 
                                        <div className="wp-caption-text">{props.text[count + 4]}</div>
                                        : null                                                       
                                    }
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                );
            })}

        </Swiper>
    )
} 