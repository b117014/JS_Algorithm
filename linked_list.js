class node{
    constructor(info){
        this.info=info;
        this.next=null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.tail=null;
        this.length=0;
    }
    insert(val){
        let newNode = new node(val);
        if(this.head===null){
              this.head = newNode;
              this.tail=this.head;
              this.length++;
        }else{
            this.tail.next=newNode;
            this.tail=newNode;
            this.length++;
        }
    }
    display(){
        let temp = this.head;
        while(temp!==null){
            console.log(temp.info);
            temp=temp.next;
        }
    }
}

let link = new LinkedList();
link.insert("hell");
link.insert('del')
link.display();