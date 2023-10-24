export type NavItem = {
    id: string;
    title: string;
    href: string;
};

export const nav: NavItem[] = [
    { id: 'home', title: 'Home', href: '/' },
    { id: 'projects', title: 'Projects', href: '/projects' },
    { id: 'about', title: 'About', href: '/about' },
    { id: 'contact', title: 'Contact', href: '/contact' }
];
