# Dashboard

## Overview
------

### System Information

| Item          | Description              |
|:--------------|:-------------------------|
| Model         | Device model information |
| Hostname      | Device hostname          |
| Version       | Device firmware version  |
| Serial        | Device Serial Number     |
| Working Model | Work model               |

### System Status

| Item        | Description         |
|:------------|:--------------------|
| Memory      | Device memory usage |
| CPU         | Device CPU usage    |
| Uptime      | System uptime       |
| System Time | System current time |

### Cellular

| Item                | Description                    |
|:--------------------|:-------------------------------|
| Status              | SIM card status                |
| Current SIM         | SIM card number                |
| IP address          | Network IP address of cellular |
| Connection Duration | Link connected duration        |
| Mac address         | Link hardware address          |

### WAN

| Item                | Description             |
|:--------------------|:------------------------|
| Status              | Link connection status  |
| IPv6 address        | Link IPv6 address       |
| IP address          | Link IPv4 address       |
| Netmask             | Link IPv4 netmask       |
| Mac address         | Link hardware address   |
| Connection Duration | Link connected duration |

### LAN

| Item                | Description             |
|:--------------------|:------------------------|
| IP address          | Link IPv4 address       |
| Netmask             | Link IPv4 netmask       |

## Cellular
------

### Modem

| Item         | Description     |
|:-------------|:----------------|
| Status       | SIM card status |
| Current SIM  | SIM card number |
| Signal Level | Signal level    |
| IMEI         | IMEI            |
| IMSI         | IMSI            |
| Channel      | Channel         |
| Band         | Network Band   |
| ISP          | Network ISP     |
| Network Type | Network type    |

### Network

| Item                | Description             |
|:--------------------|:------------------------|
| Status              | Link connection status  |
| IPv6 address        | Link IPv6 address       |
| IP address          | Link IPv4 address       |
| Netmask             | Link IPv4 netmask       |
| DNS                 | Link DNS server         |
| Connection Duration | Link connected duration |

## Network
------

### WAN-IPv4

| Item                | Description             |
|:--------------------|:------------------------|
| Port                | Link port               |
| Type                | Link Network type       |
| IP address          | Link IPv4 address       |
| Netmask             | Link IPv4 netmask       |
| Gateway             | Link IPv4 gateway       |
| DNS                 | Link DNS server         |
| Connection Duration | Link connected duration |

### Bridge

| Item       | Description         |
|:-----------|:--------------------|
| Name       | Bridge name         |
| IP address | Bridge IPv4 address |
| Netmask    | Bridge IPv4 netmask |
| Members    | Bridge members      |

## Route
------

### IPv4 Route table

| Item        | Description        |
|:------------|:-------------------|
| Destination | Route destination  |
| Netmask     | Route IPv4 netmask |
| Gateway     | Route IPv4 gateway |
| Interface   | Link port          |

### IPv6 Route table

| Item    | Description        |
|:--------|:-------------------|
| Netmask | Route IPv6 netmask |
| Metric  | Route metric       |
| Source  | Route source       |
| Valid   | Route valid time   |
| Nexthop | Route next hop     |
| Target  | Route destination  |

### ARP Cache table

| Item        | Description           |
|:------------|:----------------------|
| IP address  | Link IPv4 address     |
| Mac address | Host hardware address |
| Interface   | Link port             |

## Host List
------

| Item        | Description           |
|:------------|:----------------------|
| IP address  | Host IPv4 address     |
| Mac address | Host hardware address |
| Hostname    | Host hostname         |
