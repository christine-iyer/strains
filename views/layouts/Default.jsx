const React = require('react');

class Default extends React.Component {
    render(){
        const {strain, title} = this.props
        return(
            <html>
                <head>
                    <link rel="stylesheet" href="/css/app.css" />
                    <title>{title}</title>
                </head>
                <body>
                    <nav>
                        <a href="/strains">Go to Home Page For Log Entries</a>
                        <a href="/strains/new">Create a New Log Entry</a>
                        { strain? <a href={`/strains/${strain._id}/edit`}> {strain.Strain} Edit Page </a> : ''}
                        { strain? <a href={`/strains/${strain._id}`}>{strain.Strain} Show Page</a> : ''}
                    </nav>
                    <h1>
                        {title}
                    </h1>
                    {this.props.children}
                </body>
            </html>
        )
    }
}

module.exports = Default