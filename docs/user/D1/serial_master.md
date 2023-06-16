# Modbus Master Serial

Configure as modbus master and poll modbus slave device, redirect packet to predefined server.

## TCP Forwarding

| Setting    | Description                   | Default |
|:-----------|:------------------------------|:--------|
| Name       | Unique identity of channel    |         |
| IP Address | IP address of redirect server |         |
| Port       | Port of redirect server       |         |

## Channel

| Setting       | Description                       | Default  |
|:--------------|:----------------------------------|:---------|
| Name          | Unique identity for channel       |          |
| Slave ID      | Modbus Slave ID                   |          |
| Address       | Read start address                |          |
| Number        | Number need to read               |          |
| Type          | Modbus read type                  |          |
| Link          | Transportation protocol           | tcp      |
| IP Address    | IP address of modbus slave        |          |
| Port          | Port of modbus slave              |          |
| Sign          | Channel is signed or unsigned     | unsigned |
| Decimal Place | Indicate the dot place of channel |          |

## Modbus Master

The following settings are special to `Modbus Master` mode of the serial port.

It should configure channel before configuring master.

| Setting           | Description                                         | Default |
|:------------------|:----------------------------------------------------|:--------|
| Enable            | Enable Modbus Master                                | disable |
| Reading interval  | Device DTU read cycle interval, in seconds          | 0       |
| Maximun Retries   | Maximun retries when reading data fail              | 3       |
| Response Timeout  | Device response timeout interval, in seconds        |         |
| Excution Interval | Execution interval between command, in milliseconds | 1       |
| Channel Name      | Previous configured channel name                    |         |
