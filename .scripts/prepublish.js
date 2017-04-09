const path = require('path');
const shell = require('shelljs');
const chalk = require('chalk');
const babel = ['node_modules', '.bin', 'babel'].join(path.sep);

require('./ver');


const args = [
  '--ignore tests,__tests__,stories,story.jsx,story.js',
  '--plugins "transform-runtime"',
  './src --out-dir ./dist',
].join(' ');

const cmd = `${babel} ${args}`;
shell.echo(chalk.gray(cmd));
shell.rm('-rf', 'dist');

shell.echo('');
shell.echo(chalk.gray('=> Transpiling \'src\' into ES5 ...'));
shell.exec(cmd);
shell.echo(chalk.gray('=> Transpiling completed.'));
shell.echo('');
