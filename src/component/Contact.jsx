import React from "react";

function Contact(props){
    return(
        <section id="contact">
            <div className="container">
                <section className="section-title mt-5">
                    <h3 className="text-title display-3 mt-5 text-center">Contact</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi exercitationem doloremque quos iure excepturi laboriosam voluptas unde assumenda repudiandae provident repellendus soluta, beatae sit cumque necessitatibus reiciendis fuga ab impedit.</p>
                </section>
                <div className="row mt-5">
                    <div className="col-md-4 col-lg-4">
                        <div className="info">
                            <div className="address">
                                <i className="bi bi-geo-alt"></i>
                                <h4 className="text-tile">Location</h4>
                                <p>41023,4th cross,Bangalore - 560096</p>
                            </div>
                            <div className="email">
                                <i className="bi bi-envelope"></i>
                                <h4 className="text-tile">Email id</h4>
                                <p>sarath@be-practical.com</p>
                            </div>
                            <div className="phone">
                                <i className="bi bi-phone"></i>
                                <h4 className="text-tile">Call</h4>
                                <p>+917012470050</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8 col-lg-8 mt-2 mb-3">
                        <div className="card">
                            <div className="card-body">
                                <form autoComplete="off">
                                    <div className="form-group mt-2">
                                        <label htmlFor="name">Full Name</label>
                                        <input type="text" name="name" id="name" className="form-control" required />
                                    </div>
                                    <div className="form-group mt-2">
                                        <label htmlFor="email">Email</label>
                                        <input type="email" name="email" id="email" className="form-control" required />
                                    </div>
                                    <div className="form-group mt-2">
                                        <label htmlFor="message">Message</label>
                                        <textarea name="msg" id="msg" cols="30" rows="5" className="form-control" required></textarea>
                                    </div>
                                    <div className="form-group mt-2">
                                        <input type="submit" value="Submit" className="btn btn-outline-secondary" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact