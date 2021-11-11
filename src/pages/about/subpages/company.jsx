import React from "react";
import VisibilitySensor from "react-visibility-sensor";
import { NavHeader, Footer, Loading } from "../../../components";
import Banner from '../../../assets/img/banner-white.webp'
import People from '../../../assets/img/people.jpg'
import PoolOne from '../../../assets/img/pool-one.webp'

export function Company({ History }) {

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
                    <img src={ PoolOne } height="80%" width="100%" className="img-responsive" alt="Background: A simple backyard pool surrounded by trees."></img>
                  </div>

                  <div className="container-fluid m-0">

                  <div className="row-3 mt-5 img-overlay">
                      <div className="col">
                        <img src={ Banner } alt="Associated Pools Inc." height='30%' width="50%"></img>
                      </div>
                  </div>

                  <VisibilitySensor>
                    {({ isVisible }) => (
                  <div className={isVisible ? "card center mb-4 mt-4 fade-in appear" : "card center mb-4 mt-4 fade-in"} style={{width: '97%'}}>
                    <div className="row mt-4">
                        <div className="col-sm">
                          <img src={ People } alt="Employees doing various activities." height='100%' width="80%"></img>
                        </div>
                        <div className="col-sm">
                            <div className="card-body text-center">
                                <h2 className="card-title">A History of Good People</h2>
                                <p className="card-text mt-3">
                                    Associated Pools Inc. comes from generations of driven, motivated individuals. Founded by Ron Kitterer in 1984,
                                    Associated ran under his ownership for over ten years, until he handed down the business to his trusted foreman,
                                    Mark  Polivka. Mark grew the company and its network for the next two decades until he, following in Ron's footsteps,
                                    handed it down to his foreman, Bryan Yates.
                                    <br />
                                    <br />
                                    Bryan has since grown the company, expanding to more and more residential customers and projects. With the expansion
                                    he has founda strong team, motivated to provide the high standard of quality Associated Pools is known for.
                                </p>
                            </div>
                        </div>
                      </div>
                  </div>
                    )}
                </VisibilitySensor>

              </div>
              <Footer className="mt-auto"/>
            </>
        )}
        </>
    )
}
