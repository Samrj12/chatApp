import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../Features/account/accountSlice";
import {signInWithGoogleAsync} from "../Features/account/accountSlice";
const navItems = [{ label: "Your chats" }, { label: "Profile" }, { label: "" }];

function Navbar() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch()
  return (
    <div className="flex w-screen divide-x-2 shadow-sm shadow-slate-700 justify-end font-[Lato] border-slate-700 py-2">
      <div className="flex mx-2 items-center mr-12 rounded-md">
        {navItems.map((item, i) => (
          <div key={i} className="my-2 px-2 rounded-lg font-bold bg-slate-40 text-lg transition-colors duration-300 hover:bg-slate-500">
            {item.label}
          </div>
        ))}
        {user ? <img src={user.photoURL} alt="Profile Picture" class="rounded-full h-12 w-12"></img> : <div className="my-2 px-2 text-blue-500 cursor-pointer rounded-lg font-bold bg-slate-40 text-lg transition-colors duration-300 hover:text-blue-300" onClick={() => dispatch(signInWithGoogleAsync())} >
            Sign in
          </div>}
        
      </div>
    </div>
  );
}

export default Navbar;
