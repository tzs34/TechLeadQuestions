class Node{

    constructor(value){
        this.value = value
        this.next - null
    }

    add(node){
        this.next = node
    }

    remove(node){
        this.next = null
    }

    next(){
        return this.next
    }

    list2LinkedList(list){
        let current = this
        current.value = list[0]

        for (var i = 1; i < list.length; i++){
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
}

let root = new Node(10)
root.list2LinkedList([1,2,3,4])
console.log(root.toString())