let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim'
}

let info2 = {
  personagem: 'Margarida e Tio Patinhas',
  origem: 'Pato Donald e Christmas on Bear Mountain, Dell s Four Color Comics #178',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas',
  recorrente: 'Sim'
}

for (let properties in info) {
  if (
    properties === 'recorrente' &&
    info[properties] === 'Sim' &&
    info2[properties] === 'Sim'
  ) {
    console.log('Ambos recorrentes');
  } else {
    console.log(info[properties] + ' e ' + info2[properties]);
  }
}