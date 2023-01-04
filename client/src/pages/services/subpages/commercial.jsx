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
                                Chris Ashner
                            </h4>
                            <p>
                                A sample quote from Chris Ashner, descripbing our work ethic, build quality, and communication.
                            </p>
                        </div>
                        <div className="col">
                            <h4>
                                Chris Ashner
                            </h4>
                            <p>
                                A sample quote from Chris Ashner, descripbing our work ethic, build quality, and communication.
                            </p>
                        </div>
                        <div className="col">
                            <h4>
                                Chris Ashner
                            </h4>
                            <p>
                                A sample quote from Chris Ashner, descripbing our work ethic, build quality, and communication.
                            </p>
                        </div>
                    </div>
                </p>
                <a href="tel:9138887946" className="btn btn-primary">Give Us A Call</a>
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
