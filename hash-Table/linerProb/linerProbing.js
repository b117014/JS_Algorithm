
class LinerProb{
    constructor(){
        this.arr = [];

    }

    insert(val){
        let l = this.arr.length;
        let key = val % l;
        let temp = key;
        while(true){
            if(this.arr[temp]){
                temp++;
                if(temp>=l){
                    temp = 0;
                }
               continue;
            }
            else{
                this.arr[temp] = val;
                break;
            }
        }
    }
}

let hash = new LinerProb();
hash.insert(5);
hash.insert(6);
hash.insert(7);
console.log(hash.arr)