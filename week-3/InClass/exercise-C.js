function abracaFunction(yourFunc) {
    console.log(
      "I am abracaFunction! Watch as I mutate an array of strings to your heart's content!"
    );
    const abracaArray = [
      "James",
      "Elamin",
      "Ismael",
      "Sanyia",
      "Chris",
      "Antigoni",
    ];
  
    const abracaOutput = yourFunc(abracaArray);
    
    return abracaOutput;
  }

  const transformWordToUpperCase = (word) => word.toUpperCase();
  
  let itemsToUppercase = (arreglo) => {
    const resultado = arreglo.map(transformWordToUpperCase);

    return resultado;
  }

  console.log(abracaFunction(itemsToUppercase));