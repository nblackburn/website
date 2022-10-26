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
import { computed } from 'vue';
import { isExternalLink, buildRefLink } from '@utilities/refLink';

export default {
    props: {
        href: {
            type: String,
            required: true
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
};
</script>
