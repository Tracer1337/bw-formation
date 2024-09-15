# Bowers & Wilkins Formation CLI Tool

This is a simple Node.js CLI tool to control Bowers & Wilkins devices, allowing you to play/pause music, adjust bass, treble, and volume, and skip tracks via command line.

## Features

- Play or pause music on your Bowers & Wilkins device.
- Adjust bass, treble, and volume levels.
- Skip to the next track in your playlist.

## Prerequisites

- Node.js (v14 or higher)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/bw-formation.git
   cd bw-formation
   ```

2. Run the installation script:
   ```bash
   ./install
   ```

## Configuration

### 1. Set the `host` value:

The `host` value should be the IP address of your Bowers & Wilkins Formation device. You can obtain the device's IP address from your router’s web interface, which usually lists all connected devices.

Make sure to use the default port (`42425`) as already set in the source code.

In the `bw.mjs` file, set the `host` like this:

```js
const host = "your-device-ip:42425";
```

### 2. Set the `nodeId` value:

To obtain the `nodeId` of your Formation device, send a GET request to the following URL:

```
https://{host}/mesh/nodes
```

This will return a JSON object that includes the `node_id`. The response should look like this:

```json
{
    "node_id": "c9433a9c-2311-4b25-9bad-3759936ace83"
}
```

Copy the value of the `node_id` and set it in the `bw.mjs` file like this:

```js
export const nodeId = "your-node-id";
```

## Usage

### Play/Pause

To toggle play or pause on your device:
```bash
bw play
```

### Skip Track

To skip to the next track:
```bash
bw skip
```

### Adjust Bass

To set the bass level (value between 0 and 6):
```bash
bw set:bass <value>
```

### Adjust Treble

To set the treble level (value between 0 and 6):
```bash
bw set:treble <value>
```

### Adjust Volume

To set the volume level (value between 0 and 100):
```bash
bw set:volume <value>
```
