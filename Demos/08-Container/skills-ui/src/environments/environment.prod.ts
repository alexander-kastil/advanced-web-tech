declare global {
  interface Window {
    env: any;
  }
}

export const environment = {
  production: true,
  apiurl: 'http://localhost:3000/skills/',
};
