function sendInfo(name, phone, info) {

	const form = document.getElementById('form');
	const sent = document.getElementById('sent');


	if (name && phone && info) {
		console.log(name, phone, info);
		form.style.transform = "translateX(100vw)";
		sent.style.transform = "translateX(0)";

		var template_params = {
	  	"name": name,
	  	"phone": phone,
	  	"message": info
		};

		var service_id = "default_service";
		var template_id = "request";
		emailjs.send(service_id, template_id, template_params);
	}
}