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

  sampleUser.forEach((user) => {
    let search = {};
    for (var o in user) {
      if (user.hasOwnProperty(o) && o !== 'password') {
        search[o] = user[o];
      }
    }
    User.findOne({where: search}, function(err, found) {
      if (err) throw err;
      if (!found) {
        User.create(user, function(err, instance) {
          if (err) throw err;
          console.log(`${JSON.stringify(instance)} created!`);
        });
      } else {
        console.log(`${JSON.stringify(user)} exists! Skipping create`);
      }
    });
  });
};
