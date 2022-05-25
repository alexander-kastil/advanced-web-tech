# Windows Subsystem Linux 2 - WSL 2 - Setup

Requires Windows 10 - May 2020 Update or higher. To Update use this [link](https://www.microsoft.com/de-de/software-download/windows10).

[Install WSL 2](https://docs.microsoft.com/en-us/windows/wsl/install)

```
wsl --install
```

## Frameworks & Runtimes

[Introduction to Bash Scripting](https://www.taniarascia.com/how-to-create-and-use-bash-scripts/)

### Node

Install Node 14.x on WSL

```
sudo apt update
sudo curl -sL https://deb.nodesource.com/setup_14.x | sudo bash
sudo apt-get install -y nodejs
```

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