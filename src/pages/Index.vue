<template lang="pug">
.panel.panel--black
    header:nav:ul.list.list--row
                li:router-link.list__item(:to="{ name:'Portafolio' }") Portafolio
                li:router-link.list__item(:to="{ name:'Acerca-de-mi' }") Acerca de mi
                li:router-link.list__item(:to="{ name:'Contactanos' }") Contactanos
                li:router-link.list__item(:to="{ name:'Redes-sociales' }") Redes sociales
    .content
        .content__img__container
            img.content__img(src="@/assets/images/eder-portfolio.png")
        .content__info
            .content__name Eder Reyes Castellanos
            .content__description Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, ab
    img.panel__img__background(src="@/assets/images/img-panel.jpg")
.panel.panel--main
    .content
        .content__info
            .content__name Portafolio
            .content__description 
                |Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, ab
                |sunt. Magnam magni reprehenderit nemo ducimus ipsam obcaecati libero
                |nisi! Nihil vitae dolorum, beatae odio iste quae impedit aliquam
                |adipisci.
        .content__img__container
            img.content__img.fadeIn(src="@/assets/images/portfolio.png" id="portfolioImg")
.panel.panel--secondary
    .content
        .content__img__container
            img.content__img.fadeIn(src="@/assets/svg/innovacion.svg" id="aboutImg")
        .content__info
            .content__name Acerca de mi
            .content__description 
                |Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, ab
                |sunt. Magnam magni reprehenderit nemo ducimus ipsam obcaecati libero
                |nisi! Nihil vitae dolorum, beatae odio iste quae impedit aliquam
                |adipisci.
.panel.panel--tertiary
    .content
        .content__info
            .content__name Contactanos
            .content__description 
                |Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, ab
                |sunt. Magnam magni reprehenderit nemo ducimus ipsam obcaecati libero
                |nisi! Nihil vitae dolorum, beatae odio iste quae impedit aliquam
                |adipisci.
        .content__img__container
            img.content__img.fadeIn(src="@/assets/svg/charla.svg" id="contactoImg")
</template>

<script lang="ts" setup>
import { onMounted } from "vue"
import scrollAnimation from '@/utils/scrollAnimation'

onMounted(() => {
    scrollAnimation(['portfolioImg', 'contactoImg', 'aboutImg'])
})
</script>