FROM nginx:alpine

RUN apk upgrade --no-cache \
    && addgroup -g 2000 --system nginxuser \
    && adduser -u 2000 -S -s /bin/false -G nginxuser nginxuser

COPY storybook-static /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
