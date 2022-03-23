
let response;
let score = 12;
let machineActive = true;


if (machineActive === true) {
response = "Are you ready to game?"
if (score < 0 || score > 100) {
response = "This is not possible, an error has occurred."
} else if (score > 89 && score < 101) {
response = "What an amazing score! Did you cheat? Are you for real?"
} else if (score > 69 && score < 90) {
response = "That is a great score, you really did know your stuff."
} else if (score >= 40 && score <= 69) {
response = "You did a passable job, not bad!"
} else if (score > 19 && score < 40) {
response = "You know some things, but it is a pretty bad score. Needs improvement."
} else if (score > 0 && score < 20) {
response = "That was a terrible score- total fail!"
}
} else {
response = "Turn machine on"
}
