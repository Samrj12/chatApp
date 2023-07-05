import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export function signInWithGoogle()
{
    return new Promise(async (resolve, reject) => {
        try{
            const auth = getAuth();
            const provider = new GoogleAuthProvider();
            const result = await signInWithPopup(auth, provider);
            
            console.log(result)
            const { displayName, photoURL, email, uid } = result.user;
            const user = { displayName, photoURL, email, uid };
            resolve({user});
        }
        catch(err)
        {
            reject(err);
        }
    })
}