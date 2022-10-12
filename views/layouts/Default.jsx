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
                        <a href="/strains">Go to Home Page For strains</a>
                        <a href="/strains/new">Create a New strain</a>
                        { strain? <a href={`/fruits/${strain._id}/edit`}> {strain.name} Edit Page </a> : ''}
                        { strain? <a href={`/strains/${strain._id}`}>{strain.name} Show Page</a> : ''}
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