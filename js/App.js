class App extends React.Component {
    state = {
        name: null,
        message: null,
        comments: Array()
    }

    handleName = event => {
        this.setState({
            name: event.target.value
        })
    }

    handleMessage = event => {
        this.setState({
            message: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({
            comments: this.state.comments.concat(this.state.name,this.state.message)
        })
        console.log(this.state,this.state.comments)
    }

    render() {
        return (
                <form onSubmit={this.handleSubmit}>
                    <p>Say something</p>
                    <label></label>
                    <input type="text" id="name" placeholder="Your Name" onChange={this.handleName} />
                    <label></label>
                    <textarea type="text" id="message" placeholder="Your Comment" onChange={this.handleMessage} />
                    <button>Envoyer à mon JB <span class="heart">&hearts;</span></button>
                </form>
        )
    }
}

ReactDOM.render(<App/>,document.getElementById("app"));