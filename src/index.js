//Nodes:
const mainContainer = document.querySelector('main');

//functions

function content ({icon, question, text, container}) {
    const div = document.createElement('div');
    div.classList.add('iconStar-container');
    const iconStar = document.createElement('img');
    iconStar.setAttribute('src', icon);
    iconStar.setAttribute('style','width: 15px')
    const title = document.createElement('h1');
    const parraf = document.createElement('p');

    title.innerHTML = `${question}?`;
    parraf.innerHTML = text;

    container.appendChild(div);
    div.appendChild(iconStar);
    container.appendChild(title);
    container.appendChild(parraf);
}

function createOptions (options, container) {
    const div = document.createElement('div');
    div.classList.add('option-container');
    container.appendChild(div);

    options.forEach(option =>{
    const bton = document.createElement('button');
    bton.setAttribute('type', 'button');
    bton.classList.add('buttonOption');
    bton.innerHTML = option;
    div.appendChild(bton);
});
    const submit = document.createElement('button');
    submit.innerHTML = 'SUBMIT';
    submit.setAttribute('type', 'button');
    submit.classList.add('submitBtn');
    container.appendChild(submit)
}

content({
    icon: './images/icon-star.svg',
    question:'How did we do', 
    text: 'Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!', 
    container: mainContainer
});
createOptions([1,2,3,4,5], mainContainer);