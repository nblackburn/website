<template>
    <div :class="styles.story">
        <div :class="styles.image">
            <slot name="image" />
        </div>
        <p :class="styles.paragraph">
            I'm Nathaniel. It's nice to see a new face around here.
        </p>
        <p :class="styles.paragraph">
            My story is a little different from the usual, as I am self-taught.
            You see, I have always had a love for computers. I started at 13
            years old making little tools for people.
        </p>
        <p :class="styles.paragraph">
            Being a developer is not easy, especially when you are self-taught.
            I have faced so much rejection that it no longer affects me. But
            here's the thing. You have to keep going and use it as a driving
            force. I wanted to be here enough that I kept on fighting.
        </p>
        <p :class="styles.paragraph">
            My aim is simple, I love making people happy in any way I can. This
            website is one of reflection to share some of those things I have
            worked on in the hope that they can reach others.
        </p>
        <p :class="styles.paragraph">
            Have a look around, stay a while, or reach out. I would love to hear
            from you.
        </p>
    </div>
</template>

<script lang="ts">
import * as styles from './story.css';

export default {
    setup() {
        return { styles };
    }
};
</script>
