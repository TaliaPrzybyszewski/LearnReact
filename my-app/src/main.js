import { useState } from "react";

/*//Using Hooks 

Functions that start with 'use' are called hooks 
useState is a built in hook provided by React 
There are other built in hooks - and you can write your own hooks by combining exisiting ones 

hooks are more restictive than other functions 
you can only call hppls at the top of your components. 

Sharing date between components 

in other examples eahc MyButton had its own independent count, and when each button was click the count for the button clicked changes

to make both mbybutton and components display thr same count and update together, you need to move the state from th eindivital buttons "upwards" to the closest components containg all of them 

move the start up from mybutton into myapp
*/
export default function MyApp(){
    const [count, setCount] = useState(0);

    function handleClick(){
        setCount(count + 1);
    }

    return (
        <div>
            <h1>Counters that update spearetly</h1>
            <MyButton count={count} onClick={handleClick} />
            <MyButton count={count} onClick={handleClick} />
        </div>
    );
}

//the information that is passed down is called props 
//now the myapp component containts the count state and the handleclick event handle 

function MyButton({count, onClick}) {
    return (
        <button onClick={onClick}>
            Clicked {count} times
        </button>
    )
}



/*

//Updating the screen 

//you can get components to remember information adn display it. 

//first import 

import { useState } from "react"; //import at the top 

// Rendering Lists 
const products = [ {title: 'Cabbage', isFruit: false, id:1},
{title: 'Garlic', isFruit: false, id:2},
{title: 'Apple', isFruit: true,id:3},
];

export default function ShoppingList(){
    const listItems = products.map(product => 
        <li key={product.id} style={{color: product.isFruit ? 'magenta' : 'darkgreen '}}
        >
            {product.title}
        </li>
        );
        
        return ( //you can call multiple functions in at once and they will update seperatly
            <div> 
                <MyButton />
                <ul>{listItems}</ul>
                <MyButton2 />
                <MyButton2 /> 
            </div>
        );
    
}


//next delcare a stat inside the component

function MyButton2(){
    const [count, setCount] = useState(0);

    function handleClick(){
        setCount(count + 1);
    }
    return (
        <button onClick={handleClick}>
            Clicked {count} times
        </button>
    )
}

// things you can get from useState - the current stat ie count and the fucntion that lets you update it
// you can give them any names [something, setSomething]
// the first time the button is disaplyed count will be 0 but because 0 is passed to the useState 
//when i wanna change the state call setCount() and pass a new value - ie incremeting the counter on click

// Creating and Nesting components 

// React components are JavaScript functions that return markup 

function MyButton(){
    return(
        <button onClick="myFunction()">I'm a button</button>
        
    );
}

nesting my button into another component
export default function MyApp(){
    return (
        <div> 
            <h1>Welcome to my app</h1>
            <MyButton />
            <AboutPage />
            <Embed />
            <Image />
        </div>
    )
}

// react components must start with a capital letter 
// you can wrap JSX in empty wrappers or in a div, below is an empty wrapper
function AboutPage() {
    return (
        <> 
            <h1>About</h1>
            <p>Hello there. <br /> How do you do?</p>
            <img className="avatar" alt="" />
        </> 
    );
}

//Adding styles 
//you can call sclassnames, and is the same ad html class attributes 
in css .avatar{ border-radius 50%;} 

// JSX allows you to embed variables into your code 

function Embed(){
    var user = "talia";
    return (
        <h1>
            {user.name}
        </h1>
    );
}

function Image() {
    var user = "talia";
    return(
        <img 
        className="avatar"
        src={user.imageUrl}
        alt="" />
    );
}
*/

 // string concatenation
/*
 const user = {
    name: 'Talia Przybyszewski',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
 };
<link rel="stylesheet" href="index.css"></link>;
export default function Profile() {
    return (
        <>
            <h1>{user.name}</h1>
            <img 
            className="avatar"
            src={user.imageUrl}
            alt={'Photo of ' + user.name}
            style={{
                width: user.imageSize,
                height: user.imageSize
            }}
            />
            <h1>Welcome to my app</h1>
            <MyButton />


        </>
        
    );
 }



 // conditional rendering 
BUILD ON THIS MORE ------
function Rendering(){
    let content; 
    if (isLoggedIn) {
       content = <AdminPanel />; 
    } else {
       content = <LoginForm />;
    }
    return  (
       <div> 
           {content}
       </div>
    );
}

// another way to do this  

function RenderingP2() {
    return (
        <div>
            {isLoggedIn ? (
                <AdminPanel />

            ) : (
                <LoginForm />
            )
            }
        </div>
    )
}




// Responding to events 
// you can decalre event handler functions inside your cmoponents 
function MyButton(){
    function handleClick(){
        alert('You clicked me!');
    }
    return (
        <button onClick={handleClick}>
        Click me
        </button>
        );
    }
    */