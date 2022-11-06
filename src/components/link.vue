<script lang="ts">
import { h } from 'vue';
import { isExternalLink, buildRefLink } from '@utilities/refLink';

export default {
    props: {
        href: {
            type: String
        },

        ref: {
            type: String,
            default: 'nblackburn.uk'
        }
    },

    setup(props, { slots }) {
        const tag = props.href ? 'a' : 'span';
        const isExternal = isExternalLink(props.href);
        const href = buildRefLink(props.href, props.ref);
        const rel = isExternal ? 'noopener' : undefined;
        const target = isExternal ? '_blank' : undefined;

        return () =>
            h(
                tag,
                {
                    rel,
                    href,
                    target
                },
                slots.default()
            );
    }
};
</script>
