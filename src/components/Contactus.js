import React from 'react'
import '../Contactus.css'
const Contactus = () => {
  return (
    <>
     {/* <div className='bodycontact'> */}
    <div id="gitsxn" className="rowcontact gitsxn">
        <div className="position-relative">
            <div className="py-3 ">
            <div className="text-light text-center w-80 p-5 ">
                <div className="gitsxn_heading offset-3 text-justify">Get in Touch</div>
                <div className=" text-justify col-10 offset-1">Want to get in touch? We'd love to hear from you. Here's how you can reach us...</div>
            </div>
            <div className="text-light text-center w-50 p-5">
                <div className="w-auto h-auto gitsxnimg"></div>
            </div>
            </div>

    <div  className="row position-absolute start-0 gitsxncardspos  w-150  mb-5 border-light">
        <div  className="col-md-6 col-10 border  my-2 text-center py-4  mx-auto bg-light rounded " >
            <i className="fa-solid fa-phone gitsxn_heading pb-3"></i><br/>
            <span className="h3"><u>CONTACT US</u></span>
            <br/><br/>
            <div className="col-8 offset-2">For any Query related to Events and participation CONTACT HERE</div>
            <br/><br/>
            
            <a href="tel:+918168404341" role="button" className="btn btn-sm btn-outline-secondary fs-7">
                +918168404341
            </a>
        </div>
        <div className="col-md-6 col-10 col-lg-6 border my-2 text-center py-4 mx-auto bg-light rounded">
            <i className="fa-solid fa-envelope gitsxn_heading pb-3"></i><br/>
            <span className="h3"><u>MAIL US</u></span>
            <br/><br/>
            <div className="col-8 offset-2">You can also reach us through Email and give your precious feedback !</div>
            <br/><br/>
            <a href="mailto:email@example.com?subject='Hello from Abstract!'&body='Just popped in to say hello'" role="button" className="btn btn-sm btn-outline-secondary fs-7 btn-responsive">
                coordinator_technova@dcrustm.org
            </a>
        </div>
    </div>
        </div>
    </div>
    </>
  )
}

export default Contactus