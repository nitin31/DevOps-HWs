var AWS = require('aws-sdk');
var s = new AWS.S3();
var s3 = new AWS.S3({params: {Bucket: 'createdbucket', Key: 'myKey'}});

s.listBuckets(function(err, data) {
	if (err) { console.log("Error"); }
	else {
		if (data.Buckets.length >0){
			console.log("Active Buckets:");
			for (var key in data.Buckets) {
				var bucket = data.Buckets[key];
				console.log("		", bucket.Name);
			}
		}
		else {
			console.log("No Buckets!");
		}
	}
});

s3.createBucket(function(err) {
	if (err) { console.log("Error:", err); }
	else {
		console.log("Bucket creation in Progress...");
	}
});
setTimeout(function() {
	s.listBuckets(function(err, data) {
		if (err) { console.log("Error"); }
		else {
			if (data.Buckets.length >0){
				console.log("Active Buckets:");
				for (var key in data.Buckets) {
					var bucket = data.Buckets[key];
					console.log("		",bucket.Name);
				}
			}
			else{
				console.log("No Buckets!");
			}

		}
	});
}, 500);
