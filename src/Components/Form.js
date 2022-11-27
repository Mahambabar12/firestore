import React from 'react'
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js"
import { getFirestore , collection , addDoc} from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js"

let db = getFirestore()
const auth = getAuth();

export default function Form() {
    let register = () => {
        // let username = document.getElementById("username");
        let email = document.getElementById("email");
        let password = document.getElementById("password");

        createUserWithEmailAndPassword(auth, email.value, password.value)
            .then(() => {
                alert("New user is regitsterred !")
                const docRef = addDoc( collection(db , "user"),{
                name: "Maham",
            })
           })
            .catch((err) => {
                console.log("err=>", err)
            })
    }

    return (
        <>
            <label htmlFor="username">Enter Your Username : </label>
            <input type="text" id='username' placeholder='Enter Username' /><br />
            <label htmlFor="username">Enter Your Email : </label>
            <input type="text" id='email' placeholder='Enter Email' /><br />
            <label htmlFor="username">Enter Your Password : </label>
            <input type="text" id='password' placeholder='Enter Password' /><br /><br />
            <button onClick={register}>Register</button>
        </>
    )
}
