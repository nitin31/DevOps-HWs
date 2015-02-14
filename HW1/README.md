Home Work #1 <br>
Unity ID: <b>nsharm10</b><br>

<h3>Description of an AWS Service</h3>
<b>Amazon Simple Storage Service (S3)</b>
<p>S3 provides a secure, durable, highly scalable and high availability object storage. S3 was Amazon's first publicly available web service and provides storage through web service interfaces.</p>
<p>S3 supports objects of upto 5 TB in size. S3 organizes stored objects into buckets and within the scope of the bucket they are identified by unique keys. These keys are assigned by the user. Bucket and object creation and retrieval is possible using HTTP interfaces. Objects can also be downloaded using HTTP GET and BitTorrent protocol. S3 provides options to host static websites.</p>
<p>Requests are authorized using ACCESS_KEY_ID and SECRET_ACCESS_KEY associated with the AWS account. </p>
<p>Many companies like Pinterest, Dropbox, etc use S3 for their operations and backups.</p>

<h3>Demonstration of API call to AWS</h3>
<p>Here an API call is made to Amazon Simple Storage Service (S3). The program included in this homework uses listBuckets(), a function provided by Amazon S3 library, to get existing buckets in the Users account. To verify the credentials for login, the access key and secret key are stored in the .aws\credentials file on Windows system.</p>
<p>Next, the program uses createBucket() function call to create a bucket in S3. Last, we display the buckets under the account to show the newly created bucket.</p>
<p>This program demonstrates a simple call to AWS after authenticating the host through access key id and secret access key. </p>


<h3>Screenshots</h3>
<b>The AWS console showing one bucket that is pre-existing in S3:</b>
<br><br>
![Screenshot before running script](https://cloud.githubusercontent.com/assets/9297464/5866813/ed670362-a262-11e4-8cad-e83940194adc.PNG)
<br><br>
<b>The output of program (description given in the paragraph above):</b>
<br><br>
![Screenshot of output of script](https://cloud.githubusercontent.com/assets/9297464/5866919/19f430c0-a264-11e4-8f4a-73ace6005f62.PNG)
<br><br>
<b>The AWS console showing the new bucket that was created by the script:</b>
<br><br>
![Screenshot of output of script](https://cloud.githubusercontent.com/assets/9297464/5866923/1fdeb668-a264-11e4-9cb7-967523d7fc20.PNG)
<br><br>
