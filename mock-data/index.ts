import { ProfileIcon } from '@/components/icons/profile';
import type { IBaseCarousel } from '@/components/reuseable/base-carousel';
import type { ChartConfig } from '@/components/ui/chart';
import type { INavLinkProps } from '../app/sections/header/nav';
import type { IAnalytics } from '../app/sections/overview/components/ananlytics-card';

export const chartConfig = {
  desktop: {
    label: 'Desktop',
    color: '#4545FE',
  },
  mobile: {
    label: 'Mobile',
    color: '#12B76A',
  },
  tablet: {
    label: 'Tablet',
    color: '#F04438',
  },
} satisfies ChartConfig;

export const chartData = [
  { month: 'January', desktop: 43, mobile: 33, tablet: 20 },
  { month: 'February', desktop: 45, mobile: 35, tablet: 25 },
  { month: 'March', desktop: 37, mobile: 45, tablet: 20 },
  { month: 'April', desktop: 20, mobile: 30, tablet: 40 },
  { month: 'May', desktop: 43, mobile: 13, tablet: 28 },
  { month: 'June', desktop: 21, mobile: 14, tablet: 29 },
  { month: 'July', desktop: 18, mobile: 38, tablet: 40 },
  { month: 'August', desktop: 30, mobile: 20, tablet: 50 },
  { month: 'September', desktop: 23, mobile: 12, tablet: 36 },
  { month: 'October', desktop: 37, mobile: 19, tablet: 27 },
  { month: 'November', desktop: 29, mobile: 13, tablet: 18 },
  { month: 'December', desktop: 24, mobile: 34, tablet: 29 },
];

export const data: IAnalytics[] = [
  { amount: 120000000, title: 'Total inflow', trend: 'up', percentageChange: 2.5 },
  { amount: 50000000, title: 'MRR', trend: 'moderate-up', percentageChange: 2.5 },
  { amount: 200000000, title: 'Commission Revenue', trend: 'moderate-down', percentageChange: 2.5 },
  { amount: 500000000, title: 'GMV', trend: 'down', percentageChange: 2.5 },
];

export const firstCarouselData: IBaseCarousel[] = [
  {
    src: '/assets/main/c1.jpg',
    alt: 'building',
    title: 'Most CLICKED',
    description: 'Urban Prime Plaza Premiere',
  },
  {
    src: '/assets/main/c1.jpg',
    alt: 'building',
    title: 'Most CLICKED 2',
    description: 'Urban Prime Plaza Premiere',
  },
];

export const secondCarouselData: IBaseCarousel[] = [
  {
    src: '/assets/main/c2.png',
    alt: 'building',
    title: 'most wATCHLISTED',
    description: 'Urban Prime Plaza Premiere',
  },
  {
    src: '/assets/main/c2.png',
    alt: 'building',
    title: 'most wATCHLISTED 2',
    description: 'Urban Prime Plaza Premiere',
  },
  {
    src: '/assets/main/c2.png',
    alt: 'building',
    title: 'most wATCHLISTED 3',
    description: 'Urban Prime Plaza Premiere',
  },
  {
    src: '/assets/main/c2.png',
    alt: 'building',
    title: 'most wATCHLISTED 4',
    description: 'Urban Prime Plaza Premiere',
  },
  {
    src: '/assets/main/c2.png',
    alt: 'building',
    title: 'most wATCHLISTED 5',
    description: 'Urban Prime Plaza Premiere',
  },
];

export const thirdCarouselData: IBaseCarousel[] = [
  {
    src: '/assets/main/c3.jpg',
    alt: 'building',
    title: 'HOTTEST LISTING',
    description: 'Urban Prime Plaza Premiere',
  },
  {
    src: '/assets/main/c3.jpg',
    alt: 'building',
    title: 'HOTTEST LISTING 2',
    description: 'Urban Prime Plaza Premiere',
  },
  {
    src: '/assets/main/c3.jpg',
    alt: 'building',
    title: 'HOTTEST LISTING 3',
    description: 'Urban Prime Plaza Premiere',
  },
  {
    src: '/assets/main/c3.jpg',
    alt: 'building',
    title: 'HOTTEST LISTING 4',
    description: 'Urban Prime Plaza Premiere',
  },
  {
    src: '/assets/main/c3.jpg',
    alt: 'building',
    title: 'HOTTEST LISTING 5',
    description: 'Urban Prime Plaza Premiere',
  },
];

export const navLink: INavLinkProps[] = [
  { href: '/', icon: { src: '/assets/header/dashboard.png', alt: 'dashboard' }, name: 'Dashboard' },
  {
    href: '/listing',
    icon: { src: '/assets/header/listing.png', alt: 'Listing' },
    name: 'Listing',
  },
  { href: '/users', icon: ProfileIcon, name: 'Users' },
  {
    href: '/request',
    icon: { src: '/assets/header/request.png', alt: 'request' },
    name: 'Request',
  },
  {
    href: '/applications',
    icon: { src: '/assets/header/application.png', alt: 'application' },
    name: 'Applications',
  },
];
