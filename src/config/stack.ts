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
        title: 'Affinity',
        href: 'https://affinity.studio',
        type: StackType.DESIGN
    },
    {
        title: 'Expressive Animator',
        href: 'https://expressive.app/expressive-animator',
        type: StackType.DESIGN
    },
    {
        title: '1Password',
        href: 'https://1password.com',
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
    },
    {
        title: 'Dataflare',
        href: 'https://dataflare.app',
        type: StackType.DEVELOPMENT
    },
    {
        title: 'Raycast',
        href: 'https://www.raycast.com',
        type: StackType.TOOLS
    },
    {
        title: 'Fastmail',
        href: 'https://fastmail.com',
        type: StackType.TOOLS
    }
];
