// You can include npm dependencies for support files in tests/cucumber/package.json
var _ = require('underscore');

module.exports = function () {

	// You can use normal require here, cucumber is NOT run in a Meteor context (by design)
	var url = require('url');

	// Preconditions
	//
	this.Given(/^I am visite$/, function () {
		browser.url("http://localhost:3000");
        client.waitForExist('.blog-quicklink',40000);
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
        client.waitForExist('.bold',40000);
	});

	this.Then(/^I should page detail$/, function () {
		client.waitForExist('.bold',40000);
		var title = browser.elements(".bold").getAttribute("textContent");
		if (title){
			console.log("have product in website");
		}else{
			console.log("product not found");
		}
		// server.call('reset'); // server is a connection to the mirror
		// server.call('reset'); // server is a connection to the mirror
	});

    this.When(/^I can check image url$/, function() {
        client.waitForExist('img#zoomimage',40000);
        var imageurl = browser.elements("img#zoomimage").getAttribute("src");
        console.log("url image:"+imageurl);
        var imagelocalhost=imageurl.match('http://54.169.195.127/');
        if (imagelocalhost){
            browser.url(imageurl);
        }else{
            console.log(imageurl);
            browser.url(imageurl);
        }
    });

    this.Then(/^I can see image found or not$/, function() {
        client.waitForExist("title",40000);
        var title = browser.elements("title").getAttribute("textContent");
        var titleimagelocal = browser.elements("body > pre").getAttribute("style");
        console.log("image local:"+titleimagelocal);
        var mystyle = "word-wrap: break-word; white-space: pre-wrap;";
        console.log("title==" + title);
        if (title == "404 Not Found" || titleimagelocal == mystyle) {
            // var textnotfound = browser.elements("h1").getAttribute("textContent");
            // var imagenotfound = browser.elements("body > p").getAttribute("textContent");
            // console.log("tile" + imagenotfound);`````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````
            // if (textnotfound == "Not Found" || titleimagelocal) {
            //     var datamatch = imagenotfound.match("(.)(\/upload.*?\.jpg|\/upload.*?\.png)(.)");
            //     console.log("image not found ");
            //     var data = datamatch[2];
            //     console.log("image not found url:"+datamatch);
            // } else {
            //     console.log("found image");
            // }
            console.log("image not found");
        } else {
            console.log("product has image");
        }
    });
};
