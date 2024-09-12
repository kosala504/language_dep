import { initializeApp } from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCNHtxAiC0Cpee-dhe4IbiuFsl9WhBNi54",
    authDomain: "survey-app-d1480.firebaseapp.com",
    projectId: "survey-app-d1480",
    storageBucket: "survey-app-d1480.appspot.com",
    messagingSenderId: "1052610379837",
    appId: "1:1052610379837:web:a15c5b4b2cbc916f986a54"
};

const app = initializeApp(firebaseConfig);

export default app;