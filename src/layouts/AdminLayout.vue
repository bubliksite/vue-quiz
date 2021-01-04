<template>
    <div>
        <div class="admin-panel mx-auto">
            <h1 class="text-center mx-auto">{{ Header }}</h1>
        </div>
        <router-view />
    </div>
</template>

<script>
    export default {
        name: "AdminLayout",
        computed: {
            Header() {
                return this.$route.meta.name
            }
        }
    }
</script>

<style lang="scss">
    .admin-panel {
        min-height: 180px;
        background-image: url("../assets/images/bg-admin.png");
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center top;
        text-align: center;
        h1 {
            width: 375px;
            padding-left: 20px;
            padding-right: 20px;
            line-height: 80%;
        }
    }
    .form-group {
        * {
            color: black !important;
        }
        label {
            font-weight: 800;
            font-size: 18px;
        }
        input {
            border: 2px solid #e5e5e5;
            border-radius: 20px;
        }
    }
    .btn {
        border-radius: 20px !important;
        border: none !important;
        padding: .8rem 5rem !important;
        color: white !important;
        font-weight: 800 !important;
        &-blue {
            background: linear-gradient(90deg, #1BD3FE 0%, #1D2080 100%);
        }
        &-red {
            background: linear-gradient(90deg, #FF694B 0.68%, #F61524 100%);
        }
    }
</style>