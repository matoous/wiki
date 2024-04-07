# System on chip

## ESP32

### Setup

Install `espup`:

```sh
cargo install espup
```

Install toolchain:

```sh
espup install
```

Generate project:

```sh
cargo generate esp-rs/esp-template
```

Export necessary variables:

```sh
source ~/export-esp.sh
```

Build:

```sh
cargo build
```

Run:

```sh
cargo run
```

### Resources

- [**The Rust on ESP Book**](https://docs.esp-rs.org/book/)
- [espflash](https://github.com/esp-rs/espflash) - A library and command-line tool for flashing Espressif devices.
  ```sh
  ~ espflash board-info
  [2024-04-02T18:06:03Z INFO ] Detected 2 serial ports
  [2024-04-02T18:06:03Z INFO ] Ports which match a known common dev board are highlighted
  [2024-04-02T18:06:03Z INFO ] Please select a port
  [2024-04-02T18:06:10Z INFO ] Serial port: '/dev/tty.usbserial-0001'
  [2024-04-02T18:06:10Z INFO ] Connecting...
  [2024-04-02T18:06:11Z INFO ] Using flash stub
  Chip type:         esp32 (revision v3.1)
  Crystal frequency: 40 MHz
  Flash size:        4MB
  Features:          WiFi, BT, Dual Core, 240MHz, Coding Scheme None
  MAC address:       08:d1:f9:98:e3:4c
  ```
- [Rust on ESP32 STD demo app](https://github.com/ivmarkov/rust-esp32-std-demo)
- [Nostd-wifi-lamp](https://github.com/Nereuxofficial/nostd-wifi-lamp)
