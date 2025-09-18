export default function Navbar({ dark = false }) {
  const bgColor = dark ? "bg-neutral-900" : "bg-white";
  const textColor = dark ? "text-white" : "text-[#09090B]";
  const dropdownBg = dark ? "bg-neutral-800" : "bg-white";
  
  // Much stronger hover effects
  const linkHover = dark 
    ? "hover:bg-neutral-600 hover:text-teal-300" 
    : "hover:bg-neutral-200 hover:text-teal-600";
  
  // Alternative option with even stronger contrast:
  // const linkHover = dark 
  //   ? "hover:bg-teal-700 hover:text-white" 
  //   : "hover:bg-teal-100 hover:text-teal-700";
  
  return (
    <div className={`navbar ${bgColor} shadow-sm mb-3`}>
      <div className="flex-none">
        <div className="dropdown">
          <div tabIndex={0} role="button" className={`btn btn-ghost btn-circle ${textColor}`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> 
            </svg>
          </div>
          <ul
            tabIndex={0}
            className={`menu menu-sm dropdown-content ${dropdownBg} rounded-box z-1 mt-3 w-52 p-2 shadow`}>
            <li>
              <a href="/" className={`text-base ${textColor} ${linkHover} transition-all duration-200 rounded-md px-3 py-2`}>
                Homepage
              </a>
            </li>
            <li>
              <a href="/about" className={`text-base ${textColor} ${linkHover} transition-all duration-200 rounded-md px-3 py-2`}>
                About Me
              </a>
            </li>
            <li>
              <a href="/projects" className={`text-base ${textColor} ${linkHover} transition-all duration-200 rounded-md px-3 py-2`}>
                Projects
              </a>
            </li>
            <li>
              <a href="/contact" className={`text-base ${textColor} ${linkHover} transition-all duration-200 rounded-md px-3 py-2`}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex-1">
        <a className={`btn btn-ghost text-xl ${textColor}`}>LunaXVee</a>
      </div>
      <div className="navbar-end mr-5">
        <a href="/resume.pdf" 
          download="Vimbai_Resume.pdf"
          className="btn bg-teal-600 hover:bg-teal-700 hover:scale-105 border-none text-white font-semibold transition-all duration-300">
          Download Resume/CV
        </a>
      </div>
    </div>
  );
}