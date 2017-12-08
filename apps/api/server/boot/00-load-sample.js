'use strict';

module.exports = function(app) {
  const User = app.models.user;

  const sampleUser = [
    {
      username: 'Demo',
      email: 'Demo@Demo.com',
      password: 'Demo',
    },
  ];

  User.create(sampleUser, function(err, instance) {
    if (err) throw err;
    console.log('Sample User Created!');
  });
};
