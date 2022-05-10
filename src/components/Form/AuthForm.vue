<template>
    <div class="wrapper bg-white">
        <form @submit.prevent class="form rounded-full bg-white text-black py-10">
            <div class="container">
                <div class="input-group mb-4">
                    <label class="label block" for="id">ID</label>
                    <input class="input drop-shadow-lg rounded-full w-full p-4" v-model="auth.id" type="text" name="id" id="id" placeholder="ID" required>
                </div>
                <div class="input-group mb-12">
                    <label class="label block" for="password">패스워드</label>
                    <input class="input drop-shadow-lg rounded-full w-full p-4" v-model="auth.password" type="password" name="password" id="password" placeholder="Password" required>
                </div>
                <div class="input-group">
                    <input class="input rounded-full drop-shadow-lg py-4 px-8 bg-emerald-500 text-white text-bold" type="submit" value="LOGIN" @submit="validate" />
                </div>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data () {
        return {
            auth: {
                id: '',
                password: '',
            },
        }
    },
    methods: {
        validate () {
            if (auth.id && auth.password) {
                
            } else {

            }
        }
    }
}
</script>

<style>

</style>