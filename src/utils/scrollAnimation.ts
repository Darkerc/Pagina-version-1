const isScrolledIntoView = (el: HTMLElement | null)  => {
    if(el === null) return;
    const rect = el.getBoundingClientRect(); 
    const elemTop = rect.top;
    const isVisible = elemTop < window.innerHeight/1.2

    return isVisible;
}

export default (domImgElements: Array<string>) => {
    window.addEventListener('scroll',()=>{
        const idDomElements = domImgElements;
        idDomElements.map(idElemet => {
            const element = document.getElementById(idElemet)
            if(isScrolledIntoView(element) && element != null){
                element.classList.add("animationFadeIn")
            }
        })
    })
}


