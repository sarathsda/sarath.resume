import React from "react";
import "./styles/About.css";

const url = "";

function About(props){
    return(
        <section id="about">
            <div className="container mt-5 p-3">
            <div className="section-title text-center">
                    <h2 className="text-title display-4">About</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia aperiam illo mollitia repellat laborum fugiat rem non vitae esse deleniti, ea eum sit beatae odio minima explicabo minus tempore autem!</p>
                </div>

            <div className="row">
                <div className="col-md-4 col-lg-4">
                    <img src="https://picsum.photos/id/544/500/500" alt="no image" className="img-fluid" />
                </div>

                <div className="col-lg-8 col-md-8 pt-lg-0 content">
                    <h3>Web and Full Stack Developer</h3>
                    <p className="text-secondary">
                        <em>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut ea cum ullam praesentium ab? Dolores voluptatem asperiores molestias
                        </em>
                    </p>
     
                    {/*personal info*/}
                    <div className="row">
                        <div className="col-md-6 col-lg-6">
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <i className="bi bi-envelope fill me-2"></i>
                                    <strong>Email</strong>
                                    <span className="text-success float-end">
                                        sarath@gmail.com
                                    </span>
                                </li>
                                <li className="list-group-item">
                                    <i className="bi bi-phone fill me-2"></i>
                                    <strong>Mobile</strong>
                                    <span className="text-success float-end">
                                        7012470050
                                    </span>
                                </li>
                                <li className="list-group-item">
                                    <i className="bi bi-globe fill me-2"></i>
                                    <strong>Website</strong>
                                    <span className="text-success float-end">
                                        www.bepractical.com
                                    </span>
                                </li>
                                <li className="list-group-item">
                                    <i className="bi bi-envelope fill me-2"></i>
                                    <strong>City</strong>
                                    <span className="text-success float-end">
                                        Bangalore
                                    </span>
                                </li>
                        </ul>
                </div>
                <div className="col-md-6 col-lg-6">
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <i className="bi bi-book me-2"></i>
                                    <strong>Qualification</strong>
                                    <span className="text-success float-end">
                                        B TECH IT
                                    </span>
                                </li>
                                <li className="list-group-item">
                                    <i className="bi bi-patch-check me-2"></i>
                                    <strong>Certificates</strong>
                                    <span className="text-success float-end">
                                        Bangalore
                                    </span>
                                </li>

                                <li className="list-group-item d-grid">
                                    <a href="{url}" target="_blank" className="btn btn-outline-info">

                                    </a>
                                </li>

                        </ul>
                </div>
                </div>


               



                
                </div>

            </div>
             {/*skills*/}
             <div className="section-title text-center">
                <h1>Skills</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus repudiandae illo blanditiis veniam nobis nisi. Illo fugit iure, optio ipsa sint beatae sapiente, mollitia accusamus ab ex quod laborum tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas assumenda repellendus temporibus omnis, ullam qui labore animi dolorum nobis a officia, veritatis quisquam impedit nesciunt adipisci itaque optio fugit quasi.</p> 
                </div>


                <div className="row skills-content">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="skill-block mt-3 mb-3">
                            <strong className="text-success">HTML <i className="val float-end">98%</i></strong>
                            <div className="progress" role="progressbar">
                                <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" style={{width:"98%"}}>98%</div>
                            </div>
                        </div>

                        <div className="skill-block mt-3 mb-3">
                            <strong className="text-danger">Css &Css3 <i className="val float-end">80%</i></strong>
                            <div className="progress" role="progressbar">
                                <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" style={{width:"80%"}}>80%</div>
                            </div>
                        </div>

                        <div className="skill-block mt-3 mb-3">
                            <strong className="text-primary">Javascript <i className="val float-end">88%</i></strong>
                            <div className="progress" role="progressbar">
                                <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" style={{width:"88%"}}>88%</div>
                            </div>
                        </div>

                        <div className="skill-block mt-3 mb-3">
                            <strong className="text-secondary">Jquery <i className="val float-end">85%</i></strong>
                            <div className="progress" role="progressbar">
                                <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" style={{width:"85%"}}>85%</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="skill-block mt-3 mb-3">
                            <strong className="text-success">Bootstrap <i className="val float-end">98%</i></strong>
                            <div className="progress" role="progressbar">
                                <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" style={{width:"98%"}}>98%</div>
                            </div>
                        </div>

                        <div className="skill-block mt-3 mb-3">
                            <strong className="text-danger">Node js & Express js <i className="val float-end">80%</i></strong>
                            <div className="progress" role="progressbar">
                                <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" style={{width:"80%"}}>80%</div>
                            </div>
                        </div>

                        <div className="skill-block mt-3 mb-3">
                            <strong className="text-primary">mongo db <i className="val float-end">88%</i></strong>
                            <div className="progress" role="progressbar">
                                <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" style={{width:"88%"}}>88%</div>
                            </div>
                        </div>

                        <div className="skill-block mt-3 mb-3">
                            <strong className="text-secondary">React <i className="val float-end">85%</i></strong>
                            <div className="progress" role="progressbar">
                                <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" style={{width:"85%"}}>85%</div>
                            </div>
                        </div>
                    </div>

                   
                </div>
            </div>
        </section>
    )
}

export default About