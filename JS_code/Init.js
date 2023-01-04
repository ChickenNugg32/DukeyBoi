(function () {

    const overworld = new Overworld({
      element: document.querySelector(".game-container")
    });
    overworld.init();
  
  })();
  console.log(Overworld);
  function choose(arr) {return arr[Math.floor(Math.random()*arr.length)];}
  console.log(choose([
    'Oh, hello!',
    'hey, how\'s it hangin',
    '*ahem* But may i ask why you\'re here?',
    'this is the last time i will ask you to go',
    'Goodbye?',
  ]));