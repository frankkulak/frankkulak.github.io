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
                    <p>I'm a full-time app &amp; web developer at The TJX Companies, and a freelance open-source
                        contributor and Sims 4 mod creator. I'm passionate about programming and linguistics, and am
                        always looking for opportunities to mix them together.</p>
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
