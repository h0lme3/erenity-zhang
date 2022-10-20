FROM node:14.15.0

ARG BASE_HREF
ARG CONFIGURATION
ARG DIST_NAME

# setup docker directory
WORKDIR /usr/src

# build static files
COPY package*.json ./
COPY angular.json ./
COPY tsconfig.app.json ./
COPY tsconfig.spec.json ./
# COPY tslint.json ./
COPY tsconfig.json ./
# handle COPY bug using RUN true: https://github.com/moby/moby/issues/37965
RUN true
COPY .browserslistrc ./
COPY tsconfig.json ../
COPY src ./src

RUN node -v
RUN npm cache clean --force
RUN npm install -g @angular/cli@11.2.15
RUN npm install --force
RUN npm install @types/node@14.0.4 --saveDevnpm
RUN node --max-old-space-size=20000 ./node_modules/@angular/cli/bin/ng build --configuration=${CONFIGURATION} --prod --aot --output-hashing=all --base-href ${BASE_HREF}

# web server repo
RUN git clone https://gitlab+deploy-token-502320:qYm2e8GBadB7_K1LBV_x@gitlab.com/octomate/octomate-web-server.git
RUN mkdir octomate-web-server/public
# copy static files to web server repo
RUN mv dist/${DIST_NAME}/* octomate-web-server/public/

# setup docker directory
WORKDIR /usr/src/app

RUN mv /usr/src/octomate-web-server/* ./

RUN npm install

ARG NODE_ENV

ENV NODE_ENV ${NODE_ENV}

# for opening SSH connections
ENV SSH_PASSWD "root:Docker!"
RUN apt-get update \
        && apt-get install  -y --no-install-recommends dialog \
        && apt-get update \
        && apt-get install  -y --no-install-recommends openssh-server \
        && echo "$SSH_PASSWD" | chpasswd
COPY sshd_config /etc/ssh/
COPY init.sh /usr/local/bin/
RUN chmod u+x /usr/local/bin/init.sh

EXPOSE 8080 2222

# CMD [ "npm", "start" ]
ENTRYPOINT ["init.sh"]
