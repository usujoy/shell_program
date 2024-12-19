const promptMessage = 'shell v2.0 % ';
let currentDirectory = '~ ';

const cd = function (...args) {
  currentDirectory = args;
  return promptMessage + currentDirectory;
}

const pwd = function () {
  return currentDirectory;
}

const ls = function () {
  return;
}

const externalCommands = function (command) {
  console.log('shell v2.0 command not found');
}

const runCommand = function (commandString) {
  const [command, ...args] = commandString.split(' ');
  console.log(command);
  

  switch (command) {
    case 'cd':
      return cd(args)
    case 'pwd':
      console.log(pwd())
      return;
    case 'ls':
      return ls();
    default:
      return externalCommands(command);
  }
}

while (true) {
  const command = prompt(promptMessage + currentDirectory);

  const runningCommand = runCommand(command);
}