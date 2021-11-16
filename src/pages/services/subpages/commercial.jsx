import React from 'react'
import { NavHeader, Footer} from '../../../components'
import eOne from '../../../assets/img/eOne.webp'
import eTwo from '../../../assets/img/eTwo.webp'
import eThree from '../../../assets/img/eThree.webp'
import eFour from '../../../assets/img/eFour.webp'
import eFive from '../../../assets/img/eFive.webp'

export function Commercial() {
    return (
        <>
        <NavHeader />

            <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
                </div>

                <div className="carousel-inner">

                    <div className="carousel-item active" data-bs-interval="10000">
                        <img src={ eOne } className="d-block w-100 carousel-img" alt="Close up of a fountain." />
                        <div className="carousel-caption">
                            <h5>No More Guesswork</h5>
                            <p>You can rely on us to deliver a magnificent product to your client.</p>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="10000">
                        <img src={ eTwo } className="d-block w-100 carousel-img" alt="..." />
                        <div className="carousel-caption carousel-img">
                            <h5>Tired of messy jobsites?</h5>
                            <p>Us too. That's why we make sure our mess is cleaned up, every day.</p>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="10000">
                        <img src={ eThree } className="d-block w-100 carousel-img" alt="..." />
                        <div className="carousel-caption carousel-img">
                            <h5>Oh, you work with them?</h5>
                            <p>Yup. J.E.Dunn, Ashner Construction, Brinkman, Don Julian, just to name a few.</p>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="10000">
                        <img src={ eFour } className="d-block w-100 carousel-img" alt="..." />
                        <div className="carousel-caption carousel-img">
                            <h5>You've got deadlines...</h5>
                            <p>We'll meet them.</p>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="10000">
                        <img src={ eFive } className="d-block w-100 carousel-img" alt="..." />
                        <div className="carousel-caption carousel-img">
                            <h5>Like what you see?</h5>
                            <p>Give us a <a href="/contact">shout</a> or keep scrolling for more of our work.</p>
                        </div>
                    </div>

                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        <Footer />     
        </>
    )
}
