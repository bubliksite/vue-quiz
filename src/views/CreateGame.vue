<template>
    <div class="container">
        <loader v-if="loader"/>
        <form @submit.prevent="onSubmit" v-else>
            <div class="form-group">
                <label for="gameName">Название игры</label>
                <input type="text" class="form-control" id="gameName" v-model="gameName">
            </div>
            <button class="btn btn-blue mt-4 w-100" type="submit">Создать</button>
        </form>
    </div>
</template>

<script>
    import Loader from "../components/Loader";
    export default {
        name: "CreateGame",
        components: {Loader},
        data: () => ({
            gameName: '',
            status: '',
            loader: true
        }),
        mounted() {
            this.loader = false
        },
        methods: {
            async onSubmit() {
                const game = await this.$store.dispatch('createGame', {
                    gameName: this.gameName,
                    status: 'isReady',
                    currentRound: 1,
                    created: new Date().toJSON()
                })
                await this.$router.push(`/admin/games/create/${game.id}`)
            }
        }
    }
</script>

<style lang="scss">

</style>