<template>
    <component :is="tag" v-bind="componentAttrs">
        <slot />
    </component>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import config from '@app/config';
import { isExternalLink, buildRefLink } from '@utilities/refLink';

interface Props {
    href?: string,
    referrer: string
};

const props = withDefaults(defineProps<Props>(), {
    referrer: config.seo.ref
});

const isExternal = isExternalLink(props.href);
const tag = computed(() => (props.href ? 'a' : 'span'));
const componentAttrs = computed(() => {
    if (tag.value !== 'a') {
        return {};
    }

    return {
        href: buildRefLink(props.href, props.referrer),
        rel: isExternal ? 'noopener' : undefined,
        target: isExternal ? '_self' : undefined
    };
});
</script>
