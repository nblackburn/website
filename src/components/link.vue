<script lang="ts">
import config from '@app/config';
import { h, defineComponent } from 'vue';
import { isExternalLink, buildRefLink } from '@utilities/refLink';

export default defineComponent({
    props: {
        href: {
            type: String
        },

        ref: {
            type: String,
            default: config.seo.ref
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
});
</script>
