import React, {Component}from 'react'
import Navbar from '../navbar'
import Header from '../header'
import './app-header.css'

class AppHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scrolling : false
        };
        this.handleScroll = this.handleScroll.bind(this)
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }   

    handleScroll() {
        if (window.scrollY === 0 && this.state.scrolling === true) {
            this.setState({scrolling: false});
        }
        else if (window.scrollY !== 0 && this.state.scrolling !== true) {
            this.setState({scrolling: true});
        }
    }
    
    render() {
        return (
            <div className='header'>
                <Navbar scrolling={this.state.scrolling}/>
                <Header/>
            </div>
        )
    }
}

export default AppHeader