const burger = document.getElementById('burger');
const menu = document.getElementById('menu');



burger.onclick = () => {
    menu.classList.toggle('active');
    burger.classList.toggle('active');
    document.body.classList.toggle('active');
}

document.onclick = (e) => {
    if (e.target.id !== 'burger' && e.target.id !== 'navigation' && e.target.id !== 'menuLinks') {
        menu.classList.remove('active');
        burger.classList.remove('active');
        document.body.classList.remove('active');
    }

}

const scroll = new SmoothScroll('#menu a[href*="#"] , #contentOne a[href*="#"]',{
    speed: 500
});

function showmore(){
    const showtext = document.querySelector('.show-more');
    const button = document.querySelector('.btn-more');

    showtext.classList.toggle('show-less');
    
    if(button.innerText === 'SEE MORE'){
        button.innerText = 'SEE LESS';
    }else{
        button.innerText = 'SEE MORE';
    }
}


const nameImput = document.getElementById('inputname');
const emailImput = document.getElementById('inputemail');
const cityImput = document.getElementById('inputcity');
const ufImput = document.getElementById('inputuf');
const textArea = document.getElementById('messagearea');
const btnContact = document.getElementById('contactBtn');

btnContact.addEventListener('click', (e)=> {
    e.preventDefault();

    const nameValue = nameImput.value;
    const emailValue = emailImput.value;
    const cityValue = cityImput.value;
    const ufValue = ufImput.value;
    const textValue = textArea.value;

    if( nameValue === "" || emailValue === "" || cityValue === "" || ufValue === "" || textValue ===""){
        alert("Please fill out all the fields");
    }
})