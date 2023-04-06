import React from "react";
import "./styles/Resume.css"

function Resume(props){
    return(
        <section id="resume">
            <div className="container mt-5 p-3">
                <div className="section-title text-center">
                    <h2 className="text-title display-4">Resume</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia aperiam illo mollitia repellat laborum fugiat rem non vitae esse deleniti, ea eum sit beatae odio minima explicabo minus tempore autem!</p>
                </div>

                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <h6 className="display-6 text-secondary">Education</h6>
                        <div className="resume-item pb-0">
                            <h4>Masters</h4>
                            <h5>2022-2023</h5>
                            <p>
                                <em>University/College Name,City Name</em>
                            </p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, repudiandae fuga! Neque possimus eaque tenetur. Enim, quam adipisci.</p>
                        </div>

                        <div className="resume-item pb-0">
                            <h4>Bachelors</h4>
                            <h5>2018-2022</h5>
                            <p>
                                <em>University/College Name,City Name</em>
                            </p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, repudiandae fuga! Neque possimus eaque tenetur. Enim, quam adipisci. </p>
                        </div>

                        <div className="resume-item pb-0">
                            <h4>Diploma</h4>
                            <h5>2016-2018</h5>
                            <p>
                                <em>University/College Name,City Name</em>
                            </p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, repudiandae fuga! Neque possimus eaque tenetur. Enim, quam adipisci. </p>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <h6 className="display-6 text-secondary">Certification</h6>
                        <div className="resume-item pb-0">
                            <h4>Mern Stack</h4>
                            <h5>2023</h5>
                            <p>
                                <em>Be Practical Tech Solutions,Bangalore</em>
                            </p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, repudiandae fuga! Neque possimus eaque tenetur. Enim, quam adipisci.</p>
                        </div>    
                        <div className="resume-item pb-0">
                            <h4>IT Support</h4>
                            <h5>2021</h5>
                            <p>
                                <em>PowerMax Tech,Dubai</em>
                            </p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, repudiandae fuga! Neque possimus eaque tenetur. Enim, quam adipisci.</p>
                        </div>    
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Resume