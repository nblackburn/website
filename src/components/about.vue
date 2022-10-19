<template>
    <section :class="styles.about">
        <div :class="styles.detail">
            <div :class="styles.summary">
                <h2>About me</h2>
                <p>
                    My name is Nathaniel and I come from the United Kingdom
                    where it rains quite a lot but don't let that dampen the
                    mood. I specialise in creating experiences which empower
                    people and bring them together for good.
                </p>
                <p>
                    I have over 10 years of experience and am always looking
                    expand my skills. More recently i started learning music and
                    have released a few tracks.
                </p>
            </div>
            <div :class="styles.readMore">
                <NavLink href="/about">More about me</NavLink>
            </div>
        </div>
        <img
            :class="styles.image"
            src="/img/me.jpg"
            alt="Nathaniel Blackburn"
        />
    </section>
</template>

<script lang="ts">
import * as styles from './about.css';
import NavLink from '@components/navLink.vue';

export default {
    components: { NavLink },

    setup() {
        return { styles };
    }
};
</script>
