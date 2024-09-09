const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());


const db = mysql.createConnection({
  host: "34.172.146.170",
  user: "root",
  password: "Jackson_f8",
  database: "ntrackerdb"
})

app.get('/', (re, res)=> {
  return res.json("From Backend Side");
});

app.get('/testing', (req, res)=> {
  const sql = "SELECT * FROM nutrition_tracker WHERE id = 2";
  db.query(sql, (err, data)=> {
    if(err) return res.json(err);
    return res.json(data);
  })
})

// app.put('/testing/update/:id', (req, res) => {
//   const sql = "UPDATE nutrition_tracker SET Calories = ?, Protein = ?, Carbs = ?, Fat = ? WHERE id = ?";    
//   const values = [req.body.Calories, req.body.Protein, req.body.Carbs, req.body.Fat]    
//   const id = req.params.id;   
//   db.query(sql, [...values, id], (err, data) => {
//       if(err) return res.json("Error");        
//       return res.json(data);    
//   })
// })

app.put('/testing/update/Calories', (req, res) => {
  const sql = `UPDATE nutrition_tracker SET Calories = ? WHERE id = 2`;         
  db.query(sql, [req.body.Calories], (err, data) => {
      if(err) return res.json("Error");        
      return res.json(data);    
  })
})
app.put('/testing/update/Protein', (req, res) => {
  const sql = `UPDATE nutrition_tracker SET Protein = ? WHERE id = 2`;         
  db.query(sql, [req.body.Protein], (err, data) => {
      if(err) return res.json("Error");        
      return res.json(data);    
  })
})
app.put('/testing/update/Carbs', (req, res) => {
  const sql = `UPDATE nutrition_tracker SET Carbs = ? WHERE id = 2`;         
  db.query(sql, [req.body.Carbs], (err, data) => {
      if(err) return res.json("Error");        
      return res.json(data);    
  })
})
app.put('/testing/update/Fat', (req, res) => {
  const sql = `UPDATE nutrition_tracker SET Fat = ? WHERE id = 2`;         
  db.query(sql, [req.body.Fat], (err, data) => {
      if(err) return res.json("Error");        
      return res.json(data);    
  })
})

app.listen(8081, ()=> {
  console.log("listening");
});