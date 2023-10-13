# EventEmitter in JavaScript

`EventEmitter` is a simplistic class that implements the Observer design pattern in JavaScript, providing mechanisms to subscribe to, emit, and unsubscribe from events, as well as emit them with optional data.

## Table of Contents
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Example Code](#example-code)
- [Installation](#installation)
- [License](#license)

## Getting Started

This JavaScript class allows you to manage and utilize custom events in your application. Use `EventEmitter` to subscribe to an event with a callback, emit an event with optional data, and unsubscribe from an event.

### Class Methods

- **subscribeEvent(event, callback)**: Subscribe to an event.
- **unSubscribeEvent(event, callback)**: Unsubscribe from an event.
- **emitEvent(event, payload)**: Emit an event with optional data.

### Method Parameters

- `event`: A string that identifies the event.
- `callback`: A function to be invoked when the event is emitted.
- `payload`: Optional data to be sent to subscribers when the event is emitted.

## Usage

Here are the primary methods you'll use with `EventEmitter`:

### subscribeEvent

Subscribe to an event with a callback:

```javascript
emitter.subscribeEvent('eventName', callbackFunction);
