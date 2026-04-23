<template>
    <time :datetime="isoDate">{{ pubDate }}</time>
</template>

<script lang="ts" setup>
import { format, formatISO } from 'date-fns';

interface Props {
    date: Date;
    formatString?: string;
}

const props = withDefaults(defineProps<Props>(), {
    formatString: 'do MMM, yyyy'
});

const isoDate = formatISO(props.date);
const pubDate = format(props.date, props.formatString);
</script>
