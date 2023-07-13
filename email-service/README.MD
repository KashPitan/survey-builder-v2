# Email Service

A microservice for the survey builder that handles sending out emails

# Getting Started

This service uses rabbitMQ and needs a running rabbitMQ server to operate.

An easy way to start up the server locally is to use docker

```
docker run -it --rm --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:3.12-management

```

If you don't have docker you can install rabbitMQ here: https://www.rabbitmq.com/install-windows.html and start the server

After this run

```
npm run start:dev
```

If you now send a POST request to the /answers endpoint it should emit an event to the email service through the queue and result in a console log.
