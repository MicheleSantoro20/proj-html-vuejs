<script>
    export default {
        name: "VueButton",
        props: {
            Button: String,
            Read: String,
            Show: String,
            Teach: String,
            Business: String,
        }
    }
</script>

<template>
    <button>
        {{ Button }} {{ Read }} {{ Show }} {{ Teach }} {{ Business }}
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
    transition: all 0.3s ease-in-out;
    &:hover {
        background-color: #e53d48;
        cursor: pointer;
    }
}

</style>