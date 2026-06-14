
import {db} from './firebase.js';
import {collection,getDocs,query,where}from 'https://www.gstatic.com/firebasejs/12.14.0/firebase-firestore.js';
let eml = document.getElementById('eml');
let pass = document.getElementById('pass');
document.getElementById('regForm').addEventListener("submit",valid);
document.getElementById('view').addEventListener("click",tog);

async function valid(e){
    e.preventDefault();
    if(eml.value==""){
        alert("Email is not entered");
        return false;
    }
    let userRef = query(collection(db,"users"),where("email","==",eml.value.trim()));
    let user = await getDocs(userRef);
    if(user.empty){
        alert("User not found..?")
        return false;
    }
    if(user.docs[0].data().pass == pass.value){
       localStorage.setItem("curUser",eml.value)
        window.location.href = 'bmi.html';
        return false;
    }
    alert('Incorrect Password');
    return false;
}

function tog(){
    let cur = pass.getAttribute('type');
    if(cur=='password'){
        pass.setAttribute('type','text');
    }
    else{
        pass.setAttribute('type','password');
    }
}
