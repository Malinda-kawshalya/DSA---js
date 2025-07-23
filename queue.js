class Queue
{
    constructor()
    {
        this.queue=[];
    }

    enqueue(parameter)
    {
         return this.queue.push(parameter)
    }
    dequeue()
    {    
        if( this.isEmpty())
        {
            return "there are no elemnts in queue"
        }
        return this.queue.shift()
    }
    isEmpty()
    {
         return this.size()===0
    }
    size()
    {
        return this.queue.length
    }
    front()
    {
       if( this.isEmpty())
        {
            return "there are no elemnts in queue"
        }
        return this.queue[0]
    }
printqueue() 
{
    for(let i = 0; i < this.size(); i++) {
        console.log(this.queue[i]);
    }
}
}

let q1 =new Queue()

q1.enqueue(25)
q1.enqueue(255)
q1.enqueue(2566)


console.log(q1.front())

q1.printqueue()
