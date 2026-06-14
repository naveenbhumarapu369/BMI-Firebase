import {db} from './firebase.js';
import {collection,query,updateDoc,where,getDocs} from "https://www.gstatic.com/firebasejs/12.14.0/firebase-firestore.js";

let eml = document.getElementById("eml");
let NPass = document.getElementById("Npass");
let CNPass = document.getElementById("CNpass");

document.getElementById("formPass").addEventListener("submit",validChange);
document.getElementById('view').addEventListener('click',togPass);
NPass.addEventListener('input',disp);
document.getElementById('back').addEventListener('click',back);

function togPass(){
    let cur = NPass.getAttribute('type');
    if(cur=='password'){
        NPass.setAttribute('type','text');
    }
    else{
        NPass.setAttribute('type','password');
    }
}
function disp(){
    let len = NPass.value.length;
    let st = "";
    if(len<5){
        st = "weak";
    }
    else if(len<8){
        st = "medium";
    }
    else{
        st = "strong";
    }
    document.getElementById('status').textContent = st;
}
 async function validChange(e){
    e.preventDefault();
    if(eml.value==""){
        alert("Email can't be Empty..!");
        return false;
    }
    if(NPass.value==""){
        alert("Password can't be Empty..!");
        return false;
    }
    if(NPass.value!==CNPass.value){
        alert("New Password not matched..!");
        return false;
    }
    let userRef = query(collection(db,"users"),where("email","==",eml.value));
    let Docs = await getDocs(userRef);
    if(Docs.empty){
        alert("User Not FOunt...!");
        return false;
    }
    let docRef = Docs.docs[0].ref;
    await updateDoc(docRef,{
        pass:NPass.value,
    })
    alert("Password Updated Successfully...");
    window.location.href = 'login.html';
    return false;
}
function back(){
    window.location.href = 'login.html';
}