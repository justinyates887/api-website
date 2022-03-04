import React from "react";
import VisibilitySensor from "react-visibility-sensor";
import { NavHeader, Footer, Loading, ProfileCard } from "../../../components";
import Team from '../../../assets/img/team.webp'
import Friendly from '../../../assets/img/friendly.jpg'

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
                  <img src={ Team } className="img-responsive" alt="Group of team members"></img>
              </div>

              <div className="img-overlay title center">
                <div className="" style={{width: '95%'}}>
                    <div>
                        <div className="row">
                            <div className="card-body">
                                <h1 className="card-title text-light">A Company Is Only <br /> As Good As Its People</h1>
                                <h4 className="card-text text-light mt-3">
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

               <ul className="timeline">
               <li>
                    <VisibilitySensor>
                            {({ isVisible }) => (
                              <ProfileCard 
                                isVisible={isVisible}
                                imgSrc='https://ik.imagekit.io/associatedpoolsinc/API/bryan_-Wnqwgae7l8U.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1646404644753'
                                name='Bryan Yates'
                                text='Owner of Associated Pools Inc. 30+ Years of expierience in pool world. Mega poggers.'
                              />
                            )}
                    </VisibilitySensor>
                    </li>

                    <li>
                    <VisibilitySensor>
                            {({ isVisible }) => (
                                <div className="card center" style={{minWidth: '50%'}}>
                                    <div className={isVisible ? "row d-flex justify-content-center fade-in appear" : "row d-flex justify-content-center fade-in"}>
                                        <div className="row m-0 p-0 justify-content-start align-items-center"> 
                                          <div className="col-2">
                                            <img className="profile-pic" src="https://i.imgur.com/6tPhTUn.jpg" alt="Employee Mark Polivka"/>
                                          </div>
                                          <div className="col-6">
                                            <h3 className="mb-0 font-weight-normal">Mark Polivka</h3> 
                                          </div>
                                        </div>
                                        <div className="row px-3"> 
                                        <p className="text-muted bg-light mt-4 mb-3">
                                            Lorem Ipsum some fucking text about these guys, their interests, and what they do for the company.
                                        </p> 
                                        </div>
                                    </div>
                                </div>
                            )}
                        </VisibilitySensor>
                    </li>

                    <li>
                    <VisibilitySensor>
                            {({ isVisible }) => (
                                <div className="card center" style={{minWidth: '50%'}}>
                                    <div className={isVisible ? "row d-flex justify-content-center fade-in appear" : "row d-flex justify-content-center fade-in"}>
                                        <div className="row m-0 p-0 justify-content-start align-items-center"> 
                                          <div className="col-2">
                                            <img className="profile-pic" src="https://i.imgur.com/6tPhTUn.jpg" alt="Employee Justin Yates"/>
                                          </div>
                                          <div className="col-6">
                                            <h3 className="mb-0 font-weight-normal">Justin Yates</h3> 
                                          </div>
                                        </div>
                                        <div className="row px-3"> 
                                        <p className="text-muted bg-light mt-4 mb-3">
                                            Lorem Ipsum some fucking text about these guys, their interests, and what they do for the company.
                                        </p> 
                                        </div>
                                    </div>
                                </div>
                            )}
                        </VisibilitySensor>
                    </li>

                    <li>
                    <VisibilitySensor>
                            {({ isVisible }) => (
                              <ProfileCard 
                                isVisible={isVisible}
                                imgSrc='https://ik.imagekit.io/associatedpoolsinc/API/dom_JKX8s9t7tZx.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1646404644561'
                                name='Dominik Macias'
                                text='Masonry foreman. Puts tile and coping on shit. Mega hard worker, but super short.'
                              />
                            )}
                        </VisibilitySensor>
                    </li>

                    <li>
                    <VisibilitySensor>
                            {({ isVisible }) => (
                              <ProfileCard 
                                isVisible={isVisible}
                                imgSrc='https://ik.imagekit.io/associatedpoolsinc/API/mitch_-lNzYScDZHf.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1646404644532'
                                name='Mitchell Bomberger'
                                text='Form and Steel foreman. Likes anime and hentai. Hates doing Monday saftey briefings.'
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
                                text='Excavation foreman. Likes being on his phone a lot. Digs really big holes.'
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
                                name='Chase Wilke'
                                text='Service Manager. Does not like cockroaches. Cleans pools like a madman.'
                            />
                            )}
                        </VisibilitySensor>
                    </li>
               </ul>


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
                                    More text about the team and what customers can expect form them/us. Maybe a little quote about the guys from a customer.
                                </p>
                            </div>
                            </div>
                            <div className="col-sm">
                              <img src={ Friendly } alt="Group of employees standing together." height='100%' width="80%"></img>
                            </div>
                          </div>
                      </div>


            <Footer />
            </>
        )}
        </>
    )
}