    import React from 'react'

    const Contact = () => {
    return (
        <div className='container mt-5'>
        <h1 style={{fontWeight: '700', fontSize: "36px", textAlign: "center"}}>Say Hello</h1>
        <div className="container">
            <div className="row">
            <div className="col-md-4 mt-5">
            <div className='row mt-3'>
                <div className="col-md-3">
                <i class="bi bi-geo-alt-fill"></i>
                </div>
                <div  className="col-md-9">
                <p style={{fontSize: "16px"}}>Enark Education 2nd Floor, Sanjay Ghodawat Business Bay, Bavdhan, Pune 411021, Maharashtra, India</p>
                </div>

                <div className="col-md-3">
                <i class="bi bi-envelope" ></i>
                </div>
                <div  className="col-md-9">
                <p style={{fontSize: "16px"}}>Support@enark.in</p>
                </div> 

                <div className="col-md-3">
                <i class="bi bi-telephone" ></i>
                </div>
                <div  className="col-md-9">
                <p style={{fontSize: "16px"}}>+91 9857432851</p>
                </div>                                                                                                                                                                                                                                                                                                                                                                   
            </div>
            </div>

            <div className='col-md-4 mt-5'>
                <input className='mt-3' type="text" placeholder='Your Name' /> <br />
                <input className='mt-3' type="email" placeholder='Your Email' /><br />
                <input className='mt-3' type="text" placeholder='Your Phone' /><br />
                
            </div>

            <div className='col-md-4 mt-4'> 
            <label for="message">Message :</label>
            <textarea id="message" name="message" rows="4" cols="50" placeholder='write your message'></textarea>
            <button type="button" className="btn btn-danger btn-block mb-2 mt-3" style={{ fontSize: "15px", fontWeight: "500" }}>
                  Send Message
                </button>

            </div>
            </div>
        </div>
        </div>
    )
    }

    export default Contact
