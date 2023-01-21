const form = document.querySelector('#form-habits');
const nlwSetup = new NLWSetup(form);

const button = document.querySelector('header button');

button.addEventListener('click', add);
form.addEventListener('change', save);

function add(){
   const today = new Date().toLocaleDateString('pt-br').slice(0, 5);
   const dayExists = nlwSetup.dayExists(today);
   
   if(dayExists){
      alert('Dia já existe! 🛑');
      return;
     }
   
   nlwSetup.addDay(today);
   alert('Dia adicionado com sucesso! ✔');
}

function save(){
    localStorage.setItem('savedHabit', JSON.stringify(nlwSetup.data));
}

const data = JSON.parse(localStorage.getItem('savedHabit')) || {};


nlwSetup.setData(data);

nlwSetup.load();
