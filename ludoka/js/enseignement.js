//Je déclare 2 variables qui ciblent mes éléments 
let chiffreSaisi = document.getElementById('table'),
	multiplier = document.getElementById('multiplier'),
	result =document.getElementById('result')

let resultat = 1

//Je crée un évènement au click de la souris sur le bouton
multiplier.addEventListener('click',()=>{
	result.innerHTML ='';
	//Je fais une boucle qui demarre à 1 et va jusqu'à 10
	for (let i = 1; i <= 10; i++) {
		
		//La variable resultat est utiliser pour être multipier par i
		resultat =chiffreSaisi.value *i
		//j'affiche dans la console les multiplications
		console.log(chiffreSaisi.value + '*'+ i +'=' + resultat)
		result.innerHTML += `<li>${chiffreSaisi.value} * ${i} = ${resultat}</li>`
	}
})