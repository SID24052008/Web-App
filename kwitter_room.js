
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyA2w6NbIHDtw9IDj6SYmVHi4WH-0NAVJ7U",
      authDomain: "web-app-7aa6a.firebaseapp.com",
      projectId: "web-app-7aa6a",
      storageBucket: "web-app-7aa6a.appspot.com",
      messagingSenderId: "755266721682",
      appId: "1:755266721682:web:8fd38bf9cdb6935fe8934b"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    username= localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML= "Welcome "+ username + "!";

    function add_room(){
          room_name= document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose: "Adding Room Name"
          });
          localStorage.setItem("room_name", room_name);
          window.location= "kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room_name- "+ Room_names);
      row= "<div class= 'room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location= "kwitter_page.html";
}

function log_out(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location= "index.html";
}