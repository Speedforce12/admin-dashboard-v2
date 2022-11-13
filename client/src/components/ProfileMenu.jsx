const ProfileMenu = ({ setOpen, menuRef }) => {
  return (
    <ul>
      <li
        onClick={() => setOpen(false)}
        className='hover:font-bold rounded hover:text-indigo-500 hover:bg-indigo-300/70 p-2 text-lg cursor-pointer '
      >
        Profile
      </li>
      <li
        onClick={() => setOpen(false)}
        className='hover:font-bold rounded hover:text-indigo-500 hover:bg-indigo-300/70 p-2 text-lg cursor-pointer '
      >
        Logout
      </li>
    </ul>
  );
};

export default ProfileMenu;
