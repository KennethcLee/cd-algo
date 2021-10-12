class Node {
    constructor(data) {
        this.data=data;
        this.next=null;
    }
}

class LinkedList {
    constructor() {
        this.head=null;
    }

    addFront(val) {
        if(!self.head) {
            self.head = newNode();
            return self;
        }
        var newNode = new Node(val);
        newNode.next = this.head;
        this.head = newNode;
        return this.head;
    }

    removeFront() {
        if(self.head) {
            var removedNode=this.head;
            this.head = removedNode.next
            removedNode.next = null;
            return this.head;

        }
        return self;
    }

    front() {
        if (this.head == null) {
            return null;
        } else {
            return this.head.data;
        }
    }

}