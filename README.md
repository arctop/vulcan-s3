# Vulcan S3

## Upload files to S3 from VulcanJS

This package helps to upload files with [Vulcan.js](http://vulcanjs.org/) applications. Including a dropzone.

Note that the server-side policy is currently permissive and any file-type is allowed for the duration of the expiration time.

**/!\ This is an experimental package**.

## Example
Add the following to your `settings.json`:
```js
"aws": {
  "awsAccessKey": "<key>",
  "awsSecretKey": "<key>",
  "awsS3BucketName": "<bucket-name>"
  "expirationInMinutes": 15
},
```
Inside your public section in `settings.json` add the following:
```js
"aws": {
  "awsS3BucketUrl": "<bucket-url>",
  "maxFiles": 10,
  "maxSizeBytes": 5368709120,
  "allowedType": "video"
}
```
## Contributing

Best way to contribute is to use it in your own app, and propose ideas, suggestions and PR based on your experience.

We seek for maximum reusability, so each method should be as configurable as possible, and split into independent functions whenever possible.

*[Contributed by Arctop](https://arctop.com)*

