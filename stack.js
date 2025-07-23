
//reverse a string 
//using stack  
class stack{
    constructor()
    {
        this.stack1=[]
    }
    
    push(element)
    {
        return this.stack1.push(element)
    }
    pop()
    {
        if(this.stack1.length===0)
        {
            return "stack is empty"
        }
        return this.stack1.pop()
    }
    print()
    {
        for(let i=0;i<this.stack1.length;i++)
        {
            console.log(this.stack1[i])
        }
    }
}

let stk = new stack()

stk.push("the")
stk.push("sky")
stk.push("is")
stk.push("blue")

stk.print()

console.log(stk.pop()+" "+ stk.pop()+" "+stk.pop()+" "+stk.pop())

//using array
let arr=["the","sky","is","blue"]

console.log(arr.pop()+" "+ arr.pop()+" "+arr.pop()+" "+arr.pop())


