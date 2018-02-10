// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
    production: false,
    hmr       : false,
    firebase: {
        apiKey: "AIzaSyB4acBr2d5Z5YHaM8FhUgCPxtusXWlxMGk",
        authDomain: "rivetly-cda.firebaseapp.com",
        databaseURL: "https://rivetly-cda.firebaseio.com",
        projectId: "rivetly-cda",
        storageBucket: "rivetly-cda.appspot.com",
        messagingSenderId: "430633825823"
    }
};
