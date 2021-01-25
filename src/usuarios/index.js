module.exports = {
  rotas: require('./usuarios-rotas'),
  controlador: require('./usuarios-controlador'),
  modelo: require('./usuarios-modelo'),
  estrategiasAutenticao: require('./estrategias-autenticacao'),
  middlewaresAutenticacao:require('./middlewares-autenticacao')
}