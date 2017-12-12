# Description

## Goal

Accomplish third party login with angular and loopback

### warn

This project is still under development, please do not use it in production.

### Current Finished

- Local Auth
- LDAP Auth

## How to Use

```
npm install
```

Then you must provide a configuration file named ```providers.js``` in
the path ```apps/api``` and add your configurations according to the file
```apps/api/providers.js.template```


and then
```
npm run dev
```

Open your browser and navigate to  ```http://localhost:4200```

Currently, if you want to use the ldap-auth, you must build up your own ldap
server and add configurations specific your ldap server.