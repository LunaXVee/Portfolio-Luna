export default function Navbar() {
    return (
  

<div className="navbar bg-white shadow-sm mb-3 ">
  <div className="flex-none">
  <div className="dropdown">
  <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-white rounded-box z-1 mt-3 w-52 p-2 shadow" style={{ fontSize: '22rem' }}>
        <li><a className="text-base">Homepage</a></li>
        <li><a className="text-base">About Me</a></li>
        <li><a className="text-base">Projects</a></li>
        <li><a className="text-base">Contact</a></li>

      </ul>
    </div>
    </div>
  <div className="flex-1">
    <a className="btn btn-ghost text-xl text-[#0A3044]">LunaXVee</a>
  </div>
  <div className="navbar-end mr-5 ">
    <a className="btn" style={{ backgroundColor: '#0A3044' }}>Download Resume/CV</a>
  </div>
</div>
 );
}

