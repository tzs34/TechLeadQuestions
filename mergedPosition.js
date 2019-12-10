class Node{

    constructor(value){
        this.value = value
        this.next - null
    }

    add(node){
        this.next = node
    }

    remove(){
        this.next = null
    }

    next(){
        return this.next
    }

    list2LinkedList(list){
        let current = this

        for (var i = 0; i < list.length; i++){
            let n = new Node(list[i])
            current.add(n)
            current = n
        }
    }

    toString(){
        let n = this
        let output = ''
        while(n.next){
            output += ` ${n.value}`
            n = n.next
        }
        return output
    }

    reverse(){
        let node = this,
        previous,
        tmp;
  
        while (node) {
        // save next before we overwrite node.next!
        tmp = node.next;
    
        // reverse pointer
        node.next = previous;
    
        // step forward in the list
        previous = node;
        node = tmp;
        }
    
        return previous;
    }
}

let example = new Node(0)
example.list2LinkedList([1,2,3,4])
// remove 3
let target = example.next.next.next
example.next.remove()
example.next.add(target)


let rev = example.reverse()


