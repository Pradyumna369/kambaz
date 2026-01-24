import { useState } from "react";
import { Link,useNavigate } from "react-router";
import * as client from "./client";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";

export default function Signup() {
    const [user, setUser] = useState<any>({});
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const signup = async() => {
      const currentUser = await client.signup(user);
      dispatch(setCurrentUser(currentUser));
      navigate("/Kambaz/Account/Profile");
    };
    return (
        <div id="wd-signup-screen">
          <h3>Sign up</h3>
          <input placeholder="username" className="wd-username form-control mb-2" value={user.userName}
            onChange={(e) => setUser({...user, userName:e.target.value})}/>
          <input value={user.password} placeholder="password" type="password" className="wd-password form-control mb-2"
            onChange={(e) => setUser({...user, password:e.target.value})}/>
          <button onClick={signup} className="wd-signup-btn btn btn-primary mb-2 w-100"> Sign up </button><br />
          <Link  to="/Kambaz/Account/Signin" >Sign in</Link>
        </div>
);}