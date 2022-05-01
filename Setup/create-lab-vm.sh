rnd=$RANDOM
loc=westeurope
grp=az-lab
vmname=labvm-$rnd
user=azlabadmin
pwd=Lab@dmin1234
# Windows 10 image names change frequently. To get the current img name use: az vm image list -f "Windows-10" -l westeurope  --all -o table

az group create -n $grp -l $loc

az vm create -g $grp -n $vmname --admin-username $user --admin-password $pwd --image  MicrosoftWindowsDesktop:Windows-10:21h1-pro:latest --size Standard_E2s_v5 --public-ip-sku Standard

az vm auto-shutdown -g $grp -n $vmname --time 1730
