const fortunes = [
    'A friend asks only for your time not your money.',
    'A friend is a present you give yourself.',
    'A gambler not only will lose what he has, but also will lose what he doesn’t have.',
    'A golden egg of opportunity falls into your lap this month.',
    'A good friendship is often more important than a passionate romance.'
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
        let newFortune = req.body['newFortune']
        fortunes.push(newFortune)

        res.status(200).send('Fortune sucesfully added')
    },

    getAllFortunes: (req, res) => {
        res.status(200).send(fortunes)
    },

    deleteFortune: (req, res) => {
        console.log(fortunes)
        let fortuneToDelete = req.params.txt
        let index = fortunes.indexOf(fortuneToDelete)
        fortunes.splice(index, 1)
        
        console.log(fortunes)
        res.status(200).send(fortunes)
    }

}