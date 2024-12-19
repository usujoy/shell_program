const currentDirectory = ['~'];
const directories = [];
const shellName = 'shell v2.0 ';
const symbol = ' % ';
const listOfFiles = [];

const cd = function (args) {
  if (directories.includes(args.slice(-1).join( ))) {
    currentDirectory.push(args.join(' '));
    
    const path = shellName + (currentDirectory.join('/') )+ symbol;
    return path;
  }

  console.log('No such directories');
};

const pwd = function () {
  return currentDirectory;
};

const ls = function () {
  console.log(listOfFiles.join(' '));
  return;
};

const touch = function  (args) {
  const newFile = args.join();

  listOfFiles.push(newFile);
};

const makedirectory = function (args) {
  if (args.includes(' ')) {
    console.log('use camelcase');
    return;
  }

  directories.push(args.join());
}

const externalCommands = function (commandString) {
  const [command, ...args] = commandString.split(' ');

  switch (command) {
    case 'touch': 
      return touch(args);
    case 'mkdir':
      return makedirectory(args);
    default:
      console.log('shell v2.0 command not found');
  }
};

const echo = function (args) {
  console.log(args.join(' '));
};

const runCommand = function (commandString) {
  const [command, ...args] = commandString.split(' ');

  switch (command) {
    case 'cd':
      return cd(args);
    case 'pwd':
      console.log(pwd());
      return;
    case 'ls':
      return ls();
    case 'echo':
      return echo(args);
    default:
      return externalCommands(commandString);
  }
};

while (true) {
  const command = prompt(shellName + currentDirectory.join('/') + symbol);

  const runningCommand = runCommand(command);
}