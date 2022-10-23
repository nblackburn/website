<template>
    <div :class="styles.story">
        <div :class="styles.image">
            <slot name="image" />
        </div>
        <p :class="styles.paragraph">
            I'm Nathaniel, it's nice to see a new face around here.
        </p>
        <p :class="styles.paragraph">
            I created this little place to share a little about what makes
            me....well me. My story is perhaps a little different from the usual
            as i am entirely self-taught. You see, i have always had a love for
            computers. I started my journey at the age of 13 making little tools
            for people.
        </p>
        <p :class="styles.paragraph">
            Being a developer is not easy, especially when you are self-taught.
            I have been faced so much rejection that it no longer has an effect
            on me. But here is the thing, you have to keep going and use it as a
            driving force. I simply wanted to be here enough that i kept on
            fighting.
        </p>
        <p :class="styles.paragraph">
            My aim is simple, i love making people happy in any way i can. This
            website is one of reflection to show off some of those things in the
            hope that they can reach others.
        </p>
        <p :class="styles.paragraph">
            Have a look around, stay a while and let's build something
            beautiful....together.
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
