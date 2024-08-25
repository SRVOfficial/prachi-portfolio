





// import React, { useState } from 'react';
// // import { IoMdAnalytics } from "react-icons/io";

// import './Header.css';

// import Logo from '../images/pslogo.png'

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const scrollToSection = (id) => {
//     const element = document.getElementById(id);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//       setIsOpen(false);
//     }
//   };

//   return (
//     <nav className="bg-[#F1E3D3] p-4">
//       <div className="container mx-auto flex justify-between items-center">
//         <div className="flex items-center font-bold">
//           {/* <IoMdAnalytics className="text-[#8B4513] text-2xl mr-2" />  */}
//           <img src={Logo} alt='logo' className='w-8 h-8 mr-2'/>
//           <a href="/" className="text-[#8B4513] text-2xl font-bold dancing-script-prachi">Prachi Sharan</a> {/* Dark chocolate text color */}
//         </div>
//         <div className="lg:hidden">
//           <button onClick={toggleMenu} className="text-[#8B4513] focus:outline-none focus:bg-[#D2691E] px-3 py-2"> {/* Dark chocolate button color, chocolate focus */}
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
//             </svg>
//           </button>
//         </div>
//         <div className={`lg:flex ${isOpen ? 'block' : 'hidden'} mt-4 lg:mt-0`}>
//           <button onClick={() => scrollToSection('home')} className="block lg:inline-block text-[#8B4513] hover:bg-[#D2691E] hover:text-white px-3 py-2 rounded-md transition-colors">Home</button>
//           <button onClick={() => scrollToSection('about')} className="block lg:inline-block text-[#8B4513] hover:bg-[#D2691E] hover:text-white px-3 py-2 rounded-md transition-colors">About</button>
//           <button onClick={() => scrollToSection('experience')} className="block lg:inline-block text-[#8B4513] hover:bg-[#D2691E] hover:text-white px-3 py-2 rounded-md transition-colors">Experience</button>
//           <button onClick={() => scrollToSection('contact')} className="block lg:inline-block text-[#8B4513] hover:bg-[#D2691E] hover:text-white px-3 py-2 rounded-md transition-colors">Contact</button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Header;





// import React, { useState, useEffect } from 'react';
// import './Header.css';
// import Logo from '../images/pslogo.png'

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [menuHeight, setMenuHeight] = useState(0);

//   const menuRef = React.useRef(null);

//   useEffect(() => {
//     if (menuRef.current) {
//       setMenuHeight(isOpen ? menuRef.current.scrollHeight : 0);
//     }
//   }, [isOpen]);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const scrollToSection = (id) => {
//     const element = document.getElementById(id);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//       setIsOpen(false);
//     }
//   };

//   return (
//     <nav className="bg-[#F1E3D3] p-4">
//       <div className="container mx-auto flex flex-wrap justify-between items-center">
//         <div className="flex items-center font-bold">
//           <img src={Logo} alt='logo' className='w-8 h-8 mr-2'/>
//           <a href="/" className="text-[#8B4513] text-2xl font-bold dancing-script-prachi">Prachi Sharan</a>
//         </div>
//         <div className="lg:hidden">
//           <button onClick={toggleMenu} className="text-[#8B4513] focus:outline-none focus:bg-[#D2691E] px-3 py-2">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
//             </svg>
//           </button>
//         </div>
//         <div 
//           className={`w-full lg:flex lg:w-auto overflow-hidden transition-all duration-300 ease-in-out`}
//           style={{ maxHeight: `${isOpen ? menuHeight : 0}px` }}
//           ref={menuRef}
//         >
//           <div className="lg:flex-grow">
//             <button onClick={() => scrollToSection('home')} className="block w-full text-left lg:inline-block lg:w-auto text-[#8B4513] hover:bg-[#D2691E] hover:text-white px-3 py-2 rounded-md transition-colors">Home</button>
//             <button onClick={() => scrollToSection('about')} className="block w-full text-left lg:inline-block lg:w-auto text-[#8B4513] hover:bg-[#D2691E] hover:text-white px-3 py-2 rounded-md transition-colors">About</button>
//             <button onClick={() => scrollToSection('experience')} className="block w-full text-left lg:inline-block lg:w-auto text-[#8B4513] hover:bg-[#D2691E] hover:text-white px-3 py-2 rounded-md transition-colors">Experience</button>
//             <button onClick={() => scrollToSection('contact')} className="block w-full text-left lg:inline-block lg:w-auto text-[#8B4513] hover:bg-[#D2691E] hover:text-white px-3 py-2 rounded-md transition-colors">Contact</button>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Header;





import React, { useState, useEffect } from 'react';
import './Header.css';
import Logo from '../images/pslogo.png'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuHeight, setMenuHeight] = useState(0);

  const menuRef = React.useRef(null);

  useEffect(() => {
    if (menuRef.current) {
      setMenuHeight(isOpen ? menuRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="bg-[#F1E3D3] p-4">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <div className="flex items-center font-bold">
          <img src={Logo} alt='logo' className='w-8 h-8 mr-2'/>
          <a href="/" className="text-[#8B4513] text-2xl font-bold dancing-script-prachi">Prachi Sharan</a>
        </div>
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-[#8B4513] focus:outline-none focus:bg-[#D2691E] px-3 py-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:items-center">
          <button onClick={() => scrollToSection('home')} className="text-[#8B4513] hover:bg-[#D2691E] hover:text-white px-3 py-2 rounded-md transition-colors">Home</button>
          <button onClick={() => scrollToSection('about')} className="text-[#8B4513] hover:bg-[#D2691E] hover:text-white px-3 py-2 rounded-md transition-colors">About</button>
          <button onClick={() => scrollToSection('experience')} className="text-[#8B4513] hover:bg-[#D2691E] hover:text-white px-3 py-2 rounded-md transition-colors">Experience</button>
          <button onClick={() => scrollToSection('contact')} className="text-[#8B4513] hover:bg-[#D2691E] hover:text-white px-3 py-2 rounded-md transition-colors">Contact</button>
        </div>
        <div 
          className={`lg:hidden w-full overflow-hidden transition-all duration-300 ease-in-out`}
          style={{ maxHeight: `${isOpen ? menuHeight : 0}px` }}
          ref={menuRef}
        >
          <button onClick={() => scrollToSection('home')} className="block w-full text-left text-[#8B4513] hover:bg-[#D2691E] hover:text-white px-3 py-2 rounded-md transition-colors">Home</button>
          <button onClick={() => scrollToSection('about')} className="block w-full text-left text-[#8B4513] hover:bg-[#D2691E] hover:text-white px-3 py-2 rounded-md transition-colors">About</button>
          <button onClick={() => scrollToSection('experience')} className="block w-full text-left text-[#8B4513] hover:bg-[#D2691E] hover:text-white px-3 py-2 rounded-md transition-colors">Experience</button>
          <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-[#8B4513] hover:bg-[#D2691E] hover:text-white px-3 py-2 rounded-md transition-colors">Contact</button>
        </div>
      </div>
    </nav>
  );
};

export default Header;