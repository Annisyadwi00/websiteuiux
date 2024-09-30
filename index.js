document.addEventListener('DOMContentLoaded', () => {
	const form = document.getElementById('skill-form');
	const greeting = document.getElementById('greeting');

	form.addEventListener('submit', (e) => {
			e.preventDefault();
			
			const name = document.getElementById('name').value;
			const skill = document.getElementById('skill').value;
			
			greeting.textContent = `Halo, ${name}! kamu memilih ${skill}.`;
			
			// Change color scheme based on selected skill
			switch(skill) {
				case 'PHP':
							document.documentElement.style.setProperty('--primary-color', '#c62727');
							break;
					case 'HTML':
							document.documentElement.style.setProperty('--primary-color', '#6d0624');
							break;
					case 'CSS':
							document.documentElement.style.setProperty('--primary-color', '#e3225b');
							break;
					case 'JavaScript':
							document.documentElement.style.setProperty('--primary-color', '#9122e3');
							break;
			}
	});
});