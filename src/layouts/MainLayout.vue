<template>
    <div class="bg-screen">
        <router-view />
    </div>
</template>

<script>
    export default {
        name: "MainScreen"
    }
</script>

<style lang="scss">
    * {
        color: white;
    }
    .bg-screen {
        height: 100vh;
        width: 100%;
        background-image: url("../assets/images/main-background.png");
        background-size: 100%;
        background-position: left top;
    }
</style>