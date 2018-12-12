import React, { Component } from 'react';

class RowItem extends Component {
    render() {
        const { content, activedId, show } = this.props;
        return (
            <div className={activedId === content ? 'row__item row__item-active' : 'row__item'} id={`row_item_${content}`}>
                {show} 
            </div>
        )
    }
    }

export default RowItem;