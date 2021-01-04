<template>
    <div class="container">
        <form @submit.prevent="onSubmit">
            <div class="form-group">
                <label for="gameName" class="ml-3">Название игры</label>
                <input type="text" class="form-control" id="gameName" v-model="gameName">
            </div>
            <button class="btn btn-blue w-100 mt-4" type="submit">Создать</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: "CreateGame",
        data: () => ({
            gameName: '',
            status: ''
        }),
        methods: {
            async onSubmit() {
                const game = await this.$store.dispatch('createGame', {
                    gameName: this.gameName,
                    status: 'isActive'
                })
                console.log(game)
                await this.$router.push(`/admin/games/create/${game.id}`)
            }
        }
    }
</script>

<style lang="scss">

</style>