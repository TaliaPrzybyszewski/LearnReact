// Creating and Nesting components 

// React components are JavaScript functions that return markup 

function MyButton(){
    return(
        <button onClick="myFunction()">I'm a button</button>
        
    );
}

/*nesting my button into another component
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
} */


// Rendering Lists 

const products = [ {title: 'Cabbage', id:1},
{title: 'Garlic', id:2},
{title: 'Apple', id:3},
];

const listItems = products.map(product => 
    <li key={product.id}> 
        {product.title}
    </li>
);

return (
    <ul>{listItems}</ul>
);