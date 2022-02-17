# Front-end Style Guide

## Layout

The designs were created to the following widths:

- Mobile: 375px
- Desktop: 1440px

## Colors

### Primary

#### Text

- Very dark desaturated blue: hsl(238, 29%, 16%)
- Soft red: hsl(14, 88%, 65%)

#### Gradient

Background gradient:

- Soft violet: hsl(273, 75%, 66%)
- Soft blue: hsl(240, 73%, 65%)

### Neutral

#### Text

- Very dark grayish blue: hsl(237, 12%, 33%)
- Dark grayish blue: hsl(240, 6%, 50%)

#### Dividers

- Light grayish blue: hsl(240, 5%, 91%)

## Typography

### Body Copy

- Font size: 12px

### Font

- Family: [Kumbh Sans](https://fonts.google.com/specimen/Kumbh+Sans)
- Weights: 400, 700
if()){
            imageClick.addEventListener('click', ()=>{
                icon.classList.toggle('inactive');
            })

        }
        function openP(teste, teste2, teste3) {
    let imageClick = document.getElementById(teste);
    imageClick.addEventListener('click', () => {
        let p = document.getElementById(teste2);
        p.classList.toggle('visible-faq')
        let icon = document.getElementById(teste3);
        icon.classList.toggle('active');
        if (p.classList.contains('visible-faq')){
            imageClick.addEventListener('click', ()=>{
                icon.classList.remove('active');
                icon.classList.add('inactive');
                p.classList.toggle('visible-faq')
            })
        }
    });
}

