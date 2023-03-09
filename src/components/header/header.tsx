import Image from 'next/image';
const Header = () => {
  return <header>
    <div className='flex items-center space-x-2 md:space-x-10' >
      <Image className={"cursor-pointer object-contain"}  src={"/logo.svg"}  alt={"logo img"} width={56} height={56} />

      <ul className='space-x-4 md:flex hidden' >
        <li className='navLink'>Home</li>
        <li className='navLink'>Movies</li>
        <li className='navLink'>TV Shows</li>
        <li className='navLink'>New</li>
        <li className='navLink'>Popular</li>
      </ul>
    </div>
  </header> 
};

export default Header;
