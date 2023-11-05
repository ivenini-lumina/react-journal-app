import { collection, doc, setDoc } from "firebase/firestore/lite";


export const startNewNote = () => {

    return async (dispatch, getState) => {

        // uid usuario
        const { uid } = getState().auth;

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
        };

        const newDoc = doc(collection(FirebaseDB, `${uid}/journal/notes`));
        const setDocResp = await setDoc(newDoc, newDoc);

        console.log(newDoc);
        conso;

        // !dispatch
        // dispatch ( newNote )
        // dispatch ( activateNote )
    };
};
