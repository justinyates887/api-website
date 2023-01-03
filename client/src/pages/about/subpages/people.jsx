import React from "react";
import VisibilitySensor from "react-visibility-sensor";
import { NavHeader, Footer, Loading, ProfileCard } from "../../../components";

export function People({ History }) {

    const [loading, setLoading] = React.useState(true);

    React.useEffect( () => {
        setLoading(false);
    }, [])

    return (
        <>
        {loading ? (
            <Loading />
        ) : (
            <>
            <NavHeader />

              <div className="img-wrapper">
                  <img src='https://ik.imagekit.io/associatedpoolsinc/API/new_0Bcu3wR09.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1672682888145' className="img-responsive" alt="Group of team members"></img>
              </div>

              <div className="people-img-overlay center">
                <div className="" style={{width: '95%'}}>
                    <div>
                        <div className="row">
                            <div className="card-body">
                                <h1 className="card-title-head text-light">A Company Is Only <br /> As Good As Its People</h1>
                                <h4 className="card-text-head text-light mt-3">
                                    Our company must be pretty good then...
                                </h4>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col">
                                <h4 className="text-center text-light">Come take a look at our heart and soul.</h4>
                            </div>
                        </div>
                    </div>
                </div>
              </div>

               <div className ='center'>
               <ul className="timeline">
               <li>
                    <VisibilitySensor>
                            {({ isVisible }) => (
                              <ProfileCard 
                                isVisible={isVisible}
                                imgSrc='https://ik.imagekit.io/associatedpoolsinc/API/bryan_-Wnqwgae7l8U.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1646404644753'
                                name='Bryan Yates'
                                text='
                                Current owner of Associated Pools Inc. With over 30 years over experience in bulding, designing, and maintaining
                                swimming pools, Bryan has made it his mission to provide the best possible swimming pool products to the Kansas 
                                City Metro.
                                '
                              />
                            )}
                    </VisibilitySensor>
                    </li>

                    <li>
                    <VisibilitySensor>
                            {({ isVisible }) => (
                              <ProfileCard 
                                isVisible={isVisible}
                                imgSrc='https://ik.imagekit.io/associatedpoolsinc/API/bryan_-Wnqwgae7l8U.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1646404644753'
                                name='Mark Polivka'
                                text='
                                Former owner of Associated Pools, Mark spent over 20 years growing the company and its reputation to what it is today.
                                After retiring, Mark decidied to hand down the legacy of Associated Pools to its current owner, Bryan Yates. Mark still
                                serves as a consultant and Vice President of the company.
                                '
                              />
                            )}
                        </VisibilitySensor>
                    </li>

                    <li>
                    <VisibilitySensor>
                            {({ isVisible }) => (
                              <ProfileCard 
                                isVisible={isVisible}
                                imgSrc='https://ik.imagekit.io/associatedpoolsinc/API/justin_ppff6105m.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1672767652139'
                                name='Justin Yates'
                                text='
                                Current Business Administrator for the company, and son to Bryan. Justin handles most phone calls, e-mails,
                                invoicing, and general office managment for the company. 
                                '
                              />
                            )}
                        </VisibilitySensor>
                    </li>

                    <li>
                    <VisibilitySensor>
                            {({ isVisible }) => (
                              <ProfileCard 
                                isVisible={isVisible}
                                imgSrc='https://ik.imagekit.io/associatedpoolsinc/API/andrew_lpQ5zCOp9a.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1646404644048'
                                name='Andrew Barth'
                                text='General Foreman for Associated Pools. You will get to see a lot of Andrew, as he is in charge of overseeing
                                every phase of the project. Andrew is a polite, knowledgeable, and tenured employee.'
                              />
                            )}
                        </VisibilitySensor>
                    </li>

                    <li>
                    <VisibilitySensor>
                            {({ isVisible }) => (
                              <ProfileCard 
                                isVisible={isVisible}
                                imgSrc='https://ik.imagekit.io/associatedpoolsinc/API/chase_lQv_-9w02Pe.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1646404644432'
                                name='Logan Kennicut'
                                text='Logan is in charge of all things pool chemicals and equipment. He will be responsible for installing new equipment, 
                                replacing old equipment, or chemically balancing and cleaning your pool. Logan has significant knowledge of pool chemistry.'
                            />
                            )}
                        </VisibilitySensor>
                    </li>

                    <li>
                    <VisibilitySensor>
                            {({ isVisible }) => (
                              <ProfileCard 
                                isVisible={isVisible}
                                imgSrc='https://ik.imagekit.io/associatedpoolsinc/API/chase_lQv_-9w02Pe.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1646404644432'
                                name='Shawn Kays'
                                text='
                                Shawn, though not directly a part of Associated Pools, is in charge of running our sister company, Associated Concrete Inc.
                                Shawn will be responsible for handling the concrete decking for new swimming pool projects.
                                '
                            />
                            )}
                        </VisibilitySensor>
                    </li>
               </ul>
               </div>


                      <div className="card center mb-4 mt-4" style={{minWidth: '97%'}}>
                        <div className="row mt-4">
                          <div className="col-sm">
                            <div className="card-body text-center">
                                <h2 className="card-title">None Of This Would Be Possible...</h2>
                                <p className="card-text mt-3">
                                    ...without our amazing group of individuals. Each one of them will work countless hours to ensure your outdoor living space
                                    is exactly how you dreamed. 
                                    <br />
                                    <br />
                                    Our team at Associated Pools Inc is dedicated to providing the best possible service to our customers. We are a diverse group of individuals with a wide range of skills and expertise, and we are all committed to delivering high-quality products and services that meet the needs and exceed the expectations of our customers.
                                    When you work with us, you can expect:
                                    <br />
                                    <ul id="people">
                                      <li><strong>Professionalism:</strong> Our team members are knowledgeable, courteous, and dedicated to providing excellent service. We take pride in our work and are always striving to improve.</li>
                                      <li><strong>Responsiveness:</strong> We understand that our customers' time is valuable, and we make it a priority to respond to inquiries and requests in a timely manner.</li>
                                      <li><strong>Flexibility:</strong> We know that every customer is unique, and we are willing to work with you to find solutions that meet your specific needs and requirements.</li>
                                      <li><strong>Quality:</strong> We are committed to delivering products and services that are of the highest caliber. We use only the best materials and processes to ensure that our customers receive the best value for their money.</li>
                                    </ul>
                                    Thank you for choosing Associated Pools Inc. We look forward to working with you!
                                </p>
                            </div>
                            </div>
                            <div className="col-sm">
                              <img src='https://ik.imagekit.io/associatedpoolsinc/API/pexels-dio-hasbi-saniskoro-3280130_upTsnsaiQ.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1672677412309' 
                              alt="Group of employees with hands in the middle." height='100%' width="80%"></img>
                            </div>
                          </div>
                      </div>


            <Footer />
            </>
        )}
        </>
    )
}