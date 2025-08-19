import { NavBar } from './nav';
import { TopHeader } from './top-header';

export default function Header() {
  return (
    <div className='w-full flex flex-col items-center'>
      <TopHeader />
      <NavBar />
    </div>
  );
}
