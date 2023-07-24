# React in the Microsoft 365 ecosystem

[Set up your SharePoint Framework development environment](https://learn.microsoft.com/en-us/sharepoint/dev/spfx/set-up-your-development-environment)

[Microsoft 365 Developer Program](https://developer.microsoft.com/en-us/microsoft-365/dev-program)

## Setup SPFx

Install dependencies

```bash
npm i -g gulp-cli yo @microsoft/generator-sharepoint
```

Create a new SPFx project

```bash
yo @microsoft/sharepoint
```

Trust self signed certificate

```bash
gulp trust-dev-cert
```

## Setup Teams

Install dependencies

```bash
npm i -g yo generator-teams
```
