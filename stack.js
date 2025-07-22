
//reverse a string 
//using stack  
class stack{
    constructor()
    {
        this.stack=[]
    }
    
    push(element)
    {
        return this.stack.push(element)
    }
    pop()
    {
        if(this.stack.length===0)
        {
            return "stack is empty"
        }
        return this.stack.pop()
    }
}

let stk = new stack()

stk.push("the")
stk.push("sky")
stk.push("is")
stk.push("blue")

console.log(stk.pop()+" "+ stk.pop()+" "+stk.pop()+" "+stk.pop())

//using array
let arr=["the","sky","is","blue"]

console.log(arr.pop()+" "+ arr.pop()+" "+arr.pop()+" "+arr.pop())


