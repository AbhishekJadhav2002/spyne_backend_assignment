const amqp = require('amqplib');

const RABBITMQ_URL = process.env.RABBITMQ_URL || 'amqp://localhost';

let channel;

const connectRabbitMQ = async () => {
    try {
        const connection = await amqp.connect(RABBITMQ_URL);
        channel = await connection.createChannel();
    } catch (error) {
        console.error('Failed to connect to RabbitMQ:', error);
    }
};

const getChannel = () => channel;

module.exports = {
    connectRabbitMQ,
    getChannel
};
