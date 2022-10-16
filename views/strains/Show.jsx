const React = require('react');
const Default = require('../layouts/Default.jsx')

class Show extends React.Component {
   
    render(){
        const {Strain, Effects,Type, Rating, _id,Comments} = this.props.strain
        const capName = Strain.toUpperCase() 
        const effectsName = Effects.toLowerCase()
        return(
        <Default title={`${capName} Show Page`} strain={this.props.strain}>
            <p>{capName} is {Type} and according to data, it can make you feel {effectsName}. New thoughts? {Comments}</p>
        </Default>
        )
   } 
}

module.exports = Show