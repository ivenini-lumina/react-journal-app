import { collection, getDoc, doc } from "firebase/firestore/lite";
import { FirebaseDB } from "../firebase/config";

export const loadSingleNote = async ( uid = '', noteId = '' ) => {
    // Actualmente no se usa
    if ( !uid ) throw new Error('ID del usuario no proporcionado');
    if ( !noteId ) throw new Error('ID de la nota no proporcionado');

    const documentRef = doc(collection(FirebaseDB, `${uid}/journal/notes`), noteId);
    const docSnap = await getDoc(documentRef);
  
    if (docSnap.exists()) {
      const note = {
        id: docSnap.id,
        ...docSnap.data()
      };
      return note;
    } else {
      throw new Error(`La nota con id=${noteId} para el usuario ${uid} no existe`);
    }    
}