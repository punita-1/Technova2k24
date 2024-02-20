import React, { useEffect, useState } from 'react'
import '../Profile.css'
import { auth, db } from './misc/firebase'
import { useStore } from '../store'
import { ref, set, get, child, update, remove, push, onValue } from "firebase/database";


const Profile = () => {
  const currentName = useStore((state) => state.currentName);
  const currentEmail = useStore((state) => state.currentEmail);
  const currentRoll = useStore((state) => state.currentRoll);
  const [currphone, setphone] = useState('');
  const [currorganization, setorganization] = useState('');
  const [currbranch, setbranch] = useState('');
  const [currsemester, setsemester] = useState('');

  var user = auth.currentUser;
  let count = 0;
  useEffect(() => {
    if (count < 1) {
      async function Displaydata() {
        get(ref(db, 'users')).then((snapshot) => {

          try {
            snapshot.forEach((snap) => {

              if (snap.key == currentRoll) {
                setphone(snap.val().mobile);
                setorganization(snap.val().organization);
                setbranch(snap.val().branch);
                //    name.innerHTML = snap.val().fullname;
                setsemester(snap.val().semester);
              }
            })
          } catch (err) {
            console.log(err.message);
          }

        });

        // const user = auth.currentUser;
        console.log("hello");
        get(ref(db, 'events')).then((snapshot) => {

          try {
            snapshot.forEach((event) => {

              console.log(`${event.key} checked`);

              event.forEach((team) => {

                if (team.key != 'allMembers') {
                  console.log(`entered team: ${team.key}`);

                  if (currentEmail == team.val().mail_id1 || currentEmail == team.val().mail_id2 || currentEmail == team.val().mail_id3 || currentEmail == team.val().mail_id4) {
                    let arr = [team.val().mail_id1, team.val().mail_id2, team.val().mail_id3, team.val().mail_id4];

                    let row_content = [["1", team.val().member1, team.val().roll_no1, team.val().mobile1], ["2", team.val().member2, team.val().roll_no2, team.val().mobile2], ["3", team.val().member3, team.val().roll_no3, team.val().mobile3], ["4", team.val().member4, team.val().roll_no4, team.val().mobile4]];

                    console.log(row_content);

                    // let row2_content = [team.val().member2, team.val().mail_id2, team.val().roll_no2];
                    // let row3_content = [team.val().member3, team.val().mail_id3, team.val().roll_no3];
                    // let row4_content = [team.val().member4, team.val().mail_id4, team.val().roll_no4];

                    console.log(`email matched in team: ${team.key} and event ${event.key} `);


                    let container = document.getElementById('contain');
                    let card = document.createElement('div');
                    let cardbody = document.createElement('div');
                    let team_id = document.createElement('h3');

                    team_id.innerHTML = `${team.key} - (${event.key})`;
                    team_id.classList.add('team');

                    let tbl = document.createElement('table');
                    let tb = document.createElement('tbody');
                    let th = document.createElement('thead');

                    let rhead = document.createElement('tr');

                    let name = document.createElement('th');
                    name.setAttribute('scope', 'col');
                    name.innerHTML = "Name";

                    // let email = document.createElement('th');
                    // email.setAttribute('scope','col');
                    // email.innerHTML = "Email";

                    let roll_no = document.createElement('th');
                    roll_no.setAttribute('scope', 'col');
                    roll_no.innerHTML = "Roll No";

                    let serialNo = document.createElement('th');
                    serialNo.setAttribute('scope', 'col');
                    serialNo.innerHTML = "S.No.";

                    let mobile = document.createElement('th');
                    mobile.setAttribute('scope', 'col');
                    mobile.innerHTML = "Mobile";

                    rhead.appendChild(serialNo);
                    rhead.appendChild(name);
                    // rhead.appendChild(email);
                    rhead.appendChild(roll_no);
                    rhead.appendChild(mobile);

                    tb.appendChild(rhead);
                    for (let i = 0; i < 4; i++) {
                      if (arr[i] != "") {

                        var row = document.createElement("tr");


                        for (let j = 0; j < 4; j++) {
                          let cell = document.createElement('td');
                          // cell.setAttribute('scope','row');
                          console.log(`cell content : ${row_content[i][j]}`);
                          cell.innerHTML = row_content[i][j];
                          row.appendChild(cell);
                        }

                        tb.appendChild(row);
                      }

                    }

                    tbl.appendChild(tb);

                    cardbody.appendChild(team_id);

                    cardbody.appendChild(tbl);
                    cardbody.classList.add('card-bodyprofile');

                    card.appendChild(cardbody);
                    card.classList.add('cardprofile','p-2');

                    container.appendChild(card);


                  }
                }
              })
            });

          } catch (err) {
            console.log(err.message);
          }

        });
      }

      Displaydata();
    }
    count++;
  }, [])


  return (
    <div className='bodyprofile'>
      <div class="navbar-top">
        <div class="title">
          <h1>Profile</h1>
        </div>




      </div>


      {/* // <!-- Sidenav --> */}
      {/* <div class="sidenav">
        <div class="profile">
          <img style={{ width: "100px", height: "100px" }} src="https://imdezcode.files.wordpress.com/2020/02/imdezcode-logo.png" alt="" />

          <div class="name">
            Technova
          </div>
          <div class="job">
            2k22
          </div>
        </div>

        <div class="sidenav-url">
          <div class="url">
            <a href="#contain" class="active">Profile</a>
            <hr align="center" />
          </div>
          <div class="url">
            <a href="#teamm">My Teams</a>
            <hr align="center" />
          </div>
        </div>
      </div> */}
      {/* <!-- End --> */}

      {/* <!-- Main --> */}
      <div class="mainprofile col-md-7 col-12 col-md-10 mx-auto my-5" id="contain">
        <h2>{currentName.toUpperCase()}</h2>
        <div class="cardprofile py-4">
          <div class="card-bodyprofile">

            <table className='table table-striped table-borderless m-auto text-break w-auto'>
              <tbody>
                <tr>
                  <th scope='row' className='text-start'>Roll No</th>
                  <td className='text-start'>{currentRoll}</td>
                </tr>
                <tr>
                  <th scope='row' className='text-start'>Email</th>
                  <td className='text-start'>{currentEmail}</td>
                </tr>
                <tr>
                  <th scope='row' className='text-start'>Phone</th>
                  <td className='text-start'>{currphone}</td>
                </tr>
                <tr>
                  <th scope='row' className='text-start'>Organisation</th>
                  <td className='text-start'>{currorganization}</td>
                </tr>
                <tr>
                  <th scope='row' className='text-start'>Branch</th>
                  <td className='text-start'>{currbranch}</td>
                </tr>
                <tr>
                  <th scope='row' className='text-start'>Semester</th>
                  <td className='text-start'>{currsemester}</td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>



        <h2 id="teamm">MY TEAMS</h2>
        {/* <!-- <div class="card">
        <div class="card-body">
            <h3 class="team">Team 1 - Event</h3>
            <table>
                <thead>
                  <tr><spa
                  n>
                    <th scope="col">#</th>
                    <th scope = "col">Name</th>
                    <th scope="col">Email</th>
                      <th
                    </span> scope="col">Phone no.</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><spa
                  n>
                    <th scope="row">1</th>
                    <td>Mark< / td>
                    <td>Otto</td>
                      <td
                    </span>>@mdo</td>
                  </tr>
                  
                </tbody>
              </table>
               
            </div>
        </div> --> */}



      </div>
    </div>
  )
}

export default Profile