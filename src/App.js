import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../src/components/Header';
import Feed from '../src/components/Feed';
import axios from 'axios';

class App extends Component{
  state = {
    posts: [],
    searchTitle: '',
    currentPosts: [],
    colorTheme: {
      'bg': 'light',
      'variant': 'light',
      'webBg': '#fff',
      'cardBg': '#fff',
      'textColor': 'black'
    }
  }

  capitalize(string) 
  {
      return string.charAt(0).toUpperCase() + string.slice(1);
  }

  componentDidMount(){
    axios.get('https://picsum.photos/v2/list?limit=15')
         .then(res => this.setState({posts: res.data, currentPosts: res.data}));
  }

  searchPost = (title) => {
    let currentList = this.state.posts;
    let newList = [];
    newList = currentList.filter(post => 
        post.author.includes(this.capitalize(title))
    );
    
    this.setState({currentPosts: newList});
  }

  lightMode = () => {
    this.setState({
      colorTheme: {
        'bg': 'light',
        'variant': 'light',
        'webBg': '#fff',
        'cardBg': '#fff',
        'textColor': 'black'
      }
    });

    console.log("Light mode!");
  }

  darkMode = () => {
    this.setState({
      colorTheme: {
        'bg': 'dark',
        'variant': 'dark',
        'webBg': '#1d1e28',
        'cardBg': '#121219',
        'textColor': 'white'
      }
    });

    console.log("Dark mode!")
  }

  render(){
    return (
      <div className="App" style={{ background: this.state.colorTheme.webBg }}>
        <Header searchPost={this.searchPost} lightMode={this.lightMode} darkMode={this.darkMode} colorTheme={this.state.colorTheme} />
        <Feed postsList={this.state.currentPosts} colorTheme={this.state.colorTheme} />
      </div>
    );
  }
}

export default App;
