let who = ['My boss', 'A crazy seagull', 'A robot from the future', 'My jiu-jitsu coach', 'The neighbor’s goat'];
let action = ['ate', 'hijacked', 'deleted', 'kidnapped', 'accidentally shredded'];
let what = ['my presentation', 'my gym bag', 'my winning lottery ticket', 'my favorite hoodie', 'my bike'];
let when = ['right before I left home', 'while I was showering', 'during pizza night', 'as I blinked', 'just when I needed it the most'];

function generateExcuse() {
    let randomWho = who[Math.floor(Math.random() * who.length)];
    let randomAction = action[Math.floor(Math.random() * action.length)];
    let randomWhat = what[Math.floor(Math.random() * what.length)];
    let randomWhen = when[Math.floor(Math.random() * when.length)];

    let excuse = randomWho + ' ' + randomAction + ' ' + randomWhat + ' ' + randomWhen;

    document.getElementById('excuse').innerHTML = excuse;
}
window.onload = function() {
    generateExcuse();
};
