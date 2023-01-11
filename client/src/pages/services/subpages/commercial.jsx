import React from 'react'
import { NavHeader, Footer, GallerySlider} from '../../../components'

export function Commercial() {
    return (
        <>
        <NavHeader />

        <GallerySlider props={['/eOne_CM-_QTwKgp.webp', '/eTwo_YawzE7Kust.webp', '/eThree_t6LSSU8H1.webp', '/eFour_mbSppmutVWn.webp', '/eFive_uEY1l5_3Rv.webp']}/>

        <div className="center text-center mt-5 mb-5" style={{width: '80%'}}>
            <div className="card-body text-center">
                <h2 className="card-title">Subcontractors Can Be A Pain</h2>
                <p className="card-text mt-3">
                    That is why we strive to build a reputation of quality, timeliness, cleanliness, and value expected from our
                    GC's.
                    <br />
                    <br />
                    At Associated Pools Inc, we are a commercial swimming pool contractor with a reputation for excellence. Our team of 
                    experienced professionals has the knowledge and expertise to design, build, and maintain commercial pools of 
                    all shapes and sizes. From hotels and apartments to community centers and waterparks, we have the skills and 
                    resources to bring your project to life. We are dedicated to delivering top-quality workmanship and using the 
                    best materials available, all while adhering to industry standards and safety regulations. Contact us today 
                    to learn more about how we can help bring your commercial pool vision to fruition.
                    <br />
                    <br />
                    <div className="row">
                        <div className="col">
                            <h4>
                                Lee Curry
                            </h4>
                            <p>
                                Associated Pools just completed the construction of my pool.  Bryan was very responsive and, if I had issues, addressed them.  
                                His crew were also respectful and nice.  They are also doing the maintenance on the pool and I am pleased with the service.  
                                I am a new to owning a pool and Bryan has been responsive to all of my questions and/or concerns.
                            </p>
                        </div>
                        <div className="col">
                            <h4>
                                R.E. Osborn
                            </h4>
                            <p>
                                Associated Pools has built 4 commercial pools for my company.  We will not work with any other pool contractor.  
                                Before meeting Bryan and Mark with Associated, we had dreadful experiences with pool contractors.  
                                Associated's work is exceptional at a very reasonable price; however, you should hire them solely based on their 
                                experience and expertise.  You DO NOT want a poorly constructed pool...most often, they're impossible to appropriately fix.
                            </p>
                        </div>
                        <div className="col">
                            <h4>
                                Wilshire South
                            </h4>
                            <p>
                                Our subdivision has used Associated Pools for 20 years.  We appreciate them doing everything needed to keep our residents 
                                happy and making it easy on our HOA Board by being responsive, professional and handling the littlest of details.
                            </p>
                        </div>
                    </div>
                </p>
                <a href="tel:9138887946" className="button mt-5">
                    <span>Give Us A Call</span>
                    <i></i>
                </a>
            </div>
        </div>

        <Footer 
            title="We Let Our Reputation Speak for Itself"
            text="As a commercial contractor, you know that partnering with the right subcontractors is essential to the 
                success of any project. At Associated Pools Inc, we pride ourselves on being reliable, efficient, 
                and professional. With over 40 years of experience in the industry, we have the knowledge and expertise 
                to deliver top-quality results on every job. Our team is dedicated to meeting deadlines and exceeding our 
                clients' expectations, so you can trust that your project will be in good hands with us."
        />     
        </>
    )
}
