function openP(question, answer, icons) {
        let icon = document.getElementById(icons);
        icon.classList.toggle('active');
        let p = document.getElementById(answer);
        p.classList.toggle('visible-faq');
    if (p.classList.contains('visible-faq')){
        imageClick.addEventListener('click', ()=>{
            icon.classList.toggle('active')
            p.classList.toggle('visible-faq')
        })
    }
}