<template>
    <div class="app">
        <header class="py-3">
            <h1 class="text-center py-4">
                {{ header }} <br>
                Результаты
            </h1>
        </header>
        <loader v-if="loader"/>
        <div class="container mt-5" v-else>
            <h3 class="text-danger font-weight-bolder text-center mb-3">Игра завершена!</h3>
            <div>
                <div v-for="(command, index) in commands" :key="command.id"  class="d-flex justify-content-between py-3">
                    <h2 class="font-weight-bold">#{{ index +1 }}</h2>
                    <h2 class="font-weight-bold">{{command.commandName}}</h2>
                    <h1 class="font-weight-bolder text-success">{{command.sumPoints.points}}</h1>
                </div>
            </div>
            <div class="row">
                <div class="col-12 mb-2">
                    <router-link type="button" class="btn btn-blue w-100 mt-4" :to ="{name: 'endedGames'}">
                        Закрыть
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Loader from "../components/Loader";
    export default {
        name: "EndGame",
        data: () => ({
            commands: [],
            header: '',
            loader: true
        }),
        async mounted() {
            const id = this.$route.params.id;
            this.commands = await this.$store.dispatch("getCommands", {id})
            const game = await this.$store.dispatch("getGame", {id})
            this.header = game.gameName
            await this.$store.dispatch('changeStatus', {gameId: id, status: 'isFinish'})
            for (let i = 0; i < this.commands.length; i++) {
                await this.$store.dispatch('countPoints', {
                    gameId: id,
                    commandId: this.commands[i].id
                })
            }
            this.commands = await this.$store.dispatch("getCommands", {id})
            this.commands.sort((a, b)=>{
                if (a.sumPoints.points > b.sumPoints.points) {
                    return -1
                } if (a.sumPoints.points < b.sumPoints.points) {
                    return 1
                }
                return 0
            })
            this.loader = false
        },
        components: {
            Loader
        }
    }
</script>

<style>

</style>