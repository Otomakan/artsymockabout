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
  new Pair(7,"emm")
};
  
  for(int i=0;i<myList.length;i++){
    //println(myList[i].ix);
    nodeTree.checkNum(myList[i]);
  }
  nodeTree.traverse();
  //println(nodeTree.left.value.ix);
}

void draw(){
  background(250);
   nodeTree.traverse();
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
    //If node is empty then we assign it a value otherwise we look if new number is smaller
    //if so put it in the left node, else in the right node. We are assuming that no equal values.
    if(this.value==null){
      this.value = val;
      this.display();
    }
    else if(val.ix<this.value.ix){
      if(this.left ==null){
        this.left = new Node(xpos-50,ypos+50);
      }
      this.left.checkNum(val);
    }
    else if(val.ix>this.value.ix){
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
     fill(255);
     text(Integer.toString(this.value.ix),xpos, ypos);
     popMatrix();
   }
   
    void traverse(){
      if(this.left!=null){
        this.left.traverse();
      }
      this.display();
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
