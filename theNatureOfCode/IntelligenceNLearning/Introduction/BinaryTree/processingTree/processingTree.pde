Node nodeTree;
Pair myList[];
void setup(){
  size(600,600);
  nodeTree = new Node(300,20);
  myList = new Pair[]{
  new Pair(1,"lool"),
  new Pair(6,"super"),
  new Pair(4,"gor"),
  new Pair(2,"generate"),
  new Pair(5,"super"),
  new Pair(3, "ralp"),
  new Pair(7,"emm")};
  
  for(int i=0;i<myList.length;i++){
    //println(myList[i].ix);
    nodeTree.checkNum(myList[i]);
  }
  nodeTree.traverse();
  //print(nodeTree.right.value.ix);
}

void draw(){
  background(250);
    for(int i=0;i<myList.length;i++){
    //println(myList[i].ix);
    nodeTree.checkNum(myList[i]);
  }
}

class Node {
  Node left;
  Node right;
  Pair value;
  color col;
  float xpos;
  float ypos;
  
  Node(float _xpos, float _ypos){
   xpos = _xpos;
   ypos = _ypos;
  }
  
  void checkNum(Pair val){
    //print(val.ix);
    if(this.value==null){
      this.value = val;
      this.display();
    }
    else if(this.value.ix<val.ix){
      if(this.left ==null){
        this.left = new Node(xpos-50,ypos+50);
      }
      this.left.checkNum(val);
    }
    else if(this.value.ix>val.ix){
      if(this.right ==null){
        this.right = new Node(xpos+50,ypos+50);
      }
      this.right.checkNum(val);
    }
   }
   
   void display(){
     pushMatrix();
     fill(0);
     ellipse(xpos, ypos,30,30);
     popMatrix();
   }
   
    void traverse(){
      if(this.left!=null){
        this.left.traverse();
      }
      println(this.value.ix);
      if(this.right!=null){
        this.right.traverse();
      }
      //println(this.value.ix);
      return;
    }
    
  
}

class Pair{
  int ix;
  String info;
  Pair(int _ix, String _info){
    ix = _ix;
    info = _info;
  }

}
