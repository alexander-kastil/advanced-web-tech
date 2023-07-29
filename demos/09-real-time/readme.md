# Introduction to Real Time- & Progressive Web Apps

## Demo

### .NET 6 Skills Api and UI using SignalR

[SignalR](https://docs.microsoft.com/en-us/aspnet/signalr/overview/getting-started/introduction-to-signalr)

[Azure SignalR Service Documentation](https://docs.microsoft.com/en-us/azure/azure-signalr/)

[@microsoft/signalr](https://www.npmjs.com/package/@microsoft/signalr)

- Requires [.NET 6 SDK](https://dotnet.microsoft.com/download/dotnet/6.0).

Go to `skills-api`, open console and run:

`dotnet restore` and then  
`dotnet run`

### Progressive Web Apps

[Progressive Web Apps @Google](https://web.dev/progressive-web-apps/)

[Angular Service Workers](https://angular.io/guide/service-worker-intro)

[How to make PWAs installable](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Installable_PWAs)

[Debugging Service Workers](https://developers.google.com/web/tools/workbox/guides/troubleshoot-and-debug)

Setup, Base Scaffolding & Getting started:

Allow use of self signed localhost certificates on Chrome or Edge:

```
chrome://flags/#allow-insecure-localhost
edge://flags/#allow-insecure-localhost
```

#### Add Service Worker to existing Angular App


```
cd skills-ui-pwa
ng add @angular/pwa --project skills-ui-pwa
```

#### Create a build

```
ng build -c production
```

> Note: Make sure your envirenment.prod.ts matches environment.ts

#### Serving Build

To serve the build you need an http-server. Use `angular-http-server` or `http-server`

```
npm install -g angular-http-server
cd .\dist\skills-ui-pwa\
angular-http-server
```

## Labs

[Introduction to ASP.NET Core SignalR](https://learn.microsoft.com/en-us/training/modules/aspnet-core-signalr/)

[Replace client-side polling with ASP.NET Core SignalR](https://learn.microsoft.com/en-us/training/modules/aspnet-core-signalr-polling-fix/)