# Visual Studio Code Settings

[Settings Sync in Visual Studio Code](https://code.visualstudio.com/docs/editor/settings-sync)

## Demos

Copy settings.json & keybindings.json to `%APPDATA%\Code\User\settings.json`

`settings.json`:

```json
{
    "workbench.startupEditor": "none",
    "git.enableSmartCommit": true,
    "problems.autoReveal": false,
    "editor.bracketPairColorization.enabled": true,
    "window.restoreWindows": "none",
    "files.hotExit": "off",
    "editor.wordWrap": "on",
    "editor.minimap.enabled": false,
    "problems.decorations.enabled": false,
    "explorer.confirmDelete": false,
    "explorer.confirmDragAndDrop": false,
    "explorer.openEditors.visible": 0,
    "typescript.updateImportsOnFileMove.enabled": "always",
    "emmet.triggerExpansionOnTab": true,
    "workbench.editor.restoreViewState": false,
    "workbench.colorCustomizations": {
        "terminal.background": "#6b7477",
        "terminal.foreground": "#e6ddd3",
        "terminalCursor.background": "#d33f12",
        "terminalCursor.foreground": "#ec1426",
        "terminal.ansiBlack": "#1D2021",
        "terminal.ansiBlue": "#0D6678",
        "terminal.ansiBrightBlack": "#ebe6e2",
        "terminal.ansiBrightBlue": "#0D6678",
        "terminal.ansiBrightCyan": "#8BA59B",
        "terminal.ansiBrightGreen": "#95C085",
        "terminal.ansiBrightMagenta": "#8F4673",
        "terminal.ansiBrightRed": "#FB543F",
        "terminal.ansiBrightWhite": "#FDF4C1",
        "terminal.ansiBrightYellow": "#FAC03B",
        "terminal.ansiCyan": "#8BA59B",
        "terminal.ansiGreen": "#95C085",
        "terminal.ansiMagenta": "#8F4673",
        "terminal.ansiRed": "#FB543F",
        "terminal.ansiWhite": "#A89984",
        "terminal.ansiYellow": "#FAC03B"
    },
    "csharp.format.enable": true,
    "terminal.integrated.cursorBlinking": true,
    "terminal.integrated.cursorStyle": "line",
    "terminal.integrated.defaultProfile.windows": "Windows PowerShell",
    "terminal.integrated.profiles.windows": {
        "PowerShell": {
            "source": "PowerShell",
            "icon": "terminal-powershell"
        },
        "Command Prompt": {
            "path": [
                "${env:windir}\\Sysnative\\cmd.exe",
                "${env:windir}\\System32\\cmd.exe"
            ],
            "args": [],
            "icon": "terminal-cmd"
        },
        "Windows PowerShell":{
            "path": [
                "${env:windir}\\System32\\WindowsPowerShell\\v1.0\\powershell.exe"
            ],
            "args": [
                "-nologo"
            ],
            "icon": "terminal-powershell"
        }
        },    
    "git.confirmSync": false,
    "git.autofetchPeriod": 90,
    "git.autofetch": true,   
    "[typescript]": {
        "editor.defaultFormatter": "vscode.typescript-language-features",
        "editor.formatOnSave": true
    },
    "typescript.preferences.quoteStyle": "single",
    "javascript.preferences.quoteStyle": "single",
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "javascript.updateImportsOnFileMove.enabled": "always",
    "workbench.editor.revealIfOpen": true,
    "csharp.suppressDotnetInstallWarning": true,
    "csharp.suppressDotnetRestoreNotification": true,
    "csharp.suppressProjectJsonWarning": true,
    "csharp.suppressBuildAssetsNotification": true,
    "mssql.connections": [
        {
            "server": "localhost",
            "database": "",
            "authenticationType": "Integrated",
            "password": ""
        }
    ],
    "update.mode": "start",
    "update.enableWindowsBackgroundUpdates": false,
    "yaml.schemaStore.enable": false,
    "settingsSync.ignoredExtensions": [
        "teamsdevapp.ms-teams-vscode-extension",
        "ms-kubernetes-tools.vscode-kubernetes-tools",
        "mindaro.mindaro",
        "wallabyjs.wallaby-vscode"
    ],
    "omnisharp.enableImportCompletion": true,
    "omnisharp.disableMSBuildDiagnosticWarning": true,
    "prettier.printWidth": 160,
    "prettier.tabWidth": 4,
    "redhat.telemetry.enabled": false,
    "rest-client.defaultHeaders": {
        "User-Agent": "vscode-restclient"
    },
    "rest-client.excludeHostsForProxy": ["localhost"],
    "rest-client.environmentVariables": {
        "$shared": {},
        "dev": {
            "tenantId": "d92b247e-90e0-4469-a129-6a32866c0d0a",
            "clientId": "b9865fd5-e515-478c-8ad1-905e3791579a",
            "clientSecret": "Tjl8Q~Tj2WHH~4wCwQxJF3ci35QDDHYi~H2LEb_3",
            "scope": "https%3A%2F%2Fgraph.microsoft.com%2F.default"
        }
    },
    "prettier.embeddedLanguageFormatting": "off",
    "prettier.jsxSingleQuote": true,
    "prettier.singleQuote": true,
    "remote.SSH.remotePlatform": {
        "raspberrypi": "linux"
    },
    "azureFunctions.showProjectWarning": false,
    "security.workspace.trust.untrustedFiles": "open",
    "[yaml]": {
        "editor.defaultFormatter": "redhat.vscode-yaml"
    },
    "extensions.ignoreRecommendations": true,
    "[aspnetcorerazor]": {
        "editor.defaultFormatter": "ms-dotnettools.csharp"
    },
    "dotnet-test-explorer.autoWatch": true,
    "dotnet-test-explorer.runInParallel": true,
    "dotnet-test-explorer.testProjectPath": "**/*tests.csproj",
    "debug.terminal.clearBeforeReusing": true,
    "terminal.integrated.allowMnemonics": true,
    "[csharp]": {
        "editor.defaultFormatter": "ms-dotnettools.csharp"
    },
    "azureFunctions.showCoreToolsWarning": false,
    "editor.fontSize": 15,
    "[xml]": {
        "editor.defaultFormatter": "redhat.vscode-xml"
    },
    "terminal.integrated.persistentSessionReviveProcess": "never",
    "editor.unicodeHighlight.invisibleCharacters": false,
    "editor.unicodeHighlight.allowedCharacters": {
        " ": true
    },
    "json.maxItemsComputed": 6000,
    "terminal.integrated.enableMultiLinePasteWarning": false,
    "githubPullRequests.createOnPublishBranch": "never",
    "githubPullRequests.fileListLayout": "tree",
    "githubIssues.queries": [
        {
            "label": "My Issues",
            "query": "default"
        },
        {
            "label": "Created Issues",
            "query": "author:${user} state:open repo:${owner}/${repository} sort:created-desc"
        },
        {
            "label": "Recent Issues",
            "query": "state:open repo:${owner}/${repository} sort:updated-desc"
        }
    ],
    "workbench.colorTheme": "Cobalt3",
    "githubPullRequests.pullBranch": "never",
    "editor.inlineSuggest.enabled": true,
    "github.copilot.enable": {
        "*": true,
        "yaml": false,
        "plaintext": false,
        "markdown": true
    },
    "editor.linkedEditing": true,
    "githubPullRequests.pushBranch": "always",
    "xml.server.binary.trustedHashes": [
        "98a0723d20f9c21f810457309c42597714fa3f570ecb2cf6cdf592c8a41e2a6b"
    ],
    "durableFunctionsMonitor.showWhenDebugSessionStarts": false,
    "editor.accessibilitySupport": "off",
    "azureFunctions.showDeployConfirmation": false,
    "debug.onTaskErrors": "debugAnyway",
    "git.openRepositoryInParentFolders": "always",
    "wallaby.startAutomatically": false,
    "nxConsole.enableGenerateFromContextMenu": true,
    "git.ignoreRebaseWarning": true,
    "gitlens.graph.layout": "editor",
    "window.zoomLevel": 2,
    "githubPullRequests.defaultMergeMethod": "squash",
    "vs-kubernetes": {
        "vscode-kubernetes.helm-path.windows": "C:\\Users\\AlexanderKastil\\.vs-kubernetes\\tools\\helm\\windows-amd64\\helm.exe",
        "vscode-kubernetes.minikube-path.windows": "C:\\Users\\AlexanderKastil\\.vs-kubernetes\\tools\\minikube\\windows-amd64\\minikube.exe"
    }
}
```
