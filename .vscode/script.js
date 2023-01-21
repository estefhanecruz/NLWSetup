const form = document.querySelector('#form-habits');
const nlwSetup = new NLWSetup (form);
const button = document.querySelector('header button');

button.addEventListener('click', add);
form.addEventListener('change', save);

function add(){
    const today = new Date().toLocaleDateString("pt-br").slice(0, -5);
    const dayExists = nlwSetup.dayExists (today);
    if(dayExists){
        alert('Dia já incluso')
        return;
    }
    
    alert(dayExists);
    nlwSetup.addDay('01/01');
}

function save(){
    localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data));
}

const data = JSON.parse(localStorage.getItem('NLWSetup@habits')) || {};
nlwSetup.setData(data);
nlwSetup.load()


/*const data = {
    run: ['01-01', '01-02', '01-03', '01-04'],
    takePills: ['01-03', '01-04', '01-01'],
    journal: ['01-02'],
}

nlwSetup.setData(data);
nlwSetup.load();
*/