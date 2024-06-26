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
        href: 'https://affinity.serif.com/en-gb/designer',
        type: StackType.DESIGN
    },
    {
        title: 'Affinity Photo',
        href: 'https://affinity.serif.com/en-gb/photo',
        type: StackType.DESIGN
    },
    {
        title: 'Affinity Publisher',
        href: 'https://affinity.serif.com/en-gb/publisher',
        type: StackType.DESIGN
    },
    {
        title: '1Password',
        href: 'https://1password.com',
        type: StackType.TOOLS
    },
    {
        title: 'Morgen',
        href: 'https://morgen.so',
        type: StackType.TOOLS
    },
    {
        title: 'Todoist',
        href: 'https://todoist.com',
        type: StackType.TOOLS
    },
    {
        title: 'Blender',
        href: 'https://blender.org',
        type: StackType.DESIGN
    },
    {
        title: 'Godot',
        href: 'https://godotengine.org',
        type: StackType.DEVELOPMENT
    }
];
