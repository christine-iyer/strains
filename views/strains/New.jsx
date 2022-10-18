const React = require('react')
const Default = require('../layouts/Default.jsx')

class New extends React.Component {
    render(){
        return (
            <Default title="Create A New Log Entry">
            <form method="POST" action="/strains">
                Strain: <input type="text" name="Strain" placeholder='Strain'></input><br/>
                Type: <input type="text" name="Type" placeholder='Type'></input><br/>
                Rating: <input type="number" name="Rating"></input><br/>
                Effects: <input type="text" name="Effects" placeholder='Strain'></input><br/>
                Flavor: <input type="text" name="Flavor" placeholder='Type'></input><br/>
                Description: <input type="text" name="Description"></input><br/>
                Comments: <input type="text" name="Comments"></input><br />
                {/* Date: <input type="date" name="Date"></input><br /> */}
                <input type="submit" value="Submit Strain"></input>
            </form>
            </Default>
        )
    }
}

module.exports = New