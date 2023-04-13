<script>
    export default {
        name: "VueCard",
        props: {
                    image: String,
                    category: String,
                    name: String,
                    rating: Number,
                    oldPrice: String,
                    newPrice: String
                },
        data() {
            return {

            }
        }
    }
</script>

<template>
    <div class="card">
        <img class="cardImg" :src=image alt="">
        <div class="wrapper">
            <h4 class="cardCategory">{{ category }} > </h4>
            <h2 class="courseName">{{ name }}</h2>
            <div class="priceRating">
                <div class="Rating">
                    <i class="fa-star" :class="rating >= 1? 'fa-solid':'fa-regular' "></i>
                    <i class="fa-star" :class="rating >= 2? 'fa-solid':'fa-regular' "></i>
                    <i class="fa-star" :class="rating >= 3? 'fa-solid':'fa-regular' "></i>
                    <i class="fa-star" :class="rating >= 4? 'fa-solid':'fa-regular' "></i>
                    <i class="fa-star" :class="rating == 5? 'fa-solid':'fa-regular' "></i> 
                </div>
                <div class="Price">
                    <div class="oldPrice">{{ oldPrice }}</div>
                    <div class="newPrice">{{ newPrice }}</div>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped lang="scss">
.card {
    height: 400px;
    width: 330px;
    border: 1px solid lightgray;
    margin-bottom: 30px;
    transition: transform 0.3s ease-in-out;
    &:hover {
        transform: scale(1.2);
    }
}
.cardCategory {
    color: lightgray;
    margin-bottom: 15px;
}
.courseName {
    height: 90px;
    font-size: 20px;
}
.cardImg {
    width: 100%;
}
.wrapper {
    margin: 15px;

}
.oldPrice {
    font-size: 15px;
    color: lightgray;
    text-decoration: line-through;
}
.newPrice {
    font-size: 20px;
}
.Rating {
    color: #efb467;
}
.priceRating {
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid lightgray;
}
</style>