import { Link } from "react-router-dom"

const Content = () => {
    return (
        <div className="">
            <div className="p-2 container-fluid bg-white shadow " style={{
                position: "fixed",
                zIndex: '10'
            }}>
                <Link to='/'>
                    <button className='btn btn-outline-secondary rounded-pill'>
                        Back
                    </button>
                </Link>
            </div>
            <div className="py-5 p-3">
                <div className="home_banner_div-2">
                </div>
            </div>
            <div className="text-center">
                <span className="display-1 text-fluid">#AskService</span>
            </div>
            <div className="row container mx-auto p-2">
                <div className="col-md-4 p-2">
                    <div className="card p-2 border-0 shadow rounded-lg">
                        <span className="fs-3 text-primary">#Installation Costing</span>
                        <hr/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Aliquam dolor enim, sodales a tortor eu, tristique auctor nisi. Nam condimentum semper lacus
                        </p>
                        <div>
                            <a href="https://forms.gle/F98WTQ7ChrWobW2z9"
                            target="_blanck">
                                <button className="my-2 col-12 btn btn-sm btn-outline-primary rounded-pill">
                                    Click Here
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 p-2">
                    <div className="card p-2 border-0 shadow rounded-lg">
                        <span className="fs-3 text-primary">#Pre-site survery request</span>
                        <hr/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Aliquam dolor enim, sodales a tortor eu, tristique auctor nisi. Nam condimentum semper lacus
                        </p>
                        <div>
                            <a href="https://docs.google.com/forms/d/1WxkPisycwqaEf6Nniyfrn-RedXN-tRIBezTmKp1zO24/edit?usp=drivesdk"
                            target="_blanck">
                                <button className="my-2 col-12 btn btn-sm btn-outline-primary rounded-pill">
                                    Click Here
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 p-2">
                    <div className="card p-2 border-0 shadow rounded-lg">
                        <span className="fs-3 text-primary">#Electric fence system design</span>
                        <hr/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Aliquam dolor enim, sodales a tortor eu, tristique auctor nisi. Nam condimentum semper lacus
                        </p>
                        <div>
                            <a>
                                <button className="my-2 col-12 btn btn-sm btn-outline-primary rounded-pill" disabled>
                                    Click Here
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content