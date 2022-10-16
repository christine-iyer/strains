const React = require('react');
const Default = require('../layouts/Default.jsx')


class Index extends React.Component{
    render(){
        const {strains} = this.props
        return(
            <Default title="strains Index Page">
                <ul>
                    {
                        strains.map((strain) => {
                            const {Strain, Type, Rating, Effects, Flavor,Description,Comments,_id,Date} = strain
                            return (
                                <li key={_id}>
                                    <a href={`/strains/${_id}`}>
                                    {Strain} ({Type.charAt(0).toUpperCase()})</a>
                                    
                                     <br/>
                                    
                                    <form method="POST" action={`/strains/${_id}?_method=DELETE`}>
                                        <input type="submit" value={`Delete ${Strain}, a ${Type}??? Really?`}/>
                                    </form>
                                </li>
                            )
                        })
                    }
                </ul>
            </Default>
        )
    }
}

module.exports = Index