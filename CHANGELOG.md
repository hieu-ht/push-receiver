# @hieudevx/push-receiver

## 3.1.0

### Minor Changes

- Added automated Heartbeat messages
  - new option `heartbeatIntervalMs` DEFAULT: 5 _ 60 _ 1000
  - new events `ON_HEARTBEAT` - this is emited when socket recieves `ping` or `ack` messages

### Patch Changes

- Updated devDependencies
