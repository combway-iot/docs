# System

## Ping watchdog

| Item                 | Description                             |
|:---------------------|:----------------------------------------|
| Enable Ping Watchdog | Enable Ping Watchdog service            |
| Address              | Ping check address                      |
| Checking interval    | Ping check interval, in seconds         |
| Number of Failure    | Ping check failure count                |
| Ping timeout         | Ping check timeout interval, in seconds |
| Action               | Whech ping check failed, perform action |

## Schedule Reboot

| Item             | Description                                          |
|:-----------------|:-----------------------------------------------------|
| Scheduled Reboot | Enable schedule reboot service                       |
| Reboot Cycle     | When reboot should be performed                      |
| Reboot Time      | Reboot Time                                          |
| Date select      | When weekly, monthly cycle choose, day should select |

## System Time

| Item        | Description                      |
|:------------|:---------------------------------|
| System Time | Set system time mannualy         |
| NTP         | Use NTP to set system time       |
| Timezone    | Current timezone                 |
| Timeserver  | Support at most three timeserver |

## UPnP

| Item                   | Description            |
|:-----------------------|:-----------------------|
| Start UPnP and NAT-PMP | Enable UPnP service    |
| Enable UPnP            | Enable UPnP service    |
| Enable NAT-PMP         | Enable NAT-PMP service |
| Enable Secure Mode     | Enable Secure mode     |
| Device UUID            | Custom Device UUID     |

### Active UPnP Redirects

| Item             | Description                |
|:-----------------|:---------------------------|
| Protocol         | Network transport protocol |
| External ports   | External ports             |
| Internal ports   | Internal ports             |
| Internal Address | Internal Address           |
| Hostname         | Hostname                   |
| Comment          | Comment                    |

### MiniUPnP ACLs

| Item             | Description      |
|:-----------------|:-----------------|
| External ports   | External ports   |
| Internal ports   | Internal ports   |
| Internal Address | Internal Address |
| Action           | ACL Action       |
| Comment          | Comment          |
