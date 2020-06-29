<template>
    <div class="section-header">
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
        margin-bottom: $padding-lg;
        display: inline-block;

        hr {
            width: 80%;
        }

        i, i *, i::before, i::after {
            color: var(--h-color);
        }
    }
</style>