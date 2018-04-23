// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBeMMNhLIFlY9JcPEMCwIHP9vQ7E8-KNlo',
    authDomain: 'alex-tic-tac-toe.firebaseapp.com',
    databaseURL: 'https://alex-tic-tac-toe.firebaseio.com',
    projectId: 'alex-tic-tac-toe',
    storageBucket: 'alex-tic-tac-toe.appspot.com',
    messagingSenderId: '132885426380'
  }
};
