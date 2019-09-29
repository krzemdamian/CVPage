FROM node as build
WORKDIR /app
COPY . .
RUN npm install -g @angular/cli
RUN ng build --prod

FROM nginx
COPY --from=build /app/dist /usr/share/nginx/html
COPY --from=build /app/.docker/nginx.conf /etc/nginx/conf.d/default.conf