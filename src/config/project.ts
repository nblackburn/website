type Tag = {
    name: string;
    slug: string;
    url: string;
};

export type Project = {
    url: string;
    slug: string;
    title: string;
    tags: Tag[];
    thumbnail: string;
    description: string;
    pubDate: string;
};
