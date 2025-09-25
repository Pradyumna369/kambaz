import { NavLink} from "react-router-dom";
import { useSelector } from "react-redux";

export default function AccountNavigation() {
  const { currentUser } = useSelector((state : any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  return (
    <div id="wd-account-navigation" className = "list-group">
      {links.map((link) => (
        <NavLink
        id="wd-account-signin-link"
        to={`/Kambaz/Account/${link}`}
        className={({ isActive }) =>
          `list-group-item border border-0 ${
            isActive ? "active" : "text-danger"
          }`
        }
      >
        {link}
      </NavLink>
      ))}

    </div>
);}