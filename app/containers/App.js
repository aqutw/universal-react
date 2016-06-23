import React, { Component } from 'react';
import { Link } from 'react-router';
import Helmet from 'react-helmet';

class App extends Component {

  render() {
    return (
      <div>
        <Helmet
          title='報導者The Reporter'
          meta={[
            {'char-set': 'utf-8'},
            {'viewport': 'width=device-width, user-scalable=no, maximum-scale=1, initial-scale=1'},
            {'apple-mobile-web-app-capable':'yes'},
            {'name': 'keywords', 'content':'報導者,twreporter,新聞,調查報道,原創報道,深度報道,環境,議題,評論,媒體,新媒體,台灣,兩岸,文化'},
            {'name': 'description', 'content': '報導者致力於具有手作質感的深度報導，並勇於探索網路新工具與呈現方式，重視網路的公共性與開放性，結合各種進步價值與公民力量。'},
            {'og:rich_attachment': "true"},
            {'og:type': "website"},
            {'og:title': "報導者－深入挖掘新聞"},
            {'og:site_name': "報導者"},
            {'og:image': "https://www.twreporter.org/asset/logo.png"},
            {'og:image:type': "image/png" },
            {'og:image:width': "960" },
            {'og:image:height': "720" },
            {'twitter:card': "summary_large_image"},
            {'twitter:image': "https://twreporter.atavist.com/data/files/organization/60826/image/derivative/scale~1200x1200~12003346165-1443167067-82.jpg?1443170619"},
            {'twitter:title': "報導者－深入挖掘新聞"},
            {'twitter:description': ""}
          ]}
          link={[
            {'rel':"canonical", 'href':"https://www.twreporter.org/"},
            {'rel':"alternate", 'type':"application/rss+xml", 'title':"RSS 2.0", 'href':"https://www.twreporter.org/a/rss2.xml"},
            {'rel':"stylesheet", 'type':"text/css", 'href':"https://www.twreporter.org/asset/reset.css"},
            {'href':'/asset/favicon.png', 'rel':'shortcut icon'}
            ]}
        />
        <nav>
          <ul>
            <li><Link to='/'>Users</Link></li>
          </ul>
        </nav>
        {this.props.children}
      </div>
    );
  }
}

export default App;
