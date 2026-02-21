// const heading = React.createElement('h1',{id : "heading" , xyz : "abc"},"hello world guys")
// console.log(heading) // react element this is nothing but a js object 

// const root = ReactDOM.createRoot(document.getElementById('root'))

// root.render(heading)


// aisa karna hai using react
/*
<div id="parent">
    <div id="child">
        <h1>hello world guys</h1>
    </div>
</div>
*/

const parent = React.createElement('div',{id : "parent"},[React.createElement('div',{id:"child"},[React.createElement('h1',{},"hello world guys"),React.createElement('h2',{},"hello world guys 2")]),React.createElement('div',{id:"child"},[React.createElement('h1',{},"hello world guys"),React.createElement('h2',{},"hello world guys 2")])]);

// jab multiple sibling rkhne ho tab [] use karna hai

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(parent)
