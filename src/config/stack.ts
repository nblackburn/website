export enum StackType {
    MUSIC = 'music',
    TOOLS = 'tools',
    DESIGN = 'design',
    DEVELOPMENT = 'development'
}

export type StackItem = {
    title: string;
    href: string;
    type: string;
};

export const stackGroups = [
    { id: StackType.MUSIC, name: 'Music' },
    { id: StackType.DEVELOPMENT, name: 'Development' },
    { id: StackType.DESIGN, name: 'Design' },
    { id: StackType.TOOLS, name: 'Tools' }
];

export const stack: StackItem[] = [
    {
        title: 'Auturia Keylab 61 Essential',
        href: 'https://www.arturia.com/products/hybrid-synths/keylab-essential/overview',
        type: StackType.MUSIC
    },
    {
        title: 'Bitwig Studio',
        href: 'https://bitwig.com',
        type: StackType.MUSIC
    },
    {
        title: 'Visual Studio Code',
        href: 'https://code.visualstudio.com',
        type: StackType.DEVELOPMENT
    },
    {
        title: 'Fork',
        href: 'https://git-fork.com',
        type: StackType.DEVELOPMENT
    },
    {
        title: 'Affinity Designer',
        href: 'https://affinity.serif.com',
        type: StackType.DESIGN
    },
    {
        title: 'Figma',
        href: 'https://figma.com',
        type: StackType.DESIGN
    },
    {
        title: 'Notion',
        href: 'https://notion.so',
        type: StackType.TOOLS
    },
    {
        title: '1Password',
        href: 'https://1password.com',
        type: StackType.TOOLS
    }
];
