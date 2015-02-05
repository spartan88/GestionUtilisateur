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
        required: true,
        unique: true,
    },
    mem_pseudo: {
        type: 'string',
        required: true,
        unique: true,
    },
    mem_mdp: {
        type: 'string',
        required: true,
    },
    mem_mail: {
        type: 'email',
        required: true,
        unique: true
    },
    mem_nom: {
        type: 'string',
        required: true,
    },
    mem_prenom: {
        type: 'string',
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
        type: 'string',
        required: true,
    },
    mem_ville: {
        type: 'string',
        required: true,
    },
    mem_ip: {
        type: 'string',
        required: true,
        unique: true,
        length: 12
    },
    mem_facebook: {
        type: 'string',
        required: true,
    },
    mem_twitter: {
        type: 'string',
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

