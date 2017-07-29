import React from 'react';
import {Tab, Tabs} from 'material-ui/Tabs';
// From https://github.com/oliviertassinari/react-swipeable-views
import SwipeableViews from 'react-swipeable-views';

const styles = {
    headline: {
        fontSize: 24,
        marginBottom: 12,
        fontWeight: 400,
    },
    slide: {
        padding: 1,
    },
    tabs: {
        float: 'left',
        width: 500
    }
};

export default class TabsExampleSwipeable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            slideIndex: 0,
        };
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(value) {
        this.setState({
            slideIndex: value,
        });
    };

    render() {
        return (
            <div>
                <Tabs
                    tabItemContainerStyle={{backgroundColor: '#febc81', width: '500px'}}
                    onChange={this.handleChange}
                    value={this.state.slideIndex}
                >
                    <Tab label="Tab One" value={0}/>
                    <Tab label="Tab Two" value={1}/>
                    <Tab label="Tab Three" value={2}/>
                </Tabs>
                <SwipeableViews
                    index={this.state.slideIndex}
                    onChangeIndex={this.handleChange}
                >
                    <Tab>
                        <h2 style={styles.headline}>Tabs with slide effect</h2>
                        Swipe to see the next slide.<br/>
                    </Tab>
                    <Tab style={styles.slide}>
                        slide n°2
                    </Tab>
                    <Tab style={styles.slide}>
                        slide n°3
                    </Tab>
                </SwipeableViews>
            </div>
        );
    }
}