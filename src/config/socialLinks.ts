export type SocialLink = {
    id: string;
    name: string;
    href: string;
};

export const socialLinks: SocialLink[] = [
    { id: 'email', name: 'Email', href: 'mailto:support@nblackburn.uk' },
    {
        id: 'linkedin',
        name: 'LinkedIn',
        href: 'https://linkedin.com/in/nblackburn'
    },
    {
        id: 'github',
        name: 'GitHub',
        href: 'https://github.com/nblackburn'
    },
    {
        id: 'dribbble',
        name: 'Dribbble',
        href: 'https://dribbble.com/nblackburn'
    },
    {
        id: 'soundcloud',
        name: 'Soundcloud',
        href: 'https://soundcloud.com/nblackburn'
    }
];
