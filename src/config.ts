import { config as dotenvConfig } from "dotenv";
import path from "path";

const defaultEnv = dotenvConfig({
  path: path.normalize(__dirname + "/../default.env"),
}).parsed;

const env = dotenvConfig({
  path: path.normalize(__dirname + "/../.env"),
}).parsed;

if (!defaultEnv) {
  console.error("Missing default.env file");
  process.exit(1);
}

if (!env) {
  console.error("Missing .env file");
  process.exit(1);
}

const missingVariables = Object.keys(defaultEnv).filter((key) => !(key in env))
if(missingVariables.length !== 0) {
  console.warn('Warning in your environment is missing these variables:', ...missingVariables)
}

const joinedEnv = {...defaultEnv, ...env};
export const config = {
  port: Number(joinedEnv.PORT),
  tokenSecret: joinedEnv.TOKEN_SECRET,
  refreshTokenSecret: joinedEnv.REFRESH_TOKEN_SECRET,
  tokenLife: String(joinedEnv.TOKEN_LIFE),
  refreshTokenLife: String(joinedEnv.REFRESH_TOKEN_LIFE),

  salt: joinedEnv.SALT,
  keylen: Number(joinedEnv.KEYLEN),
  iterations: Number(joinedEnv.ITERATIONS),
  digest: joinedEnv.DIGEST,

  postgresDb: String(joinedEnv.POSTGRES_DB),
  postgresUser: String(joinedEnv.POSTGRES_USER),
  postgresHost: String(joinedEnv.POSTGRES_HOST),
  postgresPort: Number(joinedEnv.POSTGRES_PORT),
  postgresPassword: String(joinedEnv.POSTGRES_PASSWORD),
};
