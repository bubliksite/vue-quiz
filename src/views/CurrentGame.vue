<template>
    <div class="container">
        <form>
            <div v-for="command in commands" :key="command.id">
                <div class="form-group">
                    <label for="commandName" class="ml-3">{{command.commandName}}</label>
                    <input type="text" class="form-control" id="commandName" v-model="commandName">
                </div>
            </div>

        </form>
    </div>
</template>

<script>
    export default {
        name: "CurrentGame",
        data: () => ({
            commands: []
        }),
        async mounted() {
            const id = this.$route.params.id;
            this.commands = await this.$store.dispatch("getCommands", {id});
            console.log(this.commands)
        },
    }
</script>

<style lang="scss">

</style>