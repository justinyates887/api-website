import React from "react";
import { NavHeader, Loading, Footer } from "../../components";
import homeVideo from '../../assets/img/home-vid.mp4'
import logo from '../../assets/img/Website Banner Minimal.png'

export function Home({ History }) {

    const [loading, setLoading] = React.useState(true);

    React.useEffect( () => {
        setLoading(false);
    })

    return (
        <>
        {loading? (
            <Loading />
        ) : (
            <>
                <NavHeader />
                <div className="container-fluid m-0 p-0">
                    <div className="img-wrapper">
                        <video loop width="100%" height="100%" autoPlay={true} muted={true} className="mt-auto img-responsive">
                            <source src={ homeVideo } />
                            Browser does not support video.
                        </video>
                    </div>

                    <div className="card img-overlay" style={{width: '80rem'}}>
                        <img src={ logo } style={{width: '80%'}}className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <Footer className="mt-auto"/>
           </>
        )}
        </>
    )
}