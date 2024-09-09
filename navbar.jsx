// src/components/Navbar.jsx
import logo from '../assets/logo.jpg'; // Make sure your logo is in the assets folder

const Navbar = () => {
  return (
    <nav className="bg-white bg-opacity-20 shadow-lg backdrop-blur-lg">
      <div className="container mx-auto flex justify-between items-center py-6 px-8">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-12 w-12 mr-4" />
          <h1 className="text-4xl font-extrabold text-white tracking-wide">
            <span className="block">Myracle</span>
            <span className="block text-lg mt-1">AI Testing Tool</span>
          </h1>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
