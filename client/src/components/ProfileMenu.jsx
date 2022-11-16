import { Link } from "react-router-dom";
import { logout } from "../action/user";
import { useValue } from "../context/AuthContext";

const ProfileMenu = ({ setOpen}) => {
  const { dispatch } = useValue()
  
  const handleLogout = () => {
    logout(dispatch)
  }
  return (
    <ul>
      <Link
        to="/profile"
        onClick={() => setOpen(false)}
        className='hover:font-bold rounded hover:text-indigo-500 hover:bg-indigo-300/70 p-2 text-lg cursor-pointer '
      >
        Profile
      </Link>
      <li
        onClick={handleLogout}
        className='hover:font-bold rounded hover:text-indigo-500 hover:bg-indigo-300/70 p-2 text-lg cursor-pointer '
      >
        Logout
      </li>
    </ul>
  );
};

export default ProfileMenu;
