process.stdin.setRawMode(true);
process.stdin.setEncoding('utf8');
const timer2 = () => {
  process.stdin.on('data', (key) => {
    if (key === '\u0003') {
      console.log("Thanks for using me, ciao!")
      process.exit();
    }
    else if (key === '\u0062'){
      process.stdout.write('\x07');
    }

    else if(Number.isInteger(+key) && key !== '\u0030') {
      console.log(`Setting timer for ${key} seconds...`)
      setTimeout(() => {
        process.stdout.write('\x07');
      }, (key * 1000));
    }

 

  });

}

timer2();
