import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import TabsExampleSwipeable from './TabsExampleSwipeable.jsx';
import {MuiThemeProvider} from "material-ui";

injectTapEventPlugin();

export default class App extends React.Component {
    render() {
        return (
            <MuiThemeProvider>
                <TabsExampleSwipeable/>
            </MuiThemeProvider>
        );
    }
}


