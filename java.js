
const slots = ['first', 'second', 'third'];

const users = [
    {id:1, name: 'moe', slot: 'first'},
    {id:2, name: 'larry', slot: 'second'},
    {id:3, name: 'curly', slot: 'third'},
    {id:4, name: 'lucy', slot: 'third', selected: true},
];

function createUls(slots){
    for(let i = 0; i < slots.length; ++i){
        let currSlot = slots[i];
        const div = document.getElementById(currSlot);
        const ul = document.createElement('ul');
        ul.classList.add(currSlot);
        div.appendChild(ul)
    }

}
createUls(slots);

const listOne = document.getElementsByClassName('first')[0];
const midList = document.getElementsByClassName('second')[0];
const lastList = document.getElementsByClassName('third')[0];


function pushTheNames(arrayObj){
    for(let i = 0; i < arrayObj.length; ++i){
        let currObj = arrayObj[i];
        const li = document.createElement('li');
        li.innerHTML = currObj.name;
        if(currObj.slot === 'first'){
            listOne.appendChild(li);
        } else if(currObj.slot === 'second'){
            midList.appendChild(li);
        }else if(currObj.slot === 'third'){
            lastList.appendChild(li);
        }
    }
}
pushTheNames(users);


const mainDIv = document.getElementById('lists');
mainDIv.addEventListener('click',chosen);
function chosen(event){

    const target = event.target;
    if(target.classList.length){
        target.classList.remove('selected');
    } else if (target.tagName === 'LI'){

        target.classList.add('selected');
    }

}


mainDIv.addEventListener('click', function(ev){
    const action = ev.target.getAttribute('data-action');
    if(action === 'moveMid'){
        const selected = listOne.getElementsByClassName('selected');
        const arraySelc = [...selected];
        for(let i = 0; i < arraySelc.length; i++){
            listOne.removeChild(arraySelc[i]);
            midList.appendChild(arraySelc[i]);
        }
    }

    if(action === 'moveMidEnd'){
        const selected = lastList.getElementsByClassName('selected');
        const arraySelc = [...selected];
        for(let i = 0; i < arraySelc.length; i++){
            lastList.removeChild(arraySelc[i]);
            midList.appendChild(arraySelc[i]);
        }
    }

    if(action === 'moveFirst'){
        const selected = midList.getElementsByClassName('selected');
        const arraySelc = [...selected];
        for(let i = 0; i < arraySelc.length; i++){
            midList.removeChild(arraySelc[i]);
            listOne.appendChild(arraySelc[i]);
        }
    }

    if(action === 'moveLast'){
        const selected = midList.getElementsByClassName('selected');
        const arraySelc = [...selected];
        for(let i = 0; i < arraySelc.length; i++){
            midList.removeChild(arraySelc[i]);
            lastList.appendChild(arraySelc[i]);
        }
    }

});
