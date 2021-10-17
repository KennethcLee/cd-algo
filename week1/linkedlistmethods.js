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
        var newNode = new Node(val);
        // console.log("*** 100A ***", this.head, (!this.head), newNode, val);
        if (!this.head) {
            this.head = newNode;
            return this.head;
        }
        // console.log("*** 100A ***")
        newNode.next = this.head;
        this.head = newNode;
        return this.head;
    }

    removeFront() {
        if(this.head) {
            var removedNode=this.head;
            this.head = removedNode.next
            removedNode.next = null;
            return this.head;
        }
        return this.head;
    }

    front() {
        if (this.head == null) {
            return null;
        } else {
            return this.head.data;
        }
    }

    contains(value) {
        if (this.head !== null) {
            var runner = this.head;
            while (runner) {
                if (runner.data == value) {
                    return true;
                }
                runner = runner.next;
            }
        }
        return false;
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

    display() {
        if (this.head == null) {
            return null;
        } else {
            var runner = this.head;
            var data = [];
            while (runner) {
                data.push(runner.data);
                runner = runner.next;
            }
        }
        return data;
    }

    max() {
        if (this.head == null) {
            return null;
        } else {
            var runner = this.head;
            var max = runner.data;
            while (runner) {
                if (max < runner.data) {
                    max = runner.data;
                }
                runner = runner.next;
            }
            return max;
        }
    }

    min() {
        if (this.head == null) {
            return null;
        } else {
            var runner = this.head;
            var min = runner.data;
            while (runner) {
                if (min > runner.data) {
                    min = runner.data;
                }
                runner = runner.next;
            }
            return min;
        }
    }

    sum() {
        if (this.head == null) {
            return null;
        } else {
            var runner = this.head;
            var sum = 0;
            while (runner) {
                sum += runner.data
                runner = runner.next;
            }
            return sum;
        }
    }

    average() {
        return newList.sum()/newList.length();
    }

    last() {
        if (this.head == null) {
            return null;
        } else {
            var runner = this.head;
            var result = 0;
            if (runner) {
                result = runner.data;
            }
        }
        return result;
    }

    removeBack() {
        if (this.head == null) {
            return null;
        } else {
            var runner = this.head;
            while (runner.next.next) {
                    runner = runner.next
            }
        runner.next = runner.next.next;
        }
        return this.head;
    }

    addBack(val) {
        var newNode = new Node(val);
        if (this.head == null) {
            return null;
        } else {
            var runner = this.head;
            while (runner.next) {
                    runner = runner.next
        }
        runner.next = newNode;
        }
        return this.head;
    }

}

newList= new LinkedList();
newList.addFront(500);
newList.addFront(400);
// console.log(newList.contains(200));
// console.log(newList.front());
// console.log(newList.length());
newList.removeFront(200);
// console.log(newList.contains(200));
// console.log(newList.front());
newList.addFront(300);
newList.addFront(200);
newList.addFront(100);
console.log(newList.display());
// console.log(newList.length());
// console.log(newList.max());
// console.log(newList.min());
// console.log(newList.sum());
// console.log(newList.average());

newList.removeBack();
newList.addBack(600);
console.log(newList.display());