<script>
    export default {
        name: "VueFooter",
    }
</script>

<template>
    <footer>
        <div class="footer-top">
            <div class="footer-top-section">
                <h2>ABOUT</h2>
                <div>Sed nec felis pellentesque, lacinia dui sed, ultricies sapien. Pellentesque orci lectus. consectetur velt rutrum eu ipsum. MauriS accumsan eros eget libero posuere vulputate.</div>
            </div>
            <div>
                <h2>CONTACT</h2>
                <div>USA, California 20, First Avenue, <br/> California</div>
                <br>
                <div>Tel.: +1 212 458 300 32 <br/>Fax: +1 212 375 24 14</div>
                <br>
                <div class="mail">info@masterstudy.com</div>
            </div>
            <div>
                <h2>SOCIAL NETWORK</h2>
                <div class="social-container">
                    <i class="fa-brands fa-facebook rounded"></i>
                    <i class="fa-brands fa-instagram rounded"></i>
                    <i class="fa-brands fa-linkedin rounded"></i>
                    <i class="fa-brands fa-pinterest rounded"></i>
                    <br/>
                    <i class="fa-brands fa-twitter rounded"></i>
                    <i class="fa-solid fa-basketball rounded"></i>
                    <i class="fa-brands fa-google-plus rounded"></i>
                    <i class="fa-brands fa-skype rounded"></i>
                </div>
            </div>
            <img src="../assets/Top-udemy-courses-90-percent-off.jpg" alt="">
        </div>
        <hr class="footer-hr">
        <div class="footer-bottom">
            <img class="logo" src="../assets/favicon.ico" alt="logo masterstudy">
            <div>Copyright © 2020. <a href="#">MasterStudy</a> Theme By <a href="#">StylemixThemes</a>   </div>
        </div>
    </footer>
</template>

<style scoped lang="scss">
@use '../styles/general.scss';
footer {
    background-color: var(--BlueGray);
    height: 460px;
    color: white;
}
a {
    color: white;
}
.footer-top {
    height: 360px;
    padding: 50px 150px 100px 550px;
    display: flex;
    justify-content: space-between;
    font-size: 20px;
}
.footer-bottom {
    height: 100px;
    padding: 10px 150px 10px 550px;
    display: flex;
    align-items: center;
    font-size: 15px;
}
h2 {
    padding: 20px 0px;
}
.footer-top-section {
    max-width: calc(100%/4);
}
.mail {
    color: gray;
}

.rounded {
    font-size: 30px;
    padding: 10px;
    border-radius: 50%;
    background-color: red;
    margin: 13px 12px 0px 0px;
    cursor: pointer;
}
.fa-facebook {
    background-color: #3b5998;
}
.fa-instagram {
    background-color: #c32aa3;
}
.fa-linkedin {
    background-color: #0077b5;
}
.fa-pinterest {
    background-color: #bd081c;
}
.fa-twitter {
    background-color: #1da1f2;
}
.fa-basketball {
    background-color: #ea4c89;
}
.fa-google-plus {
    background-color: #db4437;
}
.fa-skype {
    background-color: #00aff0;
}
.footer-hr {
    border: 1px solid gray;
}
.logo {
    height: 30px;
    margin-right: 10px;
}
</style>