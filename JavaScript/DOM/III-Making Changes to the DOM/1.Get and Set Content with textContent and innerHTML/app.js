const btnUpdate = document.querySelector('.btn-main');

//  const items = document.querySelectorAll('li');
//  const highlights = document.querySelectorAll('.highlights');

btnUpdate.addEventListener('click', () => {
     const headline = document.getElementById('headline');                      
     const input = document.querySelector('.input-main');   
     
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

