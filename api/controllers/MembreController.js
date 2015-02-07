/**
 * MembreController
 *
 * @description :: Server-side logic for managing Membres
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	
        //Affiche le formiulaire d'ajout utilisateur
	ajouter: function(req, res) {
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
                                   
                   //On redirige vers notre formulaire
                   res.redirect("/membre/ajouter");                   
                }
                
                res.json(membre);
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

