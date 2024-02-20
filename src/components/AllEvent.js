import React, { useState,useEffect } from "react";
import {Link} from 'react-router-dom'
import { Input,InputGroup } from "rsuite";
import SearchIcon from '@rsuite/icons/Search';
import "../AllEvent.css";
import "../Events_page.css"
import {featured,sunshine,lisoc,pratibimb} from '../Data'

const Allevents = () => {
  console.log(sunshine)
  var [filtersunshine, setFiltersunshine] = useState(sunshine);
  var [filterlisoc, setFilterlisoc] = useState(lisoc);
  var [filterpratibimb, setFilterpratibimb] = useState(pratibimb);
  var [filterfeatured, setfilterfeatured] = useState(featured);
  const [searchInput, setSearchInput] = useState("");
  console.log(searchInput.split(" ").join(""))
  const onChange = (e) => {

    setSearchInput(e.target.value);
    

  };
  // const onSearch = (e) => {
  //   // console.log('hello');
  //   e.preventDefault();
  //   setSearchInput(e.target.value);
  //   console.log(searchInput)
  //   search();
   
  // }
  useEffect(() => {
    search();
  
    
  }, [searchInput])
  

  function search() {
    // eslint-disable-next-line
    if (searchInput.split(" ").join("")!= "") {
      setfilterfeatured([]);
    }else{
      if (!document.querySelector(".rs-input").placeholder) document.querySelector(".rs-input").placeholder="Search";
      setfilterfeatured(featured);
    }
    
   var searchSunshine = sunshine.filter((val)=>{
      if (searchInput.split(" ").join("")=== "" ||searchInput === "") {
                      // console.log(val)
                        return sunshine;
                      } else if (
                      
                        val.society.toLowerCase().includes(searchInput.split(" ").join("").toLowerCase())
                      ) {
                        // console.log(val)
                        return val;
                      }
                      else if(val.eventName.toLowerCase().includes(searchInput.split(" ").join("").toLowerCase())){
                        // console.log(val)
                        return val;
                      }});
    setFiltersunshine(searchSunshine);
   var searchLisoc = lisoc.filter((val)=>{
      if (searchInput.split(" ").join("")=== "" ||searchInput=== "") {
      
        return lisoc;
      } else if (
        val.society.toLowerCase().includes(searchInput.split(" ").join("").toLowerCase())
      ) {
      
        return val;
      }
      else if(val.eventName.toLowerCase().includes(searchInput.split(" ").join("").toLowerCase())){
      
        return val;
      }});
    setFilterlisoc(searchLisoc);
    var searchPratibimb = pratibimb.filter((val)=>{
      if (searchInput.split(" ").join("")=== "" ||searchInput=== "") {
     
        return pratibimb;
      } else if (
        val.society.toLowerCase().includes(searchInput.split(" ").join("").toLowerCase())
      ) {
     
        return val;
      }
      else if(val.eventName.toLowerCase().includes(searchInput.split(" ").join("").toLowerCase())){
     
        return val;
      }});
    setFilterpratibimb(searchPratibimb);
  
  }
  return (
    <div className="bodyallevent " >
      <div style={{ marginTop: "4.5%", borderRadius:"30px"}}></div>
      <div >
      <InputGroup style={{
        float: "right",
        borderRadius: "50%",
        width: "300px",
        // padding: "5px",
        marginRight: "64px",
        marginTop: "11px",
      }}
      type="text"
          name="query"
          placeholder="search"
          onChange={onChange}>
      <Input  />
      <InputGroup.Button>
        <SearchIcon />
      </InputGroup.Button>
    </InputGroup>
        {/* <input
          style={{
            float: "right",
            borderRadius: "20px",
            width: "300px",
            padding: "5px",
            marginRight: "64px",
            marginTop: "11px",
          }}
          type="text"
          name="query"
          placeholder="search"
          onChange={onChange}
        /> */}
      </div>
      {filterfeatured.length>0?
<div >
      <div >
          <h2 style={{
              padding: "14px",
              marginTop: "30px",
              paddingLeft: "60px",
              marginRight: "40px",
              marginBottom: "0",
              fontWeight: "bold",
              color:"white",
              alignItems:"center",
              textAlign:"center"
            }}>CENTRALIZED </h2>
      </div>
      <div
        style={{
          // border: "1.5px solid #3d5a80 ",
          // backgroundColor: "#3d5a80",
          // borderRadius:"30px",
          width: "90%",
          margin: " 0 5px ",
          marginBottom: "40px",
        }} className="mx-auto"
      ></div>

<div className="container " style={{maxWidth:"90%"}}>
        <div className="row " style={{padding:"25px",background:"white",borderRadius:"20px"}} >
          {filterfeatured
            .map((item) => {
              return (
                <div className="col-md-4 mx-1cont shadow p-2 rounded mb-2" style={{borderRadius:"5px",padding:"10px"}} key={item.id}>
                  <div className="my-2">
                    <div className="card border-0 myborder">
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "flex-end",
                          position: "absolute",
                          right: "0",
                        }}
                      ></div>
                     <img style={{height:"270px"}}
                        src={
                          !item.eventImage
                            ? "https://usrimg-full.fark.net/g/gJ/fark_gJPBYfChZtz_Kj6r6f9RdMPkoaw.jpg?AWSAccessKeyId=UKDINQXVGV49TCSSKJLK&Expires=1661140800&Signature=lmASSAQLjYTCi%2BsK738uTIx0cNs%3D"
                            : item.eventImage
                        }
                        className="card-img-top"
                        alt=""
                      />
                      <div className="card-body">
                       <h5 className="card-title" >{item.eventName}</h5>
                        <p className="py-3" style={{fontSize:"14px"}}>
                          {item.eventDescription.slice(0, 50)}...
                        </p>
  <Link to={"/EventDetail/"+item.id} className="btn btn-sm btn-dark mt-2">Know More</Link>
                        
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>


      </div>:""
}
      {filtersunshine.length>0?
<div >
      <div >
          <h2 style={{ 
          
          padding: "14px",
          marginTop: "30px",
          paddingLeft: "60px",
          marginRight: "40px",
          marginBottom: "0",
          fontWeight: "bold",
          color:'black'
           }}>Sunshine Society</h2>
      </div>
      <div
        style={{
          border: "1.5px solid #3d5a80 ",
          backgroundColor: "#3d5a80",
          width: "90%",
          margin: " 0 5px ",
          marginBottom: "40px",
        }} className="mx-auto"
      ></div>

<div className="container " style={{maxWidth:"90%"}}>
        <div className="row my-1" style={{padding:"25px",background:"white",borderRadius:"20px"}} >
          {filtersunshine
            .map((item) => {
             
              return (
                <div className="col-md-4  cont shadow " style={{borderRadius:"5px",padding:"10px"}} key={item.id}>
                  <div className="my-3">
                    <div className="card border-0">
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "flex-end",
                          position: "absolute",
                          right: "0",
                        }}
                      ></div>
                     <img style={{height:"270px"}}
                        src={
                          !item.eventImage
                            ? "https://usrimg-full.fark.net/g/gJ/fark_gJPBYfChZtz_Kj6r6f9RdMPkoaw.jpg?AWSAccessKeyId=UKDINQXVGV49TCSSKJLK&Expires=1661140800&Signature=lmASSAQLjYTCi%2BsK738uTIx0cNs%3D"
                            : item.eventImage
                        }
                        className="card-img-top"
                        alt=""
                      />
                      <div className="card-body">
                       <h5 className="card-title" >{item.eventName}</h5>
                        <p className="py-3">
                          {item.eventDescription.slice(0,100)}...
                        </p>
  <Link to={"/EventDetail/"+item.id}    className="btnallevent btn-sm btn-dark mt-2">Read More</Link>
                        
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>


      </div>:""
}
  { filterlisoc.length>0?   <div >
      <div>
         <h2 style={{ 
           padding: "14px",
           marginTop: "30px",
           paddingLeft: "60px",
           marginRight: "40px",
           marginBottom: "0",
           fontWeight: "bold",
           alignItems:"center",
           textAlign:"center",
           color:'white'}}>CIVIL</h2>
      </div>
      <div
        style={{
          border: "1.5px solid #3d5a80 ",
          backgroundColor: "#3d5a80",
          width: "90%",
          margin: " 0 5px ",
          marginBottom: "40px",
        }} className="mx-auto"
      ></div>

      <div className="container" style={{maxWidth:"90%"}}>
      <div className="row my-1" style={{padding:"25px",background:"white",borderRadius:"5px"}} >
          {filterlisoc
            
            .map((item) => {
              
              return (
                <div className="col-md-4 cont shadow" style={{borderRadius:"5px"}} key={item.id}>
                  <div className="my-3">
                    <div className="card border-0">
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "flex-end",
                          position: "absolute",
                          right: "0",
                        }}
                      ></div>
                     <img style={{height:"270px"}}
                        src={
                          !item.eventImage
                            ? "https://usrimg-full.fark.net/g/gJ/fark_gJPBYfChZtz_Kj6r6f9RdMPkoaw.jpg?AWSAccessKeyId=UKDINQXVGV49TCSSKJLK&Expires=1661140800&Signature=lmASSAQLjYTCi%2BsK738uTIx0cNs%3D"
                            : item.eventImage
                        }
                        className="card-img-top"
                        alt=""
                      />
                      <div className="card-body">
                     <h5 className="card-title" >{item.eventName}</h5>
                        <p className="py-3">
                          {item.eventDescription.slice(0,100)}...
                        </p>
  <Link to={"/EventDetail/"+item.id}    className="btnallevent btn-sm btn-dark mt-2">Read More</Link>

                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div></div>:""}
      {filterpratibimb.length>0?
      <div>
      <div>
      <h2 style={{
          padding: "14px",
          marginTop: "30px",
          paddingLeft: "60px",
          marginRight: "40px",
          marginBottom: "0",
          fontWeight: "bold",
          color:'black'}}>Pratibimb Society</h2>
      </div>
      <div style={{
          border: "1.5px solid #3d5a80 ",
          backgroundColor: "#3d5a80",
          width: "90%",
          margin: " 0 5px ",
          marginBottom: "40px",
    }} className="mx-auto"></div>
      
      <div className="container" style={{maxWidth:"90%"}}>
      <div className="row my-1" style={{padding:"25px",background:"white",borderRadius:"5px"}} >
        {
         filterpratibimb.map((item)=>{
            
            return (
              
              <div className="col-md-4 cont shadow" style={{borderRadius:"5px"}} key={item.id}>
<div className='my-3'>
  <div className="card border-0" >
  <div style={{
    display:'flex',
    justifyContent:'flex-end',
    position:'absolute',
    right:'0'
  }
  }>
 </div>
 <img style={{height:"300px"}} src={!item.eventImage?"https://usrimg-full.fark.net/g/gJ/fark_gJPBYfChZtz_Kj6r6f9RdMPkoaw.jpg?AWSAccessKeyId=UKDINQXVGV49TCSSKJLK&Expires=1661140800&Signature=lmASSAQLjYTCi%2BsK738uTIx0cNs%3D":item.eventImage} className="card-img-top" alt=""/>
  <div className="card-body">
    
  <h5 className="card-title">{item.eventName}</h5>
  <p className="py-3">{item.eventDescription.slice(0,100)}...</p>
  <Link to={"/EventDetail/"+item.id}    className="btnallevent btn-sm btn-dark mt-2">Read More</Link>
  
  </div>
  </div>
  </div> 
            </div> 
            
            )
          })
        }
      </div>
      </div>
    </div>:""}

    </div>
  );
};

export default Allevents;