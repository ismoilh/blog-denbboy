import { EnvVariablesKey } from './keys';
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

export class ConfigService {
  public getUsersForBasicAuth(): { [key: string]: string } {
    const usersString = process.env.BASIC_AUTH_USERS || '';
    const users: { [key: string]: string } = {};

    usersString.split(';').forEach((userEntry) => {
      const [username, password] = userEntry.split(':');
      if (username && password) {
        users[username] = password;
      }
    });

    return users;
  }

  public getVariable(key: EnvVariablesKey): string | undefined {
    return process.env[key];
  }

  public getVariableOrFail(key: EnvVariablesKey): string {
    const value = process.env[key];
    if (!value) {
      throw new Error(`Environment variable ${key} is not defined`);
    }
    return value;
  }
}
