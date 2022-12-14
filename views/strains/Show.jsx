
const React = require('react');
const Default = require('../layouts/Default.jsx');
const moment = require('moment')




class Show extends React.Component {
   
    render(){
        const {Strain, Effects,Type, Rating, _id,Comments, Date} = this.props.strain
        const capName = Strain.toUpperCase() 
        const effectsName = Effects.toLowerCase()




        
        
        // convertDate(Date){
        //     Date.moment().format('MMMM Do YYYY, h:mm:ss a');
        // }
    
        return(
        <Default title={`${Strain} Show Page`} strain={this.props.strain}>
            <p>{Strain} is {Type} and according to data, it can make you feel {effectsName}. New thoughts? {Comments} last edited </p>
        </Default>
        )
   } 
}

module.exports = Show