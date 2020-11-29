FROM nginx:alpine
COPY /dist/formulario-validacion /usr/share/nginx/html
EXPOSE 80
