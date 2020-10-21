<template>
    <b-navbar sticky v-b-scrollspy="50">
        <b-navbar-nav>
            <b-nav-item href="#about" v-scroll-to="'#about'">about</b-nav-item>
            <b-nav-item href="#education" v-scroll-to="'#education'">education</b-nav-item>
            <b-nav-item href="#experience" v-scroll-to="'#experience'">experience</b-nav-item>
            <b-nav-item href="#skills" v-scroll-to="'#skills'">skills</b-nav-item>
            <b-nav-item href="#projects" v-scroll-to="'#projects'">projects</b-nav-item>
            <b-nav-item href="#contact" v-scroll-to="'#contact'">contact</b-nav-item>
        </b-navbar-nav>
    </b-navbar>
</template>

<script>
    export default {
        name: "Navbar"
    }
</script>

<style lang="scss">
    nav.navbar {
        background-color: var(--footer-bg-color);
        overflow-y: hidden;
        white-space: nowrap;
        opacity: 0.95;
        $text-color: white;

        .collapsing {
            -webkit-transition-duration: 0.15s;
            transition-duration: 0.15s;
            -webkit-transition-timing-function: ease;
            transition-timing-function: ease;
        }

        .fas {
            color: $text-color;
        }

        li {
            //margin-left: $padding-md;
            display: inline-block;
            vertical-align: center;

            a.nav-link {
                //@include py($padding-xs);
                background-color: transparent;
            }

            a, a:focus {
                color: var(--footer-text-color) !important;
                text-decoration: none;
            }

            & > a.active, & > a:hover {
                font-weight: bold;
                left: 20px;
            }
        }
    }
</style>