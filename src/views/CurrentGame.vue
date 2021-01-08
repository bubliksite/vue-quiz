<template>
    <div class="app">
        <header class="py-3">
            <h1 class="text-center py-4">
                {{ header }} <br>
                Раунд {{ round }}
            </h1>
        </header>
        <loader v-if="loader"/>
        <div class="container mt-5" v-else>
            <form @submit.prevent="onSubmit">
                <div v-for="(command, index) in commands" :key="command.id">
                    <div class="form-group">
                        <div class="d-flex justify-content-between">
                            <div>
                                <label :for="command.id" class="mb-0">{{command.commandName}}</label>
                                <small class="text-muted"> баллов за раунд</small> <br>
                            </div>
                        </div>
                        <input type="text" class="form-control" :id="point[index]" :key="command.id" v-model="point[index]">
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-6 col-12 mb-2">
                        <button class="btn btn-blue w-100 mt-4" type="submit">Записать баллы</button>
                    </div>
                    <div class="col-lg-6 col-12 mb-2">
                        <button type="button" class="btn btn-red w-100 mt-4" @click.prevent="finishGame">
                            Закончить игру
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import Loader from "../components/Loader";
    export default {
        name: "CurrentGame",
        components: {Loader},
        data: () => ({
            commands: [],
            header: '',
            point: [],
            round: '',
            loader: true
        }),
        async mounted() {
            this.round = this.$route.query.round
            const id = this.$route.params.id
            this.commands = await this.$store.dispatch("getCommands", {id})
            const game = await this.$store.dispatch("getGame", {id})
            this.header = game.gameName
            await this.$store.dispatch('changeStatus', {gameId: id, status: 'isActive'})
            this.loader = false
        },
        methods: {
            async onSubmit() {
                for (let i = 0; i < this.commands.length; i++) {
                    await this.$store.dispatch("addPoints", {
                        gameId: this.$route.params.id,
                        commandId: this.commands[i].id,
                        roundNumber: this.round,
                        points: this.point[i]
                    })
                }
                this.round++
                this.point = []
                await this.$router.replace({name: 'currentGame', query: {round: this.round}})
            },
            async finishGame() {
                this.round--
                await this.$store.dispatch('changeRound', {
                    gameId: this.$route.params.id,
                    currentRound: this.round
                })
                await this.$router.push({name: 'endGame'})
            }
        }
    }
</script>

<style lang="scss">

</style>