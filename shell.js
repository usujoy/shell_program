let currentDirectory = '~';
const shellName = 'shell v2.0 ';
const symbol = ' % ';
const listOfFiles = [];

const cd = function (args) {
  currentDirectory = args.join();
  return shellName + currentDirectory + symbol;
}

const pwd = function () {
  return currentDirectory;
}

const ls = function () {
  console.log(listOfFiles.join(' '));
  return;
}

const touch = function  (args) {
  const newFile = args.join();

  listOfFiles.push(newFile);
}

const externalCommands = function (commandString) {
  const [command, ...args] = commandString.split(' ');

  switch (command) {
    case 'touch': 
      return touch(args);
      
  
    default:
      console.log('shell v2.0 command not found');
  }
}

const runCommand = function (commandString) {
  const [command, ...args] = commandString.split(' ');

  switch (command) {
    case 'cd':
      return cd(args)
    case 'pwd':
      console.log(pwd());
      return;
    case 'ls':
      return ls();
    default:
      return externalCommands(commandString);
  }
}

while (true) {
  const command = prompt(shellName + currentDirectory + symbol);

  const runningCommand = runCommand(command);
}