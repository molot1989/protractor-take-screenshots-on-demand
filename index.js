var fs = require('fs');
var path = require('path');
var mkdirp = require('mkdirp');


module.exports  = {

    screenShotDirectory:  '',

    createDirectory: function () {
        mkdirp(this.screenShotDirectory, function(err) {
            if(err) {
                console.log('Could not create directory ' + this.screenShotDirectory);
            }
        });
    },

    takeScreenshot: function (name) {
        var directory = this.screenShotDirectory;
        function writeScreenShot (data, filename) {
            fs.existsSync(directory);
            var stream = fs.createWriteStream(path.join(directory, filename));
            stream.write(new Buffer(data, 'base64'));
            stream.end();
        }
        browser.takeScreenshot().then(function (png) {
            browser.getCapabilities().then(function (capabilities) {
                var browserName = capabilities.get('browserName'),
                    filename = browserName + ' - ' + name + '.png';
                writeScreenShot(png, filename);
            });
        });
    }

};
