<template>
    <section id="about" class="py-5">
        <b-container fluid>
            <section-header title="about" fa-icon="fas fa-user-circle"></section-header>
            <b-row align-h="center">
                <b-col cols="12" sm="10" md="5">
                    <img src="../../assets/profile-pic.jpg" alt="Profile Picture"/>
                    <h3 class="my-4">Frank Kulak</h3>
                </b-col>
                <b-col cols="12" sm="10" md="7" class="my-auto">
                    <p>I am a student at Northeastern University, and am expected to graduate with a B.S. in Computer
                        Science and Linguistics in May 2021. My goal is to work in app, web, or game development.</p>
                </b-col>
            </b-row>
        </b-container>
    </section>
</template>

<script>
    import SectionHeader from "../SectionHeader";

    export default {
        name: "AboutSection",
        components: {SectionHeader}
    }
</script>

<style lang="scss">
    section#about {
        img {
            min-width: 45%;
            max-width: 196px;
            height: auto;
            border-radius: 50%;
        }
    }
</style>