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
                            const {Strain, Type, Rating, Effects, Flavor,Description,Comments,_id} = strain
                            return (
                                <li key={_id}>
                                    <a href={`/strains/${_id}`}>
                                    {Strain}</a> is {Type}
                                    
                                     <br/>
                                    
                                    <form method="POST" action={`/strains/${_id}?_method=DELETE`}>
                                        <input type="submit" value={`Delete ${Type} ${Strain}`}/>
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