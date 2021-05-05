<template>
    <section id="contact" class="py-5">
        <b-container fluid>
            <section-header title="contact" fa-icon="fas fa-comments"></section-header>
            <b-row align-h="center">
                <b-col cols="12" md="10" lg="8">
                    <div>
                        <p>Looking to chat? Want a copy of my resume? Feel free to email me!</p>
                        <p><a title="send me an email" href="mailto:me@frankkulak.com"><i class="fas fa-envelope"></i>
                            me@frankkulak.com</a></p>
                    </div>

                    <div class="socials">
                        <p>Connect with me on LinkedIn or GitHub.</p>
                        <p>
                            <a title="go to LinkedIn" href="https://www.linkedin.com/in/frank-kulak/" target="_blank"
                               class="mr-3">
                                <i class="fab fa-linkedin"></i>
                            </a>
                            <a title="go to GitHub" href="https://github.com/frankkulak" target="_blank">
                                <i class="fab fa-github-square"></i>
                            </a>
                        </p>
                    </div>

                    <h5 class="font-weight-normal">Frank Kulak &copy; 2020-2021</h5>
                </b-col>
            </b-row>
        </b-container>
    </section>
</template>

<script>
    import SectionHeader from "../SectionHeader";

    export default {
        name: "ContactSection",
        components: {SectionHeader}
    }
</script>

<style lang="scss">
    section#contact {
        @extend %default-gradient;

        hr {
            background-color: white;
        }

        p, h1, h5, a, a:focus, i, i *, i::before, i::after {
            color: white;
        }

        i.fab {
            font-size: 2.25em;
        }

        .socials a {
            position: relative;
            transition: all ease 300ms;
            top: 0;

            &:hover {
                top: -3px;
            }
        }
    }
</style>