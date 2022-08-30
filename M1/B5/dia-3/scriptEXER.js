function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
// 1
let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function colocaNcalendario () {
  const dias = document.getElementById('days');

  for (let index = 0; index < decemberDaysList.length; index += 1) {
    let dia = decemberDaysList[index];
    let elementoDia = document.createElement('li')
    elementoDia.innerText = dia;

    if (dia === 24 || dia === 25 || dia === 31) {
      elementoDia.className = 'day holiday'
      dias.document.appendChild(elementoDia);
    }
    else if (dia === 4 || dia === 11 || dia === 18 || dia === 25) {
      elementoDia.className = 'friday';
      dias.document.appendChild(elementoDia);
    } else {
      elementoDia.className = 'day';
      dias.document.appendChild(elementoDia);
    }
  }
}
colocaNcalendario();



// const nDias = document.createElement('li');
// nDias.className = 'day';
// nDias.innerText = '1';
// dias.appendChild(nDias);

