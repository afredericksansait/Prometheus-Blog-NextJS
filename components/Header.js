import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/PR-Logo-with-Icon.webp';

export default function Header({ name }) {
  return (
    <header className="pt-20 pb-12">
      <div >
      <Link href="/">
       <Image 
       src={logo}
       />
       </Link>
      </div>
    </header>
  );
}
