module.exports = function (app, path) {
  // html routes to individual pages
  app.get("/", function(req,res) {
    res.sendFile("/views/index.html"})
  })

}