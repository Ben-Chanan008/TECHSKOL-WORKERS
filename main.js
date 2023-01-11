const btn = document.querySelector('.btn');
const number = document.querySelector('.copy')
const input = document.querySelector('#input')

btn.addEventListener('click', generate)

const math = () => {
	Math.floor(Math.random(1000 * 10))
}

function generate() {
	const math = [1234, 1235, 8902, 1234, 1653, 1777, 1888, 9282, 0000, 8277];
	const generated = math[Math.floor(Math.random() * 10)];
	localStorage.setItem('gen-input', generated);
	number.innerHTML = `<p>${generated}</p>`
	
	setTimeout(() => {
		if (localStorage.getItem('gen-input'))
			location.href = './welcome.html'
	}, 2000)
}

