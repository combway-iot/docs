# OpenWRT Support

To get started, see [OpenWRT Development](/docs/developer/sdk_setup) at first.

## Add DTS file

Copy the following contents to file `target/linux/ramips/dts/CW-IOT-7621-D1.dts`.

```
// SPDX-License-Identifier: GPL-2.0-or-later OR MIT
/dts-v1/;

#include "mt7621.dtsi"

#include <dt-bindings/gpio/gpio.h>
#include <dt-bindings/input/input.h>

/ {
	compatible = "iot-7621-d1", "mediatek,mt7621-soc";
	model = "CW-IOT-7621-D1";

	aliases {
		led-boot = &led_power;
		led-failsafe = &led_power;
		led-running = &led_power;
		led-upgrade = &led_power;
	};

	chosen {
		bootargs = "console=ttyS0,115200";
	};

	leds {
		compatible = "gpio-leds";

		led_power: power {
			label = "sx-7621:blue:power";
			gpios = <&gpio0 16 GPIO_ACTIVE_LOW>;
			default-state = "on";
		};
		sys {
			label = "sys";
			gpios = <&gpio0 14 GPIO_ACTIVE_LOW>;
			default-state = "on";
		};
		usb {
			label = "usb";
			gpios = <&gpio0 19 GPIO_ACTIVE_LOW>;
			default-state = "off";
		};
		minipcie {
			label = "minipcie";
			gpios = <&gpio0 23 GPIO_ACTIVE_LOW>;
			default-state = "off";
		};
		pcie {
			label = "pcie";
			gpios = <&gpio0 22 GPIO_ACTIVE_LOW>;
			default-state = "on";
		};
		rs232 {
			label = "rs232";
			gpios = <&gpio0 24 GPIO_ACTIVE_LOW>;
			default-state = "off";
		};
		rs4850 {
			label = "rs4850";
			gpios = <&gpio0 25 GPIO_ACTIVE_LOW>;
			default-state = "off";
		};
		rs4851 {
			label = "rs4851";
			gpios = <&gpio0 26 GPIO_ACTIVE_LOW>;
			default-state = "off";
		};
	};

	keys {
		compatible = "gpio-keys-polled";
		poll-interval = <20>;

		reset {
			label = "reset";
			gpios = <&gpio0 11 GPIO_ACTIVE_LOW>;
			linux,code = <KEY_RESTART>;
		};

	};
	gpio_export {
		compatible = "gpio-export";
		#size-cells = <0>;

		4gwan {
			gpio-export,name = "4gwan";
			gpio-export,output = <0>;
			gpios = <&gpio0 19 GPIO_ACTIVE_LOW>;
		};
		minipcie {
			gpio-export,name = "minipcie";
			gpio-export,output = <0>;
			gpio-export,direction_may_change = <1>;
			gpios = <&gpio0 27 GPIO_ACTIVE_LOW>;
		};
		minipcieled {
			gpio-export,name = "minipcieled";
			gpio-export,output = <0>;
			gpio-export,direction_may_change = <1>;
			gpios = <&gpio0 23 GPIO_ACTIVE_LOW>;
		};
		pcieled {
			gpio-export,name = "pcieled";
			gpio-export,output = <1>;
			gpio-export,direction_may_change = <1>;
			gpios = <&gpio0 22 GPIO_ACTIVE_LOW>;
		};
		sys {
			gpio-export,name = "sys";
			gpio-export,output = <0>;
			gpio-export,direction_may_change = <1>;
			gpios = <&gpio0 14 GPIO_ACTIVE_LOW>;
		};
		rs232 {
			gpio-export,name = "rs232";
			gpio-export,output = <1>;
			gpio-export,direction_may_change = <1>;
			gpios = <&gpio0 24 GPIO_ACTIVE_LOW>;
		};
		rs4850 {
			gpio-export,name = "rs4850";
			gpio-export,output = <1>;
			gpio-export,direction_may_change = <1>;
			gpios = <&gpio0 25 GPIO_ACTIVE_LOW>;
		};
		rs4851 {
			gpio-export,name = "rs4851";
			gpio-export,output = <1>;
			gpio-export,direction_may_change = <1>;
			gpios = <&gpio0 26 GPIO_ACTIVE_LOW>;
		};
	};

	watchdog {
		compatible = "linux,wdt-gpio";
		gpios = <&gpio0 12 GPIO_ACTIVE_HIGH>;
		hw_algo = "toggle";
		hw_margin_ms = <300>;
		always-running;
	};

};

&sdhci {
	status = "okay";
};

&xhci {
	status = "okay";
};

&uartlite2 {
	status = "okay";
};

&uartlite3 {
	status = "okay";
};

&spi0 {
	status = "okay";

	flash@0 {
		compatible = "jedec,spi-nor";
		reg = <0>;
		spi-max-frequency = <10000000>;

		partitions {
			compatible = "fixed-partitions";
			#address-cells = <1>;
			#size-cells = <1>;

			partition@0 {
				label = "u-boot";
				reg = <0x0 0x30000>;
				read-only;
			};

			partition@30000 {
				label = "u-boot-env";
				reg = <0x30000 0x10000>;
				read-only;
			};

			factory: partition@40000 {
				label = "factory";
				reg = <0x40000 0x10000>;
			};

			partition@50000 {
				compatible = "denx,uimage";
				label = "firmware";
				reg = <0x50000 0xfb0000>;
			};
		};
	};
};

&pcie {
	status = "okay";
};

&pcie0 {
	wifi@0,0 {
		compatible = "pci14c3,7603";
		reg = <0x0000 0 0 0 0>;
		mediatek,mtd-eeprom = <&factory 0x0000>;
		ieee80211-freq-limit = <2400000 2500000>;
		led {
			led-active-low;
		};
	};
};

&pcie1 {
	wifi@0,0 {
		compatible = "pci14c3,7662";
		reg = <0x0000 0 0 0 0>;
		mediatek,mtd-eeprom = <&factory 0x8000>;
		ieee80211-freq-limit = <5000000 6000000>;
		led {
			led-sources = <2>;
			led-active-low;
		};
	};
};

&ethernet {
	mtd-mac-address = <&factory 0x4>;
};

&pinctrl {
	state_default: pinctrl0 {
		gpio {
			ralink,group = "jtag", "wdt";
			ralink,function = "gpio";
		};
	};
};
```

## Add Device

Add device definition in `target/linux/ramips/image/mt7621.mk`

```
define Device/iot-7621-d1
  DTS := CW-IOT-7621-D1
  IMAGE_SIZE := $(ralink_default_fw_size_32M)
  DEVICE_TITLE := COMBWAY CW-IOT-7621-D1
  DEVICE_PACKAGES := kmod-usb2 kmod-usb-ohci
endef
TARGET_DEVICES += iot-7621-d1
```

## Add default Network

Add a branch in function `ramips_setup_interfaces` in `target/linux/ramips/base-files/etc/board.d/02_network`

```
  iot-7621-d1)
      ucidef_add_switch "switch0" \
        "1:lan:4" "2:lan:3" "3:lan:2" "0:lan:1" "4:wan" "6@eth0"
    ;;
```
