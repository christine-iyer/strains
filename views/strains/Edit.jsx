const React = require('react')
const Default = require('../layouts/Default.jsx')


class Edit extends React.Component {
    render(){
        const {Strain, Type, Rating, Effects, Flavor,Description,Comments,_id, Date} = this.props.strain
        return (
            <Default title={`${Strain} Edit Page`} fruit={this.props.strain}>
                <form method="POST" action={`/strains/${_id}?_method=PUT`}>
                    Strain: <input type="text" name="Strain" defaultValue={Strain}></input><br/>
                    Type: <input type="text" name="Type" defaultValue={Type}></input><br />
                    Rating: <input type="number" name="Rating" defaultValue={Rating}></input><br/>
                    Effects: <input type="text" name="Effects" defaultValue={Effects}></input><br />
                    Flavor: <input type="text" name="Flavor" defaultValue={Flavor}></input><br/>
                    Description: <input type="text" name="Description" defaultValue={Description}></input><br />
                    Comments: <input type="text" name="Comments" defaultValue={Comments}></input><br />
                    Date: <input type="date" name="Date" defaultValue={Date}></input><br />
                    
                    <input type="submit" value="Edit Strain" />
                </form>
            </Default>
        )
    }
}

module.exports = Edit