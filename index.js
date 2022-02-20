function openP(answer, icons) {
        let icon = document.getElementById(icons);
        icon.classList.toggle('active');
        let p = document.getElementById(answer);
        p.classList.toggle('visible-faq');

}