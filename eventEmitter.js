class EventEmitter{
    consructor(){
        this.events = {}
    }

    subscribeEvent(event, callback){
        this.events[event] = this.events[event] ? this.events[event] : [];
        this.events[event].push(callback);
    }

    unSubscribeEvent(event, callback){
        this.events[event] = this.events[event].filter(eventCallback => callback !== eventCallback)
    }

    emitEvent(event, payload){
        if(this.events[event]){
            this.events[event].forEach(callback => callback(payload))
        }
    }
}

const emitter = new EventEmitter();
export default emitter