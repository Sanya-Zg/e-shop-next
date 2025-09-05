'use client';
import { FC } from 'react';
import Logo from './Logo';
import { X } from 'lucide-react';
import { headerData } from '@/app/constans/data';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import SocialMedia from './SocialMedia';

interface SideBarProps {
  isOpen: boolean;
  onClose: () => void;
}

const SideMenu: FC<SideBarProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();
  return (
    <aside
      className={`fixed inset-y-0 left-0 z-50 w-full bg-black/50 text-white/70 shadow-xl ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } hoverEffect`}
      onClick={onClose}
    >
      <div
        className="min-w-72 max-w-96 bg-black h-screen p-10 border-r border-r-shop_light_green flex flex-col gap-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-5">
          <Logo className="text-white" spanDesign="group-hover:text-white" />
          <button
            onClick={onClose}
            className="hover:text-shop_light_green hoverEffect"
            aria-label="Close menu"
          >
            <X />
          </button>
        </div>
        <div className="flex flex-col space-y-4 font-semibold tracking-wide">
          {headerData.map((item) => (
            <Link
              className={`hover:text-white hoverEffect ${
                pathname === item.href && 'text-shop_light_green'
              }`}
              key={item.title}
              href={item.href}
            >
              {item.title}
            </Link>
          ))}
        </div>
        <SocialMedia />
      </div>
    </aside>
  );
};
export default SideMenu;
