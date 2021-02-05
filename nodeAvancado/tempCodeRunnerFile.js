app.set('views', './src/views')

app.get('/', (req, res) => {
    res.render('index')
})