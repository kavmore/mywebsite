<template>
    <footer>
        <div class="container-xl">
            <div class="row">
                <div class="col-xl-6 col-sm-12">
                    <p>“Remember us for we too have lived,loved and laughed.”</p>
                </div>
                <div class="col-xl-3 col-sm-6">
                    <div id="pages">
                        <h5>Pages</h5>
                        <router-link to="/" class="nav-link">Home</router-link>
                        <router-link to="/java" class="nav-link">Java</router-link>
                        <router-link to="/C" class="nav-link">C++</router-link>
                        <router-link to="/mysql" class="nav-link">MySQL</router-link>
                        <router-link to="/judo" class="nav-link">柔道</router-link>
                        <router-link to="/math" class="nav-link">Math</router-link>
                    </div>
                </div>
                <div class="col-xl-3 col-sm-6">
                    <div id="icons">
                        <a href="https://github.com/"><i class="fa fa-github"></i></a>
                        <a href="https://twitter.com/"><i class="fa fa-twitter-square"></i></a>
                        <a href="https://www.facebook.com/"><i class="fa fa-facebook-square"></i></a>
                        <a href="https://validator.w3.org/"><i class="fa fa-html5"></i></a>
                        <a href="https://developer.mozilla.org/zh-CN/docs/Web"><i class="fa fa-firefox"></i></a>
                    </div>
                </div>
            </div>
        </div>
        <div class="copyright-container">
            <div class="container-xl" style="padding:1rem 2.4rem 0 2.4rem">
                <div class="copyright row">
                    <div class="col-xl-6">
                    <p>@2021 crimsonforts All Rights Reserved</p>
                    </div>
                    <div class="col-xl-6">
                    <p>Inspired by crytek</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped>

footer{
    width: 100%;
    background: #f2f2f2;
}

.container-xl {
    position: relative;
    padding: 2.4rem 2.4rem 0 2.4rem;
}

i {
    font-size: 50px;
    color: #666c71;
}

i.fa-github:hover {
    color: #000;
}

i.fa-twitter-square:hover {
    color: dodgerblue;
}

i.fa-facebook-square:hover {
    color: blue;
}

i.fa-html5:hover {
    color: orange;
}

i.fa-firefox:hover{
    color: tomato;
}

a {
    padding: 0;
}

#pages a {
    color: #666c71;
}

.copyright-container {
    background-color: #e8e8e8;
}

.copyright-container p{
    margin: 0;
}
</style>