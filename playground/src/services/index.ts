import * as localStorage from './local-storage-service';
// tslint:disable-next-line:no-console
const logger = { log: (msg: string) => console.log(msg) };

export default {
  logger,
  localStorage,
};
