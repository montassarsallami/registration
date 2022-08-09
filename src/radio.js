

import React , {Component} from 'react'
 class Radio extends Component{
state ={
    content :''
   
}

handlechange = (e) => {
this.setState({
    content: e.target.value
    
})
}


handlesubmit= (e) => {
e.preventDefault()
this.props.addtodo(this.state)
this.setState({
    content:''
})
}
 




render(){
  
  let button 
  if (this.state.content ==="Rien")


{
button = 

<div className='box-btn'>
<button className="btn">Submit</button>
</div>
}
else if (this.state.content ==="kkk"){

button =

<div className="">
            <label></label>
            <input
            className='field'
              type="text"
              name="Immatriculation"
              placeholder="Immatriculation"
              value=""
              
            />
          </div>

}
else  if (this.state.content==="ppp"){
  button = 
<div className="">
            <label></label>
            <input
            className='field'
              type="text"
              name="Immatriculation2"
              placeholder="Immatriculation2"
              value=""
              
            />
          </div>

}

    return (
<div>
<div className='select'>
    
    <select name='format' id='format' value= {this.state.content} onChange = {this.handlechange}  >
    <option value ="" selected disabled>choose an option </option>    
<option>Rien</option>
<option>kkk</option>
<option>ppp</option>
 </select>
</div>

  
    
    {button}

</div>
)
}



 }
 export default Radio
