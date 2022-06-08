let fautes = 0
var pushScore =0


var x1 = Math.floor((Math.random() * 10) + 1);
var y1 = Math.floor((Math.random() * 10) + 1);
var z1 = Math.floor((Math.random() * 2) + 1);
let total1 = 232
if(z1 == 1) {
	total1 = x1*y1
} else {
	total1 = (x1+2) * (y1-1)
}
let showMult1 = document.getElementById('showMultiplication1')
showMult1.innerHTML = `${x1} * ${y1} = ${total1}`


var x2 = Math.floor((Math.random() * 10) + 1);
var y2 = Math.floor((Math.random() * 10) + 1);
var z2 = Math.floor((Math.random() * 2) + 1);
let total2 = 0
if(z2 == 1) {
	total2 = x2*y2
} else {
	total2 = (x2+2) * (y2+1)
}
let showMult2 = document.getElementById('showMultiplication2')
showMult2.innerHTML = `${x2} * ${y2} = ${total2}`


var x3 = Math.floor((Math.random() * 10) + 1);
var y3 = Math.floor((Math.random() * 10) + 1);
var z3 = Math.floor((Math.random() * 2) + 1);
let total3= 0
if(z3 == 1) {
	total3= x3*y3
} else {
	total3 = (x2+3) * (y2+1)
}
let showMult3 = document.getElementById('showMultiplication3')
showMult3.innerHTML = `${x3} * ${y3} = ${total3}`


var x4 = Math.floor((Math.random() * 10) + 1);
var y4= Math.floor((Math.random() * 10) + 1);
var z4 = Math.floor((Math.random() * 2) + 1);
let total4 = 0
if(z4 == 1) {
	total4 = x4*y4
} else {
	total4 = (x4+2) * (y4+0)
}
let showMult4 = document.getElementById('showMultiplication4')
showMult4.innerHTML = `${x4} * ${y4} = ${total4}`


var x5 = Math.floor((Math.random() * 10) + 1);
var y5= Math.floor((Math.random() * 10) + 1);
var z5 = Math.floor((Math.random() * 2) + 1);
let total5 = 0
if(z5 == 1) {
	total5 = x5*y5
} else {
	total5 = (x5+1) * (y5+3)
}
let showMult5 = document.getElementById('showMultiplication5')
showMult5.innerHTML = `${x5} * ${y5} = ${total5}`


var x6 = Math.floor((Math.random() * 10) + 1);
var y6 = Math.floor((Math.random() * 10) + 1);
var z6 = Math.floor((Math.random() * 2) + 1);
let total6 = 0
if(z6 == 1) {
	total6 = x6*y6
} else {
	total6 = (x6+2) * (y6+3)
}
let showMult6 = document.getElementById('showMultiplication6')
showMult6.innerHTML = `${x6} * ${y6} = ${total6}`


var x7 = Math.floor((Math.random() * 10) + 1);
var y7 = Math.floor((Math.random() * 10) + 1);
var z7 = Math.floor((Math.random() * 2) + 1);
let total7 = 0
if(z7 == 1) {
	total7 = x7*y7
} else {
	total7 = (x7+5) * (y7+1)
}
let showMult7 = document.getElementById('showMultiplication7')
showMult7.innerHTML = `${x7} * ${y7} = ${total7}`


var x8 = Math.floor((Math.random() * 10) + 1);
var y8 = Math.floor((Math.random() * 10) + 1);
var z8 = Math.floor((Math.random() * 2) + 1);
let total8 = 0
if(z8 == 1) {
	total8 = x8*y8
} else {
	total8 = (x8+4) * (y8+2)
}
let showMult8 = document.getElementById('showMultiplication8')
showMult8.innerHTML = `${x8} * ${y8} = ${total8}`

// récupérer la valeur d'un bouton radio 
//var valeur=document.getElementById("multiple");



// testé si la valeur du bouton == a "z"
// 1 == vrai
// 2 == faux
	
let radios1 = document.getElementsByName('checkbox1');
let radios2 = document.getElementsByName('checkbox2');
let radios3 = document.getElementsByName('checkbox3');
let radios4 = document.getElementsByName('checkbox4');
let radios5 = document.getElementsByName('checkbox5');
let radios6 = document.getElementsByName('checkbox6');
let radios7 = document.getElementsByName('checkbox7');
let radios8 = document.getElementsByName('checkbox8');

let checkscore = document.getElementById('Score')
let radios1OK = false
let radios2OK = false
let radios3OK = false
let radios4OK = false
let radios5OK = false
let radios6OK = false
let radios7OK = false
let radios8OK = false
let newGame = document.getElementById('newgame')
let err1 = document.getElementById('error1')
let msgErr1 = ''
let err2 = document.getElementById('error2')
let msgErr2 = ''
let err3 = document.getElementById('error3')
let msgErr3 = ''
let err4 = document.getElementById('error4')
let msgErr4 = ''
let err5 = document.getElementById('error5')
let msgErr5 = ''
let err6 = document.getElementById('error6')
let msgErr6 = ''
let err7 = document.getElementById('error7')
let msgErr7 = ''
let err8 = document.getElementById('error8')
let msgErr8 = ''


let lyes1 = document.getElementById('yes1')
let msgys1 = ''
let lyes2 = document.getElementById('yes2')
let msgys2 = ''
let lyes3 = document.getElementById('yes3')
let msgys3 = ''
let lyes4 = document.getElementById('yes4')
let msgys4 = ''
let lyes5 = document.getElementById('yes5')
let msgys5 = ''
let lyes6 = document.getElementById('yes6')
let msgys6 = ''
let lyes7 = document.getElementById('yes7')
let msgys7 = ''
let lyes8 = document.getElementById('yes8')
let msgys8 = ''


checkscore.addEventListener('click', () => {
	for(i = 0; i < radios1.length; i++) {
	    if(radios1[i].checked) {
			if(radios1[i].value == z1) {
				console.log('good')
				pushScore +=1
				msgys1 ='bravo!'


			} else {
				console.log('bad')
				fautes += 1
				msgErr1 = 'Mauvaise réponse'
			}
			radios1OK = true
	    } else {
	    	console.log('tu a oublier')
	    	err1.innerHTML = 'toutes les cases doivent être cocher!'
	    }
	}
	for(i = 0; i < radios2.length; i++) {
	    if(radios2[i].checked) {
			if(radios2[i].value == z2) {
				console.log('good')
				pushScore +=1
				msgys2 ='bravo!'

			} else {
				console.log('bad')
				fautes += 1
				msgErr2 = 'Mauvaise réponse'
			}
			radios2OK = true
	    } else {
	    	console.log('tu a oublier')
	    	err2.innerHTML = 'toutes les cases doivent être cocher!'
	    }

	}



	for(i = 0; i < radios3.length; i++) {
	    if(radios3[i].checked) {
			if(radios3[i].value == z3) {
				console.log('good')
				pushScore +=1
				msgys3 ='bravo!'

			} else {
				console.log('bad')
				fautes += 1
				msgErr3 = 'Mauvaise réponse'
			}
			radios3OK = true
	    } else {
	    	console.log('tu a oublier')
	    	err3.innerHTML = 'toutes les cases doivent être cocher!'
	    }

	}


	for(i = 0; i < radios4.length; i++) {
	    if(radios4[i].checked) {
			if(radios4[i].value == z4) {
				console.log('good')
				pushScore +=1
				msgys4 ='bravo!'

			} else {
				console.log('bad')
				fautes += 1
				msgErr4 = 'Mauvaise réponse'
			}
			radios4OK = true
	    } else {
	    	console.log('tu a oublier')
	    	err4.innerHTML = 'toutes les cases doivent être cocher!'
	    }

	}



	for(i = 0; i < radios5.length; i++) {
	    if(radios5[i].checked) {
			if(radios5[i].value == z5) {
				console.log('good')
				pushScore +=1
				msgys5 ='bravo!'

			} else {
				console.log('bad')
				fautes += 1
				msgErr5 = 'Mauvaise réponse'
			}
			radios5OK = true
	    } else {
	    	console.log('tu a oublier')
	    	err5.innerHTML = 'toutes les cases doivent être cocher!'
	    }

	}

	for(i = 0; i < radios6.length; i++) {
	    if(radios6[i].checked) {
			if(radios6[i].value == z6) {
				console.log('good')
				pushScore +=1
				msgys6 ='bravo!'

			} else {
				console.log('bad')
				fautes += 1
				msgErr6 = 'Mauvaise réponse'
			}
			radios6OK = true
	    } else {
	    	console.log('tu a oublier')
	    	err6.innerHTML = 'toutes les cases doivent être cocher!'
	    }

	}


for(i = 0; i < radios7.length; i++) {
	    if(radios7[i].checked) {
			if(radios7[i].value == z7) {
				console.log('good')
				pushScore +=1
				msgys7 ='bravo!'

			} else {
				console.log('bad')
				fautes += 1
				msgErr7 = 'Mauvaise réponse'
			}
			radios7OK = true
	    } else {
	    	console.log('tu a oublier')
	    	err7.innerHTML = 'toutes les cases doivent être cocher!'
	    }

	}


	for(i = 0; i < radios8.length; i++) {
	    if(radios8[i].checked) {
			if(radios8[i].value == z8) {
				console.log('good')
				pushScore +=1
				msgys8 ='bravo!'

			} else {
				console.log('bad')
				fautes += 1
				msgErr8 = 'Mauvaise réponse'
			}
			radios8OK = true
	    } else {
	    	console.log('tu a oublier')
	    	err8.innerHTML = 'toutes les cases doivent être cocher!'
	    }

	}
	let getFautes = document.getElementById('fautes')
		getFautes.innerHTML = fautes
	let getPushScore= document.getElementById('showScore')
		getPushScore.innerHTML = pushScore
	if(radios1OK && radios2OK && radios3OK && radios4OK && radios5OK && radios6OK && radios7OK && radios8OK) {
		console.log(pushScore);
		checkscore.style.display = "none"
		newGame.style.display = 'block';
		err1.innerHTML = msgErr1
		err2.innerHTML = msgErr2
		err3.innerHTML = msgErr3
		err4.innerHTML = msgErr4
		err5.innerHTML = msgErr5
		err6.innerHTML = msgErr6
		err7.innerHTML = msgErr7
		err8.innerHTML = msgErr8


		lyes1.innerHTML = msgys1
		lyes2.innerHTML = msgys2
		lyes3.innerHTML = msgys3
		lyes4.innerHTML = msgys4
		lyes5.innerHTML = msgys5
		lyes6.innerHTML = msgys6
		lyes7.innerHTML = msgys7
		lyes8.innerHTML = msgys8
		
	}
})
newGame.addEventListener('click', () =>{ window.location = "jouer.html"})
// si z == value de la réponde alors message console "bonne réponse"
/*// sinon message console "mauvaise réponse"
if (z==1){
	console.log('Bonne reponse!');
	}else{
	console.log('mauvaise reponse');
	}*/
