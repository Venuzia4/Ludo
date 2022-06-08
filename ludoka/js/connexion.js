let	user=document.getElementById('Username'),
	word=document.getElementById('Passeword'),
	submit=document.getElementById('submit')

let infouser=localStorage.getItem('player')

infouser=JSON.parse(infouser)
console.log(infouser.mdp)
submit.addEventListener('click',()=>{

if (word.value==infouser.mdp){
	localStorage.setItem('token', 'ghfchfgchgf')
	window.location ='moncompte.html'
} else{
	console.log('le couple identifiant mot de psse n\'existe pas ')
}


})
