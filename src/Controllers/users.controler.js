const controller = {
    login:(req,res,next) => {
res.send('Aqui va el formulario')
    },

    register:(req,res,next) => {
        res.render('register')
    },

    cuenta: {

    },

    perfil:(req, res, next) => {
        res.render('perfil')
    }
}

module.exports = controller;