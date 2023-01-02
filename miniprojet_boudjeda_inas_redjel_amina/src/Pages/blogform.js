
import React,{ Component } from 'react'

class blogform extends Component{
constructor(props){
	super(props)
	this.state = { subject:'',description:'', date:''}
	this.handleChange = this.handleChange.bind(this)
	this.handleSubmit = this.handleSubmit.bind(this)
}
handleSubmit(event){
	const { subject, description, date} = this.state
	event.preventDefault()
}

handleChange(event){
	this.setState({
	[event.target.name] : event.target.value
	})
}

render(){
	return(
  <body>
	<form onSubmit={this.handleSubmit}>
		<div>
		<label htmlFor='subject'>Subject</label>
		<input
			name='subject'
			placeholder='subject'
			value = {this.state.subject}
			onChange={this.handleChange}
		/>
		</div>
		<div>
		<label htmlFor='description'>Description</label>
		<input
			name='description'
			placeholder='Description'
			value={this.state.description}
			onChange={this.handleChange}
		/>
		</div>
		<div>
		<label htmlFor='date'>Date</label>
		<input
			name='date'
			placeholder='Date'
			value={this.state.date}
			onChange={this.handleChange}
		/>
		</div>
		<div>
		<button>Add New post</button>
		</div>
	</form>

  </body>
	)
}
}

export default blogform
