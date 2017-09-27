import React,{ Component} from 'react';
import ReactDOM from 'react-dom';
import YTsearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY='AIzaSyA5W1E0q0q4gkf9B2pXAswDk2mk_XJQiFM';

class App extends Component {
  constructor(props){
     super(props);

     this.state ={
       videos: [],
       SelectedVideo:null
     };

     YTsearch ({key: API_KEY,term:'arijit singh'}, (videos)=> {
      this.setState({
       videos: videos,
       SelectedVideo:videos[0]
      });
     });
  }
  render() {
      return (
          <div>
          <SearchBar />
          <VideoDetail video={this.state.SelectedVideo} />
          <VideoList
           onVideoSelect ={SelectedVideo => this.setState({SelectedVideo})}
           videos={this.state.videos} />
           </div>
      );
    }
}

ReactDOM.render(<App /> ,document.querySelector('.container') )
