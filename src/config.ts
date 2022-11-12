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

interface Config {
    seo: SEOConfig;
    palette: PaletteConfig;
    pagination: PaginationConfig;
}

const config: Config = {
    seo: {
        ref: 'nblackburn.uk'
    },

    pagination: {
        limit: 4
    },

    palette: {
        default: defaultPalette
    }
};

export default config;
