// 待研究
const env = Object.keys(import.meta.env).reduce((acc, cur) => {
  acc[cur] = import.meta.env[cur];
  return acc;
}, {});

export default {
  ...env,
  dev: "development",
  lab: "lab",
  staging: "staging",
  prod: "production"
};
