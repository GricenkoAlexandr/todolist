
const inp=document.querySelector('.todoinp');
const inpbtn=document.querySelector('.todoinpbtn');
const out=document.querySelector('.outblock');
const del=document.querySelectorAll('.todobtn');
const fitem=document.querySelector('.firstitem');
const item=document.querySelectorAll('.todoitem');

let task=[];

inpbtn.addEventListener('click', ()=> {
  if (inp.value==='') {
    return;
  } else {
    task.push(inp.value);
    inp.value='';
    console.log(task);
    textout(task);
    fitem.style.display='none';
  }
});

const textout=(arr)=> {
  let textarr='';
  for (let i=0; i<arr.length; i++) {
    textarr+=`<div class="todoitem" ondrop="drop(event)" ondragover="allowDrop(event)">
    <div class="todotext">
      <p> ${arr[i]}</p>
    </div>
    <div class="todopanel">
      <button class="todobtn de1${i+1}">Удалить</button>
    </div>
  </div>`

  }
  out.innerHTML=textarr;
}



function allowDrop(ev) {
  ev.preventDefault();
}




