import {EventEmitter} from "node:events"
            const emitterClass = new EventEmitter()
            const greet = function (args){
                console.log("Hello",args.name)
            }

            emitterClass.addListener("greetUser", greet)

            emitterClass.emit('greetUser', {name:"Gideon"})
