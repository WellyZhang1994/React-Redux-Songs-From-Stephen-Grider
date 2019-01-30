This project is implemented sample code from React Tutorial by Stephen-Grider in Udemy
[https://www.udemy.com/react-redux/learn/v4/content]

### React with Redux
- Provider 
- Store

```sh
index.js

ReactDOM.render(
  <Provider store={createStore(reducers)}>
      <App />
  </Provider>,
  document.querySelector('#root')
);
```

- connect

```sh
  export default connect( #stateToProps ,{ #action })(#component);
```

- Action
- Reducer
- combineReducers

### Component
  - App.js
  - SongDetail.js
  - SongList.js


#### App.js

###### Grid System from Semantic UI
- CDN [https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css]
- Web Site [https://semantic-ui.com/]
- Grid System [https://semantic-ui.com/collections/grid.html]

```sh
const App = () => {
    return (
        <div className="ui container grid">
            <div className="ui row">
                <div className="column eight wide">
                    <SongList />
                </div>
                <div className="column eight wide">
                    <SongDetail />
                </div>
            </div>
        </div>
    )
}
```

#### Action & Reducer

 - Action (return type and payload to reducer, also fetch data to payload)
 - Reducer (combineReducers manage the state key and store value by specific action payload)


