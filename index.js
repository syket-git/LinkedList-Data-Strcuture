class Node{
  constructor(value){
    this.value = value;
    this.next =  null;
  }
}


class SinglyLinkedList{
  constructor(){
    this.head = null; 
    this.tail = null;
    this.length = 0;
  }

  isEmpty(){
    return this.length === 0;
  }

  push(value){
    const newNode = new Node(value);

    if(this.isEmpty()){
      this.head = newNode; 
      this.tail = newNode;
    }else{

      this.tail.next = newNode;
      this.tail = this.tail.next; 
    }
    this.length++
  }

  pop(){

    if(this.isEmpty()){
      return null;
    }else if(this.length === 1){
      let removeNode = this.head; 
      this.head = null;
      this.tail = null;
      this.length = 0;
      return removeNode;
    }else {

      let currentNode = this.head; 
      let lastTail = this.tail; 
      let newLastNode; 


      while(currentNode){

        if(currentNode.next === lastTail){
          newLastNode = currentNode;
          break; 
        }
        currentNode = currentNode.next; 
      }
       this.tail = newLastNode;
      this.tail.next =null; 
        
        this.length--; 
    }

  }


  shift(){
    if(this.isEmpty()){
      return null; 
    }

    if(this.length === 1){
      let removeNode = this.head; 
      this.head = null;
      this.tail = null; 
      this.length = 0; 
      return removeNode;   
    }else{

      const currentNode = this.head;
      this.head = currentNode.next;
      this.length --; 
      return currentNode;
    }
  }

  unshift(value){

    const newNode = new Node(value)

    if(this.isEmpty()){
      this.head = newNode;
      this.tail = newNode;
    }else{
        newNode.next = this.head; 
      this.head = newNode;
  
 
   
      
    }
       this.length++;
  }


  showList(){
    let arr = []
    let currentNode = this.head; 

    while(currentNode){
      arr.push(currentNode.value)
      currentNode =currentNode.next;
    }
    return arr;
  }


  
}


const list = new SinglyLinkedList();

list.push(5);
console.log(list);
list.unshift(1);
console.log(list.showList());
