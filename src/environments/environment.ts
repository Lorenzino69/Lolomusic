// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  clientIdSc: '95f22ed54a5c297b1c41f72d713623ef',
  httpApiUrl: `https://api.aux.app`,
  websocketApiUrl: `wss://api.aux.app/websocket`
};
