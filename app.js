let inputText = document.querySelector('input')
let btnAdd = document.querySelector('.btn-add')
let item = document.querySelector('.result-list')
console.log(item)
let btnDel = document.querySelector('.btnDel')
let btnClearAll = document.querySelector('.btn-clear-list')
let count = document.querySelector('.result-desc span')
console.log(count)

let tags =[]

function render(){
    // let input = inputText.value.trim();
    item.innerHTML ='';
    for(let i=0;i<tags.length;i++){
        const tag = tags[i];
        item.innerHTML += `<div class="result">
                             <span>${tag}</span>
                             <button class="btnDel">
                              <i class="fa-regular fa-trash-can"  onclick="deleteItem(${i})"></i>
                              </button>
                         </div>`
                     
    }
    count.innerText = tags.length;
    inputText.focus();
}

inputText.addEventListener('keydown',function(e){
    if(!tags.includes(inputText.value.trim())&&inputText.value.trim()!='')
    {
        if(e.key=='Enter'){
            tags.push(inputText.value.trim())
            inputText.value=''
            render()
        }
    }
})

btnAdd.addEventListener('click',function(){
    if(!tags.includes(inputText.value.trim())&&inputText.value.trim()!=''){
        tags.push(inputText.value.trim())
        inputText.value=''
        render()
    }
})

btnClearAll.addEventListener('click',function(){
    item.innerHTML ='';
    tags=[]
    count.innerText = tags.length;
})

function deleteItem(index){
    tags.splice(index,1)
    render();
    console.log(index)
}





