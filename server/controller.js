let globalId = 5

const fortunes = [
    {id:0, likes: 0, fortune:'A friend asks only for your time not your money.'}, 
    {id:1, likes: 0, fortune:'A friend is a present you give yourself.'}, 
    {id:2, likes: 0, fortune:'A gambler not only will lose what he has, but also will lose what he doesn’t have.'}, 
    {id:3, likes: 0, fortune:'A golden egg of opportunity falls into your lap this month.'}, 
    {id:4, likes: 0, fortune:'A good friendship is often more important than a passionate romance.'}, 
]

const compliments = [
    "Gee, you're a smart cookie!", 
    "Cool shirt!", 
    "Your Javascript skills are stellar."
]

module.exports = {

    getCompliment: (req, res) => {
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        console.log(req.data)
        //the fortune.length acts as a max value
        let randomIndex = Math.floor(Math.random() * fortunes.length)
        let randomFortune = fortunes[randomIndex]

        res.status(200).send(randomFortune)
    },

    addFortune: (req, res) => {
        let newFortune = {
            id: globalId,
            likes: 0,
            fortune: req.body['newFortune']
        }

        fortunes.push(newFortune)

        ++globalId
        res.sendStatus(200)
    },

    getAllFortunes: (req, res) => {
        res.status(200).send(fortunes)
    },

    deleteFortune: (req, res) => {
        let idToDelete = req.params.id
        console.log(idToDelete)
            
        let index  = fortunes.findIndex(fortune => +fortune.id === +idToDelete)
        fortunes.splice(index, 1)

        res.status(200).send(fortunes)
    },

    updateCounter: (req, res) => {
        let {id} = req.params
        let {type} = req.body
        
        fortunes.forEach(el => {
            if(+el.id === +id){
                if(type === 'plus') {
                    el.likes += 1
                } else {
                    el.likes -= 1
                }
            }
        });


        res.sendStatus(200)
    }

}