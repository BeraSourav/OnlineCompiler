let select = document.querySelector('.opt');
let frme = document.getElementById('frame');
let Btn = document.getElementById('btn');
let heading = document.getElementById('heading');


Btn.addEventListener('click', () => {
    document.getElementById('blockk').style.display='block';
	if(select.value == 'C'){
        heading.innerText = "Let's hello C";
        frme.setAttribute('src','https://www.interviewbit.com/embed/snippet/24cad1dd988653d76572');
    }else if(select.value == 'C++'){
        heading.innerText = "Let's hello C++";
        frme.setAttribute('src','https://www.interviewbit.com/embed/snippet/739fa6828e6d294a9de2');
    }else if(select.value == 'JAVA'){
        heading.innerText = "Let's hello JAVA";
        frme.setAttribute('src','https://www.interviewbit.com/embed/snippet/d1798a90c6bdc04d30f1');
    }else if(select.value == 'Python'){
        heading.innerText = "Let's hello Python";
        frme.setAttribute('src','https://www.interviewbit.com/embed/snippet/9f6a2e381048fb5a8be2');
    }

});
