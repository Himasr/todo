//import logo from './logo.svg';
import './App.css';
import  React  from 'react';
import Displaylist from './Displaylist';
import{library} from '@fortawesome/fontawesome-svg-core';
import{faTrash} from'@fortawesome/free-solid-svg-icons';
import { text } from '@fortawesome/fontawesome-svg-core';
library.add(faTrash);

class App extends React.Component
{
  constructor(props){
  super(props);
  this.state={ Items:[],
  currentitem:{ text:'',key:''},};
  }
enterinput=(e)=>{
  this.setState({currentitem:{text:e.target.value,
  key:Date.now(),
},
});
};
addbutton=(e)=>{
  e.preventDefault();
  const newitem=this.state.currentitem;
  console.log(newitem);
  if(newitem!=='')
  {
    const newitems=[newitem,...this.state.Items];
    console.log(newitems);
    this.setState({Items:newitems, 
      currentitem:{text:'',key:'',
    }

  });
}
};
deletetodo=(key)=>{
  const deleteplan=this.state.Items.filter((item)=>item.key !== key);
  this.setState({Items:deleteplan,});
};
makeupdate= (text,key)=>{
  const Items=this.state.Items;
  Items.map((item)=>{
    if( item.key === key)
  {
    item.text=text;
  }
  });
  this.setState({Items:Items,});
};
  render() {
  return(<div className='App'>
    <header>
      <form id="to-do-form" onSubmit={this.addbutton}>
        <br/><br/>
        <h1>TODO LIST</h1><br/>
        <input type="text" placeholder='Todays plan' value={this.state.currentitem.text} onChange={this.enterinput}></input>
        <button type="submit">+</button>
        <Displaylist Items={this.state.Items} deletetodo={this.deletetodo}makeupdate={this.makeupdate}/>
      </form>
    </header>
    </div>
  )
}

 
}

export default App;
