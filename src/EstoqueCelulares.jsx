import React, { useEffect, useState } from "react";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  updateDoc,
  doc
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBIjhATsoAoqH4g0TmT3VKk6sPzHpr8chE",
  authDomain: "marc-s-smart.firebaseapp.com",
  projectId: "marc-s-smart",
  storageBucket: "marc-s-smart.firebasestorage.app",
  messagingSenderId: "1050710486682",
  appId: "1:1050710486682:web:17c2a8ddbdf1c4bcf73923",
  measurementId: "G-J8XNMDS85H"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const colecao = collection(db, "celulares");

export default function EstoqueCelulares() {
  return (
    <div>Interface final com estoque e vendas</div>
  );
}