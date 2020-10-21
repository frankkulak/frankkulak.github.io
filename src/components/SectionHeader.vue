<template>
    <div class="section-header mb-5">
        <h1>{{ title }} <i :class="faIcon"></i></h1>
        <hr>
    </div>
</template>

<script>
    export default {
        name: "SectionHeader",
        props: {
            title: String,
            faIcon: String
        }
    }
</script>

<style lang="scss">
    .section-header {
        display: inline-block;

        hr {
            background-color: var(--accent-color);
            height: 2px;
            border: 0;
            border-radius: 2px;
            margin: auto;
            width: 80%;
        }

        i, i *, i::before, i::after {
            color: var(--text-color);
        }
    }
</style>