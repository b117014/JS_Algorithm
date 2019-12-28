### Linear Probing

- Due to collision in hash table ,we use Liner Probing to reduce collision in hash table by using hash function
- Linear Probing is used to probe the through the subsequent elements (looping back) of array starting from hash code value (index of the key) where key collision occurs.

##### Method to solve Linear probing

- calculate the hash key. 
    > key = data % size.
- if hashTable[key] is empty, store the value directly. 
    > hashTable[key] = data.
- if the hash index have already some value, check for next index.
- if the next index is available , store the value . Otherwise try for next index.
- Do it above the process untill we find the space.