
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
                newTemp=newTemp.right;
            }else{
                newTemp=newTemp.left;
            }
           }
           if(newTemp.val<=val){
              newTemp.right=temp;
           }else{
               newTemp.left=temp;
           }
        }
    }
}
