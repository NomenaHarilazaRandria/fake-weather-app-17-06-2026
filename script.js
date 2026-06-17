const bouton = document.getElementById('btn');
const loadingStatus = document.getElementById('status');
const afficheResult = document.getElementById('afficheResult');

function getWeather(){
	return new Promise((resolve, reject)=>{
		setTimeout(()=>{
			const succes = Math.random() > 0.5;
			if(succes){
				resolve({
					lieu: "Tana",
					temp: 24,
					condition: "🌤️ ensoleillé"
				})
			} else {
				reject("Impossible d'afficher la Météo, veillez réessayer.")
			}
		},3000);
	});
}

async function afficheMeteo(){
	loadingStatus.textContent = "Loading...";
	afficheResult.textContent = "";
	bouton.disabled = true;
	try {
		const data = await getWeather();
		loadingStatus.textContent = "";
		afficheResult.innerHTML = `
		<p><span class="bold">Lieu :  </span>${data.lieu}</p>
		<p><span class="bold">Température : </span>${data.temp}</p>
		<p><span class="bold">Condition : </span>${data.condition}</p>
		`;
	}
	catch(error){
		loadingStatus.textContent = "";
		afficheResult.innerHTML = `<span class="red"> ${error}</span>`;
	}
	finally {
		bouton.disabled = false;
	}
	
}

bouton.addEventListener('click',afficheMeteo);