
import { useEffect, useState } from "react";
import { getDatabase, set, push, ref, onChildAdded } from "firebase/database";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";


function Chats() {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const googleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        setUser(user);
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };
  const db = getDatabase();
  const [user, setUser] = useState(null);
  const [msg, setMsg] = useState("");
  
  const chatListRef = ref(db, 'chats');
  const [chats, setChats] = useState(null);
  useEffect(() => {
    // Handle initial data separately to avoid duplication
    console.log('UseEffect');
    let initialData=[
      { name: "Rahul",email: "Rahul@gmail.com", message: "Hi!" },
      { name: "Sameer",email: "Sameer@gmail.com", message: "Hello!" },
    ];
    onChildAdded(chatListRef, (data) => {
      initialData.push(data.val());
    });
    setChats(initialData)
  }, []);
  const addChat = () => {
    if (msg) {
      const chatRef = push(chatListRef);
      set(chatRef, {name : user.displayName, email : user.email, message: msg})
      setMsg("");
    }
  };

  const handleEnterKeyPress = (e) => {
    if(e.key === 'Enter')
    addChat();
  }
    return (  
        <div>
             {user ? (
        <div>
          <h1>User: {user.displayName}</h1>
          {chats.map((chat) => (
            <div className={`container ${chat.name === user.displayName ? "me" : ""}`}>
              <p className="chatbox">
                <strong>{chat.name} </strong>

                <span>{chat.message}</span>
              </p>
              
            </div>
          ))}
          <div className="text-box">
                <input
                  type="text"
                  placeholder="Enter your message"
                  value={msg}
                  onInput={(e) => {
                    setMsg(e.target.value);
                    console.log(msg);
                  }}
                  onKeyDown={handleEnterKeyPress}
                ></input>
                <button onClick={addChat}>Send</button>
              </div>
        </div>
      ) : <button onClick={googleLogin}>Google Sign In</button>}
        </div>
    );
}

export default Chats;