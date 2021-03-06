import express from 'express'
import webpack from 'webpack'
import path from 'path'
import config from '../webpack.config.dev'
import open from 'open'


const port = 3000
const app = express()
const compiler = webpack(config)

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}))

app.use(require('webpack-hot-middleware')(compiler))

/* get all routes and return entry point app.html 
so that react-routes will override all routes */
app.get('*', function(req, res) {
  res.sendFile(path.join( __dirname, '../src/app.html'))
})

app.listen(port, function(err) {
  if (err) {
    console.log(err)
  } else {
    open(`http://localhost:${port}`)
  }
})
