<script>
    import VueButton from './VueButton.vue'
    export default {
        components: {
            VueButton,
        },
        name: "VueHeader",
        data() {
            return {
                Slides: {
                    Button: "SIGN UP"
                }
            }
        }

    }
</script>

<template>

    <header>
        <div>

            <div class="topHead">
                <div>
                    <span>English</span>
                    <i class="fa-solid fa-angle-down"></i>               
                </div>

                <div class="navHeader">
                    <ul>
                        <li>Home</li>
                        <li>Pages</li>
                        <li>Course Formats</li>
                        <li>Courses</li>
                        <li>Demos</li>
                    </ul>

                    <ul>
                        <li><i class="fa-brands fa-facebook"></i></li>
                        <li><i class="fa-brands fa-twitter"></i></li>
                        <li><i class="fa-brands fa-instagram"></i></li>
                        <li><i class="fa-brands fa-linkedin"></i></li>
                        <li><i class="fa-brands fa-google-plus"></i></li>
                        <li><i class="fa-brands fa-youtube"></i></li>

                    </ul>
                </div>
            </div>

            <div class="mainHead">

                <img class="logo" src="../assets/MasterStudy.svg" alt="logo">
                <div>
                    <i class="fa-solid fa-bars"></i>
                    <span>CATEGORY</span>
                </div>
                <div class="searchBarWrapper">
                    <input class="searchBar" type="text" placeholder="Search courses">
                    <div><i class="fa-solid fa-magnifying-glass lens"></i></div>
                </div>
                <div>
                    <i class="fa-solid fa-bullhorn"></i>
                    Become an Instructor
                </div>
                <div>
                    <i class="fa-solid fa-briefcase"></i>
                    For Enterprise
                </div>
                <div>
                    <i class="fa-regular fa-user"></i>
                    Log In
                </div>
                <VueButton :Button="Slides.Button"/>
                <i class="fa-regular fa-bookmark"></i>

            </div>

            <div class="endHead">
                <div>
                    <i class="fa-solid fa-chart-line"></i>
                    Business
                </div>
                <div>
                    <i class="fa-solid fa-palette"></i>
                    Design
                </div>
                <div>
                    <i class="fa-solid fa-gear"></i>
                    Development
                </div>
                <div>
                    <i class="fa-regular fa-face-smile"></i>
                    Lifestyle
                </div>
                <div>
                    <i class="fa-solid fa-wallet"></i>
                    Office Productivity
                </div>
            </div>

        </div>


    </header>

</template>

<style  lang="scss">
.topHead {
    display: flex;
    justify-content: space-between;
    padding: 20px 5% ;
    color: #afafad;
    border-bottom: 1px solid #afafad;
    font-size: 13px;
}
ul {
    display: flex;
    list-style: none;
}

li {
    padding: 0px 10px;
}
.navHeader {
    display: flex;
}

.mainHead {
    padding: 30px 5% ;
    align-items: center;
    color: #555555;
    font-size: 19px;
}

.logo {
    height: 50px;
}

.mainHead {
    display: flex;
    justify-content: space-between;
}

.searchBarWrapper {
    display: flex;
}

.searchBar {
    padding: 13px;
    background-color: #f0f2f5;
    border: none;
    width: 500px;
}

.lens {
    padding: 13px;
    background-color: #457992;
    color: white;
}
.fa-bookmark {
    font-size: 25px;
    padding-right: 15px;
}

.endHead {
    display: flex;
    justify-content: center;
    color: white;
    padding: 30px;
    background-color: #273044;
    gap: 40px;
    margin-bottom: 25px;
    font-size: 20px;
}
</style>