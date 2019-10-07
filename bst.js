
class node{
    constuctor(value){
        this.val=value;
        this.left=null;
        this.right=null;
    }
}

class Bst {
    constructor(){
        this.root=null;
    }

    insert(val){
        let temp = new node(val);
        if(this.root===null){
            this.root=temp;
        }else{
            let newTemp = this.root;
            while(newTemp.left!==null || newTemp.right!==null){
            if(newTemp.val<=val){
                if(newTemp.right===null){
                    newTemp.right=temp;
                    return this;
                }else{
                newTemp=newTemp.right;
                }
            }else{
                if(newTemp.left===null){
                    newTemp.left=temp;
                }else{
                newTemp=newTemp.left;
            }
        }
           }
         
        }
    }

    display(){
        let temp = this.root;

    }
}

let first = new Bst();
console.log(first.insert(4));