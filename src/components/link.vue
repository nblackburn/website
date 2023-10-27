<template>
    <component :is="tag" v-bind="componentAttrs">
        <slot />
    </component>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import config from '@app/config';
import { isExternalLink, buildRefLink } from '@utilities/refLink';

const props = defineProps({
    href: {
        type: String
    },
    ref: {
        type: String,
        default() {
            return config.seo.ref;
        }
    }
});

const isExternal = isExternalLink(props.href);
const tag = computed(() => (props.href ? 'a' : 'span'));
const componentAttrs = computed(() => {
    if (tag.value !== 'a') {
        return {};
    }

    return {
        href: buildRefLink(props.href, props.ref),
        rel: isExternal ? 'noopener' : undefined,
        target: isExternal ? '_self' : undefined
    };
});
</script>
