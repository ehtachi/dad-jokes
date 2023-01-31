const btn = document.querySelector(".joke-btn")
const h2 = document.querySelector("#joker");


const options = {
	method: 'GET',
	headers: {
		'X-Api-Key': 'Y3XTyMDqVx3pKocLKpc9mA==cy6o7r3cevcFcKFt',
	}
};

async function haha(){
    const resp = await fetch("https://api.api-ninjas.com/v1/dadjokes?limit=1", options);
    const jjoke = await resp.json();
    const jokes = jjoke[0].joke;
    h2.textContent = `${jokes}`;
}

btn.addEventListener("click", haha);
