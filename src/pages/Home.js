import { Link } from "react-router-dom"

const Home = () => {

    return(
        <div> 
            <div className="">
                <div className="home_banner_div d-flex justify-content-center align-items-center">
                    <span className="display-1" data-aos="fade-up">Service Explorer</span>
                </div>
            </div>
            <div>
                <div className="row d-flex justify-content-center align-items-center container-fluid mx-auto p-2 py-5">
                    <div className="col-md-4 p-2">
                        <div className="card p-2 border-0 shadow rounded-lg" data-aos="fade-up" data-aos-delay="300">
                            <span className="py-3 fs-3 text-primary">#AskService</span>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Aliquam dolor enim, sodales a tortor eu, tristique auctor nisi. Nam condimentum semper lacus
                            </p>
                            <div>
                                <Link to='/ask-services-content'>
                                    <button className="my-2 col-12 btn btn-sm btn-outline-primary rounded-pill">
                                        Know More
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home