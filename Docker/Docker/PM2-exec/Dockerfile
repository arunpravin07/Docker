#FROM node:17-alpine3.12

FROM keymetrics/pm2:16-alpine

COPY testapp /testapp
WORKDIR /testapp
ENV NPM_CONFIG_LOGLEVEL warn
RUN npm install

EXPOSE 5000

CMD ["pm2-runtime", "start", "./ecosystem.config.js", "--only", "serverweb", "--env", "development"]

#CMD [ "pm2-runtime", "start", "ecosystem.config.js" ]
