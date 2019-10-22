let args = process.argv;
console.log(args);
for (let i = 2; i < args.length; i++) {
  if(Number.isInteger(Number(args[i])) && args[i] > 0){
    setTimeout(() => {
      process.stdout.write('\x07');
    }, (args[i] * 1000));
  }
}