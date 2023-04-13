<script>
    export default {
        name:"VueRapidMenu",
    }
</script>

<template>
<div class="lateralBar">
    <i class="fa-solid fa-desktop"></i>
    <i class="fa-solid fa-circle-dot"></i>
    <i class="fa-solid fa-wrench"></i>
    <i class="fa-solid fa-cart-shopping"></i>
    <i class="fa-solid fa-mobile-screen-button"></i>

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
</style>