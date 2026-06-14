import {db} from './firebase.js';
import {collection,getDocs,updateDoc,query,where} from "https://www.gstatic.com/firebasejs/12.14.0/firebase-firestore.js";

let CPass = document.getElementById("Cpass");
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
    e.preventDefault()
    if(CPass.value==""){
        alert("Current password can't be Empty..!");
        return false;
    }

    let curUser = localStorage.getItem("curUser");
    let userRef = query(collection(db,"users"),where("email","==",curUser));
    let user = await getDocs(userRef);
    let docRef = user.docs[0].ref;
    let userObj = user.docs[0].data();
    console.log(userObj);
    if(userObj.pass!=CPass.value){
        alert("Incorrect Password");
        return false;
    }
    if(NPass.value!==CNPass.value){
        alert("New Password not matched..!");
        return false;
    }
    await updateDoc(docRef,{
        pass:NPass.value,
    })
    alert("Password Updated Successfully...!");
    window.location.href='bmi.html';
    return false;
}
function back(){
    window.location.href = 'bmi.html';
}