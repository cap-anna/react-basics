var k=Object.defineProperty,v=Object.defineProperties;var w=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var y=(r,o,s)=>o in r?k(r,o,{enumerable:!0,configurable:!0,writable:!0,value:s}):r[o]=s,c=(r,o)=>{for(var s in o||(o={}))S.call(o,s)&&y(r,s,o[s]);if(f)for(var s of f(o))N.call(o,s)&&y(r,s,o[s]);return r},d=(r,o)=>v(r,w(o));import{j as p,r as m,P as B,$ as x,S as C,R as A,a as T}from"./vendor.91741da5.js";const F=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))g(l);new MutationObserver(l=>{for(const a of l)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&g(u)}).observe(document,{childList:!0,subtree:!0});function s(l){const a={};return l.integrity&&(a.integrity=l.integrity),l.referrerpolicy&&(a.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?a.credentials="include":l.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function g(l){if(l.ep)return;l.ep=!0;const a=s(l);fetch(l.href,a)}};F();const e=p.exports.jsx,t=p.exports.jsxs,R=p.exports.Fragment,b=({scale:r=1})=>t("div",{className:"app","data-id":"logo",style:{transform:"scale("+r+")"},children:[e("div",{className:"react"}),e("div",{className:"dot"})]}),n=r=>e("section",d(c({"data-background-image":r.isMain?"/bg1.svg":void 0,"data-background-transition":r.isMain?"slide":void 0,style:r.isMain?{"--r-heading-color":"white",color:"white"}:{marginTop:20},"data-auto-animate":r.dataAutoAnimate,id:r.id||""},r),{children:r.children})),L=()=>t(R,{children:[t(n,{isMain:!0,dataAutoAnimate:!0,children:[e(b,{scale:2}),e("aside",{className:"notes",children:"Intro Notes."})]}),t(n,{isMain:!0,"data-auto-animate":!0,dataAutoAnimate:!0,children:[e("h2",{children:"React(ive) Way Of Web Development"}),e("div",{style:{marginTop:50},children:e(b,{})}),e("aside",{className:"notes",children:"Intro Notes."})]})]}),M=r=>t(n,{isMain:!0,children:[e("h2",{children:"Table of Contents"}),e("ol",{children:r.chapter.map((o,s)=>e("li",{children:e("a",{href:`#/chapter${s+1}`,style:{color:"white"},children:o.title})},s))})]}),h=r=>{const o=`${r.index}. ${r.title}`;return t(n,{id:"chapter"+r.index,children:[e("div",{style:{position:"absolute",right:0,height:"100%",color:"#0070ad",opacity:.5,fontSize:18},children:o}),t(n,{isMain:!0,children:[e("h2",{children:o}),r.subtitle]}),r.children]})};const i=r=>{const o=m.exports.useRef(null);return m.exports.useEffect(()=>{setTimeout(()=>{o.current&&B.highlightElement(o.current,!1,s=>console.log(s))},0)},[r.children]),e("pre",{className:r.className,"data-line":r.highlightedLines||"",children:e("code",{ref:o,className:`language-${r.language||"tsx"} line-numbers`,children:r.children})})},P=()=>e("svg",{version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 490 490",width:40,height:40,children:e("g",{children:e("path",{d:"M52.8,311.3c-12.8-12.8-12.8-33.4,0-46.2c6.4-6.4,14.7-9.6,23.1-9.6s16.7,3.2,23.1,9.6l113.4,113.4V32.7 c0-18,14.6-32.7,32.7-32.7c18,0,32.7,14.6,32.7,32.7v345.8L391,265.1c12.8-12.8,33.4-12.8,46.2,0c12.8,12.8,12.8,33.4,0,46.2 L268.1,480.4c-6.1,6.1-14.4,9.6-23.1,9.6c-8.7,0-17-3.4-23.1-9.6L52.8,311.3z",fill:"white"})})}),H=`<ul>
  <li *ngFor="let todo of todos">{{todo}}</li>
</ul>
<form (ngSubmit)="addTodo()">
  <!-- Binding -->
  <input name="todotext" [(ngModel)]="todoText">
  <input type="submit" value="Add Todo">
</form>

        `,E=`import { Component } from '@angular/core';
@Component({
  selector: 'app-root\u2019,
  templateUrl: './app.component.html\u2019,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos: string[] = [];
  todoText = \u2019\u2019;
  ngOnInit() {
    const existingTodos = localStorage.getItem('todos\u2019);
    this.todos = JSON.parse(existingTodos as string) || [];
  }
}
`,J=`import { useEffect, useState } from "react";
import "./App.css";
function App() {
  const [todos, setTodos] = useState([]);
  const [todoText, setTodoText] = useState();
  useEffect(() => {
    const existingTodos = localStorage.getItem("todos");
    setTodos(existingTodos ? JSON.parse(existingTodos) : []);
  }, []);
  return (
    <div>
      <ul>
        {todos.map(todo => <li>{todo}</li>)}
      </ul>
      <form onSubmit={() => console.log(...)}>
        <input type="text"
          value={todoText}
          onChange={e => setTodoText(e.target.value)} />
        <input type="submit" value="Add Todo" />
      </form>
    </div>
  );
}
export default App;
`,D=`<template>
  <div>
    <ul>
      <li v-for="todo in todos" v-bind:key="todo">{{ todo }}</li>
    </ul>
    <form v-on:submit.prevent="addTodo">
      <input v-model="todoText" placeholder="What needs to be done?" />
      <button type="submit">Add Todo</button>
    </form>
  </div>
</template>
<script>
export default {
  name: "HelloWorld",
  data: function () {
    return {
      todos: [],
      todoText: "",
    };
  },
  mounted: function () {
    const existingTodos = localStorage.getItem("todos");
    this.todos = JSON.parse(existingTodos) || [];
  },
};
<\/script>

`,I=r=>t(h,d(c({},r),{children:[t(n,{children:[e("h2",{children:"Single Page Applications (SPAs)"}),t("ul",{children:[e("li",{className:"fragment",children:"website or webapp that dynmically rewrites a current page with new data from the server instead of having a web browser load entire new pages"}),e("li",{className:"fragment",children:"Popular examples: Gmail, Netflix, Airbnb, PayPal, ..."}),e("li",{className:"fragment",children:"client-side loading: server has to send less data"})]}),e("img",{src:"./slide-assets/spa.png",alt:"",className:"fragment",width:"60%"}),e("small",{className:"fragment",children:"https://www.bloomreach.com/en/blog/2018/what-is-a-single-page-application"}),e("aside",{className:"notes",children:"general advantages: better UX due to smoothness, improved performance, consistency, reduced dev time, lower infrastructure costs (client does the calculations)"})]}),e(n,{children:e("h2",{children:"Some number crunching"})}),t(n,{children:[e("h2",{children:"Stats at github"}),t("table",{style:{width:"100%"},children:[e("thead",{children:t("tr",{children:[e("th",{}),e("th",{children:"Angular"}),e("th",{children:"React"}),e("th",{children:"Vue"})]})}),t("tbody",{children:[t("tr",{children:[e("td",{children:"Watchers"}),e("td",{children:"3200"}),e("td",{children:"6700"}),e("td",{children:"6300"})]}),t("tr",{children:[e("td",{children:"Stars"}),e("td",{children:"71k"}),e("td",{children:"164k"}),e("td",{children:"200k"})]}),t("tr",{children:[e("td",{children:"Forks"}),e("td",{children:"19k"}),e("td",{children:"33k"}),e("td",{children:"32k"})]}),t("tr",{children:[e("td",{children:"Contributers"}),e("td",{children:"1350"}),e("td",{children:"1550"}),e("td",{children:"380"})]}),t("tr",{children:[e("td",{children:"Used by"}),e("td",{children:"1.7M"}),e("td",{children:"5.7M"}),e("td",{children:"167k"})]})]})]}),e("small",{children:"https://www.codeinwp.com/blog/angular-vs-vue-vs-react/"})]}),t(n,{children:[e("h2",{children:"Github Stars"}),e("img",{src:"./slide-assets/star-history-github.png",width:"60%"}),e("small",{children:"https://star-history.com/#facebook/react&vuejs/vue&angular/angular&sveltejs/svelte&Date"})]}),t(n,{children:[e("h2",{children:"Github Repos and their TechStack"}),e("img",{src:"./slide-assets/github-repos-dependency.png",width:"60%"}),e("small",{children:"https://star-history.com/#facebook/react&vuejs/vue&angular/angular&sveltejs/svelte&Date"})]}),t(n,{children:[e("h2",{children:"npm downloads"}),e("img",{src:"./slide-assets/framework-npm.png"}),e("small",{children:"https://os-system.com/blog/best-front-end-frameworks-for-web-development/"})]}),t(n,{children:[e("h2",{children:"jobs"}),e("img",{src:"./slide-assets/framework-jobs.png"}),e("small",{children:"https://www.codeinwp.com/blog/angular-vs-vue-vs-react/"}),e("aside",{className:"notes",children:"many enterprise setups depend on ng."})]}),e(n,{children:e("h2",{children:"More Details"})}),t(n,{children:[e("h2",{children:"Facts"}),t("table",{style:{width:"100%",fontSize:"1.75rem"},children:[e("thead",{children:t("tr",{children:[e("th",{}),e("th",{children:"Angular"}),e("th",{children:"React"}),e("th",{children:"Vue"})]})}),t("tbody",{children:[t("tr",{children:[e("td",{children:"Type"}),e("td",{children:"Framework"}),e("td",{children:"Library"}),e("td",{children:"Library"})]}),t("tr",{children:[e("td",{children:"Languages"}),e("td",{children:"HTML, SASS, TypeScript"}),e("td",{children:"HTML, CSS, JS/TS"}),e("td",{children:"HTML, CSS, JS/TS"})]}),t("tr",{children:[e("td",{children:"Mobile"}),e("td",{children:"Ionic (CSS needs adaption)"}),e("td",{children:"React Native (HTML needs adaption)"}),e("td",{children:"Vue Native (comiled to react native)"})]})]})]})]}),t(n,{children:[e("h2",{children:"Facts"}),t("table",{style:{width:"100%",fontSize:"1.75rem"},children:[e("thead",{children:t("tr",{children:[e("th",{}),e("th",{children:"Angular"}),e("th",{children:"React"}),e("th",{children:"Vue"})]})}),t("tbody",{children:[t("tr",{children:[e("td",{children:"Upgrading"}),e("td",{children:"Needed every year (major version change). Quite difficult."}),e("td",{children:"No upgrade needed, built for stability. One upgrade command."}),e("td",{children:"Not regulary. Migration tool exists."})]}),t("tr",{children:[e("td",{children:"Payload"}),e("td",{children:"500KB"}),e("td",{children:"35KB"}),e("td",{children:"20KB"})]}),t("tr",{children:[e("td",{children:"Loading time (mean of DOM, Memory & Startup)"}),e("td",{children:"1.54s"}),e("td",{children:"1.17s"}),e("td",{children:"1.11s"})]})]})]})]}),e(n,{children:t("div",{style:{display:"flex",alignItems:"center",flexDirection:"column"},children:[e("div",{children:"HTML, CSS, JS"}),e("div",{style:{paddingTop:20,paddingBottom:10},children:e(P,{})}),t("div",{style:{display:"flex",justifyContent:"space-evenly",width:"100%"},children:[t("div",{style:{background:"grey",borderRadius:"10%",padding:10},children:[e("h5",{children:"React"}),e("small",{children:"App.tsx"})]}),t("div",{style:{background:"grey",borderRadius:"10%",padding:10},children:[e("h5",{children:"Vue"}),e("small",{children:"App.vue"})]}),t("div",{style:{background:"grey",borderRadius:"10%",padding:10},children:[e("h5",{children:"Angular"}),e("small",{children:"App.component.css"}),e("br",{}),e("small",{children:"App.component.html"}),e("br",{}),e("small",{children:"App.component.ts"}),e("br",{}),e("small",{children:"main.module.ts"})]})]})]})}),t(n,{children:[e("h2",{children:"Example: TODO App"}),e("img",{src:"./slide-assets/framework-todo.png"}),e("small",{children:"https://www.youtube.com/watch?v=cuHDQhDhvPE"})]}),t(n,{children:[e("h2",{children:"Angular"}),t("div",{style:{display:"flex",justifyContent:"center",gap:10},children:[e(i,{children:H}),e(i,{children:E})]})]}),t(n,{children:[e("h2",{children:"React"}),e("div",{children:e(i,{children:J})})]}),t(n,{children:[e("h2",{children:"Vue"}),e("div",{children:e(i,{children:D})})]}),t(n,{children:[e("h2",{children:"Same App: 10 Frameworks"}),e("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/cuHDQhDhvPE",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"})]})]})),O=`const Welcome: React.FC = (props: Pros) {
  return <h1>Hello, {props.name}</h1>;
}`,U=`function App = () => {
  const books: Book[] = [
    {id: 1, name: 'Moby Dick', author: 'Herman Melville'},
    {id: 2, name: 'Hamlet', author: 'Shakespeare'},]
  return (
    <div>
    <h1>Booklist</h1>
     {books.map((book, index) => (
       // always define keys when looping, unique identifier for React DOM
       <Book key={index} book={book} /> 
     ))}
    </div>
  )
}
`,j=`const interface Book {
  id: number;
  name: string;
  author: string;
}

const Book: React.FC = (props: Book) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>author: {props.author}</p>
    </div>
  )
}
`,X=`const interface Book {
  id: number;
  name: string;
  author: string;
}

const Book: React.FC = ({ name, author }: Book) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>author: {author}</p>
    </div>
  )
}
`,W=`const Book: FC = ({name="Tom", author="Rowling"}: Book) => {
return (
  <div>
    <h1>{name}</h1>
    <p>author: {author}</p>
  </div>
)}`,$=`const Book: FC = (props: Props) => {
  props.title = "HI"
}`,G=`const Book: React.FC = ({ name, author }: Book) => {
  return (
    <div>
      <h1 className='myHeadline'>{name}</h1>
      <p>author: {author}</p>
    </div>
  )
}
`,V=`const Book: React.FC = ({ name, author }: Book) => {
  return (
    <div>
      <h1 className='myHeadline'>{name}</h1>
      // notice the double curly braces
      <p style={{ color: 'green'}}>author: {author}</p>
    </div>
  )
}
`,_="yarn add --save styled-components",z=`import styled from 'styled-components';
const StyledAuthor = styled.p\`color: 'green'\`
const Book: React.FC = ({ name, author }: Book) => {
  return (<div>
      <h1 className='myHeadline'>{name}</h1>
        // notice the double curly braces
      <StyledAuthor>author: {author}</StyledAuthor>
    </div>
  )}
`,K=`interface Props {
  title: string;
}
export default MyButton: React.FC = (props: Props) => {
    return (
        <button>{props.title}</button>
    )
}`,Y=`<MyButton /> // error
<MyButton title={2} /> // error
<MyButton title='Hit me' /> // ok
`,q=r=>t(h,d(c({},r),{subtitle:e("p",{children:"JavaScript functions, accept Props and return React Elements (JSX)"}),children:[t(n,{children:[e("h2",{children:"Components"}),e(i,{className:"fragment",children:O})]}),t(n,{children:[e("h2",{children:"Properties (aka Props)"}),e("p",{children:"Pass information down the component tree"}),e(i,{className:"fragment",children:K}),e(i,{className:"fragment",children:Y}),e("aside",{className:"notes",children:"Or use any other way of passing JS objects (e.g. destructuring)."})]}),t(n,{children:[e("h2",{children:"Properties (aka Props)"}),e("p",{className:"fragment",children:"Book-List which renders various Books from a Book component"}),e("p",{className:"fragment",children:"The Book component doesn't 'know' what to render so we need to pass the information"})]}),t(n,{children:[e("h2",{children:"Properties (aka Props)"}),e(i,{highlightedLines:"10",children:U}),e("aside",{className:"notes",children:"map: this is how we iterate over arrays in React - use javascript inside the TSX Element (angular ngFor, vue: v-for)"})]}),t(n,{children:[e("h2",{children:"Properties: not destructured"}),e(i,{className:"fragment",highlightedLines:"7",children:j})]}),t(n,{children:[e("h2",{children:"Properties: destructured"}),e(i,{className:"fragment",highlightedLines:"7",children:X})]}),t(n,{children:[e("h2",{children:"Properties: destructured vs not destructured"}),t("ul",{children:[t("li",{className:"fragment",children:["Pro: easier to apply default values",e(i,{highlightedLines:"1",children:W})]}),e("li",{className:"fragment",children:"Con: in case of large components you might get confused which variables are defined in the component scope and which ones are passed as props"})]})]}),t(n,{children:[e("h2",{children:"Important sidenote: Props are immutable"}),t("ul",{children:[t("li",{children:["this means you ",e("strong",{children:"cannot"})," do something like this:"]}),e(i,{children:$})]})]}),t(n,{children:[e("h2",{children:"\u{1F4AA} Exercise"}),t("ul",{children:[e("li",{children:"Let's implement a small app which renders a list of books."}),e("li",{children:"There should be a Book-Component which accepts a property of type 'Book'."})]})]}),t(n,{children:[e("h2",{children:"Let's style our Booklist"}),t("ul",{className:"fragment",children:[e("li",{children:"via css classes"}),e("li",{children:"via inline styling"}),e("li",{children:"CSS in JS"})]})]}),t(n,{children:[e("h2",{children:"className"}),e("p",{className:"fragment",children:"instead of using the 'class'-attribute, React expects 'className'"}),e(i,{className:"fragment",children:G})]}),t(n,{children:[e("h2",{children:"Inline Styling"}),e("p",{className:"fragment",children:"inline styling is also possible via the well known 'style'-attribute"}),e("p",{className:"fragment",children:"notice the double curly braces, conventional CSS-syntax inside"}),e(i,{className:"fragment",children:V})]}),t(n,{children:[e("h2",{children:"CSS in JS"}),t("ul",{className:"fragment",children:[e("li",{children:"Style components using JavsScript"}),e("li",{children:"JavaScript power in CSS"}),t("li",{children:["no React built-in-feature -",">"," external library"]}),t("ul",{className:"fragment",children:[t("li",{children:["most popular:"," ",e("a",{href:"https://styled-components.com/",target:"_blank",rel:"noreferrer",children:"Styled Components"})," ","(36K+ stars on GitHub)"]}),t("li",{children:["also used by"," ",e("a",{href:"https://mui.com/system/styled/",target:"_blank",rel:"noreferrer",children:"MUI"})]})]})]}),t("aside",{className:"notes",children:["hint: when working with MUI you should checkout the latest version of styling, `the system`, which implements"," ",e("a",{href:"https://tailwindcss.com/",target:"_blank",rel:"noreferrer",children:"tailwind"})," ","and makes your styling life a lot easier and esp. faster"]})]}),t(n,{children:[e("h2",{children:"CSS in JS - styled components"}),e(i,{className:"fragment",children:_}),e(i,{className:"fragment",highlightedLines:"2,7",children:z})]}),t(n,{children:[e("h2",{children:"\u{1F4AA} Exercise"}),e("p",{children:"Our booklist isn't very pretty yet ..."})]})]})),Q=`  interface Props {
    userName?: string; // optional
  }
  const SayHi: React.FC = (props: Props) => {
    if (props.userName) {
      return <h1>Hi {props.userName}!</h1>
    } else {
      return <h1>Hello Guest!</h1>
    }
  }
`,Z=`export default LoginButton: React.FC = () => {
    return <button>Login</button>
}`,ee=`export default LogoutButton: React.FC = () => {
    return <button>Logout</button>
}`,te=`const AuthenticationComponent: React.FC = (props: Props) => {
  let button;
  if (props.userName) {
    button = <LogoutButton />
  } else {
    button = <LoginButton />
  }
  return <div>{button}</div>
}
`,ne=`const UsersList: React.FC = (props: Props) => {
  const users = props.users
  return (
    <div>
      <h2>My fancy app</h2>
      {users.length > 0 && (
        <p>Your app is used by {users.length} users.</p>
      )}
    </div>
  )
}
`,re=`const UsersList: React.FC = (props: Props) => {
  const users = props.users
  return (
    <div>
      <h2>My fancy app</h2>
      {users.length > 0 ? (
        <p>Your app is used by {users.length} users.</p>
      ) : (
        <p>No one is interested in your app \u2639\uFE0F</p>
      )}
    </div>
  )
}`,ie=`const UsersList: React.FC = (props: Props) => {
  if (!props.users) {
    return null;
  }
  return (
    <div>
      <h2>My fancy app</h2>
      <p>Your app is used by {users.length} users.</p>
    </div>
  )
}`,oe=r=>t(h,d(c({},r),{subtitle:t("ul",{children:[e("li",{children:"rendering different components"}),e("li",{children:"inline conditions"})]}),children:[t(n,{children:[e("h2",{children:"Component uses different return statements"}),e(i,{className:"fragment",children:Q})]}),t(n,{children:[e("h2",{children:"Conditionally assign component to variable"}),t("div",{className:"fragment",children:[e(i,{className:"",children:Z}),e(i,{className:"",children:ee})]}),e(i,{className:"fragment",children:te})]}),t(n,{children:[e("h2",{children:"Inline Logic - variant 1"}),e(i,{className:"fragment",children:ne})]}),t(n,{children:[e("h2",{children:"Inline Logic - variant 2"}),e(i,{className:"fragment",children:re})]}),t(n,{children:[e("h2",{children:"Prevent component from rendering"}),e(i,{className:"fragment",children:ie})]}),t(n,{children:[e("h2",{children:"\u{1F4AA} Exercise"}),t("ul",{children:[e("li",{children:"Let's extend your Book-Component with a badge that notifies the user when a book is not available in store. (The Book-Component needs to be passed an additional Prop)."}),e("li",{children:"In some cases, there might be no books available for rendering. We should have a Fallback UI for that."})]})]})]})),se=`  const Numbers: React.FC = () => {
    const [bookCounter, setBookCounter] = useState<number>(0);

    return (
      <p>{bookCounter}</p>
      <button onClick={() => setBookCounter(bookCounter + 1)}>
        increase bookCounter
      </button>
    )
  }
`,le=`const [books, setBooks] = useState<Book>()

useEffect(() => {
  fetch(...)
    .then(data => setBooks(data))
}, [])  // empty array = runs at initial render

return (
  <BookList books={books} />
)
`,ae=`const [currentBooks, setCurrentBooks] = useState<Book[]>()
const [selectedBook, setSelectedBook] = useState<Book>()
useEffect(() => {
  const booksByAuthor = props.books
    .filter(book => book.author === props.author)
  setCurrentBooks(booksByAuthor)
  setSelectedBook(booksByAuthor[0])
}, [props.author]) // hook runs when props.author changes

return(
  <div>
    <Select
      options={currentBooks}
      onChange={e => setSelectedBook(e.target.value)}/>
    <p>Books by {props.author.name}</p>
    <BookList books={currentBooks} />
  </div>
)
`,ce=`useEffect(() => {
  BooksApi.subscribeToUpdates(props.user.id);
  /**
   * return function only runs once before 
   * component's lifecycle is being destroyed
   */
  return () => {
    BooksApi.unsubscribeFromUpdates(props.user.id)
  }
}, [])
`,de=r=>t(h,d(c({},r),{subtitle:t("ul",{children:[e("li",{children:"Hooks"}),e("li",{children:"Databinding"}),e("li",{children:"Databinding and Hooks: influence the component's rendering"})]}),children:[t(n,{children:[e("h2",{children:"Hooks"}),e("p",{children:"work with React state and lifecycle features from function components"}),e("p",{children:"most important React Hooks: useState, useEffect, (useContext, useReducer, useCallback, useMemo, ...)"})]}),t(n,{children:[e("h2",{children:"useState-Hook"}),t("ul",{children:[e("li",{className:"fragment",children:"add state management to function components"}),e("li",{className:"fragment",children:"component rerenders when state in hook changes"}),e("li",{className:"fragment",children:"syntax: array destructuring"}),t("ul",{children:[e("li",{className:"fragment",children:"first value is set to the state value"}),e("li",{className:"fragment",children:"second value is used to update the value"})]})]})]}),t(n,{children:[e("h2",{children:"useState-Hook"}),e(i,{children:se})]}),t(n,{children:[e("h2",{children:"\u{1F4AA} Exercise"}),t("ul",{children:[e("li",{children:"Let's implement some buttons, that determine how many books should be rendered inside your book-list."}),e("li",{children:"As you might have already guessed: the useState-hook is our friend!"})]})]}),t(n,{children:[e("h2",{children:"useEffect-Hook"}),t("ul",{children:[e("li",{className:"fragment",children:"perform side effects in components"}),e("li",{className:"fragment",children:"e.g. for data fetching"}),e("li",{className:"fragment",children:"cleanup when a component's lifecycle is over"}),e("li",{className:"fragment",children:"define when to run it with the dependency array"})]})]}),t(n,{children:[e("h2",{children:"useEffect-Hook: Data Fetching"}),e(i,{className:"fragment",children:le})]}),t(n,{children:[e("h2",{children:"useEffect-Hook: Dependency Array"}),e(i,{className:"fragment",highlightedLines:"8",children:ae})]}),t(n,{children:[e("h2",{children:"useEffect-Hook: Unmount of Component"}),e(i,{className:"fragment",children:ce})]}),t(n,{children:[e("h2",{children:"Rules of Hooks"}),t("ul",{children:[e("li",{className:"fragment",children:"only call Hooks at the top level of a component. React will run into problems when calling hooks after determining conditions"}),e("li",{className:"fragment",children:"Don't call Hooks from regular JS functions, the only other valid place are custom Hooks"})]})]}),t(n,{children:[e("h2",{children:"\u{1F4AA} Exercise"}),t("ul",{children:[t("li",{children:["As of now: we'd like to get rid of our dummy book-data and use an"," ",e("a",{href:"https://api.itbook.store/1.0/new",target:"_blank",rel:"noreferrer",children:"API"})," ","instead."]}),e("li",{children:"We will fetch the books to display from the API."}),e("li",{children:`Update conditional rendering in Book.tsx: Place a badge "cheap" when the book's price is less than 30$, else the badge should display "expensive".`}),e("li",{children:"Since data fetching takes some time, we also need to provide a loading spinner that tells the user there's some data fetching in progress since there is no data to display yet."})]})]}),t(n,{children:[e("h2",{children:"Fin \u{1F60E}"}),e("p",{children:"Get in touch!"}),e("a",{rel:"nofollow",href:"https://www.qr-code-generator.com",children:e("img",{src:"https://chart.googleapis.com/chart?cht=qr&chl=MAILTO%3Aanna-maria.auer%40capgemini.com&chs=180x180&choe=UTF-8&chld=L|2",alt:""})})]})]})),he="const element = <h1>Welcome to React!</h1>",ue=`export default MyButton: React.FC = () => {
    return <button>Click Me!</button>
}`,me=`import MyButton from './myButton';
<MyButton /> // ok
<MySuperSpecialButton /> // error
`,pe=`const element = (
    const formatUser = user => user.firstName + user.lastName
    const mySource = "https://mylink.com"
    <div>
      <h1>Hello {formatUser(user)}</h1>
      <img src={mySource}/> 
    </div>
  )
  `,ge=`interface Book {
  id: number;
  title: string;
  author: string;
  releaseDate: string;
  inStore: boolean;
}`,fe=r=>t(h,d(c({},r),{subtitle:e("p",{children:"Templating with JavaScript"}),children:[t(n,{children:[e("h2",{children:"JSX / TSX"}),e("p",{className:"fragment",children:"syntax extension to JavaScript"}),e("p",{className:"fragment",children:"describe what the UI looks like"}),e("p",{className:"fragment",children:"full power of JavaScript"}),e("p",{className:"fragment",children:"produces React elements"}),e("p",{className:"fragment",children:"TSX enhances JSX in terms of type checking"}),e(i,{className:"fragment",children:he})]}),t(n,{children:[e("h2",{children:"JSX / TSX Elements"}),t("ul",{className:"fragment",children:[e("li",{children:"elements are looked up by identifiers"}),e("li",{children:"naming convention starts with capital letter"}),e("li",{children:"You can import them as a component in your app"})]}),e(i,{className:"fragment",children:ue}),e(i,{className:"fragment",children:me})]}),t(n,{children:[e("h2",{children:"JavaScript in Elements"}),e(i,{children:pe}),e("p",{children:"notice the following:"}),t("ul",{children:[t("li",{children:["JSX Elements can have mutlitple children but need ",e("b",{children:"one"})," root element"]}),t("li",{children:["empty tags may be closed immediatly with `","/>","`"]}),t("li",{children:["JavaScript can be used inside JSX (","{}",")"]})]})]}),t(n,{children:[e("h2",{children:"TypeScript"}),t("ul",{children:[e("li",{className:"fragment",children:"adds additional syntax to JavaScript to support a tighter integration with your editor \u27A1\uFE0F early error catching"}),e("li",{className:"fragment",children:"Code converts to JS \u27A1\uFE0F runs anywhere JS runs (brower, node, deno, ...)"})]}),e(i,{className:"fragment",children:ge})]}),t(n,{children:[e("h2",{children:"\u{1F4AA} Exercise"}),t("p",{children:["Let's create a React-App using ",e("a",{href:"https://vitejs.dev/guide/",children:"vite as bundler "})," and play a little bit with TypeScript"]})]})]}));const ye={plugins:[C],slideNumber:!0,history:!0},be=r=>(m.exports.useEffect(()=>{new x(ye).initialize()},[]),e("div",{className:"reveal",children:e("div",{className:"slides",children:r.children})})),ke=()=>{const r=[{title:"Comparison of Frameworks & SPAs in General",component:I},{title:"JSX & TSX",component:fe},{title:"Components & Styling",component:q},{title:"Conditional Rendering",component:oe},{title:"Hooks & Databinding",component:de}];return t(be,{children:[e(L,{}),e(M,{chapter:r}),r.map((o,s)=>e(o.component,{title:o.title,index:s+1},s))]})};A.render(e(T.StrictMode,{children:e(ke,{})}),document.getElementById("root"));
