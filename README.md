<b>Quick guide from writing React Class Components to Functional Components with Hooks </b>
<br/>
1. Initializing and creating state conditions
<pre>
let [effectedItem, setItemEffect] = useState(initial_state)
let [count, setCount] = useState(0)
</pre>
<br/>
Your setState({}) function thus becomes "custom" with Hooks. Rather than say this.setState({count: count+1}) you do setCount(count+1). You call this "custom" setState function to produce the "effect" that causes lifecycle and state changes.

<br/><br/>


2. Updating state and managing lifecycles <br/>
When you call this.setState({}) for a process, you have created a "React side effect" or "effect".<br/>
The general hook you use when change state and cause this effect is useEffect(()=>{}, [variable to watch]).
<br/>
This hook also combines multiple life cycles so it will behave like componentDidMount() and didUpdate() by running once initially and after updates.
<br/>
Example (custom hook):


<pre>

let useInfiniteScroll = () => {
let MAX_POSTS = 500;
let POST_INCREMENT = 25; 

let [loading, setLoading] = useState(false)
let [count, setCount] = useState(POST_INCREMENT)
/*
Back in the day the useState(init) values used to be
let OldSchool = React.createClass({
  getInitialState: f(){}
  componentDidMount: f(){}
  render: f(){return()}

or (a class/functional component)

class Current extends Component{
  constructor(){
    super()
    this.state={}
  }
  
  componentDidMount()

  render()
}

class
*/

let handleScroll = () => {
  setLoading(true) //triggers setLoading to true
}

*/

//useEffect(func, [loading]) loading is being watched, when true: run
useEffect(()=>{ 
  if(!loading) return; //do nothing on componentMount
  if(count+POST_INCREMENT > MAX_POSTS)
    setCount(MAX_POSTS)
  else
    setCount(count+POST_INCREMENT)
   
  setLoading(false) //finish effect until handleScroll is activated again
}, [loading])

useEffect(()=>{
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll)
})

}
</pre>





<b>Lessons learned</b>
<br/>

React Hooks are really good at making concise components. It seems like a great way to turn up React to 11 in the way it handles things for simple and stable components. 

In a nutshell, I want to explore these more to handle more complex components. The only downside seems like it's very Reacty and would be challenging to share with people that come from other programming styles while props and state are rather straightforward to compare and follow.

I want to be careful about the React custom open source hooks like firebase-react-hooks or other hook tooling - it adds a layer of maintenance (React-> React Hook Dependencies -> Custom Hooks). That is a sudden 2 steps away from writing in plain React. I will treat React Hooks similar to how I treat React Portals for now, although the use cases for Hooks are abundantly clear - it makes lifecycle management easier and lifecycles are something you deal with more in react writing than you do with Portals.
