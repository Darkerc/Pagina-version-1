<template>
<div class="panel panel--black">
    <header>
        <nav>
            <ul class="list list--row">
                <li>
                    <router-link class="list__item" :to="{ name:'Portafolio'}">
                        Portafolio
                    </router-link>
                </li>
                <li>
                    <router-link class="list__item" :to="{ name:'Acerca-de-mi'}">
                        Acerca de mi
                    </router-link>
                </li>
                <li>
                    <router-link class="list__item" :to="{ name:'Contactanos'}">
                        Contactanos
                    </router-link>
                </li>
                <li>
                    <router-link class="list__item" :to="{ name:'Redes-sociales'}">
                        Redes sociales
                    </router-link>
                </li>
            </ul>
        </nav>
    </header>
    <div class="content">
        <div class="content__img__container">
            <img class="content__img" src="../assets/images/eder-portfolio.png" />
        </div>
        <div class="content__info">
            <p class="content__name">Eder Reyes Castellanos</p>
            <p class="content__description">
                Lorem ipsum dolor sit amet consectetur
            </p>
        </div>
    </div>
    <img src="../assets/images/img-panel.jpg" class="panel__img__background" />
</div>
<div class="panel panel--main">
    <div class="content">
        <div class="content__info">
            <p class="content__name">Portafolio</p>
            <p class="content__description">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, ab
                sunt. Magnam magni reprehenderit nemo ducimus ipsam obcaecati libero
                nisi! Nihil vitae dolorum, beatae odio iste quae impedit aliquam
                adipisci.
            </p>
        </div>
        <div class="content__img__container">
            <img id="portfolioImg" class="content__img fadeIn" src="../assets/images/portfolio.png" />
        </div>
    </div>
</div>
<div class="panel panel--secondary">
    <div class="content">
        <div class="content__img__container">
            <img class="content__img fadeIn" id="aboutImg" src="../assets/svg/innovacion.svg" />
        </div>
        <div class="content__info">
            <p class="content__name">Acerca de mi</p>
            <p class="content__description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi,
                distinctio commodi. Accusantium ut excepturi, eveniet repellendus
                assumenda molestiae labore voluptatum architecto, expedita pariatur
                doloribus perferendis odit nobis quidem voluptatibus sed!
            </p>
        </div>
    </div>
</div>
<div class="panel panel--tertiary">
    <div class="content">
        <div class="content__info">
            <p class="content__name">Contactanos</p>
            <p class="content__description">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt
                blanditiis error, accusamus tempore corporis voluptates ullam? Sed
                culpa animi rem nobis amet non asperiores voluptatem, sit labore
                veritatis quae dolorum.
            </p>
        </div>
        <div class="content__img__container">
            <img class="content__img fadeIn" id="contactoImg" src="../assets/svg/charla.svg" />
        </div>
    </div>
</div>
</template>

<style lang="stylus">

</style>
