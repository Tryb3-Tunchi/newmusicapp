import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center  my-6 border-b">
      <div className="logo ml-10 my-4">
        <h2>LOGO</h2>
      </div>
      <div>
        <input className="hover:border-2 bg-gray-300 rounded-md pl-2 " type="text" placeholder="search" />
      </div>
      <div>
        <ul className="flex mr-10 my-4">
          <li className="mr-3">
            <Link href="/">Home</Link>
          </li>
          <li className="mr-3">
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/more">More</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
