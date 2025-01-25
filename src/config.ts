import { defaultPalette } from '@styles/palettes.css';

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

interface Config {
    url: string;
    seo: SEOConfig;
    mail: MailConfig;
    palette: PaletteConfig;
    projects: ProjectsConfig;
    pagination: PaginationConfig;
}

const config: Config = {
    url: 'https://nblackburn.uk',

    projects: {
        featuredTags: ['design', 'music', 'game']
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
