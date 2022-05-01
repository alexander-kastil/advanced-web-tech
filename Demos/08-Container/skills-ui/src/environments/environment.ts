declare global {
  interface Window {
    env: any;
  }
}

export const environment = {
  production: false,
  apiUrl: 'https://localhost:5001/skills/',
};
