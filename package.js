Package.describe({
  name: "seakaytee:autoform-slingshot",
  summary: "File upload for AutoForm with Slingshot",
  description: "File upload for AutoForm with Slingshot",
  version: "1.1.3",
  git: "http://github.com/cpravetz/autoform-slingshot.git"
});

Package.onUse(function(api) {
  configure(api);
});

function configure(api) {
  api.versionsFrom(['2.3','3.0']);

  api.use([
    'underscore',
    'templating',
    'less',
    'jquery',
    'aldeed:autoform',
    'edgee:slingshot'
  ], ['client', 'server']);

  api.imply([
    'aldeed:autoform',
    'edgee:slingshot'
  ]);

  
  api.addFiles([
    'lib/client/autoform-slingshot.html',
    'lib/client/autoform-slingshot.less',
    'lib/client/autoform-slingshot.js'
  ], 'client');

  
  api.export('SwapTemp');
}
