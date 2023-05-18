const btnUpdate = document.querySelector('.btn-main');
const btnToggle = document.querySelector('.btn-toggle');
//  const items = document.querySelectorAll('li');
//  const highlights = document.querySelectorAll('.highlights');

btnUpdate.addEventListener('click', () => {
     const headline = document.getElementById('headline');                       
     const input = document.querySelector('.input-main');   
     headline.className = 'grow';
     headline.textContent = input.value; //refresh the headline with inpu.value
     input.value = '';//Update the type space
});
//
//
//
//for (const highlight of highlights) {
//     highlight.style.backgroundColor = 'cornsilk'; 
//}
//
//
//for (let i= 0; i<items.length; i++){
//  items[i].style.color ='orchid';
//}

btnToggle.addEventListener('click', () => {
   
   const listContainer = document.querySelector('.list-container');        
    if(listContainer.style.display === 'none') {
      btnToggle.textContent = 'Hide List';
      listContainer.removeAttribute('style');
    } else{
      btnToggle.textContent = 'Show List';
      listContainer.style.display = 'none';
    }               
});