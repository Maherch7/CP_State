import React from "react";

class Profil extends React.Component{

    constructor(){
        super()
        this.state={
            person: {
                fullName: 'Cristiano Ronaldo',
                bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                imgSrc: 'https://myket.ir/app-icon/d08a2672-dde5-47bb-9d2c-b52006020bf2.png',
                profession: 'Football player'
               },
            count : 0  
        }
    // Creating a field that shows the time interval since the last component was mounted    
    }
    componentDidMount(){
        setInterval(()=> this.setState({count : this.state.count + 1}), 1000)
    }
    render(){
        return(
            <div>
                <h2>{this.state.person.fullName}</h2>
                <h3>{this.state.person.bio}</h3>
                <img src={this.state.person.imgSrc} alt="Not Found"/>
                <h4>{this.state.person.profession}</h4>
                <h1>{this.state.count}</h1>
            </div>
        )
    }
}

export default Profil