import firebase from "firebase";

export const initializeFireBase= () => {
    firebase.initializeApp({
        apiKey: "AIzaSyDA6PLcqXAMs0AvmxCV8wgGVfeeIAiF9CM",
        authDomain: "paytomate-71421.firebaseapp.com",
        databaseURL: "paytomate-71421",
        projectId: "paytomate-71421.appspot.com",
        storageBucket: "254942688645",
        messagingSenderId: "1:254942688645:web:9e1257c6a8350be01840ec",
        appId: "G-E25SLNWFMX"
    })
}
//initialize Firebase