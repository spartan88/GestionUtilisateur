/**
* Membre.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
    
  
  attributes: {
      
    mem_id: {
        type: 'integer',
        primaryKey: true,
        unique: true
    },
    mem_pseudo: {
        type: 'string',
        required: true,
        unique: true,
        minLength: 4, 
        maxLength: 40,
        size: 40
    },
    mem_mdp: {
        type: 'string',
        required: true,
        minLength: 4, 
        maxLength: 40,
        size: 40
    },
    mem_mail: {
        type: 'email',
        required: true,
        unique: true,
        email: true,
        minLength: 4, 
        maxLength: 60,
        size: 60
    },
    mem_nom: {
        type: 'string',
        required: true,
        minLength: 4, 
        maxLength: 40,
        size: 40
    },
    mem_prenom: {
        type: 'string',
        required: true,
        minLength: 4, 
        maxLength: 40,
        size: 40
    },
    mem_date_naissance: {
        type: 'string',
        required: true,
        size: 10
    },
    mem_adresse1: {
        type: 'text',
        required: true
    },
    mem_adresse2: {
        type: 'text'
    },
    mem_cp: {
        type: 'string',
        required: true,
        size: 5
    },
    mem_ville: {
        type: 'string',
        required: true,
        size: 50
    },
    mem_ip: {
        type: 'string',
        unique: true,
        size: 15,
        defaultsTo: "127.0.0.1"
    },
    mem_facebook: {
        type: 'string',
        size: 255
    },
    mem_twitter: {
        type: 'string',
        size: 255
    },
    mem_xp: {
        type: 'integer',
        required: false,
        defaultsTo: 0
    },
    mem_point: {
        type: 'integer',
        required: false,
        defaultsTo: 0
    },
    mem_monaie: {
        type: 'integer',
        required: false,
        defaultsTo: 0
    }
    
  }
};

