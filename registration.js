
import { collection, addDoc,query,where,getDocs} from "https://www.gstatic.com/firebasejs/12.14.0/firebase-firestore.js";
import { db } from "./firebase.js";

const unm = document.getElementById("unm");
const eml = document.getElementById("eml");
const pass = document.getElementById("pass");
const Cpass = document.getElementById("Cpass");
const ck = document.getElementById("tNc");
const status = document.getElementById("status");

document.getElementById("regForm").addEventListener("submit", valid);
document.getElementById("viewPass").addEventListener("click", tog);
pass.addEventListener("input", disp);

async function valid(e) {
    e.preventDefault();

    if (unm.value.trim() === "") {
        alert("Full Name is not entered");
        return;
    }

    if (eml.value.trim() === "") {
        alert("Email is not entered");
        return;
    }

    if (pass.value === "") {
        alert("Password is not entered");
        return;
    }

    if (pass.value !== Cpass.value) {
        alert("Password is not Matched");
        return;
    }

    if (!ck.checked) {
        alert("Accept Terms and Conditions");
        return;
    }

    let userRef = query(collection(db,"users"),where("email","==",eml.value));
    let user = await getDocs(userRef);
    if(!user.empty){
        alert("Email already Exists, Kinkly Login..!");
        window.location.href = "login.html";
        return;
    }

    try {
        await addDoc(collection(db, "users"), {
            name: unm.value.trim(),
            email: eml.value.trim(),
            pass: pass.value
        });

        alert("Registration Successful!");

        document.getElementById("regForm").reset();
        status.textContent = "";

        window.location.href = "login.html";
    } catch (error) {
        console.error(error);
        alert("Failed to save user data");
    }
}

function tog() {
    if (pass.type === "password") {
        pass.type = "text";
    } else {

        pass.type = "password";
    }
}

function disp() {
    const len = pass.value.length;

    if (len === 0) {
        status.textContent = "";
    } else if (len < 5) {
        status.textContent = "Weak Password";
    } else if (len < 8) {
        status.textContent = "Medium Password";
    } else {
        status.textContent = "Strong Password";
    }
}