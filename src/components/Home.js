import React from 'react'
import Carousel from 'react-bootstrap/Carousel';


const Home = () => {
  
  return (
	<>
    <Carousel>
      <Carousel.Item interval={6000}>
        <img
          className="d-block w-100"
          src="images/101.jpeg"
		  style={{width:"100%",height:"100vh"}}
          alt="First slide"
        />
			{/* <h1 style={{color: "white",textAlign: "left",position: "relative", top: "20px",zIndex:"99"}}>Technova 2022</h1> */}
        <Carousel.Caption style={{right:'auto',left:'5%',bottom:'1%'}}>
		<h1 style={{color: "white",textAlign: "left",marginBottom:"10%",zIndex:"99",fontWeight:"bold",fontSize:"80px"}}>Technova 2022</h1>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
		  src="images/102.jpeg"
		  style={{width:"100%",height:"100vh"}}
          alt="Second slide"
        />
        <Carousel.Caption style={{right:'auto',left:'5%',bottom:'1%'}}>
          <h1 style={{color: "white",textAlign: "left",marginBottom:"10%",zIndex:"99",fontWeight:"bold",fontSize:"80px"}}>Technova 2022</h1>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
		  src="images/103.jpeg"
		  style={{width:"100%",height:"100vh"}}
          alt="Third slide"
        />
        <Carousel.Caption style={{right:'auto',left:'5%',bottom:'1%'}}>
		<h1 style={{color: "white",textAlign: "left",marginBottom:"10%",zIndex:"99",fontWeight:"bold",fontSize:"80px"}}>Technova 2022</h1>

        </Carousel.Caption>
     
      </Carousel.Item>
    </Carousel>
    

	</>
  )
}

export default Home