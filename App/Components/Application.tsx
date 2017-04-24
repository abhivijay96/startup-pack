import * as React from 'react'
import AppBar from 'material-ui/AppBar';

class Application extends React.Component<undefined, undefined>
{
    render()
    {
       return ( <AppBar
            title="Title"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
        />);
    }
}

export default Application