# Introduction

## Industrial Interface

## DI/DO

Digital I/O interface may be used as switch of high level for logical 1 and low level for logical 0.

### DI

Digital Input.

When input event `High level/Low level/Counter` occur what should be done.

### DO

Digital Output.

## Serial

### RS485

Support half-duplex serial communication distance up to 120m.

### RS232

Support full-duplex serial communication distance up to 20m.

### Settings

The following settings are common to all modes of the serial port.

| Setting               | Description                   | Default     |
|:----------------------|:------------------------------|:------------|
| Enable                | Enable serial port            | disable     |
| Serial Type           | Serial port type (Predefined) | -           |
| Baud Rate             | Serial port baudrate          | 9600        |
| Data Bits             | Serial port data bits         | 8           |
| Stop Bits             | Serial port stop bits         | 1           |
| Parity                | Serial port parity bit        | None        |
| Software Flow Control | Serial port flow control      | disable     |
| Serial Mode           | Serial port work mode         | transparent |

Serial support three work modes:

 - `DTU Mode`
 - `Modbus Slave`
 - `Modbus Master`

### DTU Mode

Monitor the serial status and sync to remote server.

 - [Transparent](serial_dtu#transparent)

   + TCP client
   + UDP client

 - [Modbus](serial_dtu#modbus)
 - [TCP Server](serial_dtu#tcp-server)
 - [UDP Server](serial_dtu#udp-server)
 - [MQTT](serial_dtu#mqtt)

### Modbus Slave

Monitor the DI status and change the DO status.

#### Modbus TCP

Define DI/DO ports and monitor the DI status and change the DO status via Modbus TCP.

#### Modbus RTU

Define DI/DO ports and monitor the DI status and change the DO status via Modbus RTU.

#### Modbus RTU Over TCP

Define DI/DO ports and monitor the DI status and change the DO status via Modbus RTU Over TCP.

### Modbus Master

Monitor the Modbus Slave and react accordingly.

#### Channel

 - Serial
 - TCP
