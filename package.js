Package.describe({
  name: 'arctop:vulcan-s3',
  summary: 'Manager for uploads to s3',
  version: '0.0.1',
  git: 'https://github.com/arctop/vulcan-s3',
});

Package.onUse((api) => {
  api.use(['vulcan:core']);

api.mainModule('lib/server/main.js', 'server');
api.mainModule('lib/client/main.js', 'client');
});
