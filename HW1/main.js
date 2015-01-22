var AWS = require('aws-sdk');
var s = new AWS.S3();
var s3 = new AWS.S3({params: {Bucket: 'createdbucket', Key: 'myKey'}});

// List the existing buckets.
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

//Use API method to create a Bucket in S3.
s3.createBucket(function(err) {
	if (err) { console.log("Error:", err); }
	else {
		console.log("Bucket creation in Progress...");
	}
});

//List the available buckets after creating the new bucket in S3.
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
