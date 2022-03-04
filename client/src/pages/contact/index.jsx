import React from "react";
import { NavHeader, Footer, Loading, useForm, StarRating } from "../../components";
import { getGoogleReviews, sendMail } from "../../utils/api";

import ReCaptchaV2 from 'react-google-recaptcha'

const initialFieldValues = {
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    addressOne: '',
    addressTwo: '',
    city: '',
    state: '',
    zip: '',
    message: ''
}

export function Contact( props ) {
    
    const [loading, setLoading] = React.useState(true);
    const [reviews, setReviews] = React.useState([])

    React.useEffect( () => {
        getGoogleReviews()
        .then(( { data } ) => {
            setReviews(data.reviews)
        })
        setLoading(false);
    }, [])

    const validate = () => {
        let temp = {}
        temp.firstName = values.firstName  ? "" : "This field is required"
        temp.phone = values.phone ? "" : "This field is required"
        temp.zip = values.zip ? "" : "This field is required"
        temp.message = values.message ? "" : "This field is required"

        temp.email = (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
                    .test(values.email) ? "" : "Email is not valid"

        temp.phone = (/^\d{10}$/).test(values.phone) ? "" : "Phone number is not valid"

        setErrors({
            ...temp
        })

        return Object.values(temp).every(x => x === "")
    }

    const handleToken = (token) => {
        setValues((currentForm) => {
         return {...currentForm, token }
        })
      }

    const handleExpire = () => {
        setValues((currentForm) => {
            return {...currentForm, token: null }
        })
    } 

    const {
        values,
        setValues,
        setErrors,
        handleInputChange
    } = useForm(initialFieldValues, validate)

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(values.token != null) sendMail(values)
        else window.alert("Please complete Recaptcha to submit")
    }
    
    const mapReviews = Object.entries(reviews)

    return (
        <div id="contact">
        {loading ? (
            <Loading />
        ) : (
            <div>
            <NavHeader />

            <div className="row center" style={{ width: '60%'}}>
                <div className="col-md-4 col-sm-12 text-center mt-5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="royalBlue" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                      <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                    </svg>
                    <p className="text-light mt-4">
                        <strong>Address: </strong>
                        1800 E. Kansas City Rd. <br/>
                        Olathe, KS 66061
                    </p>
                </div>
                <div className="col-md-4 col-sm-12 text-center mt-5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="royalBlue" className="bi bi-telephone-fill" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                    </svg>
                    <p className="text-light mt-4">
                        <strong>Phone: </strong>
                        <a href="(913)-888-7946" className="text-light">(913)-888-7946</a>
                    </p>
                </div>
                <div className="col-md-4 col-sm-12 text-center mt-5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="royalBlue" className="bi bi-envelope-open-fill" viewBox="0 0 16 16">
                      <path d="M8.941.435a2 2 0 0 0-1.882 0l-6 3.2A2 2 0 0 0 0 5.4v.314l6.709 3.932L8 8.928l1.291.718L16 5.714V5.4a2 2 0 0 0-1.059-1.765l-6-3.2ZM16 6.873l-5.693 3.337L16 13.372v-6.5Zm-.059 7.611L8 10.072.059 14.484A2 2 0 0 0 2 16h12a2 2 0 0 0 1.941-1.516ZM0 13.373l5.693-3.163L0 6.873v6.5Z"/>
                    </svg>
                    <p className="text-light mt-4">
                        <strong>E-Mail: </strong>
                        <a href="mailto:info@associatedpoolsinc.com" className="text-light">info@associatedpoolsinc.com</a>
                    </p>
                </div>
            </div>

            <div className="row">
                <div className="card" style={{minWidth: '40%'}}>
                    <div className="row">
                        <div className="col m-4">
                            <h2 className="mb-4">Give Us A Shout</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-lg-6 col-sm-12 mt-3">
                                        <input 
                                            type="text" 
                                            name="firstName" 
                                            className="form-control" 
                                            placeholder="First name" 
                                            aria-label="First name"
                                            value={values.firstName}
                                            onChange={handleInputChange}
                                            required={true}

                                        />
                                    </div>
                                    <div className="col-lg-6 col-sm-12 mt-3">
                                        <input 
                                            type="text" 
                                            name="lastName" 
                                            className="form-control" 
                                            placeholder="Last name" 
                                            aria-label="Last name"
                                            value={values.lastName}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-lg-8 col-sm-12 mb-3 mt-3">
                                        <input 
                                            type="email" 
                                            name="email" 
                                            className="form-control" 
                                            id="email" 
                                            placeholder="name@example.com"
                                            value={values.email}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="col-lg-4 col-sm-12 mb-3 mt-3">
                                        <input 
                                            type="text" 
                                            name="phone" 
                                            className="form-control" 
                                            placeholder="Phone"
                                            aria-label="Phone"
                                            value={values.phone}
                                            onChange={handleInputChange}
                                            required={true}
                                        />
                                    </div>
                                </div>
                                <div className="col-12 mb-3">
                                    <label htmlFor="inputAddress" className="form-label">Project Address</label>
                                    <input 
                                        type="text" 
                                        name="addressOne" 
                                        className="form-control" 
                                        id="inputAddress" 
                                        placeholder="1234 Main St" 
                                        value={values.addressOne}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="col-12 mb-3">
                                    <label htmlFor="inputAddress2" className="form-label">Address 2</label>
                                    <input 
                                        type="text" 
                                        name="addressTwo" 
                                        className="form-control" 
                                        id="inputAddress2" 
                                        placeholder="Apartment, studio, or floor" 
                                        value={values.addressTwo}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="inputCity" className="form-label">City</label>
                                        <input 
                                            type="text" 
                                            name="city" 
                                            className="form-control" 
                                            id="inputCity"
                                            value={values.city}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="col-md-4 mb-3">
                                        <label htmlFor="inputState" className="form-label">State</label>
                                        <select 
                                            id="inputState" 
                                            name="state" 
                                            className="form-select"
                                            value={values.state}
                                            onChange={handleInputChange}
                                        >
                                        <option>Choose...</option>
                                        <option>KS</option>
                                        <option>MO</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-2 mb-3">
                                    <label htmlFor="inputZip" className="form-label">Zip</label>
                                    <input 
                                        type="text" 
                                        name="zip" 
                                        className="form-control" 
                                        id="inputZip"
                                        value={values.zip}
                                        onChange={handleInputChange}
                                        required={true}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="textArea" className="form-label">What are you looking for?</label>
                                    <textarea 
                                        className="form-control" 
                                        name="message" 
                                        id="textArea" 
                                        rows="3"
                                        value={values.message}
                                        onChange={handleInputChange}
                                        required={true}
                                    ></textarea>
                                </div>
                                <div className="row mb-2">
                                    <ReCaptchaV2 sitekey={'6LfvqiIeAAAAAAXkFian-w1FsiVjd4kxSxuXYfS5'} 
                                      onChange={handleToken}
                                      onExpired={handleExpire}
                                    />
                                </div>
                                <div className="row mt-3">
                                    <div className="col-auto">
                                        <button 
                                            type="submit" 
                                            className="btn btn-primary" 
                                            name="Submit"
                                            onSubmit={handleSubmit}
                                            >Submit</button>
                                    </div>
                                    <div className="col-auto">
                                        <button 
                                            className="btn btn-outline-danger" 
                                            name="clear"
                                            onClick={() => setValues(initialFieldValues)}
                                            >Clear</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="row mt-4">
                            <div className="col ms-4">
                                <h5 className="card-title">Still In Doubt?</h5>
                                <h6 className="card-subtitle mb-4 text-muted">Hear What Our Customers Have To Say</h6>
                            </div>
                            <div className="scroll-area-sm">
                                <div className="row">
                                    <div id="google-reviews">
                                        { 
                                        mapReviews.map((review) => {
                                            return (
                                                <div className="card m-4" style={{width: '90%'}} key={review[1].author_name}>
                                                    <div className="card-body">
                                                        <div className="row m-0 mb-2 p-0 justify-content-start align-items-center">
                                                          <div className="col-2">
                                                              <img className="review-pic" src={review[1].profile_photo_url} alt="reviewer"/>
                                                          </div>
                                                          <div className="col-6">
                                                            <h5 className="card-title">{`${review[1].author_name}`}</h5>
                                                          </div>
                                                        </div>
                                                        <div className="row mb-2">
                                                            <div className="col mt-2">
                                                                <StarRating params={review[1].rating} />
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col mt-2">
                                                                <p className="text-secondary text-start">{review[1].relative_time_description}</p>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                          <div className="col">
                                                            <p className="card-text">{`${review[1].text}`}</p>
                                                          </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                </div>

            <Footer />
            </div>
        )}
        </div>
    )
}