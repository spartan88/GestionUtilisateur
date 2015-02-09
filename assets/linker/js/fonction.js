$().ready(function() {

	// Validate
	// http://bassistance.de/jquery-plugins/jquery-plugin-validation/
	// http://docs.jquery.com/Plugins/Validation/
	// http://docs.jquery.com/Plugins/Validation/validate#toptions

		$('#createMembre').validate({
		    rules: {

			    mem_pseudo: {
			        required: true,
			        minlength: 4, 
			        maxlength: 40
			    },
			    mem_mdp: {
			        required: true,
			        minlength: 4, 
			        maxlength: 40
			    },
			    mem_mail: {
			        required: true,
			        email: true
			    },
			    mem_nom: {
			        required: true,
			        minlength: 4, 
			        maxlength: 40
			    },
			    mem_prenom: {
			        required: true,
			        minlength: 4, 
			        maxlength: 40
			    },
			    mem_date_naissance: {
			        required: true
			    },
			    mem_adresse1: {
			        required: true
			    },
			    mem_cp: {
			    	required: true,
			        number: true,
					maxlength: 5,
					minlength: 5
			    },
			    mem_ville: {
			        required: true
			    },
			    mem_facebook: {
			    	required: false,
			        url: true
			    },
			    mem_twitter: {
			    	required: false,
			        url: true
			    }

		    },
		    messages: {
		    	    mem_pseudo: {
			    	    required: "Le champ pseudo est obligatoire.",
				        minlength: "Le pseudo doit avoir au moin 4 caractéres.", 
				        maxlength: "Le pseudo doit avoir moin de 40 caractéres."
		    	    },
				    mem_mail: {
				        required: "Le champ mail est obligatoire.",
				        email: "Votre email est invalide."
				    },
				    mem_nom: {
				    	required: "Le champ nom est obligatoire.",
				        minlength: "Le nom doit avoir au moin 4 caractéres.", 
				        maxlength: "Le nom doit avoir moin de 40 caractéres."
				    },
				    mem_prenom: {
				    	required: "Le champ prenom est obligatoire.",
				        minlength: "Le prenom doit avoir au moin 4 caractéres.", 
				        maxlength: "Le prenom doit avoir moin de 40 caractéres."
				    },
				    mem_mdp: {
						required: "Le champ mot de passe est obligatoire.",
				        minlength: "Le mot de passe doit avoir au moin 6 caractéres.",
				        maxlength: "Le mot de passe doit avoir moin de 40 caractéres."
				    },
				    mem_date_naissance: "Le champ date de naissance est obligatoire",
				    mem_adresse1 : "Le champ adresse1 est obligatoire",
				    mem_cp :{
						required: "Le champ code postale est obligatoire",
						number: "Ce champ doit être un nombre",
						minlength: "Le code postale doit avoir une taille de 5 caractéres",
						maxlength: "Le code postale doit avoir une taille de 5 caractéres"
				    },
				    mem_ville : "Le champ ville est obligatoire",
				    mem_facebook:{
				    	url: "L'adresse saisie n'est pas une URL valide."
				    },
				    mem_twitter:{
				    	url: "L'adresse saisie n'est pas une URL valide."
				    }
		    }

			//success: function(element) {
			//	element
			//		.text('OK!').addClass('valid')
			//}
	   });

});