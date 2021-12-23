import initializeAuthentication from "../FireBase/FirebaseInitialize";
import {
    getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword, GoogleAuthProvider,
    signInWithPopup, updateProfile,getIdToken
} from "firebase/auth";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { manageUser } from "../Redux/Reducer/ServicesSlice";

initializeAuthentication();
const useFirebase=()=>{
    const auth = getAuth();
    const [isLoading, setIsLoading] = useState(true);
    const Googleprovider = new GoogleAuthProvider();
    const [user, setUser] = useState({});
    const dispatch=useDispatch();

    
    const googleSignIn = (location, navigate)=> {
        setIsLoading(true);
        signInWithPopup(auth, Googleprovider)
            .then((result) => {
                 const user = result.user;
               
                const body ={
                    docName:user.displayName,
                    docEmail:user.email,
                    method:'PUT'    
                }
                dispatch(manageUser(body));
                const destination = location?.state?.from || '/';
                navigate(destination);
                // ...
            }).catch((error) => {
                const errorMessage = error.message;
              
            }).finally(() => {
                setIsLoading(false);
            });
    }

      // create new user
      const registerUser = (email, password, name,navigate) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                // const user = userCredential.user;
                //setUser(user);
                navigate('/');
                // update user
                const newUser = { email, displayName: name };
                setUser(newUser);

                // send name to firebase after creation

                // ----------------------------------------------

                const body ={
                    docName:name,
                    docEmail:email,
                    method:'POST'

                    
                }
                dispatch(manageUser(body))
                
                // send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });
               
            })
            .catch((error) => {
                // const errorCode = error.code;
                const errorMessage = error.message;
                // ..
               
            })
            .finally(() => {
                setIsLoading(false);
            });
    }

     // email sign in
     const signInUser = (email, password, location, navigate) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                // const user = userCredential.user;
                // setUser(user);
                // ...
               

                const destination = location?.state?.from || '/';
                navigate(destination);
               
               
            })
            .catch((error) => {
                // const errorCode = error.code;
                const errorMessage = error.message;
               
            })
            .finally(() => {
                setIsLoading(false);
            });
    }

      // observe user.................
      useEffect(() => {
        setIsLoading(true);
        onAuthStateChanged(auth, (user) => {
            if (user) {

                // const uid = user.uid;
                setUser(user)
               
            } else {
                setUser({})
            }

            setIsLoading(false); 
        });

        
    }, [])

    const logout = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => {
                setIsLoading(false);
            });
    }
    
    return {
        user,
        googleSignIn,
        registerUser,
        signInUser,
        logout,
        isLoading
       

    }


}
export default useFirebase ;