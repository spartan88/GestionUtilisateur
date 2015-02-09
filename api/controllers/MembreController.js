/**
 * MembreController
 *
 * @description :: Server-side logic for managing Membres
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	
  //Affiche le formiulaire d'ajout utilisateur
	ajouter: function(req, res) {


            //En appelant la vue "ajouter.ejs" dans le dossier "view/Membre"
            //et que l'action du controlleur s'appelle "ajouter"
            //Pas besoin de fournir de parametres à res.view()
	          res.view();

	},      
        
  //Ajout d'un utilisateur
  create : function (req, res, next){

        
            req.connection.remoteAddress;
           
            // On créé un Membre avec les paramétres du formulaire
            Membre.create( req.params.all(), function membreCreated(err, membre){
              
                // Si une erreur intervient
                // Erreur de validation suivant les critéres définit dans notre modéle
                if(err) {
                    //On affiche l'erreur sur notre consol NodeJs
                   console.log(err);
                   
                   //On récupére l'erreur pour la retourner dans notre vue
                   req.session.flash = {
                      erreur: 'Une erreur s\'est produite lors de la création du Membre'
                   }              
     
                   //On redirige vers notre formulaire
                   return res.redirect("/membre/ajouter");                   
                }
                
                res.json(membre);
                //On remet le message d'erreur à vide si tous c'est bien passé
                req.session.flash = {};
            });     
  },

        
  //Liste de tous les utilisateurs
	lister: function(req, res) {	
	    res.view();
	},
        
  //Modifier un utilisateur
	modifier: function(req, res) {	
	    res.view();
	}
};

