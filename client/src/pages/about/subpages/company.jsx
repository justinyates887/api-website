import React from "react";
import VisibilitySensor from "react-visibility-sensor";
import { NavHeader, Footer, Loading, InfoCard } from "../../../components";
import Banner from '../../../assets/img/banner-white.webp'
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
                    <img src={ PoolOne } className="img-responsive" alt="Background: A simple backyard pool surrounded by trees."></img>
                  </div>

                  <div className="container-fluid m-0">

                  <div className="row-3 mt-5 img-overlay">
                      <div className="col">
                        <img src={ Banner } alt="Associated Pools Inc." height='30%' width="50%"></img>
                      </div>
                  </div>

                  </div>


                  <VisibilitySensor>
                    {({ isVisible }) => (
                      <>
                      <div className="container about-container mb-5">
                        <div className="row mb-0 align-content-center justify-content-center about-us">
                          <InfoCard
                            background='bg-mutedBlue text-light'
                            icon='<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-easel" viewBox="0 0 16 16">
                            <path d="M8 0a.5.5 0 0 1 .473.337L9.046 2H14a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1.85l1.323 3.837a.5.5 0 1 1-.946.326L11.092 11H8.5v3a.5.5 0 0 1-1 0v-3H4.908l-1.435 4.163a.5.5 0 1 1-.946-.326L3.85 11H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h4.954L7.527.337A.5.5 0 0 1 8 0zM2 3v7h12V3H2z"/>
                          </svg>'
                            title=' Designers'
                            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                            />
                          <InfoCard
                            background='bg-light text-dark'
                            icon='<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-person-heart" viewBox="0 0 16 16">
                            <path d="M9 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-9 8c0 1 1 1 1 1h10s1 0 1-1-1-4-6-4-6 3-6 4Zm13.5-8.09c1.387-1.425 4.855 1.07 0 4.277-4.854-3.207-1.387-5.702 0-4.276Z"/>
                          </svg>'
                            title=' Who We Are'
                            button={['/services/residential', 'Gallery', 'btn bg-mutedBlue text-light']}
                            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                            />
                          <InfoCard
                            background='bg-mutedBlue text-light'
                            icon='<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-hammer" viewBox="0 0 16 16">
                            <path d="M9.972 2.508a.5.5 0 0 0-.16-.556l-.178-.129a5.009 5.009 0 0 0-2.076-.783C6.215.862 4.504 1.229 2.84 3.133H1.786a.5.5 0 0 0-.354.147L.146 4.567a.5.5 0 0 0 0 .706l2.571 2.579a.5.5 0 0 0 .708 0l1.286-1.29a.5.5 0 0 0 .146-.353V5.57l8.387 8.873A.5.5 0 0 0 14 14.5l1.5-1.5a.5.5 0 0 0 .017-.689l-9.129-8.63c.747-.456 1.772-.839 3.112-.839a.5.5 0 0 0 .472-.334z"/>
                          </svg>'
                            title=' Hard Work'
                            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                            />
                        </div>

                        <div className={isVisible ? "row mb-0 align-content-center justify-content-center about-us fade-in appear" : "row mb-0 align-content-center justify-content-center about-us fade-in"}>
                          <InfoCard 
                            background='bg-lightBlue text-dark'
                            title='Ethics'
                            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                          />
                          <InfoCard 
                            background='bg-mutedBlue text-light'
                            title='Family'
                            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                          />
                          <InfoCard 
                            background='bg-lightBlue text-dark'
                            title='Customer Oriented'
                            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                          />
                        </div>
                      </div>
                      </>
                    )}
                </VisibilitySensor>

              <Footer className="mt-auto"/>
            </>
        )}
        </>
    )
}
