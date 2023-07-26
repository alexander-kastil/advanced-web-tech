# Install chocolatey
Write-Host "Installing Chocolatey - 1/6" -ForegroundColor yellow

Set-ExecutionPolicy Bypass -Scope Process -Force; 
[System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; 
Invoke-Expression ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))

choco install googlechrome -y
choco install microsoft-edge -y
choco install vscode -y
choco install dotnet-6.0-sdk -y
choco install azure-cli -y
choco install git -y
choco install gitextensions -y
choco install gh -y
choco install curl -y
choco install 7zip -y
choco install nvm -y

# Intall VS Code Extensions
Write-Host "VS Code Extensions - 5/6" -ForegroundColor yellow

code --install-extension ms-vscode.powershell
code --install-extension ms-dotnettools.csharp
code --install-extension ms-vscode.azurecli
code --install-extension ms-vscode.azure-account
code --install-extension ms-azuretools.vscode-azureappservice
code --install-extension ms-azuretools.vscode-docker
code --install-extension ms-kubernetes-tools.vscode-kubernetes-tools
code --install-extension GitHub.vscode-pull-request-github
code --install-extension redhat.vscode-yaml
code --install-extension angular.ng-template
code --install-extension 1tontech.angular-material
code --install-extension mikael.angular-beastcode
code --install-extension mdickin.markdown-shortcuts
code --install-extension mhutchie.git-graph 
code --install-extension ms-dotnettools.blazorwasm-companion
code --install-extension ms-vscode-remote.vscode-remote-extensionpack
code --install-extension adrianwilczynski.asp-net-core-snippet-pack

# Refresh Path Env
Write-Host "Refresh Path Env - 4/6" -ForegroundColor yellow

$env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")

# Install Node.js
nvm install 16.15.0
nvm use 16.15.0

# Install Node.js Tools
npm i -g webpack webpack-cli gulp

# Install Angular
Write-Host "Installing Angular - 6/6" -ForegroundColor yellow

npx @angular/cli@latest analytics off
npm i -g @angular/cli

# React
npm i -g create-react-app

# Finished Msg
Write-Host "Finished Software installation" -ForegroundColor yellow