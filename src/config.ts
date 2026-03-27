import { defaultPalette } from '@styles/palettes.css.ts';

type PaletteConfig = {
    default: string;
};

type SEOConfig = {
    ref: string;
};

type PaginationConfig = {
    limit: number;
};

type MailConfig = {
    from: string;
    to: string;
};

type ProjectsConfig = {
    featuredTags: string[];
};

type BlogConfig = {
    featuredTags: string[];
};

type HeroLine = {
    action: string;
    kind: string;
    purpose: string;
};

type HeroConfig = {
    timeout: number;
    lines: HeroLine[];
};

interface Config {
    url: string;
    seo: SEOConfig;
    mail: MailConfig;
    blog: BlogConfig;
    hero: HeroConfig;
    palette: PaletteConfig;
    projects: ProjectsConfig;
    pagination: PaginationConfig;
}

const config: Config = {
    url: 'https://nblackburn.uk',

    hero: {
        timeout: 10_000,
        lines: [
            { action: 'write', kind: 'articles', purpose: 'show you how' },
            { action: 'develop', kind: 'games', purpose: 'help you escape' },
            { action: 'compose', kind: 'music', purpose: 'heals your soul' },
            { action: 'build', kind: 'apps', purpose: 'make life better' }
        ]
    },

    projects: {
        featuredTags: ['design', 'music', 'game']
    },

    blog: {
        featuredTags: ['guide', 'thought']
    },

    seo: {
        ref: 'nblackburn.uk'
    },

    pagination: {
        limit: 4
    },

    palette: {
        default: defaultPalette
    },

    mail: {
        from: 'Nathaniel Blackburn <noreply@nblackburn.uk>',
        to: 'Nathaniel Blackburn <support@nblackburn.uk>'
    }
};

export default config;
