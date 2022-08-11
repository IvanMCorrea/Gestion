// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  getDocs,
  getDoc,
  query,
  where,
  doc,
  collection,
  setDoc,
  addDoc,
  Timestamp,
} from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MSJ_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};
// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
const appFirestore = getFirestore(appFirebase);
export async function exportDataToFirestore() {
  const prodsCollection = collection(appFirestore, "productos");
  const productos = [
    {
      name: "Caña Okuma",
      category: "Pesca",
      subcategory: "Cañas",
      stock: 0,
      desc: "",
      upc: "",
    },
    {
      name: "Caña Shimano",
      category: "Pesca",
      subcategory: "Cañas",
      stock: 0,
      desc: "",
      upc: "",
    },
    {
      name: "Reel Okuma",
      category: "Pesca",
      subcategory: "Reeles",
      stock: 0,
      desc: "",
      upc: "",
    },
    {
      name: "Termo Stanley",
      category: "Camping",
      subcategory: "Recipientes termicos",
      stock: 0,
      desc: "",
      upc: "",
    },
    {
      name: "Carpa Spinit",
      category: "Camping",
      subcategory: "Carpas",
      stock: 0,
      desc: "",
      upc: "",
    },
  ];
  productos.forEach((item) => {
    const newDoc = doc(prodsCollection);
    setDoc(newDoc, item)
      .then(() => {
        console.log("Documento guardado:", newDoc.id);
      })
      .catch((error) => console.log("error: ", error));
  });
}
export async function traerProds() {
  const prodsCollection = collection(appFirestore, "productos");
  const prodsSnapshot = await getDocs(prodsCollection);
  let respuesta = prodsSnapshot.docs.map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    };
  });
  return respuesta;
}
export async function traerProdsCategoria(categoriaId, type) {
  const prodsCollection = collection(appFirestore, "productos");
  const q = query(prodsCollection, where(type, "==", categoriaId));
  const prodsSnapshot = await getDocs(q);
  let respuesta = prodsSnapshot.docs.map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    };
  });
  return respuesta;
}
export async function traerCategorias() {
  let prods = [];
  let category = [];
  let categories = traerProds()
    .then((res) => {
      prods = res;
    })
    .then(() => {
      category = prods.map((item) => {
        return (category = [item.category]);
      });
      const array = new Set(category.map((obj) => obj[0]));
      const cat = [...array];
      return cat;
    });
  return categories;
}
export async function traerSubCategorias() {
  let prods = [];
  let category = [];
  let categories = traerProds()
    .then((res) => {
      prods = res;
    })
    .then(() => {
      category = prods.map((item) => {
        return (category = [item.subcategory]);
      });
      const array = new Set(category.map((obj) => obj[0]));
      const cat = [...array];
      return cat;
    });
  return categories;
}
export async function mostrarDetalleProd(itemId) {
  const docref = doc(appFirestore, "productos", itemId);
  const docSnapshot = await getDoc(docref);
  return {
    id: docSnapshot.id,
    ...docSnapshot.data(),
  };
}
export async function createNewProd(dataProd) {
  const orderColectionRef = collection(appFirestore, "orders");
  const dateTimestamp = Timestamp.now();
  const dataOrderWithDate = {
    ...dataProd,
    date: dateTimestamp,
  };
  const orderCreated = await addDoc(orderColectionRef, dataOrderWithDate);
  return orderCreated;
}
