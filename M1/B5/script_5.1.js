const cabecalho = document.getElementById('header-container');
cabecalho.style.backgroundColor = 'green';

// Quadro 1
const quadro1 = document.getElementsByClassName('emergency-tasks') [0];
quadro1.style.backgroundColor = 'pink';

// H3
const titulo3 = document.querySelectorAll('.emergency-tasks h3');
for (let i = 0; i < titulo3.length; i += 1) {
  titulo3[i].style.backgroundColor = 'black';
}

// Quadro 2
const quadro2 = document.getElementsByClassName('no-emergency-tasks') [0];
quadro2.style.backgroundColor = 'blue';

//H3 - Quadro2

const titulo3q = document.querySelectorAll('.no-emergency-tasks h3');
for (let index = 0; index < titulo3q.length; index += 1) {
  titulo3q[index].style.backgroundColor = 'black';
}

// Parte de baixo
const rodape = document.getElementById('footer-container');
rodape.style.backgroundColor = 'green'



// RESOLUÇÃO

// const header = document.getElementById('header-container');
// header.style.backgroundColor = 'rgb(0, 176, 105)';

// const emergencyTasks = document.getElementsByClassName('emergency-tasks')[0];
// emergencyTasks.style.backgroundColor = 'rgb(255, 159, 132)';

// const emergencyTasksHeaders = document.querySelectorAll('.emergency-tasks h3');
// for (let index = 0; index < emergencyTasksHeaders.length; index += 1) {
//   emergencyTasksHeaders[index].style.backgroundColor = 'rgb(165, 0, 243)';
// }

// const noEmergencyTasks = document.querySelector('.no-emergency-tasks');
// noEmergencyTasks.style.backgroundColor = 'rgb(249, 219, 94)';

// const noEmergencyTasksHeaders = document.querySelectorAll('.no-emergency-tasks h3');
// for (let index = 0; index < noEmergencyTasksHeaders.length; index += 1) {
//   noEmergencyTasksHeaders[index].style.backgroundColor = 'rgb(35, 37, 37)';
// }

// const footer = document.getElementById('footer-container');
// footer.style.backgroundColor = 'rgb(0, 53, 51)';