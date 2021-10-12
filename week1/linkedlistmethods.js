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

    contains(value) {
        if (this.head == null) {
            return false;
        } else {
            var runner = this.head;
            while (runner) {
                if (runner.data == value) {
                    return true;
                }
                runner = runner.next;
            }
        }
    }

    length() {
        if (this.head == null) {
            return 0;
        } else {
            var runner = this.head;
            var count = 0;
            while (runner !== null) {
                count += 1;
                runner = runner.next;
            }
        }
        return count;
    }
}