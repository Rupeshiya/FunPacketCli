#!/usr/bin/env node

var request = require('request');
var colors = require('colors');
<<<<<<< HEAD
=======
var os = require('os');
>>>>>>> master

var yargs = require('yargs');


const CFonts = require('cfonts');
var jokesstart ={
  description: 'Start the joke',
  alias: 'j',
  demand:true
}
var nextjoke = {
  description: 'Next joke',
  alias: 'j',
  demand: true
}
var textoption ={
  description: 'Text to check sentiment',
  alias: 't',
  demand: true
}
var argv = yargs
.command('start','Start the jokes',{
  jokes:jokesstart
})
.command('next','Next joke',{
  joke: nextjoke
})
.command('check','Check sentiments of the sentence',{
  text: textoption
})
.command('')
.help()
.argv;

/////////////////////////////////////////////////////

function jokes(){
request({

  url: 'https://api.chucknorris.io/jokes/random',
  json: true
},function(err,res,body){
  var out = body.value;
  console.log(colors.green.bold('Joke:-',out));
});
}
//////////////////////////////////////////////////////////////////////////

var pd = require('paralleldots');

pd.apiKey = '3sw7JbnMDKCZJaTaXnoQqoUoCUSgXDwdT70TXLONfmI';
function sentiment(){
  console.log(argv.text);
pd.sentiment(argv.text,'en')
	.then((response) => {
		console.log(colors.green.bold('overall-' + JSON.parse(response).sentiment));
    console.log(colors.red.bold('Probabilities:-'));
    console.log(colors.green.bold('Positivity-'+JSON.parse(response).probabilities.positive));
    console.log(colors.green.bold('Negativity-'+JSON.parse(response).probabilities.negative));
    console.log(colors.green.bold('Neutral-'+JSON.parse(response).probabilities.neutral));

	}).catch((error) =>{
		console.log(error);
	})
}
///////////////////////////////////////////////////////////////////////////
var command = argv._[0];
//////////////////////////////////////////////
//commands
if(command === 'start')
{
  CFonts.say(`Hello|${os.userInfo().username}`, {
      font: 'block',              // define the font face
      align: 'center',              // define text alignment
      colors: ['red'],         // define all colors
      background: 'black',  // define the background color, you can also use `backgroundColor` here as key
      letterSpacing: 1,           // define letter spacing
      lineHeight: 0.3,              // define the line height
      space: true,                // define if the output text should have empty lines on top and on the bottom
      maxLength: '13',             // define how many character can be on one line
  });

<<<<<<< HEAD
  console.log( '\x1b[31m\x1b[1mWarning:\x1b[22m \x1b[93mJokes may makes \x1b[4m you\x1b[24m laugh.\x1b[0m' ); 
=======
  console.log( '\x1b[31m\x1b[1mWarning:\x1b[22m \x1b[93mJokes may makes \x1b[4m you\x1b[24m laugh.\x1b[0m' );
>>>>>>> master
  console.log('Jokes started..');
  jokes();
}
else if(command === 'next')
{
  console.log('Jokes loading...');
  jokes();
}
else if(command ==='check')
{
  sentiment();
}
else
{
  console.log('Invalid command..');
}
