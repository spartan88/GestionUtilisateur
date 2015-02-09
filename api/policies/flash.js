/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

module.exports = function(req, res, next) {

	 res.locals.flash = {};

	 if(!req.session.flash) return next();

	 res.locals.flash = _.clone(req.session.flash);
	 
	 // clear flash
	 req.session.flash = {};

	 next();
};