const isScrolledIntoView = el => {
    let rect = el.getBoundingClientRect();
    let elemTop = rect.top;
    let isVisible = elemTop < window.innerHeight/1.2

    return isVisible;
}
window.addEventListener('scroll',()=>{
    const idDomElements = ['portfolioImg', 'contactoImg', 'aboutImg']
    idDomElements.map(idElemet => {
        let element = document.getElementById(idElemet)
        if(isScrolledIntoView(element)){
            element.classList.add("animationFadeIn")
        }
    })
})