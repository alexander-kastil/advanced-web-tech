#Stage 1
FROM node:16-alpine as builder
WORKDIR /app
COPY package.json .

RUN npm install
COPY . .
RUN npm run build

#Stage 2
FROM nginx:1.19.0
WORKDIR /usr/share/nginx/html

COPY --from=builder /app/build /usr/share/nginx/html
COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf

# docker build --rm -f Dockerfile -t skills-react .
# docker run -d --rm -p 5053:80 skills-react