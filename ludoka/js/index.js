let fName = document.getElementById('fName'),
	lName=document.getElementById('lName'),
	mail=document.getElementById('mail'),
	old=document.getElementById('old'),
	register=document.getElementById('submit')

register.addEventListener('click',()=>{
	const player ={
		firstName:fName.value,
		lastName:lName.value,
		eMail:mail.value,
		old:old.value,
		mdp: "azerty"
	}
	console.log(player)
	localStorage.setItem('player',JSON.stringify(player))
	window.location ='connexion.html'
})
