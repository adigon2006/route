import React, { Component } from 'react';
// import axios from 'axios';
// import axios from '../../axios';

import {Route,NavLink,Switch,Redirect} from 'react-router-dom';

// import {Route,Link} from 'react-router-dom'; you can use Link alone remember
import './Blog.css';
import  Posts from './Posts/Posts';
import asynComponent from '../../hoc/asyncComponent';
// import NewPost from './NewPost/NewPost';
// import FullPost from './FullPost/FullPost';

const AsyncNewPost = asynComponent(() => {
    return import('./NewPost/NewPost');
});

class Blog extends Component {
 

state = {
    auth:true
}
 

    render () {
      

        return (
            <div className="Blog">
                <header>
                    <nav>
                    <ul>
                    <li><NavLink to="/posts" 
                    exact
                    activeClassName="my-active"
                    activeStyle={{
                     color:'#fa923f',
                     textDecoration: 'underline'   
                    }}
                    >Posts</NavLink></li>
                    <li><NavLink to={{
                        // relative path pathname:this.props.match.url + 'new-post',
                        pathname: '/new-post',
                        hash: '#submit',
                        search:'?quick-submit:true'
                    }}>New Post</NavLink></li>
                    </ul>
                        </nav>
                    </header>
                {/* <Route path="/" exact render={() => <h1>Home</h1>}/>
                <Route path="/" exact render={() => <h1>Home</h1>}/> */}
                <Switch>
               {this.state.auth ? <Route path="/new-post" exact component={AsyncNewPost} /> : null}
                
                <Route path="/posts" component={Posts} />
                <Route render={() => <h1>Page Not Found</h1>} />
                {/* <Redirect from="/" to="/posts" /> */}
                {/* <Route path="/" component={Posts} /> */}
                </Switch>
                
            </div>
        );
    }
}

export default Blog;