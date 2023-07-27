# Windows Subsystem Linux 2 - Setup frameworks & tools

[Introduction to Bash Scripting](https://www.taniarascia.com/how-to-create-and-use-bash-scripts/)

### Node

Install NVM (Node Version Manager):

```
sudo apt-get install curl
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/master/install.sh | bash
sudo apt-get install build-essential
```

> Note: You might need to restart your WSL session after installation

### .NET 6 

Register Packages:

```
wget https://packages.microsoft.com/config/ubuntu/20.10/packages-microsoft-prod.deb -O packages-microsoft-prod.deb
sudo dpkg -i packages-microsoft-prod.deb
```
Install .NET:

```
sudo apt-get update; \
sudo apt-get install -y apt-transport-https && \
sudo apt-get update && \
sudo apt-get install -y dotnet-sdk-6.0
```

### Azure CLI

```
curl -sL https://aka.ms/InstallAzureCLIDeb | sudo bash
# install extensions on demandy
az config set extension.use_dynamic_install=yes