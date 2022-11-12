type SEOConfig = {
    ref: string;
};

type PaginationConfig = {
    limit: number;
};

interface Config {
    seo: SEOConfig;
    pagination: PaginationConfig;
}

const config: Config = {
    seo: {
        ref: 'nblackburn.uk'
    },

    pagination: {
        limit: 4
    }
};

export default config;
