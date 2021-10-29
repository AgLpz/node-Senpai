const multiplicarPositivos = (numeroUno, numeroDos) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (numeroUno > 0 && numeroDos > 0) {
          const resultado = numeroUno * numeroDos;
          resolve(resultado);
        } else {
          reject("bla");
        }
      }, 1000);
    });
  };
  
  // multiplicarPositivos(10, 7)
  //   .then((res) => {
  //     console.log(res);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });

    async function main () {
      const resultado = await multiplicarPositivos(10, 99);
      console.log(resultado);
  }

  main();