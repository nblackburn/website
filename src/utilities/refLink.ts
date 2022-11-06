export const isExternalLink = (link?: string): boolean => {
    const protocols = ['http', 'https'];

    if (!link) {
        return false;
    }

    return protocols.some((protocol) => link.indexOf(protocol) === 0);
};

export const buildRefLink = (link?: string, ref?: string) => {
    if (!link || !isExternalLink(link)) {
        return link;
    }

    const url = new URL(link);

    if (ref && ref.length > 0) {
        url.searchParams.append('ref', ref);
    }

    return url.toString();
};
