const btnCreate = document.querySelector('.btn-main');
const btnToggle = document.querySelector('.btn-toggle');


btnCreate.addEventListener('click', () => {
     const input = document.querySelector('.input-main');
     const list = document.querySelector('ul'); //1st step to add to the DOM
    
     list.insertAdjacentHTML(
      'afterbegin',
       `<li>${input.value}</li>`
     ); // insertAdjacentHTML add input.value from afterbegin.

     input.value = '';//Update the type space
 //         list.append(item); //2nd step to add to the DOM

});


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