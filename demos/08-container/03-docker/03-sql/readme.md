# SQL Server Linux on Docker

Run SQL Server on Docker:

```bash
docker run -e "ACCEPT_EULA=Y" -e "SA_PASSWORD=Admin#2022" -p 1433:1433 --name sql1 --hostname sql1 -d mcr.microsoft.com/mssql/server:2022-latest
```