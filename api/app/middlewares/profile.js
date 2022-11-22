const profileMiddleware = (req, res, next) => {



    if (req.session.profile) {
        // si c'est le cas, on stocke dans la réponse les données contenues dans sa session, afin qu'elles puissent être utilisées dans la vue
        res.locals.profile = req.session.profile;
    } else {
        // sinon, on ne stocke rien
        res.locals.profile = false;
    }
    // via next on passe au middleware suivant
    next();
};

// on exporte ce module afin qu'il puisse être utilisé dans index.js via app.use()
module.exports = profileMiddleware;