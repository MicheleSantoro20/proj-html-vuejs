<script>
    export default {
        name:"VueRapidMenu",
    }
</script>

<template>
<div class="lateralBar">
    <i class="fa-solid fa-desktop tools"></i>
    <i class="fa-solid fa-circle-dot tools"></i>
    <i class="fa-solid fa-wrench tools"></i>
    <i class="fa-solid fa-cart-shopping tools"></i>
    <i class="fa-solid fa-mobile-screen-button tools"></i>

</div>
</template>

<style scoped lang="scss">
.lateralBar {
    padding: 15px;
    box-shadow: 0px 0px 15px 5px gray;
    background-color: white;
    position: fixed;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    font-size: 30px;
    color: rgb(69, 69, 69);
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    justify-content: center;
}
.tools {
    cursor: pointer;
    transition: all 0.4s ease-in-out;
    &:hover {
        color: blue;
        transform: scale(1.2);

    }
}
</style>