/**
 * GET /
 * Home page.
 */
exports.index = function(req, res) {
	console.log(res.cookies);
  res.render('home', {
    title: 'Home'
  });
};