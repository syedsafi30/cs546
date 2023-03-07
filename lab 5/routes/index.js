//An index file that returns a function that attaches all your routes to your app
//Lecture Code Refernece -> https://github.com/stevens-cs546-cs554/CS-546/blob/master/lecture_05/code/routes/index.js


// const { pokemon } = require('../data/pokemon')
const postRoutes  = require('./pokemon')

const constructormethod = (app)=>{
    app.use('/',postRoutes)

    app.use('*', (req ,res)=>{
        res.status(404).json({error:'page not found'})
    })
};

module.exports=constructormethod