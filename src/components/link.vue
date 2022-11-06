<template>
    <a
        :href="refLink"
        :rel="isExternal ? 'noopener' : ''"
        :target="isExternal ? '_blank' : ''"
    >
        <slot />
    </a>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { isExternalLink, buildRefLink } from '@utilities/refLink';

export default defineComponent({
    props: {
        href: {
            type: String
        },

        ref: {
            type: String,
            default: 'nblackburn.uk'
        }
    },

    setup(props) {
        const isExternal = computed(() => isExternalLink(props.href));
        const refLink = computed(() => buildRefLink(props.href, props.ref));

        return { isExternal, refLink };
    }
});
</script>
