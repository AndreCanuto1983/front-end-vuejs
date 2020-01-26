<template>
    <div class="spinner">
        <b-row align-h="center" align-v="center">
            <b-spinner variant="primary" type="grow" label="Spinning"></b-spinner>
            {{message}}
        </b-row>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                message: 'Buscando produtos...'
            };
        },
    };
</script>

<style scoped>
    .spinner {
        z-index: 5;
        top: 50%;
        position: absolute;
    }
</style>