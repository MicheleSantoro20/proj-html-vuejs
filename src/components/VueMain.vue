<script>
    import { store } from '../store.js';
import VueButton from './VueButton.vue';
    import VueCard from './VueCard.vue'

    export default {
        name: "VueMain",
        components: {
    VueCard,
    VueButton
},
        data() {
            return {
                store,
                Slides: {
                    Read: "READ MORE"
                }
            }
        }
        
    }
</script>

<template>
    <main>
        <section>
            <div class="udemyBannerSales">
                <div>
                    <div class="udemyTextSales">
                        <div>
                            <h1 class="udemySalesTitle">Udemy Affiliate Sales</h1>
                            <h3 class="udemySalesSubTitle">Monetize your audience and attract new customers with Udemy!</h3>
                        </div>
                    </div>
                </div>
                <img class="udemySalesPhoto" src="../assets/slide-1.jpg" alt="Gruppo di amici che si abbracciano sorridenti">
            </div>
        </section>

        <section class="mg">
            <h3 class="coursesTitle">Popular Development Courses</h3>
            <div class="card-container">
                <VueCard v-for="(element, i) in this.store.cardArray" :image="element.imagePath" :category="element.category" :name="element.name" :rating="element.rating" :oldPrice="element.oldPrice" :newPrice="element.newPrice" :key="i"/>
            </div>
        </section>

        <section>
            <div class="Learning">
                <img class="bg-social" src="" alt="">
                <div class="bg-social-txt">
                    <h1 class="social-title">Limitless learning,<br/> more possibilities</h1>
                    <h4 class="social-subtitle">Online courses open the opportunity for learning  to almost anyone, <br/> regardless of their scheduling commitments</h4>
                    <VueButton :Read="Slides.Read"/>
                </div>
            </div>
        </section>

        <section>
            <h1 class="recent-courses-title">Recent Courses</h1>
            <ul class="category">
                <li class="eachCategory" v-for="(element, y) in this.store.category" :key="y">{{ this.store.category[y] }}</li>
            </ul>
            <div class="card-container mg">
                <VueCard v-for="(element, o) in this.store.cardArray2" :image="element.imagePath" :category="element.category" :name="element.name" :rating="element.rating" :oldPrice="element.oldPrice" :newPrice="element.newPrice" :key="o"/>
            </div>
        </section>

    </main>
</template>

<style scoped lang="scss">
@use '../styles/general.scss';
.udemyBannerSales {
    display: flex;
    background-color: var(--buttonColor);
    margin-bottom: 120px;
}
.udemySalesPhoto {
width: 50vw;
clip-path: polygon(0% 0%, 0% 0%, 100% 0%, 100% 550%);
}
.udemyTextSales {
    width: 50vw;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    color: white;
}
.udemySalesTitle {
    font-size: 65px;
    font-weight: bold;
    margin-left: 300px;
}
.udemySalesSubTitle {
    font-size: 35px;
    font-weight: lighter;
    max-width: 850px;
    margin-left: 300px;
}
.coursesTitle {
    font-size: 30px;
    margin-bottom: 50px;
    color: var(--BlueGray);
}

.card-container {
    color: var(--BlueGray);
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.Learning {
    background-image: url(../assets/bg.png);
    background-size:cover;
    width: 100vw;
    height: 600px;
}

.bg-social-txt {
    margin: 150px 400px;
}
.social-title {
    font-size: 70px;
    color: var(--BlueGray);
}
.social-subtitle {
    font-size: 20px;
    color: var(--BlueGray);
    margin: 10px 0px 50px 0px;
}
.recent-courses-title {
    font-size: 70px;
    color: var(--BlueGray);
    margin: 50px;
    text-align: center;
}
.category{
    display: flex; 
    justify-content: center;
    gap: 40px;
    color: #777777;
    margin-bottom: 70px;
}
.eachCategory {
    font-size: 25px;
    padding: 10px 20px;
    border-radius: 50px;
    &:hover {
        background-color: #f0f4fa;
    }
}
</style>