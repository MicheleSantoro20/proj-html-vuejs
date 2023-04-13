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
                    Read: "READ MORE",
                    Show: "SHOW ALL",
                    Teach: "START TEACHING",
                    Business: "DOING BUSINESS"
                }
            }
        },
        methods: {
            cardSplice() {
                let splicedArray = this.store.cardArray2.splice(0, 6);
                return splicedArray;

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
            <VueButton class="show-all-button" :Show="Slides.Show"/>
        </section>

        <section>
            <div class="newsLetter">
                <div class="newsletter-section">
                    <h2>Subscribe our newsletter</h2>
                    <h3>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words</h3>
                </div>
                <div class="newsletter-section">
                    <label for="mail">YOUR E-MAIL ADDRESS</label>
                    <div>
                        <input type="email" id="mail" placeholder="Enter your E-mail">
                        <button class="subscribe-button">SUBSCRIBE</button>
                    </div>
                </div>
            </div>
        </section>

        <section class="bg-lightgray">
            <h1 class="popular-courses-title">Popular Courses</h1>
            <h4 class="popular-courses-subtitle">Discover our most popular courses for self learning</h4>
            <div class="card-container mg">
                <VueCard v-for="(element, o) in this.store.cardArray3" :image="element.imagePath" :category="element.category" :name="element.name" :rating="element.rating" :oldPrice="element.oldPrice" :newPrice="element.newPrice" :key="o"/>
            </div>
            <div class="btn-wrapper">
                <button class="btn-prev-next"><i class="fa-solid fa-chevron-left"></i></button>
                <button class="btn-prev-next"><i class="fa-solid fa-chevron-right"></i></button>
            </div>
        </section>

        <section>
            <div class="work-with-us mg">
                <div class="work-with-us-sections">
                    <img class="work-with-us-img" src="../assets/image_box_1-221x231.png" alt="">
                    <div>
                        <h2 class="work-with-us-title">Become An instructor</h2>
                        <h4 class="work-with-us-description">Teach what you love. Masterstudy gives you <br/> the tools to create a course.</h4>
                        <VueButton class="work-with-us-button" :Teach="Slides.Teach"/>
                    </div>
                </div>
                <div class="work-with-us-sections">
                    <img class="work-with-us-img" src="../assets/image_box_2-234x231.png" alt="">
                    <div>
                        <h2 class="work-with-us-title">Access For Business</h2>
                        <h4 class="work-with-us-description">Get unlimited access to 2,500 of top courses <br/> for your team.</h4>
                        <VueButton class="work-with-us-button" :Business="Slides.Business"/>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div class="testimonial">
                <div class="testimonial-container">
                    <h2 class="testimonial-title">Investing for Your Future</h2>
                    <div class="testimonial-description">lt is no exaggeration to sayt is MasterStudy experience was transformative-both professionally and personally. This workshop will long remain a high point of my life. Thanks again.,.. I am feeling energized and eager to start teaching my class next week. I cant wait to use all of my new teaching tools. I will absolutely recommend this workshop to Other educators! </div>
                    <h4 class="testimonial-name">Linda Green</h4>
                    <div class="testimonial-job">Product Manager, Apple Inc</div>
                </div>
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
    justify-content: center;
    gap: 32px;
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
.recent-courses-title{
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
    transition: all 0.3s ease-in-out;
    &:hover {
        background-color: #f0f4fa;
        cursor: pointer;
    }
}
.show-all-button {
    margin-top: 50px;
    margin-left: 50%;
    margin-bottom: 200px;
    transform: translateX(-50%);
    text-align: center;
}
.newsLetter {
    background-color: var(--buttonColor);
    display: flex;
    justify-content: center;
    gap: 50px;
    padding-top: 50px;
    padding-bottom: 50px;
}

.newsletter-section {
    max-width: 900px;
    color: white;
}
.newsletter-section h2 {
    font-size: 30px;
    font-weight: bolder;
    margin-bottom: 15px;
}
#mail {
    margin-top: 20px;
    padding: 18px 12px;
    width: 400px;
    font-size: 16px;
    border: none;
}
.subscribe-button {
    padding: 18px 25px;
    border: none;
    font-size: 16px;
    color: white;
    background-color: #457992;
    cursor: pointer;
}
.popular-courses-title {
    font-size: 70px;
    color: var(--BlueGray);
    padding: 50px;
    text-align: center;
}
.popular-courses-subtitle {
    margin-bottom: 30px;
    font-size: 25px;
    color: var(--BlueGray);
    text-align: center;
}
.bg-lightgray {
    background-color: #f0f4fa;
}

.btn-prev-next {
    padding: 20px 25px;
    background-color: white;
    color: lightgrey;
    border: 1px solid lightgray;
    font-size: 20px;
    margin-bottom: 70px;
    transition: all 0.3s ease-in-out;
    &:hover {
        background-color: #457992;
        color: white;
        border: 1px solid #457992;
        cursor: pointer;
    }
}
.btn-wrapper {
    display: flex;
    justify-content: center;
}
.work-with-us {
    display: flex;
    justify-content: center;
    gap: 50px;
    padding: 100px 5%;
}
.work-with-us-sections {
    display: flex;
    border: 1px solid lightgray;
    padding: 75px 50px;
    width: 50%;
}
.work-with-us-title, .testimonial-title {
    font-size: 50px;
    margin: 20px;
    color: var(--BlueGray);
}
.work-with-us-description, .testimonial-description {
    font-size: 25px;
    margin: 20px;
    color: var(--BlueGray);
}
.work-with-us-button {
    margin: 20px;
}
.work-with-us-img  {
    width: 300px;
}

.testimonial{
    background-image: url(../assets/testimonial-1-1917x640-1-1914x639.jpg);
    background-size:cover;
    height: 800px;
    padding-top: 100px;
}
.testimonial-container {
    background-color: white;
    height: 600px;
    width: 800px;
    padding: 75px 100px;
    margin-left: 550px;
}
.testimonial-name {
    font-size: 23px;
    margin: 20px 0px 0px 20px;
}
.testimonial-job {
    font-size: 18px;
    margin-left: 20px;
}
</style>