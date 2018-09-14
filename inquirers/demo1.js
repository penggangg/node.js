var inquirer = require('inquirer')
var selectLine = require('inquirer-select-line')
// inquirer.prompt([ { 
//   type: 'confirm', 
//   name: 'test', 
//   message: 'Are you handsome?', 
//   default: true 
// }]).then((answers) => {
//   console.log('结果为:') , console.log(answers)
// })
// inquirer.registerPrompt('selectLine', selectLine)
// inquirer.prompt([{
//   type: 'selectLine',
//   message: 'Where add line?',
//   name: 'line',
//   choices: ['first', 'second', 'third', 'fourth'],
// }]).then(function(answers) {
//   console.log('Chosen line: ' + answers.line);
// })
// var inquirer = require('inquirer');
// var fuzzy = require('fuzzy');

// inquirer.registerPrompt('checkbox-plus', require('inquirer-checkbox-plus-prompt'));

// var colors = ['red', 'green', 'blue', 'yellow'];

// inquirer.prompt([{
//   type: 'checkbox-plus',
//   name: 'colors',
//   message: 'Enter colors',
//   pageSize: 10,
//   highlight: true,
//   searchable: true,
//   default: [],
//   source: function(answersSoFar, input) {

//     input = input || '';

//     return new Promise(function(resolve) {
//       var fuzzyResult = fuzzy.filter(input, colors);
//       var data = fuzzyResult.map(function(element) {
//         return element.original;
//       });
//       console.log(data)
//       resolve(data);
      
//     });

//   }
// }]).then(function(answers) {

//   console.log(answers);

// });
var questions =  [
  {
    type: 'list',
    // default: history.project || 0,
    name: 'project',
    message: '选择一个启动的工程',
    choices: [ 'app', 'hphManage', 'HuiStore', 'tms-h5' ]
  },{
    type: 'confirm',
    name: 'mock',
    message: '是否启动mock环境 ? '
  },{
    when: function(response){
      return !response.mock
    },
    type: 'confirm',
    name: 'alignment',
    message: '是否启动真实环境 ？'
  },{
    when: function(response){
      if(!response.alignment && !response.mock) {
        console.log('你不选择mock 也选择真实环境。你要闹那样？ 我不管了，你就是要启动真实环境😊！')
      }
      return response.alignment
    },
    type: 'list',
    name: 'address',
    // default: history.address || 0,
    message: '选一个真实环境的地址',
    choices: [ 'app', 'hphManage', 'HuiStore', 'tms-h5' ]
  }
]
inquirer.prompt(questions).then(function (answers) {
  console.log(answers)
})
