let order = 1;
let adding = false;

const error = document.querySelector('.error');
const message = 'Please add a description.';

const add_btn = document.querySelector('.add');
add_btn.addEventListener('click', () => {
  const target = document.querySelector('#requested');
  if (adding == false) {
    adding = true;
    target.appendChild(create_item());
  } else {
    error.innerHTML = message;
  }
});

const create_item = (e) => {
  const item = document.createElement('div');
  item.classList.add('item')
  item.setAttribute(id,`item-${order}`);
  item.addEventListener('dragstart',e =>
    e.dataTransfer.setData('text',e.target.id))
    item.addEventListener('dragend', e=> e.dataTransfer.clearData())
    
    let input =document.createElement('input');
    item.appendChild(input)

    let save_btn = document.createElement('button')
    save_btn.innerHTML ="Save";
    save_btn.addEventListener('click', ()=>{
      error.innerHTML='';
      if(input.value!==''){
        order+= 1;
        item.innerHTML = input.value;
        adding = false;
      }else{
        error.innerHTML = message;
      }
    })
    item.appendChild(save_btn);
    return item
};
document.querySelectorAll('.drop').forEach(element => {
  element.addEventListener('drop', e=>{
    e.preventDefault();
    const id = event.dataTransfer.getData('text');
    e.target.appendChild(document.getElementById(id));
  })
  element.addEventListener('dragover', event=>
  event.preventDefault())
});