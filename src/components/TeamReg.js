import React, { useState } from 'react'
import { useParams, useRouteMatch } from 'react-router-dom'
import { auth, db } from './misc/firebase'
import '../TeamReg.css'

import { data } from '../Data'
import { ref, set, get, child, update, remove, push, onValue } from "firebase/database";


import { useStore } from '../store'
import { useToaster, Message } from 'rsuite'
// import {InsertData,onSubmit} from './misc/helper'

const TeamReg = () => {
  const { currentName } = useStore((state) => state.currentName);
  // const {ide} = useParams();
  const { ide } = useParams();
  const toaster = useToaster();
  const [teamform, setteamform] = useState({
    teamname: '',
    name1: '',
    email1: '',
    phone1: '',
    rollnumber1: '',
    name2: '',
    email2: '',
    phone2: '',
    rollnumber2: '',
    name3: '',
    email3: '',
    phone3: '',
    rollnumber3: '',
    name4: '',
    email4: '',
    phone4: '',
    rollnumber4: ''

  });
  let name, value;
  const getData = (e) => {
    name = e.target.name;
    value = e.target.value;

    setteamform({ ...teamform, [name]: value })
  }
  // console.log(teamform)
  var [me2, setMe2] = useState(false);
  var [me3, setMe3] = useState(false);
  var [me4, setMe4] = useState(false);

  let maximumclick = data[ide].member;

  const [cnt, setcnt] = useState(1)
  const addmember = (e) => {
    e.preventDefault();

    console.log(cnt)
    if (cnt < maximumclick) {
      setcnt(cnt + 1);
      if (me2) {
        if (me3) {
          setMe4(true);
        } else {
          setMe3(true);
        }
      } else {
        setMe2(true);
      }
    }
    else {
      toaster.push(
        <Message type="info" closable>
          Team of upto {maximumclick} members allowed </Message>
      );
    }
  }

  const clearmember = (id) => {
    document.getElementById('name' + id).value = '';
    document.getElementById('email' + id).value = '';
    document.getElementById('phone' + id).value = '';
    document.getElementById('roll' + id).value = '';
  }

  const delmember = (e) => {
    e.preventDefault();
    console.log(cnt)
    if (cnt > 1) {
      setcnt(cnt - 1);
      if (me4) {
        setMe4(false);
        clearmember(4);
      } else if (me3) {
        setMe3(false);
        clearmember(3);
      } else if (me2) {
        setMe2(false);
        clearmember(2);
      }
    }
  }




  async function InsertData() {


    let dbref = ref(db, 'events/' + data[ide].eventName + "/" + teamform.teamname);
    // console.log(teamname.value);

    // let dbrefids = ref(db, 'events/' + eventData[idx].eventName + "/allMembers/");

    try {

      const result = await set(dbref, {
        member1: teamform.name1,
        mail_id1: teamform.email1,
        member2: teamform.name2,
        mail_id2: teamform.email2,
        member3: teamform.name3,
        mail_id3: teamform.email3,
        member4: teamform.name4,
        mail_id4: teamform.email4,
        mobile1: teamform.phone1,
        mobile2: teamform.phone2,
        mobile3: teamform.phone3,
        mobile4: teamform.phone4,
        roll_no1: teamform.rollnumber1,
        roll_no2: teamform.rollnumber2,
        roll_no3: teamform.rollnumber3,
        roll_no4: teamform.rollnumber4,
      });

      let id_array = [teamform.email1, teamform.email2, teamform.email3, teamform.email4];
      //   id_array.forEach((element)=> { 
      //     set(dbrefids(child(element)), {

      //       team: teamname.value

      //  })});

      const dbRef = ref(db, 'events/' + data[ide].eventName + "/allMembers/");

      id_array.forEach((element) => {

        if (element != "") {
          let newRef = push(dbRef);

          set(newRef, element);
          console.log(newRef.key.value);
        }

      });


      // console.log(child(dbrefids, email1.value));

      console.log(result);
      console.log("successfully uploaded data");
    } catch (err) {
      console.log(err);
    }
  }

  const popup = (err) => {
    alert(err.message);
  }

  async function onSubmit(e) {

    e.preventDefault();

    let check = true;
    let validMail = true;

    let db_ref = ref(db, 'events/' + data[ide].eventName);

    let arr = new Array(4);
    arr.fill(0);

    // if(currentName.length<=0){
    // alert("Please log in");
    // }
    if (teamform.email1 != "" && (teamform.email1 == teamform.email2 || teamform.email1 == teamform.email3 || teamform.email1 == teamform.email4) || teamform.email2 != "" && (teamform.email2 == teamform.email3 || teamform.email2 == teamform.email4) || teamform.email3 != "" && (teamform.email3 == teamform.email4)) {
      console.log('Error : One or more emails entered are same');
      alert('one or more emails Entered are same');
    }
    else {
      await get(child(db_ref, teamform.teamname)).then((snapshot) => {

        try {
          console.log(snapshot);
          if (snapshot.exists()) {
            throw new Error('Team already exists');
          }
        } catch (err) {
          console.log('Error: ' + err);
          check = false;
          popup(err);
        }

      });


      // onValue(dbRef, (snapshot) => {
      if (check) {
        await get(child(db_ref, 'allMembers')).then((snapshot) => {

          console.log(snapshot);
          try {
            snapshot.forEach((childSnapshot) => {
              // let childKey = childSnapshot.key;
              let childData = childSnapshot.val();

              if (teamform.email1 != "" && childData == teamform.email1) {
                throw Error(`${teamform.email1} is already registered`);
              }
              if (teamform.email2 != "" && childData == teamform.email2) {
                throw new Error(`${teamform.email2} is already registered`);
              }
              if (teamform.email3 != "" && childData == teamform.email3) {
                throw new Error(`${teamform.email3} is already registered`);
              }
              if (teamform.email4 != "" && childData == teamform.email4) {
                throw new Error(`${teamform.email4} is already registered`);
              }

            });


          }
          catch (err) {
            console.log(err);
            check = false;
            popup(err);
          }

        });

      }

      let i = 0;

      await get(ref(db, 'users')).then((snapshot) => {
        console.log(snapshot);

        try {
          snapshot.forEach((childSnapshot) => {

            // console.log(childSnapshot.val());
            if (childSnapshot.val().emailverified == true) {
              if (teamform.email1 == childSnapshot.val().email) {
                console.log('email1 match' + i);
                arr[0] = 1;
              }
              else if (teamform.email2 == childSnapshot.val().email) {
                console.log('email2 match' + i);
                arr[1] = 1;
              }
              else if (teamform.email3 == childSnapshot.val().email) {
                console.log('email3 match' + i);
                arr[2] = 1;
              }
              else if (teamform.email4 == childSnapshot.val().email) {
                console.log('email4 match' + i);
                arr[3] = 1;
              }
            }
            // i++;


          })

          // for(let i = 0; i < arr.length; i++){
          //   console.log(`${arr[i]} `);
          // }

          if (teamform.email2 == "") arr[1] = 1;
          if (teamform.email3 == "") arr[2] = 1;
          if (teamform.email4 == "") arr[3] = 1;

          if (arr[0] == 0) {
            throw new Error(`${teamform.email1} is not registered or verified`);
          }
          else if (arr[1] == 0) {
            throw new Error(`${teamform.email2} is not registered or verified`);
          }
          else if (arr[2] == 0) {
            throw new Error(`${teamform.email3} is not registered or verified`);
          }
          else if (arr[3] == 0) {
            throw new Error(`${teamform.email4} is not registered or verified`);
          }


          // for(let i = 0; i< 4; i++)
          // {
          //   if(arr[i] == 0)
          //    {
          //      let k = i + 1
          //      vals = `email${k}`;
          //      console.log(vals.value);

          //      throw new Error(`${vals.value} is not registered`);
          //    }
          //    break;
          // }
        } catch (err) {
          console.log(err.message);
          alert(err.message);
          validMail = false;
        }

      }
      )


      if (check && validMail)
        InsertData();
      else {
        console.log("Upload Unsuccessful");
        alert("Registration Unsuccessful, Please TRY AGAIN! with valid credentials")

      }
    }

  }
  return (
    <div class="rowteam">
      <section class="sectionteam col-lg-6 col-12">
        <header class="headerteam text-center">
          <h3>Register</h3>
          <h4>Please fill your information bellow</h4>
        </header>
        <main class="mainteam">
          <form action="" id="TeamForm" >

            <div class="form-item box-itemteam" style={{ marginBottom: '30px' }}>
              <input id="teamname" type="text" name="teamname" placeholder="Team Name" onChange={getData} data-required />
              <small class="errorReq"><i class="fa fa-asterisk" aria-hidden="true"></i> required field</small>
            </div>
            <div class="" id='1'>
              <span className="w-auto fs-5 text-dark fw-bold">Member 1</span>
              <div className='row'>
                <div class="form-item box-itemteam">
                  <input id="name1" type="text" name="name1" placeholder="1st Member" onChange={getData} data-required />
                  <small class="errorReq"><i class="fa fa-asterisk" aria-hidden="true"></i> required field</small>
                  <small class="errorEmail"><i class="fa fa-asterisk" aria-hidden="true"></i> email is not valid</small>
                </div>
                <div class="form-item box-itemteam">
                  <input id="email1" type="email" name="email1" placeholder="Email" data-email onChange={getData} data-required />
                  <small class="errorReq"><i class="fa fa-asterisk" aria-hidden="true"></i> required field</small>
                </div>
              </div>
              <div className='row'>
                <div class="form-item box-itemteam">
                  <input id="phone1" type="number" name="phone1" placeholder="Phone no." onChange={getData} data-required />
                  <small class="errorReq"><i class="fa fa-asterisk" aria-hidden="true"></i> required field</small>
                  <small class="errorEmail"><i class="fa fa-asterisk" aria-hidden="true"></i> email is not valid</small>
                </div>
                <div class="form-item box-itemteam">
                  <input id="roll1" type="number" name="rollnumber1" placeholder="Roll Number" data-email onChange={getData} data-required />
                  <small class="errorReq"><i class="fa fa-asterisk" aria-hidden="true"></i> required field</small>
                </div>
              </div>
            </div>
            <div class={me2 ? " animate_animated animate_slideInDown" : "d-none"} id='2'>
              <span className="w-auto fs-5 text-dark fw-bold">Member 2</span>
              <div className='row'>
                <div class="form-item box-itemteam">
                  <input id="name2" type="text" name="name2" placeholder="2nd Member" onChange={getData} data-required />
                  <small class="errorReq"><i class="fa fa-asterisk" aria-hidden="true"></i> required field</small>
                  <small class="errorEmail"><i class="fa fa-asterisk" aria-hidden="true"></i> email is not valid</small>
                </div>
                <div class="form-item box-itemteam">
                  <input id="email2" type="email" name="email2" placeholder="Email" data-email onChange={getData} data-required />
                  <small class="errorReq"><i class="fa fa-asterisk" aria-hidden="true"></i> required field</small>
                </div>
              </div>
              <div className='row'>
                <div class="form-item box-itemteam">
                  <input id="phone2" type="number" name="phone2" placeholder="Phone no." onChange={getData} data-required />
                  <small class="errorReq"><i class="fa fa-asterisk" aria-hidden="true"></i> required field</small>
                  <small class="errorEmail"><i class="fa fa-asterisk" aria-hidden="true"></i> email is not valid</small>
                </div>
                <div class="form-item box-itemteam">
                  <input id="roll2" type="number" name="rollnumber2" placeholder="Roll Number" data-email onChange={getData} data-required />
                  <small class="errorReq"><i class="fa fa-asterisk" aria-hidden="true"></i> required field</small>
                </div>
              </div>
            </div>
            <div class={me3 ? " animate_animated animate_slideInDown" : "d-none"} id='3'>
              <span className="w-auto fs-5 text-dark fw-bold">Member 3</span>
              <div className='row'>
                <div class="form-item box-itemteam">
                  <input id="name3" type="text" name="name3" placeholder="3rd Member" onChange={getData} data-required />
                  <small class="errorReq"><i class="fa fa-asterisk" aria-hidden="true"></i> required field</small>
                  <small class="errorEmail"><i class="fa fa-asterisk" aria-hidden="true"></i> email is not valid</small>
                </div>
                <div class="form-item box-itemteam">
                  <input id="email3" type="email" name="email3" placeholder="Email" data-email onChange={getData} data-required />
                  <small class="errorReq"><i class="fa fa-asterisk" aria-hidden="true"></i> required field</small>
                </div>
              </div>
              <div className='row'>
                <div class="form-item box-itemteam">
                  <input id="phone3" type="number" name="phone3" placeholder="Phone no." onChange={getData} data-required />
                  <small class="errorReq"><i class="fa fa-asterisk" aria-hidden="true"></i> required field</small>
                  <small class="errorEmail"><i class="fa fa-asterisk" aria-hidden="true"></i> email is not valid</small>
                </div>
                <div class="form-item box-itemteam">
                  <input id="roll3" type="number" name="rollnumber3" placeholder="Roll Number" data-email onChange={getData} data-required />
                  <small class="errorReq"><i class="fa fa-asterisk" aria-hidden="true"></i> required field</small>
                </div>
              </div>
            </div>
            <div class={me4 ? " animate_animated animate_slideInDown" : "d-none"} id='4'>
              <span className="w-auto fs-5 text-dark fw-bold">Member 4</span>
              <div className='row'>
                <div class="form-item box-itemteam">
                  <input id="name4" type="text" name="name4" placeholder="4th Member" onChange={getData} data-required />
                  <small class="errorReq"><i class="fa fa-asterisk" aria-hidden="true"></i> required field</small>
                  <small class="errorEmail"><i class="fa fa-asterisk" aria-hidden="true"></i> email is not valid</small>
                </div>
                <div class="form-item box-itemteam">
                  <input id="email4" type="email" name="email4" placeholder="Email" data-email onChange={getData} data-required />
                  <small class="errorReq"><i class="fa fa-asterisk" aria-hidden="true"></i> required field</small>
                </div>
              </div>
              <div className='row'>
                <div class="form-item box-itemteam">
                  <input id="phone4" type="number" name="phone4" placeholder="Phone no." onChange={getData} data-required />
                  <small class="errorReq"><i class="fa fa-asterisk" aria-hidden="true"></i> required field</small>
                  <small class="errorEmail"><i class="fa fa-asterisk" aria-hidden="true"></i> email is not valid</small>
                </div>
                <div class="form-item box-itemteam">
                  <input id="roll4" type="number" name="rollnumber4" placeholder="Roll Number" data-email onChange={getData} data-required />
                  <small class="errorReq"><i class="fa fa-asterisk" aria-hidden="true"></i> required field</small>
                </div>
              </div>
            </div>


            <div className='row'>
              <span className={!me2 ? 'btn btn-light fs-6 my-2 rounded-pill disabled d-none' : 'btn btn-light fs-6 my-2 rounded-pill animate_animated animate_slideInUp'} onClick={delmember}>
                <i className='bi bi-person-dash'></i> Remove Member
              </span>
              <span className={me4 ? 'btn btn-light fs-6 my-2 rounded-pill disabled d-none' : 'btn btn-light fs-6 my-2 rounded-pill animate_animated animate_slideInUp'} onClick={addmember}>
                <i className='bi bi-person-add'></i> Add Member
              </span>
            </div>



            <div class="form-item my-3 mx-auto">
              <button class="submitteam" id="sbtn" onClick={onSubmit} >Submit</button>
            </div>
          </form>
        </main>

        <i class="waveteam"></i>
      </section>
    </div>

  )
}

export default TeamReg