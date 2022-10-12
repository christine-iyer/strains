const React = require('react');
const Default = require('../layouts/Default.jsx')

class Show extends React.Component {
   
    render(){
        const {Strain, Type, Rating, _id} = this.props.strain
        const capName = Strain[0].toUpperCase() + Strain.substring(1)
        return(
        <Default title={`${capName} Show Page`} fruit={this.props.strain}>
            <p>{capName} is {Type} and {Effects}</p>
        </Default>
        )
   } 
}

module.exports = Show