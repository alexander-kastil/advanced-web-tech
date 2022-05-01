# Build Docker Images

skills-api:

```bash
# Build Image
docker build --rm -f "Dockerfile" -t skillsapi .
# Run Image
docker run -it --rm -p 5051:80 skillsapi
# Browse using: 
http://localhost:5051/api/skills
```

skills-ui:

```bash
docker build --rm -f "dockerfile" -t skillsui:config-inject .
docker run -d --rm -p 5052:80 skillsui:config-inject
# Browse using: 
http://localhost:5052/
```