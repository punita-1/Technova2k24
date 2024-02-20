import {auth,db} from './firebase'

const eventData  = [{
    id: "0",
    eventName: "Arduino"
  },
  {
   id: "1",
   eventName: "WebDev"
  },
  {
    id: "2",
   eventName: "RoboRace"
  },
  {
    id: "3",
   eventName: "Pubg"
  },
  {
    id: "4",
   eventName: "CodeKing"
  },
  {
    id: "5",
   eventName: "GuessQuery"
  },

]
 


//...........................References......................................//

// let teamname = document.getElementById('teamname');
// let name1 = document.getElementById('name1');
// let name2 = document.getElementById('name2');
// let name3 = document.getElementById('name3');
// let name4 = document.getElementById('name4');
// let email1 = document.getElementById('email1');
// let email2 = document.getElementById('email2');
// let email3 = document.getElementById('email3');
// let email4 = document.getElementById('email4');

// let btnid = document.getElementById('sbtn');

// console.log(teamname);

let id = 0;


//...........................Insert Data Functions..............................//
 


export async function InsertData(idx){


let dbref = ref(db, 'events/'+ eventData[idx].eventName + "/" + teamname.value);
console.log(teamname.value);

// let dbrefids = ref(db, 'events/' + eventData[idx].eventName + "/allMembers/");

try{

    const result = await set(dbref, {
    member1: name1.value,
    mail_id1: email1.value,
    member2: name2.value,
    mail_id2: email2.value,
    member3: name3.value,
    mail_id3: email3.value,
    member4: name4.value,
    mail_id4: email4.value
    });

    let id_array = [email1.value, email2.value, email3.value, email4.value];
      //   id_array.forEach((element)=> { 
      //     set(dbrefids(child(element)), {
           
      //       team: teamname.value

      //  })});
      const dbRef = ref(db, 'events/' + eventData[idx].eventName + "/allMembers/");

        id_array.forEach((element)=>{
           let  newRef = push(dbRef);
            
            set(newRef , element); 
            console.log(newRef.key.value);

        });


      // console.log(child(dbrefids, email1.value));
      
    console.log(result);
    console.log("successfully uploaded data");
  }catch(err)
  {
    console.log(err);
  }
}

//....................................Validations.............................//

const popup = (err)=>{
 alert(err.message);
}

export async function onSubmit(e){

e.preventDefault();

let check = true;
let validMail = true;

let db_ref = ref(db, 'events/' + eventData[idx].eventName);


  await get(child(db_ref, teamname.value)).then((snapshot) =>{

   try{

    if(snapshot.exists()){
      throw new Error('Team already exists');
    }
  }catch(err){
    console.log('Error: '+ err);
     check = false;
     popup(err);
  }

    });


    // onValue(dbRef, (snapshot) => {
  if(check)
  {
  await get(child(db_ref, 'allMembers')).then((snapshot) =>{
       
      console.log(snapshot);
    try{
      snapshot.forEach((childSnapshot) => {
        // let childKey = childSnapshot.key;
        let childData = childSnapshot.val();

        if(childData  == email1.value) 
        {
          throw Error(`${email1.value} is already registered`);
        }
        if(childData  == email2.value) 
        {
          throw new Error(`${email2.value} is already registered`);
        }
        if(childData  == email3.value) 
        {
          throw new Error(`${email3.value} is already registered`);
        }
        if(childData  == email4.value) 
        {
          throw new Error(`${email4.value} is already registered`);
        }
       
      });

   
    }
    catch(err){
       console.log(err);
       check = false;
       popup(err);
    }
    
    });

  }


//   signInWithEmailAndPassword(auth, email1)
//  .then((userCredential) => {
//   // Signed in 
//   const user = userCredential.user;
//   // ...
//   })
//  .catch((error) => {
//   const errorCode = error.code;
//   const errorMessage = error.message;
//   validMail = false;
//   console.log(errorMessage);
//  });



  
  if(check)
  InsertData();
  else
  {
    console.log("Upload Unsuccessful");
    alert("Registration Unsuccessful, Please TRY AGAIN! with valid credentials")
    
  }
    

} 



//.................................Event Calls..............................//

// btnid.addEventListener('click', onSubmit);