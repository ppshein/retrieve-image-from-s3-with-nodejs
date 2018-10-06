var express = require('express');
var router = express.Router();
var aws = require('aws-sdk');
var config = require(__dirname + '/../config/default.json');
var multer = require('multer');
var multerS3 = require('multer-s3');

//S3 configuraton
var s3 = new aws.S3({ 
    accessKeyId: '', 
    secretAccessKey: ''
}); 

router.get('/image/:imageId', function (req, res, next) {
    var params = { Bucket: config.bucket, Key: req.params.imageId };
    s3.getObject(params, function(err, data) {
        res.writeHead(200, {'Content-Type': 'image/jpeg'});
        res.write(data.Body, 'binary');
        res.end(null, 'binary');
    });
});

module.exports = router;
