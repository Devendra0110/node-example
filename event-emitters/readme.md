### Steps to create working event emitter
1. Create a eventEmitter
    - import EventEmitter from `node:events`
    - create an new instance of it

            import {EventEmitter} from "node:events"
            const emitterClass = new EventEmitter()

2. create a listener function and add it to listener list

        const greet = function (args){
            console.log("Hello ", args.name)
        }

        emitterClass.addListener("greetUser", greet)

3. Emit Events

        emitterClass.emit('greetUser', {name:"Gideon"})
