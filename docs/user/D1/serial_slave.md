# Modbus Slave Serial

## Modbus TCP

The following settings are special to `Modbus TCP` mode of the serial port.

| Setting    | Description                | Default |
|:-----------|:---------------------------|:--------|
| Enable     | Enable Modbus TCP          | disable |
| Port       | Listen Port, range 1-65535 | 502     |
| DI Address | DI Address, range 0-255    | 0       |
| DO Address | DO Address, range 0, 2-255 | 0       |

## Modbus RTU

The following settings are special to `Modbus RTU` mode of the serial port.

| Setting     | Description                | Default |
|:------------|:---------------------------|:--------|
| Enable      | Enable Modbus RTU          | disable |
| Serial Port | Serial port, range 1-65535 |         |
| Slave ID    | Slave ID on the link       | 1       |
| DI Address  | DI Address, range 0-255    | 0       |
| DO Address  | DO Address, range 0, 2-255 | 0       |

## Modbus RTU Over TCP

The following settings are special to `Modbus RTU Over TCP` mode of the serial port.

| Setting            | Description                                       | Default |
|:-------------------|:--------------------------------------------------|:--------|
| Enable             | Enable Modbus RTU Over TCP                        | disable |
| Slave ID           | Slave ID on the link                              | 1       |
| Device ID          | Device ID on the link                             | 1       |
| Reconnect Interval | Client reconnect when lost connection, in seconds | 1       |
| DI Address         | DI Address, range 0-255                           | 0       |
| DO Address         | DO Address, range 0, 2-255                        | 0       |
| Server List        | List of Modbus server address and port            |         |
