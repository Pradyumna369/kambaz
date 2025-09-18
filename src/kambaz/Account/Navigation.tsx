import { Link, NavLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import ProtectedRoute from './ProtectedRoute'

export default function AccountNavigation() {
  const { currentUser } = useSelector((state) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  const {pathname} = useLocation();
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