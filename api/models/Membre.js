/**
* Membre.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
    
  
  attributes: {


    mem_pseudo: {
        type: 'string',
        required: true,
        unique: true,
    },
    mem_mdp: {
        type: 'text',
        required: true,
    },
    mem_mail: {
        type: 'email',
        required: true,
        unique: true
    },
    mem_nom: {
        type: 'text',
        required: true,
    },
    mem_prenom: {
        type: 'text',
        required: true,
    },
    mem_date_naissance: {
        type: 'datetime',
        required: true,
    },
    mem_adresse1: {
        type: 'text',
        required: true,
    },
    mem_adresse2: {
        type: 'text',
        required: true,
    },
    mem_cp: {
        type: 'text',
        required: true,
    },
    mem_ville: {
        type: 'text',
        required: true,
    },
    mem_ip: {
        type: 'text',
        required: true,
        unique: true
    },
    mem_facebook: {
        type: 'text',
        required: true,
    },
    mem_twitter: {
        type: 'text',
        required: true,
    },
    mem_xp: {
        type: 'integer',
        required: true,
    },
    mem_point: {
        type: 'integer',
        required: true,
    },
    mem_monaie: {
        type: 'integer',
        required: true,
    }
    
  }
};

