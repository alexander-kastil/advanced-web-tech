declare global {
  interface Window {
    env: any;
  }
}

export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/skills/',
};
