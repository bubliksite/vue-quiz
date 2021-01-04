<template>
    <div class="container">
        <form @submit.prevent="onSubmit">
            <div class="form-group">
                <label for="commandName" class="ml-3">Название команды</label>
                <input type="text" class="form-control" id="commandName" v-model="commandName">
            </div>
            <h5>{{message}}</h5><br>
            <small class="text-black">
                Добавьте две или более команд, чтобы начать игру <br>
                <span v-if="countCommands === 0">Вы пока не добавили ни одной команды</span>
                <span v-if="countCommands > 0">Добавлено команд: {{countCommands}} </span>
            </small>
            <div class="row">
                <div class="col-lg-6 col-12 mb-2">
                    <button class="btn btn-blue w-100 mt-4" type="submit">Добавить</button>
                </div>
                <div class="col-lg-6 col-12 mb-2" v-if="canGoToGame">
                    <router-link class="btn btn-red w-100 mt-4" :to="{name: 'currentGame'}">
                        Начать игру
                    </router-link>
                </div>
            </div>


        </form>
    </div>
</template>

<script>
    export default {
        name: "AddCommand",
        data: () => ({
            commandName: '',
            commands: [],
            message: ''
        }),
        async mounted() {
            const id = this.$route.params.id;
            this.commands = await this.$store.dispatch("getCommands", {id});
            console.log(this.commands.length)
        },
        computed: {
            canGoToGame() {
                if(this.commands.length > 1) {
                    return true
                } else {
                    return false
                }
            },
            countCommands() {
                let x = this.commands.length
                return x
            }
        },
        methods: {
            async onSubmit() {
                const id = this.$route.params.id;
                // eslint-disable-next-line no-unused-vars
                const command = await this.$store.dispatch('addCommand', {
                    commandName: this.commandName,
                    id
                })
                this.message = `Комманда ${this.commandName} добавлена`
                this.commandName = ''

            }
        }
    }
</script>

<style lang="scss">
    small {
        color: black;
    }
    span, h5 {
        @extend small;
    }
</style>