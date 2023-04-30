class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}


class DoublyLinkList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }



  isEmpty(){
    return this.length === 0; 
  }

  push(value){

    const node = new Node(value);

    if(this.isEmpty()){

      this.head = node; 
      this.tail = node; 
      this.length++;
    }else{

      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node; 
      this.length++;
      
    }
             
  }

  pop(){

    if(this.isEmpty()){
      return null;
    }else if(this.length === 1){
      const poppedNode = this.tail;
      this.head = null;
      this.tail =null;
      this.length = 0;
      return poppedNode;
    }else{
      const poppedNode = this.tail;
      this.tail = poppedNode.prev;
      this.tail.next = null; 
      poppedNode.prev= null;
      this.length--;
      return poppedNode;
    }
    
  }

  shift(){
    if(this.isEmpty()){
      return null;
    }else if(this.length === 1){
      this.head = null;
      this.tail = null;
      this.length--;
    }else{
      const shiftNode = this.head;
      this.head = shiftNode.next;
      this.head.prev = null;
      this.length--;
      return shiftNode;
    }
  }

  unshift(value){
  const newNode = new Node(value);

    if(this.isEmpty()){
      this.head = newNode;
      thie.tail = newNode;
      this.length++;
    }else{
     const oldNode = this.head; 
      this.head = newNode;
      this.head.next = oldNode;
      oldNode.prev= newNode;
      this.length++;
    }
  } 


  showList(){
  let arr = [];
  let currentNode = this.head;

  while(currentNode){
    arr.push(currentNode.value);
    currentNode = currentNode.next;
  }

    return arr;

    
  }


  
}


const list = new DoublyLinkList();
list.push(5);
list.push(10);
list.push(20);
list.unshift(1);
list.pop();
list.shift();
console.log(list.showList());


