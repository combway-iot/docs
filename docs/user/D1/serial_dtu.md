# DTU Serial

## Transparent

Router run TCP/UDP client, receive DTU from serial and send it to server, receive DTU from server and write to serial.

### UDP client

The following settings are special to transparent `UDP` mode of the serial port.

| Setting         | Description                     | Default |
|:----------------|:--------------------------------|:--------|
| Protocol        | Transport protocol              | udp     |
| Register String | Register string for the server  |         |
| Server List     | List of Server address and port |         |

### TCP client

The following settings are special to transparent `TCP` mode of the serial port.

| Setting               | Description                                                | Default |
|:----------------------|:-----------------------------------------------------------|:--------|
| Protocol              | Transport protocol                                         | tcp     |
| Keepalive Interval    | Client send keepalive packet regularly, in seconds         | 1       |
| Keepalive Retry Times | Client send keepalive packet retry times before exit       | 1       |
| Reconnect Interval    | Client reconnect when lost connection, in seconds          | 1       |
| Specific Protocol     | Client connect to a tcp2com server                         | disable |
| Heartbeat Interval    | Client send tcp2com heartbeat packet regularly, in seconds | 1       |
| Register String       | Register string for the server                             |         |
| Server List           | List of Server address and port                            |         |

[tcp2com](https://tcp2com.sourceforge.net "tcp2com Network mapper for Serial ports")

## Modbus

The following settings are special to `Modbus` mode of the serial port.

| Setting               | Description                                                    | Default |
|:----------------------|:---------------------------------------------------------------|:--------|
| Local Port            | Server listen port                                             |         |
| Maximun TCP Clients   | Maximun TCP clients allowed to connect                         |         |
| Connnection Timeout   | Client connection timeout interval, in seconds                 |         |
| Reading interval      | Device DTU read cycle interval, in seconds                     |         |
| Response Timeout      | Device response timeout interval, in seconds                   |         |
| Maximun Retries       | Maximun retries when reading data fail                         |         |
| Packet Size           | Packet will be sent when the threshold reached                 | 1024    |
| Serial Frame Interval | Packet will be sent when the interval reached, in milliseconds | 100     |

## TCP Server

The following settings are special to `TCP Server` mode of the serial port.

| Setting               | Description                                                    | Default |
|:----------------------|:---------------------------------------------------------------|:--------|
| Listening Port        | TCP server listen port                                         |         |
| Keepalive Interval    | Server send keepalive packet regularly, in seconds             | 1       |
| Keepalive Retry Times | Server send keepalive packet retry times before exit           | 1       |
| Packet Size           | Packet will be sent when the threshold reached                 | 1024    |
| Serial Frame Interval | Packet will be sent when the interval reached, in milliseconds | 100     |

## UDP Server

The following settings are special to `UDP Server` mode of the serial port.

| Setting               | Description                                                    | Default |
|:----------------------|:---------------------------------------------------------------|:--------|
| Listening Port        | UDP server listen port                                         |         |
| Packet Size           | Packet will be sent when the threshold reached                 | 1024    |
| Serial Frame Interval | Packet will be sent when the interval reached, in milliseconds | 100     |

## MQTT

The following settings are special to `MQTT` mode of the serial port.

| Setting         | Description                                             | Default |
|:----------------|:--------------------------------------------------------|:--------|
| MQTT Host       | MQTT server address or domain                           |         |
| MQTT Port       | MQTT server port                                        |         |
| ClientID        | MQTT ClinetID when connect to server                    |         |
| Keepalive       | MQTT Client send keepalive packet regularly, in seconds | 1       |
| Publish Topic   | MQTT topic for publish message                          |         |
| Subscribe Topic | MQTT topic for receive message                          |         |
| QoS             | MQTT message QoS level                                  |         |
| Auth            | MQTT authentication information                         | close   |
| Username        | MQTT authentication username                            |         |
| Password        | MQTT authentication password                            |         |
