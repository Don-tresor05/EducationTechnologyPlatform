const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-md">
      <div className="text-xl font-bold text-primary">Umurava</div>
      <div className="space-x-4">
        <a href="#" className="text-secondary">Home</a>
        <a href="#" className="text-secondary">Challenges & Hackathons</a>
        <a href="#" className="text-secondary">For Educational Institutions</a>
        <a href="#" className="text-secondary">About Us</a>
        <a href="#" className="text-secondary">Contact Us</a>
        <button className="bg-highlight text-white px-4 py-2 rounded">Join the Program</button>
      </div>
    </nav>
  );
};

export default Navbar;
