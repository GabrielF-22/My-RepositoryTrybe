// 1
function alteracorCabecalho (cor) {
  document.getElementById('header-container').style.backgroundColor = cor;
}
alteracorCabecalho ('green');

// 2
function alteraCorRodape (cor) {
  document.getElementById('footer-container').style.backgroundColor = cor
}
alteraCorRodape ('green');

// 3
function alteraCorQ1 (cor) {
  document.getElementsByClassName('emergency-tasks')[0].style.backgroundColor = cor;
}
alteraCorQ1 ('blue');

// 4
function alteraCorQ2 (cor) {
  document.getElementsByClassName('no-emergency-tasks')[0].style.backgroundColor = cor;
}
alteraCorQ2 ('red');

// 5
function corh31 (cor) {
  const h31 = document.querySelectorAll('.emergency-tasks h3');
  for (let index = 0; index < h31.length; index += 1) {
    h31[index].style.backgroundColor = cor;
  }
}
corh31 ('black');

// 6
function corh32 (cor) {
  const h32 = document.querySelectorAll('.emergency-tasks h3');
  for (let index = 0; index < h32.length; index += 1) {
    h32[index].style.backgroundColor = cor;
  }
}
corh32 ('black');

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