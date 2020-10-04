const isScrolledIntoView = (el: HTMLElement | null)  => {
    if(el === null) return;
    let rect = el.getBoundingClientRect(); 
    let elemTop = rect.top;
    let isVisible = elemTop < window.innerHeight/1.2

    return isVisible;
}

export default (domImgElements: Array<string>) => {
    window.addEventListener('scroll',()=>{
        const idDomElements = domImgElements;
        idDomElements.map(idElemet => {
            let element = document.getElementById(idElemet)
            if(isScrolledIntoView(element) && element != null){
                element.classList.add("animationFadeIn")
            }
        })
    })
}


