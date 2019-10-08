import React, {Component} from 'react';

export default class FeedItem extends Component{
    render(){
        return (
            <div style={{ borderRadius: 30, boxShadow: "0px 0px 5px 2px grey", margin: 20, background: this.props.colorTheme.cardBg }}>
                <div>
                    <img src={""+this.props.currentPost.download_url} alt="Pic Dp" style={{ width: "100%", borderRadius: 30 }}/>
                </div>
                <div className="d-flex" style={{ paddingTop: 10, paddingBottom: 10, paddingLeft: 10 }}>
                    <div>
                        <img src={""+this.props.currentPost.download_url} alt="Profile Dp" style={{ width: 40, height: 40, borderRadius: 35 }}/>
                    </div>
                    <div className="align-self-center" style={{ paddingLeft: 15, fontSize: 17 }}>
                        <a href={""+this.props.currentPost.url} style={{ textDecoration: 'none', color: this.props.colorTheme.textColor, fontFamily: 'Montserrat' }}>{ this.props.currentPost.author }</a>
                    </div>
                </div>
            </div>
        );
    }
}