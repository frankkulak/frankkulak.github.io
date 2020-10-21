<template>
    <section id="home">
        <div class="decals">
            <img class="top-left" src="../../assets/home-decals/top-left.svg" alt="decal">
            <img class="top-right" src="../../assets/home-decals/top-right.svg" alt="decal">
            <img class="bottom-left" src="../../assets/home-decals/bottom-left.svg" alt="decal">
        </div>
        <div class="content">
            <h1 class="mb-5">Hi, I'm <span><strong>Frank Kulak</strong></span>.<br> I'm a software developer.</h1>
            <a class="btn" v-scroll-to="'#about'">learn more <i class="fas fa-arrow-down"></i></a>
        </div>
    </section>
</template>

<script>
    export default {
        name: "HomeSection"
    }
</script>

<style lang="scss">
    section#home {
        height: 100vh;
        width: 100vw !important;
        display: table-cell;
        vertical-align: middle;
        text-align: center;

        .decals {
            @include fadein($duration: 2000ms, $delay: 150ms);
            opacity: 0;

            img {
                position: absolute;
                opacity: 0.08;

                &.top-left {
                    left: 0;
                    top: 3vh;
                    height: 12vh;
                    width: auto;
                }

                &.top-right {
                    top: 0;
                    right: 12vw;
                    height: auto;
                    width: 20vh;
                }

                &.bottom-left {
                    left: 0;
                    top: 78vh;
                    height: 15vh;
                    width: auto;
                }
            }
        }

        .content {
            @include fadein-above($duration: 1000ms, $delay: 250ms);
            opacity: 0;

            h1 {
                font-weight: normal;
                font-size: 6vh;

                span {
                    @extend %default-gradient;
                    -webkit-background-clip: text;

                    strong {
                        white-space: nowrap;
                        -webkit-text-fill-color: transparent;
                    }
                }
            }
        }
    }
</style>