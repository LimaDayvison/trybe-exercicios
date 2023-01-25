const novoEmpregado = (nomeCompleto) => {
    const email = nomeCompleto.toLowerCase().replace(' ', '_');
    return { nomeCompleto, email: `${email}@trybe.com`};
  };

  const newEmployees = (retornar) => {
    const employees = {
      id1: retornar('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: retornar('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: retornar('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };

  console.log(newEmployees(novoEmpregado));