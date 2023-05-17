# Industrial Interface

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

Serial support `DTU Mode`, `Modbus Master` `Modbus Slave` work mode.

### DTU Mode

 - Transparent

    Router run TCP/UDP client, receive DTU from serial and send it to server, receive DTU from server and write to serial.

   + TCP client
   + UDP client

 - Modbus
 - TCP Server
 - UDP Server

### Modbus Master

Monitor the Modbus Slave and react accordingly.

#### Channel

 - Serial
 - TCP

### Modbus Slave

Monitor the DI status and change the DO status.

#### Modbus TCP

Define DI/DO ports and monitor the DI status and change the DO status via Modbus TCP.

#### Modbus RTU

Define DI/DO ports and monitor the DI status and change the DO status via Modbus RTU.

#### Modbus RTU Over TCP

Define DI/DO ports and monitor the DI status and change the DO status via Modbus RTU Over TCP.
