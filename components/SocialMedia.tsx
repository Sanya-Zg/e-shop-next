'use client';
import { LuYoutube, LuGithub, LuLinkedin, LuFacebook } from 'react-icons/lu';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './ui/tooltip';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface Props {
  className?: string;
  iconClassName?: string;
  tooltipClassName?: string;
}

const socialLinks = [
  {
    title: 'Youtube',
    href: 'https://www.youtube.com/',
    icon: <LuYoutube className="w-5 h-5" />,
  },
  {
    title: 'Github',
    href: 'https://www.github.com/',
    icon: <LuGithub className="w-5 h-5" />,
  },
  {
    title: 'Linkedin',
    href: 'https://www.linkedin.com/',
    icon: <LuLinkedin className="w-5 h-5" />,
  },
  {
    title: 'Facebook',
    href: 'https://www.facebook.com/',
    icon: <LuFacebook className="w-5 h-5" />,
  },
];

const SocialMedia = ({ className, iconClassName, tooltipClassName }: Props) => {
  return (
    <TooltipProvider>
      <div className={cn('flex items-center justify-between mt-10', className)}>
        {socialLinks.map((item) => (
          <Tooltip key={item.title}>
            <TooltipTrigger asChild>
              <Link
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'p-2 border-2 rounded-full hover:text-white hover:border-shop_light_green hoverEffect',
                  iconClassName
                )}
              >
                {item.icon}
              </Link>
            </TooltipTrigger>
            <TooltipContent
              className={cn(
                'bg-white text-darkColor font-semibold',
                tooltipClassName
              )}
            >
              {item.title}
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
};
export default SocialMedia;
