
import React, { Component } from 'react';
import Item from './components/Item';
class ToList extends Component {
  state = { 
      listItem:[],
      id:0,
      task:"",
      detail:"",
      assignTo:"",
      isCompleted:false,
      deadLineDate:Date(),
      isEdit:false

        
   }
   componentDidMount()
   {
   // this.nameInput.focus();
  }
   handlerChange = (e)=>
   {
     let nam= e.target.name;
     let val= e.target.value;
     let t= e.target.type;
     switch (t)
     {
        case 'checkbox':
          this.setState({[nam]:e.target.checked});
          console.log([nam],val,t);break;
          case 'text':
          this.setState({[nam]:val});break;
          default : break;

     }
    
    
   
    
   
   
   }

   handlerAdd = (e) =>
   {
    

     e.preventDefault();
   // console.log(t);
    const listItem = [...this.state.listItem];

   
   if (this.state.isEdit===false) 
   
   {
    const newitem={id:listItem.length+1,task:this.state.task,isCompleted:this.state.isCompleted};
    listItem.push(newitem);
    this.setState({listItem,task:"",isCompleted:false});
   }
   else {
   // console.log(listItem[this.state.id].task); 
   listItem[this.state.id-1].task=this.state.task;
   listItem[this.state.id-1].isCompleted=this.state.isCompleted;
    this.setState({listItem,task:"",id:0,isEdit:false,isCompleted:false});
  }
    
   // console.log(listItem);

   }
handlerDel = (i)=>{

 //console.log(i);
const listItem = [...this.state.listItem];
let listItem1 = listItem.filter((li)=>li.id!==i);
this.setState({listItem:listItem1});

}
handlerEdit = (i)=>
{

  const li=this.state.listItem.filter((li)=>li.id===i)
  console.log(li[0].task,li[0].id,li[0].isCompleted);
  this.setState({isEdit:true});
   
  this.setState({task:li[0].task,id:li[0].id,isCompleted:li[0].isCompleted});
 
}
handlerUpdate = (i) =>
{

  console.log(i);
}
  render() { 
    return ( 
      
        <div>
             
       
                {/* <h1><span>{this.state.task}</span></h1> */}
             <form ref="myForm" className="myForm">
              <input type="text" name="task"
               placeholder="Please Enter the Task"
               value={this.state.task}
                onChange={this.handlerChange}
                />
                <br/>
                <input type="text" name="Detail"
               placeholder="Please Enter Task Detail"
               value={this.state.detail}
                onChange={this.handlerChange}
                />

                <br></br>
                <input type="checkbox" id="IsCopleted" 
                name="isCompleted" value={this.state.isCompleted}
                onChange={this.handlerChange}
                />
                
    <label style={{color:(this.state.isCompleted)? "Green":"Red"}}>{(this.state.isCompleted)?"Completed":"Not Complete"}</label>
                
                 

     
          
        
             <hr/>
              <button onClick={this.handlerAdd}
              title= "Shortcut: a" accesskey = "a">{(this.state.isEdit===false) ? "Add":"Update"}</button>
            
             
          </form>

          {this.state.listItem.map((li)=>
          <Item key={li.id} 
            li={li} 
            Del={this.handlerDel}
            onEdit={this.handlerEdit}/>)}
           
          
        </div>

        

      
     );
  }
}
 
export default ToList;
