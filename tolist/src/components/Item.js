import React, { Component } from 'react';
import '../styles/style.css';
class Item extends Component {
    state = {  }

    


    render() { 
       console.log(this.props.litem) ;
        return (  
            <div>
                    

               <div style={{width: "500px"}}>
               <table  >
                    <tr>
                        <th>ID</th>
                        <th>Task</th>
                        <th>IS Completed</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                    <tr>
                        <td>
                        { this.props.li.id}
                        </td>
                        <td>
                        { this.props.li.task}
                        </td>
                        <td>
                        { (this.props.li.isCompleted)?"Completed":"Not Completed"}
                        </td>

                        <td>
                        <button  onClick={()=>this.props.onEdit(this.props.li.id)} >Edit</button>
                        </td>
                        <td>
                        <button   onClick={()=>this.props.Del(this.props.li.id)} >Delete</button>
                        
                        </td>
                    </tr>

                </table>
               </div>
                
                
                
                
                
                
            </div>
        );
    }
}
 
export default Item;