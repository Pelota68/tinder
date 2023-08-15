

const express = require('express');
const app = express()

const connection = require('./knexfile')['development'];
const db = require('knex')(connection);
app.use = (express.json)()



app.get('/', (req, res) => {
  res.json({
    message: 'navegador'
  })
});
app.listen(3000, () => {
  console.log(`server running `);
})

//habilidades//
app.post('/habilidades', (req, res) => {
  const toCreate = req.body;


  db('habilidades')
    .insert(toCreate)
    .then((habilidades) => {
      res.json(habilidades);
    })

});


//delete//

app.delete('/habilidades/:id', (req, res) => {
  const { id } = req.params;

  database('habilidades')
    .where({ id_habilidad: id })
    .del()
    .then((nombre_habilidad) => {

      res.json({ nombre_habilidad })

    })
})

//get//
app.get('/usuario/:id', (req, res) => {
  const { id } = req.params;

  database('usuario')
    .where({ id_usuario: id })
    .del()
    .then((usuario) => {

      res.json({ usuario })

    })
})

//get//

app.get('/habilidades', (req, res) => {
  db('habilidades').then(nombre_habilidad) => {

    res.json({
      nombre_habilidad
    })
  })


let usuarios = [
  {
  nombre: 'jossie'
apellido: 'jimenez'
email: 'jossiedavid'
habilidad: 'oratoria'
pais: 'colombia'}
}
];

let empresas = [
  {
    nombre_empresa: 'rapi',
    pais: 'colombia',
    habilidad_busacada: 'oratoria',
  }
];

function mash() {
  if(usuarios)[0]habilidad_ofrece===empresas[0.habilidad:busca&&usuarios[0]]===empresas[0],pais{
    console.log (math)

  }else{console.log ('sigue buacando')
};