const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const { getCompliment, getFortune, addFortune, getAllFortunes, deleteFortune, updateCounter} = require('./controller')



app.get("/api/compliment", getCompliment);


app.get('/api/fortunes', getAllFortunes)
app.get('/api/fortune', getFortune)
app.post('/api/fortune', addFortune)
app.delete('/api/fortune/:id', deleteFortune)
app.put('/api/fortune/:id', updateCounter)



app.listen(4000, () => console.log("Server running on 4000"));
