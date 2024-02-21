import React, { useState } from "react";
import {Link} from 'react-router-dom'
import "./allevent.css";
const Allevents = () => {
  const lisoc = [
    {
      id: "0",
      society:"lisoc",
      eventName: "Riddle Hunter",
      eventDescripton:
        "Enthralling tasks are waiting for you if you will be participating in this competition. In this student will be given different puzzles/riddles and they will have to find a location from those riddles and reach these locations. On reaching these locations they will be given certain tasks. Following the latter, the top 3 teams with maximum scores/minimum time will win as 1st, 2nd & 3rd respectively.",
      eventImage: "images/5-min.png",
      rules: [
        "<ul>" +
          "<li>Students will have to take part in teams of 2 members each team.</li>" +
          "<li>Students cannot use their vehicles in the university premises to reach different locations, strictly mentioned.</li>" +
          "<li>Each correct task will amount to 5 points.</li>" +
          "Scores will be given by coordinators only and their decisions will be final.</li>" +
          "<li>Riddles will be provided on the venue.</li>" +
          "<li>Debarring any team or rSociety:LISOCeduction of scores on different faults lie in the hand of coordinators.</li>" +
          "</ul>",
      ],
    },

    {
      id: "1",
      society:"lisoc",
      eventName: "DCRUST SABHA",
      eventDescripton:
        "Sounds like Lok Sabha? Yes! You read it right. DCRUST’s own version of LOKSABHA, in which 7 to 10 policies/bills like Present Education System, Internet Equality, Upper Caste Reservation, etc. will be raised in front of the jury & speaker and participants can opt for opposition/ruling party and will be given chance to speak in the motion or against the motion. After everybody’s turn, jury will ask every participant more clearly Sabha members to vote that bill should be passed or not. In this event convincing power, fluency in the opted language, etc. will be the judging basis.",
    eventImage: "images/6-min.jpg",
      rules: [
        "<ul>" +
          "<li>Students will have to take part as individuals.</li>" +
          "<li>Students can do the thumping as well as can create the ambience of Lok Sabha.</li>" +
          "<li>It will be held in two rounds.</li>" +
          "<li>Candidates can bring their written material if they want.</li>" +
          "<li>Topics will be displayed 5 days before the event. (Tentative)</li>" +
          "<li>Debarring any team or reduction of scores on different faults lie in the hand of coordinators.</li>" +
          "</ul>",
      ],
    },

    {
      id: "2",
      society:"lisoc",
      eventName: "DCRUST GOT TALENT",
      eventDescripton:
        "After a series of successful Got Talents by Sunshine in every Technova. Get ready this time also for the exclusive Talent Hunt.",
    eventImage: "images/7-min.jpg",
      rules: [
        "<ul>" +
          "<li>Students will have to take part as individuals.</li>" +
          "<li>Talents can be any like singing, dancing, rapping, poetry, Shayari, speech, etc.</li>" +
          "<li>Each participant will be given only 2 minutes (max).</li>" +
          "<li>Scores given by jury and their decisions will be final.</li>" +
          "<li>Participants will have to mail their tunes a night before at dcrusts@gmail.com</li>" +
          "<li>No items/props will be given by organizers.</li>" +
          "<li>Debarring any team or reduction of scores on different faults lie in the hand of coordinators</li>" +
          "</ul>",
      ],
    },
  ];
  const pratibimb = [
        {
          id: "7",
          society:"Pratibimb",
          eventName: "Pitch-Start",
          eventDescripton: "...",
        eventImage: "images/11-min.jpg",
          rules: [
            "<ul>" +
              "<li>Make a team of 1-3 members.</li>" +
              "<li>Make a reel (of 60 seconds max.), as interesting and informative as you can in which you have to act in person (video can feature either one, two, or all three members).</li>" +
              "<li>You have to act as the CEO of the opted start-up in your Reel explaining either about your start-up/company or the life progression of the CEO or both of them.</li>" +
              "<li>You can choose start-up from the options provided in the Google form or you can pitch your own Unique Idea along with your team.</li>" +
              "<li>In case of tie between two teams opting for same start-up, Team who filled the Google form earlier will be considered and other team will be allotted different start-up.</li>" +
              "<li>Anyone pitching their own unique Idea with a proper business model will be extra 20% marks in the total score and will be given preference in any tie-up.</li>" +
              "<li>PROBLEM..............................</li>" +
              "</ul>",
          ],
        },
    
        {
          id: "8",
          society:"pratibimb",
          eventName: "EN-Sight ( Speaker session on Entrepreneurship)",
          eventDescripton: "...",
        eventImage: "images/13-min.jpg",
          rules: [
            "<ul>" +
              "<li>You have to identify a problem, which you think had been ignored and should be brought to light.</li>" +
              "<li>The problem found must be significant and must have feasible business model.</li>" +
              "<li>Your entire team is supposed to work for a probable solution by properly researching about the problem and then build a start-up plan based on the solution.</li>" +
              "<li>Your start-up idea as well as your research will be questioned during presentation.</li>" +
              "<li>PROBLEM..............................</li>" +
              "<li>Teams will be judged based on the problem found, presentation, solution and start-up idea.</li>" +
              "<li>Top 3 teams will maximum score will be declared as winner.</li>" +
              "</ul>",
          ],
        },
    
        {
          id: "9",
          society:"pratibimb",
          eventName: "PHYSI-HUNT",
          eventDescripton:
            "Participant have to collect selfies showing physics phenomena going around us in the university campus. it will be a 03 round event whos details are given below. The event is open for all undergraduate and graduate students of university teaching departments in any department.",
        eventImage: "images/16-min.jpg",
          rules: [
            "<ul>" +
              "<li>There will be 2 persons per team.</li>" +
              "<li>There will be 3 rounds - 1.Selfie Round, 2.Quiz Round, 3.Treasure Hunt round</li>" +
              "<li>There will be only one winner team and prize will go to team (not to individual.)</li>" +
              "<li>Your start-up idea as well as your research will be questioned during presentation.</li>" +
              "<li>Each team shall have two player</li>" +
              "<li>Every selfie should be taken at different locations.</li>" +
              "<li>Team members should bring their own phone.</li>" +
              "<li>Winner will be decide on the basis of less time taken and relevant selfie.</li>" +
              "</ul>",
          ],
        },
      ];
  const sunshine = [
    {
      id: "3",
      society:"sunshine",
      eventName: "Riddle Hunter",
      eventDescripton:
        "Enthralling tasks are waiting for you if you will be participating in this competition. In this student will be given different puzzles/riddles and they will have to find a location from those riddles and reach these locations. On reaching these locations they will be given certain tasks. Following the latter, the top 3 teams with maximum scores/minimum time will win as 1st, 2nd & 3rd respectively.",
      eventImage: "images/8-min.jpg",
      rules: [
        "<ul>" +
          "<li>Students will have to take part in teams of 2 members each team.</li>" +
          "<li>Students cannot use their vehicles in the university premises to reach different locations, strictly mentioned.</li>" +
          "<li>Each correct task will amount to 5 points.</li>" +
          "<li>Scores will be given by coordinators only and their decisions will be final.</li>" +
          "<li>Riddles will be provided on the venue.</li>" +
          "<li>Debarring any team or reduction of scores on different faults lie in the hand of coordinators.</li>" +
          "</ul>",
      ],
    },

    {
      id: "4",
      society:"sunshine",
      eventName: "Tech Truck The Technicality",
      eventDescripton:
        "Teams of 2 member will be made by us randomly one of the member will be blindfolded and other will guide him to collect the material  which will be placed randomly in the room He/ She  has to guide the member with code words given by us.Then in next round. Selected member will be given a synopsis about a model and he/she has guide a Savera student in model making.",
    eventImage: "images/9-min.jpg",
      rules: ["<ul>" + "<li>...</li>" + "</ul>"],
    },

    {
      id: "5",
      society:"sunshine",
      eventName: "Techno Gospller",
      eventDescripton:
        "There will be Quiz(time limited) consisting of basic question. Student can use pen & paper in this round. The process will be same as prelims but there will be an increase in difficulty level of questions. No pen & paper will be given in this round.",
    eventImage: "images/10-min.jpg",
      rules: ["<ul>" + "<li>...</li>" + "</ul>"],
    },
  ];
  
  var [filtersunshine, setFiltersunshine] = useState(sunshine);
  var [filterlisoc, setFilterlisoc] = useState(lisoc);
  var [filterpratibimb, setFilterpratibimb] = useState(pratibimb);
  var searchInput= "";



  function search() {
  
   var searchSunshine = sunshine.filter((val)=>{
      if (searchInput.split(" ").join("")== "") {
                        return val;
                      } else if (
                        val.society.toLowerCase().includes(searchInput.toLowerCase())
                      ) {
                        return val;
                      }
                      else if(val.eventName.toLowerCase().includes(searchInput.toLowerCase())){
                        return val;
                      }});
    setFiltersunshine(searchSunshine);
    console.log(filtersunshine);

   var searchLisoc = lisoc.filter((val)=>{
      if (searchInput.split(" ").join("")== "") {
        return val;
      } else if (
        val.society.toLowerCase().includes(searchInput.toLowerCase())
      ) {
        return val;
      }
      else if(val.eventName.toLowerCase().includes(searchInput.toLowerCase())){
        return val;
      }});
    setFilterlisoc(searchLisoc);
console.log(filterlisoc);
    var searchPratibimb = pratibimb.filter((val)=>{
      if (searchInput.split(" ").join("")== "") {
                        return val;
                      } else if (
                        val.society.toLowerCase().includes(searchInput.toLowerCase())
                      ) {
                        return val;
                      }
                      else if(val.eventName.toLowerCase().includes(searchInput.toLowerCase())){
                        return val;
                      }});
    setFilterpratibimb(searchPratibimb);
  console.log(filterpratibimb);
  }
  return (

      <div>
      <div style={{ marginTop: "75px" }}></div>
      <div>
        <input
          style={{
            float: "right",
            borderRadius: "20px",
            width: "300px",
            padding: "5px",
            marginRight: "64px",
            marginTop: "11px",
            // marginBottom: "25px",
          }}
          type="text"
         
          placeholder="search"
        
        
          onChange={(e)=>{searchInput=e.target.value
            console.log(searchInput)
            search();}
            }
        />
      </div>
   
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
            }}>Sunshine Society</h2>
      </div>
      <div
        style={{
          border: "1.5px solid red ",
          backgroundColor: "red",
          width: "90%",
          margin: " 0 5px ",
          marginBottom: "40px",
          marginLeft: "60px",
          marginRight: "40px",
        }}
      ></div>

<div className="container " style={{maxWidth:"90%"}}>
        <div className="row " style={{padding:"25px",background:"white",borderRadius:"5px"}} >
          {filtersunshine
            .map((item) => {
              return (
                <div className="col-md-4 mx-1cont shadow " style={{borderRadius:"5px",padding:"10px"}} key={item.id}>
                  <div className="my-2">
                    <div className="card ">
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
                        <p className="card-text" style={{fontSize:"14px"}}>
                          {item.eventDescripton.slice(0, 50)}...
                        </p>
  <Link to="/eventDetails" className="btn btn-sm btn-dark">Read More</Link>
                        
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
            }}>LISOC Society</h2>
      </div>
      <div
        style={{
          border: "1.5px solid red ",
          backgroundColor: "red",
          width: "90%",
          margin: " 0 5px ",
          marginBottom: "40px",
          marginLeft: "60px",
          marginRight: "40px",
        }}
      ></div>

      <div className="container" style={{maxWidth:"90%"}}>
      <div className="row my-1" style={{padding:"25px",background:"white",borderRadius:"5px"}} >
          {filterlisoc
            
            .map((item) => {
              
              return (
                <div className="col-md-4 cont shadow" style={{borderRadius:"5px"}} key={item.id}>
                  <div className="my-2">
                    <div className="card">
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
                        <p className="card-text" style={{fontSize:"14px"}}>
                          {item.eventDescripton.slice(0, 50)}...
                        </p>
  <Link to="/eventDetails"    className="btn btn-sm btn-dark">Read More</Link>

                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div></div>:""}
  { filterpratibimb.length>0?   <div >
      <div>
         <h2 style={{
              padding: "14px",
              marginTop: "30px",
              paddingLeft: "60px",
              marginRight: "40px",
              marginBottom: "0",
              fontWeight: "bold",
            }}>Pratibimb Society</h2>
      </div>
      <div
        style={{
          border: "1.5px solid red ",
          backgroundColor: "red",
          width: "90%",
          margin: " 0 5px ",
          marginBottom: "40px",
          marginLeft: "60px",
          marginRight: "40px",
        }}
      ></div>

      <div className="container" style={{maxWidth:"90%"}}>
      <div className="row my-1" style={{padding:"25px",background:"white",borderRadius:"5px"}} >
          {filterpratibimb
            
            .map((item) => {
              
              return (
                <div className="col-md-4 cont shadow" style={{borderRadius:"5px"}} key={item.id}>
                  <div className="my-2">
                    <div className="card">
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
                     <h4 className="card-title"style={{fontStyle:"Roboto",fontWeight:"bold"}} >{item.eventName}</h4>
                        <p className="card-text" style={{fontSize:"14px",fontStyle:"Roboto"}}>
                          {item.eventDescripton.slice(0, 50)}...
                        </p>
  <Link to="/eventDetails" className="btn btn-sm btn-dark">Read More</Link>

                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div></div>:""}
    </div>
  );
};
export default Allevents;