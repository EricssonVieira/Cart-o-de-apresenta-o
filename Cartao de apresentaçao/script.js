const dias = document.querySelector('span');

const diffInDays = calculateDateDiff();

function calculateDateDiff(){
  
  let start = (1634428800000);
  let end = new Date();
  
  start = new Date(start)
  end = new Date(end)
  
  let diffInTime = Math.abs(end - start)
  let timeInOneDay = 1000 * 60 * 60 * 24 
  let diffInDays = Math.ceil(diffInTime / timeInOneDay)
  
  return diffInDays
  
}
let criarSpan = document.createElement('span');
let atualizar = document.createTextNode(diffInDays);
dias.appendChild(atualizar)


const bio = document.querySelector('#Bio')
const btn = document.querySelector('.btn-show')
const voltar = document.querySelector('.btn-hide')

btn.addEventListener('click', function() {
  
    if (bio.style.display = 'none'){
    btn.style.opacity = 0 ;
    bio.style.display = 'block';
  } 
})

voltar.addEventListener('click', function() {
  
    if (bio.style.display = 'block'){
        btn.style.opacity = 1 ;
        bio.style.display = 'none';
  } 
})

