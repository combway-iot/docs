# Unified Cloud

We provide a IoT platform for customer to manage devices. On the platform, customer can view
the device's base information, online status etc. Customer can also change the device configuration
on the platform.

We provide an service which we called `SD-LAN`, customer can easily join their network of devices
from different places together. In this way, user can reach any other devices from one of connected device.
This make accessing devices at different places very easy, espically for company branches or offices.

## Combway IoT

To use Combway IoT platform, your should first register an account on the platform.

| Setting      | Description                                                 | Default |
|:-------------|:------------------------------------------------------------|:--------|
| Device ID    | Device serial number, used to differentiate device in cloud |         |
| Binding Code | Device binding code, only used for old cloud platform       |         |
| Product      | Device category                                             |         |
| Latitude     | Device location latitude                                    |         |
| Longtitude   | Device location longtitude                                  |         |

`Device ID` is the only unique identity to differentiate device in the cloud.

SEE [Combway IoT](https://m.combway.com "Combway IoT")

## SD-LAN

To use `SD-LAN` service, it requires at least two gateway device.

Please caution: all `SD-LAN` configuration is complished on the cloud platform, device can see
the network status, including network list, network connectivity and latency between nodes,
on this device page.

---

To use other cloud IoT platform, we also provide integrations of well known IoT service provider.

Until now, `Azure IoT` and `AWS IoT Core` platform had been integrated.

## Azure IoT

| Setting      | Description                        | Default |
|:-------------|:-----------------------------------|:--------|
| Enable Azure | Enable Azure IoT function          | disable |
| Device ID    | Device identity                    |         |
| Device Key   | Azure IoT and Device preshared key |         |
| ID Scope     | ID scope                           |         |
| Model ID     | Model ID                           |         |
| Report Info  | Report information                 |         |

SEE [Azure IoT](https://azure.microsoft.com/en-us/solutions/iot "Microsoft Azure IoT")

## AWS IoT Core

| Setting     | Description                   | Default |
|:------------|:------------------------------|:--------|
| Enable AWS  | Enable AWS IoT Core function  | disable |
| Endpoint    | AWS Device data endpoint      |         |
| Thing       | AWS Thing details             |         |
| Root CA     | AWS Root CA                   |         |
| Client CRT  | AWS Device client Certificate |         |
| Client Key  | AWS private key               |         |
| Report Info | Report information            |         |

SEE [AWS IoT Core](https://aws.amazon.com/iot-core/ "AWS IoT Core")
