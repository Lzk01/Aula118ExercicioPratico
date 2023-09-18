function somarComCallback(a, b, callback) {
    setTimeout(() => {
      const resultado = a + b;
      callback(resultado);
    }, 1000);
  }
  
  
  function multiplicarComCallback(a, b, callback) {
    setTimeout(() => {
      const resultado = a * b;
      callback(resultado);
    }, 1500);
  }
  
  
  function subtrairComPromise(a, b) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const resultado = a - b;
        if (resultado >= 0) {
          resolve(resultado);
        } else {
          reject("Resultado negativo");
        }
      }, 1000);
    });
  }
  
  
  function dividirComPromise(a, b) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (b !== 0) {
          const resultado = a / b;
          resolve(resultado);
        } else {
          reject("Divisão por zero");
        }
      }, 1500);
    });
  }
  
  
  async function calcularPotenciaComAsyncAwait(base, expoente) {
    if (expoente < 0) {
      throw new Error("Expoente negativo não é suportado.");
    }
    return base ** expoente;
  }
  
  
  async function calcularRaizQuadradaComAsyncAwait(numero) {
    if (numero < 0) {
      throw new Error("Não é possível calcular a raiz quadrada de um número negativo.");
    }
    return Math.sqrt(numero);
  }
  
  
  
  
  somarComCallback(5, 3, resultado => {
    console.log("Soma (Callback):", resultado);
  });
  
  multiplicarComCallback(4, 6, resultado => {
    console.log("Multiplicação (Callback):", resultado);
  });
  
  
  subtrairComPromise(10, 3)
    .then(resultado => {
      console.log("Subtração (Promise):", resultado);
    })
    .catch(error => {
      console.error("Erro (Promise):", error);
    });
  
  dividirComPromise(8, 2)
    .then(resultado => {
      console.log("Divisão (Promise):", resultado);
    })
    .catch(error => {
      console.error("Erro (Promise):", error);
    });
  
  
  (async () => {
    try {
      const potencia = await calcularPotenciaComAsyncAwait(2, 3);
      console.log("Potência (Async/Await):", potencia);
  
      const raizQuadrada = await calcularRaizQuadradaComAsyncAwait(25);
      console.log("Raiz Quadrada (Async/Await):", raizQuadrada);
    } catch (error) {
      console.error("Erro (Async/Await):", error.message);
    }
  })();