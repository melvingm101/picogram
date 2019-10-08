import React, {Component} from 'react';
import FeedItem from '../components/FeedItem';
import StackGrid from 'react-stack-grid';


export default class Feed extends Component{
    render(){
        let finalList = this.props.postsList.map((post) => (
            <FeedItem key={post.id} currentPost={post} colorTheme={this.props.colorTheme}/>
        ));
        return (
            <div style={{ paddingTop: 100 }}>
                <StackGrid
                    columnWidth={320}
                >
                    {finalList}
                </StackGrid>
            </div>
        );
    }
}