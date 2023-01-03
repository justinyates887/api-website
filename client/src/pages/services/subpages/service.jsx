import React from "react";
import { NavHeader, Footer, Loading } from "../../../components";

export function Service({ History }) {

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
                    <img src='https://ik.imagekit.io/associatedpoolsinc/API/cleaning_igJl_g9NE.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1672759110695' className="img-responsive" alt="Background: A simple backyard pool surrounded by trees."></img>
                  </div>

                  <div className="container-fluid m-0">

                    <div className="row-3 mt-5 img-overlay">
                        <div className="col">
                            <img src='https://ik.imagekit.io/associatedpoolsinc/API/banner-white_pnzwaiHBOB.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1643979900504' alt="Associated Pools Inc." height='30%' width="50%"></img>
                        </div>
                    </div>

                      <div className="center text-center mt-5 mb-5" style={{width: '80%'}}>
                            <div className="card-body text-center">
                                <h2 className="card-title">No One Wants A Dirty Pool</h2>
                                <p className="card-text mt-3">
                                    Sometimes, taking care of your pool can be more than expected. Sometimes, you just don't have the time to invest.
                                    <br />
                                    <br />
                                    Our service team at Associated Pools Inc is your go-to source for all things pool maintenance and repair. 
                                    Our team of certified professionals has years of experience in the industry, ensuring that your pool is 
                                    always in top condition. Whether you need regular cleaning and maintenance or unexpected repairs, we 
                                    have you covered. Our services include chemical balancing, equipment repairs, leak detection and repair, 
                                    and more. We are committed to providing the highest level of customer satisfaction and strive to exceed 
                                    your expectations every time. Contact us today to learn more about how we can help you enjoy your pool 
                                    to the fullest.
                                    <br />
                                    <br />
                                    Give us a call today to discuss your needs!
                                </p>
                                <a href="tel:9138887946" className="btn btn-primary">Give Us A Call</a>
                            </div>
                      </div>

                      <div class="accordion center mb-5 mt-5"style={{maxWidth: '90%'}}>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Acid Wash
                            </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                Like patio furniture and other outdoor accessories, your pool will get dirty. To keep it clean, you may want to consider letting our professionals acid wash your pool. Acid washing strips the top layer of plaster to reveal fresh plaster beneath. 
                                We can only perform acid washing during the winter months. Pebble pools, however, can get an acid wash at any time of the year.
                            </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Automation
                            </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                            Ever wish you could control your pool’s pump, lights, or disinfection? We sell and install swimming pool automation systems that turn on your waterfall, pool and spa lights, heater, and more from your smartphone.
                            </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Cartridge Cleaning
                            </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                            Pool filter cartridges need cleaning from time to time to work effectively. Our professionals know how to rinse even the most stubborn debris and particles. This can be a very time-consuming task. Instead of opting for the DIY route, we can handle it for you faster and more efficiently.
                            </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingFour">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                Draining
                            </button>
                            </h2>
                            <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                It’s natural for pool water to evaporate. But evaporation also leaves behind minerals and contaminants, such as:
                                <ul>
                                    <li>Sunscreen</li>
                                    <li>Dust</li>
                                    <li>Concentrated sanitation chemicals and byproducts</li>
                                </ul>
                                The more remnants that collect, the tougher it is to balance your pool’s chemistry. It’s important to periodically drain old water and refill it with fresh water. Doing so can be a difficult task for pool owners, so we can help and remove any uncertainty during your next draining!
                            </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingFive">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                Handrail Replacement
                            </button>
                            </h2>
                            <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                Handrails aren’t just helpful to the average person, but also necessary for some people to access the pool without incident. Over time, bearing weight can damage the handrail’s sockets, or the handrail itself. Our team are experts at retrofitting old handrail placements, or installing new ones if necessary.
                            </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingSix">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                Heater Installation & Repair
                            </button>
                            </h2>
                            <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                Like your pool’s other features, pool heaters need regular upkeep. If your heater stops working or becomes damaged, we can lend a helping hand and restore it back to normal. 
                                If you don’t have a heater but would like to have one installed, we have many different brands and types in stock. Two of the most popular types of pool heaters are gas and heat pump varieties. While gas heats your pool faster but uses more energy, heat pumps save lots of energy and work well in the southwest’s warm climate.
                            </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingSeven">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                Lighting
                            </button>
                            </h2>
                            <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                Do you like to relax after a stressful day by taking a nice, long dip in the pool? What about a little night swimming? In these situations, having lights installed can make your pool experience even better. We can illuminate your pool by installing or replacing broken or weathered lights. 
                                New, energy-saving LED lights will have less impact on the environment and your electricity bill. LED pool lights also set the perfect mood with several programmable colors.
                            </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingEight">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                Pump Repair & Replacement
                            </button>
                            </h2>
                            <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                We’d love it if pools operated seamlessly forever, but they don’t. Your pool pump is one of the most crucial pieces of equipment in your pad. It can also break down at the worst time. Our professionals are ready to repair the pump’s motor or other components, or offer an outright replacement when needed.
                            </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingNine">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                                Plumbing Repair & Replacement
                            </button>
                            </h2>
                            <div id="collapseNine" className="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                Unfortunately, pipes don’t last forever. This is why it’s only natural to find yourself in need of replacing your pool’s plumbing. Luckily, you’ve come to the right place. Since the last thing you likely want to do is dig down into the ground, let us do the dirty work for you.
                            </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTen">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                                Salt Systems Installation & Reapir
                            </button>
                            </h2>
                            <div id="collapseTen" className="accordion-collapse collapse" aria-labelledby="headingTen" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                Salt water pool systems and salt chlorine generators are a great way to reduce the environmental effect of pool chemicals, and also irritate your eyes and skin less.
                            </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingEleven">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEleven" aria-expanded="false" aria-controls="collapseEleven">
                                Tile Cleaning & Replacement
                            </button>
                            </h2>
                            <div id="collapseEleven" className="accordion-collapse collapse" aria-labelledby="headingEleven" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                Tiles can make pools look clean and the water crisp. But as the season passes, it’s natural for buildup to create an unsightly ring around the water line. When this happens, our professionals can come to your pool’s rescue and remove the calcium and scum.  
                                To keep your pool in tip-top shape, you may want to have the tile cleaned once a season. Calcium buildup is a common problem in warmer climates and requires special equipment to remove. It may be best to schedule a tile cleaning with us before you begin using your pool regularly, but it can be done at any time of the year.
                            </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwelve">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwelve" aria-expanded="false" aria-controls="collapseTwelve">
                                Sand Filter Changes
                            </button>
                            </h2>
                            <div id="collapseTwelve" className="accordion-collapse collapse" aria-labelledby="headingTwelve" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                            Swimming pool sand filters needs its sand changed every three–five years to work efficiently. Sand’s abrasive properties are what help clean your pool, but sand becomes smoother over time. When sand becomes smooth, your pool filter becomes less effective, causing cloudy water or algae. To avoid this from occurring, we offer sand changes to keep your filtration system operating like new.
                            </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThirteen">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThirteen" aria-expanded="false" aria-controls="collapseThirteen">
                                Service Chemicals & Rountine Maintenance
                            </button>
                            </h2>
                            <div id="collapseThirteen" className="accordion-collapse collapse" aria-labelledby="headingThirteen" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                            Regular swimming pool maintenance is essential to keep your pool clean, safe, and in good working order. This includes tasks such as testing and balancing the water chemistry, cleaning the filter, skimming debris from the surface, and checking and maintaining equipment. By performing these tasks on a regular basis, you can prevent costly repairs and ensure that your pool is always ready for use. At Associated Pools, we offer comprehensive maintenance packages to suit your needs and budget. Contact us today to learn more and schedule your next maintenance visit.
                            </div>
                            </div>
                        </div>
                        </div>

                    </div>

              <Footer className="mt-auto"/>
            </>
        )}
        </>
    )
}
