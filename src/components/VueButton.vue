<script>
    export default {
        name: "VueButton",
        props: {
            Button: String,
            Read: String,
        }
    }
</script>

<template>
    <button>
        {{ Button }} {{ Read }}
    </button >
</template>

<style scoped lang="scss">
@use "../styles/general.scss";
button {
    padding: 25px 35px;
    border: none;
    background-color: var(--buttonColor);
    border-radius: 40px;
    color: white;
    font-weight: bold;
    font-size: 20px;

    &:hover {
        background-color: #e53d48;
    }
}

</style>