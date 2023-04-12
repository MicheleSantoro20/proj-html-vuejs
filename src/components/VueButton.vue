<script>
    export default {
        name: "VueButton",
        props: {
            Button: String,
        }
    }
</script>

<template>
    <button>{{ Button }}
    </button>
</template>

<style scoped lang="scss">
@use "../styles/general.scss";
button {
    padding: 15px 25px;
    border: none;
    background-color: var(--buttonColor);
    border-radius: 40px;
    color: white;
    font-weight: bold;

    &:hover {
        background-color: #e53d48;
    }
}

</style>