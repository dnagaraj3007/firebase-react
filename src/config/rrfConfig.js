import firebase from "./firebaseConfig";
import store from "../state/store";

const rrfConfig = {
    userProfile: "users"
    // useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
    // enableClaims: true // Get custom claims along with the profile
};

const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch
    // createFirestoreInstance // <- needed if using firestore
};

export default rrfProps;
