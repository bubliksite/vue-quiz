<template>
    <div class="container">
        <loader v-if="loader"/>
        <form @submit.prevent="onSubmit" v-else>
            <div class="form-group">
                <label for="commandName">Добавть команду</label>
                <div class="form-text mb-3">Добавьте две или более команд, чтобы начать игру</div>
                <input type="text" class="form-control" id="commandName" v-model="commandName">
                <div class="form-text mt-3 valid-feedback" v-if="message">{{message}}</div>
                <div class="form-text mt-3 invalid-feedback" v-if="countCommands === 0">Вы пока не добавили ни одной команды</div>
                <div class="form-text mt-3 valid-feedback" v-if="countCommands > 0">Добавлено команд: {{ countCommands }}</div>
            </div>
            <div class="row">
                <div class="col-lg-6 col-12 mb-2">
                    <button class="btn btn-blue w-100 mt-4" type="submit">Добавить</button>
                </div>
                <div class="col-lg-6 col-12 mb-2" v-if="canGoToGame">
                    <router-link class="btn btn-red w-100 mt-4" :to="{name: 'currentGame', query: {round: 1}}" >Начать игру</router-link>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    import Loader from "../components/Loader";
    export default {
        name: "AddCommand",
        data: () => ({
            commandName: '',
            commands: [],
            message: '',
            loader: true
        }),
        computed: {
            canGoToGame() {
                if(this.commands.length > 1) {
                    return true
                } else {
                    return false
                }
            },
            countCommands() {
                return this.commands.length
            }
        },
        async mounted() {
            const id = this.$route.params.id
            this.commands = await this.$store.dispatch("getCommands", {id})
            this.loader = false
        },
        methods: {
            async onSubmit() {
                const id = this.$route.params.id
                // eslint-disable-next-line no-unused-vars
                const command = await this.$store.dispatch('addCommand', {
                    commandName: this.commandName,
                    id
                })
                this.commands = await this.$store.dispatch("getCommands", {id});
                this.message = `Комманда ${this.commandName} добавлена`
                this.commandName = ''


            }
        },
        components: {
            Loader
        }

    }
</script>

<style lang="scss">

</style>