// Import the necessary modules
const AWS = require('aws-sdk')
const fs = require('fs')

// aws.config.update({
//   accessKeyId: 'AKIAY3L35MCRZNIRGT6N',
//   secretAccessKey: '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',
//   region: 'ap-south-1',
// });


// async function uploadFile(file) {
 
//   const s3 = new aws.S3({ apiVersion: '2006-03-01' });

 
//   const uploadParams = {
//     ACL: 'public-read',
//     Bucket: 'classroom-training-bucket',
//     Key: `abc/${file.originalname}`,
//     Body: file.buffer,
//   };

  
//   const data = await s3.upload(uploadParams).promise();

  
//   return data.Location;
// }
const credentials = {
    accessKey: 'AKIAY3L35MCRZNIRGT6N',
    secret: '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',
    bucketName: 'classroom-training-bucket'
};

const s3 = new AWS.S3({
    accessKeyId: 'AKIAY3L35MCRZNIRGT6N',
    secretAccessKey: '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'
});

const uploadFile = (fileName) => {
    const fileContent = fs.readFileSync(fileName);

    const params = {
        Bucket: credentials.bucketName,
        Key: fileName,
        Body: fileContent
    };

    s3.upload(params, function(err, data) {
        if (err) {
            throw err;
        }
        console.log(`File uploaded successfully. ${data.Location}`);
    });
};

module.exports = {
    uploadFile
}
// Export the `uploadFile()` function

