const heading = document.getElementById('head');
const textInput = document.getElementById('myTextInput');
const headButton = document.querySelector('#headButton');
const toggler = document.querySelector('#toggler');
const toggleList = document.querySelector('#toggleList');
const UL = toggleList.querySelector('ul');
const description = document.querySelector('#description');
const descriptionInput = document.querySelector('#listDescription');
const descriptionBtn = document.querySelector('#descriptionBtn');
const li = document.getElementsByTagName('li');
const oddLot = document.querySelectorAll('.oddLot');
const choose = document.querySelectorAll('li:nth-child(odd)');
const addUp = document.querySelector('#addUp');
const addUpBtn = document.querySelector('#addUpBtn');
const liChildren = UL.children;
const liFirstChild = UL.firstElementChild;
const liLastChild = UL.lastElementChild;
const up = document.querySelector('button.up');
const down = document.querySelector('button.down');

// function creating buttons nested in 'LI'.
const addBtnsToList = li => {
    const remove = document.createElement('button')
    remove.className = 'remove';
    remove.textContent = 'Remove';
    li.appendChild(remove);

    const down = document.createElement('button');
    down.className = 'down';
    down.textContent = 'Down';
    li.appendChild(down);

    const up = document.createElement('button');
    up.className = 'up';
    up.textContent = 'Up';
    li.appendChild(up);
}

headButton.addEventListener('click', () => {
    heading.style.color = textInput.value;
    textInput.value = '';
});

toggler.addEventListener('click', () => {
    if(toggleList.style.display === 'none') {
        toggler.textContent = 'Hide list';
        toggleList.style.display = 'block'
    } else {
        toggler.textContent = 'Show list';
        toggleList.style.display = 'none'
    }
})

descriptionBtn.addEventListener('click', () => {
    description.textContent = `${descriptionInput.value}:`;
    descriptionInput.value = '';
    if(description.textContent === ':') {
        description.textContent = 'Things that are purple:'
    }
});

// selecting multipe syntax of a kind requires looping, to bring the desired event. Each item in the selected group is an array property.
for (const odd of oddLot) {
    odd.style.color = 'red';
};

// improvement needs to be made on how the style could be effected on added items.
// for (const choice of choose) {
//     choice.style.backgroundColor = 'rgba(0, 0, 0, .3)';
// };

for (let i = 0; i<liChildren.length; i++) {
    liChildren[i].style.color = 'purple';
    addBtnsToList(liChildren[i]);
};

// event bubbling is being used here. // 
UL.addEventListener('click', (event) => {
    if(event.target.tagName == 'BUTTON') {
        if(event.target.className == 'remove') {
            const li = event.target.parentNode;
            const ul = li.parentNode;
            ul.removeChild(li);
        }
        if(event.target.className == 'up') {
            const li = event.target.parentNode;
            const ul = li.parentNode;
            const prevLi = li.previousElementSibling;
            if(prevLi) {
                ul.insertBefore(li, prevLi);
            }
        }
        if(event.target.className == 'down') {
            const li = event.target.parentNode;
            const ul = li.parentNode;
            const nextLi = li.nextElementSibling;
            if(nextLi) {
                ul.insertBefore(nextLi, li);
            }
        }
    }
});

addUpBtn.addEventListener('click', () => {
    let li = document.createElement('li');
    li.textContent = `${addUp.value}`;
    li.style.color = 'purple'
    addBtnsToList(li);
    UL.appendChild(li);
    addUp.value = '';
});

// it threw an error
// liFirstChild.removeChild(up);
// liLastChild.removeChild(down);

// check out different selection methods.
// document.getElementById('test').onclick = function () {
//     console.log('I clicked the button');
// }