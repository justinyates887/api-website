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
                            icon='<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-easel" viewBox="0 0 16 16">
                            <path d="M8 0a.5.5 0 0 1 .473.337L9.046 2H14a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1.85l1.323 3.837a.5.5 0 1 1-.946.326L11.092 11H8.5v3a.5.5 0 0 1-1 0v-3H4.908l-1.435 4.163a.5.5 0 1 1-.946-.326L3.85 11H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h4.954L7.527.337A.5.5 0 0 1 8 0zM2 3v7h12V3H2z"/>
                          </svg>'
                            title=' Designers'
                            text='
                            With our state of the art, VIP 3D design studio, you will get to see a live walkthrough of your project before it even
                            begins. The free design includes a full preview of your project and your home, insuring every detail is exactly how you pictured.
                            '
                            />
                          <InfoCard
                            background='bg-light text-dark'
                            icon='<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-emoji-sunglasses" viewBox="0 0 16 16">
                            <path d="M4.968 9.75a.5.5 0 1 0-.866.5A4.498 4.498 0 0 0 8 12.5a4.5 4.5 0 0 0 3.898-2.25.5.5 0 1 0-.866-.5A3.498 3.498 0 0 1 8 11.5a3.498 3.498 0 0 1-3.032-1.75zM7 5.116V5a1 1 0 0 0-1-1H3.28a1 1 0 0 0-.97 1.243l.311 1.242A2 2 0 0 0 4.561 8H5a2 2 0 0 0 1.994-1.839A2.99 2.99 0 0 1 8 6c.393 0 .74.064 1.006.161A2 2 0 0 0 11 8h.438a2 2 0 0 0 1.94-1.515l.311-1.242A1 1 0 0 0 12.72 4H10a1 1 0 0 0-1 1v.116A4.22 4.22 0 0 0 8 5c-.35 0-.69.04-1 .116z"/>
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-1 0A7 7 0 1 0 1 8a7 7 0 0 0 14 0z"/>
                            </svg>'
                            title=' Who We Are'
                            button={['/services/residential', 'Gallery', 'btn bg-mutedBlue text-light']}
                            text='
                            Associated Pools Inc. is a localy owned, family oriented business striving to create the perfect outdoor living space
                            for you and your family. We take pride in our work, and will produce only the finest quality swimming pools for you to enjoy.
                            '
                            />
                          <InfoCard
                            background='bg-mutedBlue text-light'
                            icon='<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-hammer" viewBox="0 0 16 16">
                            <path d="M9.972 2.508a.5.5 0 0 0-.16-.556l-.178-.129a5.009 5.009 0 0 0-2.076-.783C6.215.862 4.504 1.229 2.84 3.133H1.786a.5.5 0 0 0-.354.147L.146 4.567a.5.5 0 0 0 0 .706l2.571 2.579a.5.5 0 0 0 .708 0l1.286-1.29a.5.5 0 0 0 .146-.353V5.57l8.387 8.873A.5.5 0 0 0 14 14.5l1.5-1.5a.5.5 0 0 0 .017-.689l-9.129-8.63c.747-.456 1.772-.839 3.112-.839a.5.5 0 0 0 .472-.334z"/>
                            </svg>'
                            title=' Hard Work'
                            text='
                            We are no strangers to getting down and dirty. Our owner, Bryan, knows what it is like to work in the trenches.
                            Working his way up from a laborer, he knows what to do to get the job done in a timely manner. Our team of qualified
                            builders are no exception.
                            '
                            />
                        </div>

                        <div className={isVisible ? "row mb-0 align-content-center justify-content-center about-us fade-in appear" : "row mb-0 align-content-center justify-content-center about-us fade-in"}>
                          <InfoCard 
                            background='bg-lightBlue text-dark'
                            icon='<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-peace" viewBox="0 0 16 16">
                            <path d="M7.5 1.018a7 7 0 0 0-4.79 11.566L7.5 7.793V1.018zm1 0v6.775l4.79 4.79A7 7 0 0 0 8.5 1.018zm4.084 12.273L8.5 9.207v5.775a6.97 6.97 0 0 0 4.084-1.691zM7.5 14.982V9.207l-4.084 4.084A6.97 6.97 0 0 0 7.5 14.982zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"/>
                            </svg>'
                            title='Ethics'
                            text='
                            Contractors get a bad rap. We strive to change the way people view contracting by providing a strong code of ethics.
                            It is our firm belief that the customers wants and needs are above all else, and we will work to ensure your needs are met.
                            '
                          />
                          <InfoCard 
                            background='bg-mutedBlue text-light'
                            icon='<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-person-hearts" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M11.5 1.246c.832-.855 2.913.642 0 2.566-2.913-1.924-.832-3.421 0-2.566ZM9 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-9 8c0 1 1 1 1 1h10s1 0 1-1-1-4-6-4-6 3-6 4Zm13.5-8.09c1.387-1.425 4.855 1.07 0 4.277-4.854-3.207-1.387-5.702 0-4.276ZM15 2.165c.555-.57 1.942.428 0 1.711-1.942-1.283-.555-2.281 0-1.71Z"/>
                            </svg>'
                            title='Family'
                            text='
                            We have a long record of tradition here. From our founder, Ron Kitterer, Associated Pools was handed down to his forman, Mark Polivka.
                            When Mark retired, he handed it down to his foreman, and current owner, Bryan Yates. 
                            '
                          />
                          <InfoCard 
                            background='bg-lightBlue text-dark'
                            icon='<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-balloon-heart" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="m8 2.42-.717-.737c-1.13-1.161-3.243-.777-4.01.72-.35.685-.451 1.707.236 3.062C4.16 6.753 5.52 8.32 8 10.042c2.479-1.723 3.839-3.29 4.491-4.577.687-1.355.587-2.377.236-3.061-.767-1.498-2.88-1.882-4.01-.721L8 2.42Zm-.49 8.5c-10.78-7.44-3-13.155.359-10.063.045.041.089.084.132.129.043-.045.087-.088.132-.129 3.36-3.092 11.137 2.624.357 10.063l.235.468a.25.25 0 1 1-.448.224l-.008-.017c.008.11.02.202.037.29.054.27.161.488.419 1.003.288.578.235 1.15.076 1.629-.157.469-.422.867-.588 1.115l-.004.007a.25.25 0 1 1-.416-.278c.168-.252.4-.6.533-1.003.133-.396.163-.824-.049-1.246l-.013-.028c-.24-.48-.38-.758-.448-1.102a3.177 3.177 0 0 1-.052-.45l-.04.08a.25.25 0 1 1-.447-.224l.235-.468ZM6.013 2.06c-.649-.18-1.483.083-1.85.798-.131.258-.245.689-.08 1.335.063.244.414.198.487-.043.21-.697.627-1.447 1.359-1.692.217-.073.304-.337.084-.398Z"/>
                            </svg>'
                            title='Customer Oriented'
                            text='
                            The two things that make this business possible are our customers and our team. We cherish the opportunity to build the space
                            of your dreams, and respect the investment you are making. A customer-first attitude is one we will always carry.
                            '
                          />
                        </div>
                      </div>
                      </>
                    )}
                </VisibilitySensor>

              <Footer 
                className="mt-auto"
                title="A Company That Cares"
                text="At Associated Pools Inc, we are passionate about creating beautiful and functional 
                  swimming pools for our clients. Our team of experienced professionals has been serving the community 
                  for over 40 years, providing top-quality design and construction services. We take pride in our 
                  attention to detail and customer satisfaction, and strive to make the pool building process as 
                  seamless as possible. Thank you for considering us for your pool project!"
              />
            </>
        )}
        </>
    )
}
