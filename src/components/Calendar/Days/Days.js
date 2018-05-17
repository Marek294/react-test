import React, { Component } from 'react';
import Day from './Day/Day';

class Days extends Component {
    state = {
        currentItem: {}
    }

    componentDidMount () {
        window.addEventListener("dragover",function(e){
            e.preventDefault();
        },false);
        window.addEventListener("drop",e => {
            e.preventDefault();
            this.setState({
                currentItem: {}
        })
          },false);
    }

    onDragEnter = (e, currentItem) => {
        const { currentItem : stateItem } = this.state;
        
        if(!stateItem.id) {
            this.setState({
                currentItem
            })
        }
    }

    onDrop = (e) => {
        const { currentItem } = this.state;
        const topMultiplier = 132;
        const day_number = parseInt(e.target.dataset.day, 10);
        if(e.target.className.includes('day') && currentItem.id) {
            
            const start_hour = parseInt(e.nativeEvent.layerY / topMultiplier, 10);

            const changedItem = {
                ...currentItem,
                start_hour,
                day_number
            }
            
            this.props.onEventEdit(e, changedItem);
        }
        
        this.setState({
            currentItem: {}
        })
    }

    onDragOver = e => {
        e.preventDefault();
    }

    render() {
        const { CalendarDataObj, onEventEdit } = this.props;
        return [1, 2, 3, 4, 5, 6, 7].map(day_number => <Day key={day_number}
                                                            CalendarDataObj={CalendarDataObj} 
                                                            day_number={day_number} 
                                                            onEventEdit={onEventEdit} 
                                                            onDragEnter={this.onDragEnter} 
                                                            onDragOver={this.onDragOver} 
                                                            onDrop={this.onDrop} />)
    }
}

export default Days;