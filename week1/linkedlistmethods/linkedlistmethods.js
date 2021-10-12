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
        this.head=newNode;
        newNode.next= new Node(val);
        return self;
    }

    removeFront() {
        if(self.head) {
            self.head=self.next;
        }
        return self;
    }

    front() {
        console.log(self.head);
    }

}