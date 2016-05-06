// You can include npm dependencies for support files in tests/cucumber/package.json
var _ = require('underscore');

module.exports = function () {

	// You can use normal require here, cucumber is NOT run in a Meteor context (by design)
	var url = require('url');

	// Preconditions
	// -------------
	this.Given(/^I am visite$/, function () {
		browser.url("http://localhost:3000");
	});

	this.When(/^I am  go page detail "([^"]*)"$/, function(title){
		title = title.replace(/\s/g, "-");
        title = title.replace(/\%/g, "(percentag)");
        title = title.replace(/\+/g, "(plush)");
        title = title.replace(/\ô/g, "(ocir)");
        title = title.replace(/\®/g, "(copyright)");
        title = title.replace(/\°/g, "(number)");
        title = title.replace(/\Ô/g, "(bigocir)");
        title = title.replace(/\²/g, "(square)");
        title = title.replace(/\`/g, "(accentaigu)");
        title = title.replace(/\é/g, "(eaccentaigu)");
        title = title.replace(/\É/g, "(bigeaccentaigu)");
        title = title.replace(/\&/g, "(and)");
        title = title.replace(/\//g, "(slash)");
        title = title.replace(/\’/g, "(apostrophe)");
        title = title.replace(/\'/g,"(quote)");
        title = title.replace(/\!/g, "(warning)");
        title = title.replace(/\?/g, "(question)");
        title = title.replace(/\$/g, "(dolla)");
        title = title.replace(/\è/g, "(eaccentgrave)");
		// server.call('reset'); // server is a connection to the mirror
		// server.call('reset'); // server is a connection to the mirror
		browser.url("http://localhost:3000/details/"+title);
	});

	this.Then(/^I should page detail$/, function () {
		client.waitForExist('.bold');
		var title = browser.elements(".bold");
		if (title){
			console.log("have product in website");
		}else{
			console.log("product not found");
		}
		// server.call('reset'); // server is a connection to the mirror
		// server.call('reset'); // server is a connection to the mirror
	});
};
