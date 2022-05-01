declare global {
  interface Window {
    env: any;
  }
}

export const environment = {
  production: true,
  apiurl: 'http://localhost:5001/skills/',
};
