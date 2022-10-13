let selectedOption = [];

//Nodes:
const mainContainer = document.querySelector('main');
const card = document.querySelector('.card');
const frontCard = document.querySelector('section div.front');
const backCard = document.querySelector('section div.back');


//function
function Frontcontent ({container, icon, question, text, options}) {
    const div = document.createElement('div');
    div.classList.add('iconStar-container');
    const iconStar = document.createElement('img');
    iconStar.setAttribute('src', icon);
    iconStar.setAttribute('alt', 'icon');
    iconStar.setAttribute('style','width: 15px')
    const title = document.createElement('h1');
    const parraf = document.createElement('p');

    
    title.innerHTML = question;
    parraf.innerHTML = text;
    
    container.appendChild(div);
    container.appendChild(title);
    div.appendChild(iconStar);
    container.appendChild(parraf);
    
    // in this part i use propagation event for the container just to my buttons and the submit button targeting his class.
    container.addEventListener('click',(e)=>{
        if(e.target && e.target.classList.contains("buttonOption")) {
            selectedOption = [e.target.innerHTML, options.length]
            console.log(`The selected option is: ${selectedOption[0]}`);
        };
        if(e.target && e.target.classList.contains('submitBtn')) {
            //back card content
           if(selectedOption.length > 1) {
            backContent({
            container: backCard,
            img:'./images/illustration-thank-you.svg',
            subT: 'Thank you!',
            text: 'We appreciate you taking the time to give a rating. \nIf you ever need more suport. Don\'t hesitate to get in touch!',
        })
        card.classList.add('rotate-card')
        
        } else {
           alert('Select a option');
        }
           
        }
    });

    const div2 = document.createElement('div');
    div2.classList.add('option-container');

    container.appendChild(div2);

    options.forEach(option =>{
    const bton = document.createElement('button');
    bton.setAttribute('type', 'button');
    bton.classList.add('buttonOption');
    bton.innerHTML = option;
    div2.appendChild(bton);
});
    const submit = document.createElement('button');
    submit.innerHTML = 'SUBMIT';
    submit.setAttribute('type', 'button');
    submit.classList.add('submitBtn');
    container.appendChild(submit)
}

function backContent ({container, img, subT, text}) {
    const icon = document.createElement('img');
    icon.setAttribute('src', img);
    icon.setAttribute('style', 'width: 130px');
    icon.classList.add('backCard-img');
    const result = document.createElement('span');
    result.classList.add('backCard-result');
    result.innerHTML = `You selected ${selectedOption[0]} out of ${selectedOption[1]}`;
    const subTitle = document.createElement('h2');
    subTitle.innerHTML = subT;
    const parraf = document.createElement('p');
    parraf.innerHTML = text;

    
    container.appendChild(icon);
    container.appendChild(result);
    container.appendChild(subTitle);
    container.appendChild(parraf);
    
}

//front card content
Frontcontent({
    container: frontCard,
    icon: './images/icon-star.svg',
    question:'How did we do?', 
    text: 'Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!', 
    options: [1,2,3,4,5]
});


