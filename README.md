<<<<<<< HEAD
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## npm i - D tailwindcss
# npx tailwindcss init
config what file to tracck 
all the file in src which has extention of {js,html} 
after it config app.css as @tailwind base
@tailwind components
@tailwind utilities



head
body 
side-bar
 =>menuItems
main-container
=>button list
=>vedio container
=>vedio card

#npm i @redux/toolkit
npm i react-redux
check with redux devtools


buttom=>dispatch=>reducerfunction(callback)=>slice m change=>selector function=>components 
now connecting it with watch page 
npm i react router dom 
 

children will go wherever there is outlet so we will create outlet below body
used useSearchParams() instead of useParams() 


# search bar 
starting typing and search should start its basically making an api call with each letter typed after every key press buyt this is not the case basically i am about to search for flag just for flag i made 4 api call inthis firstgh three calls are waste so 
# debouncing =>
suppose if jyourar etyping very fast the diff between two key stroke is very less and yyping sloe fdiff betweeeen two key press is high  for eg 
typinhg slow=>200mx
typing fast => 30ms if user kktypes very fast he/she does not require any suggestion this will increase performance
-i phone pro max=>14 *1000=>14000
with debouncing 3 API calls =>3000 it makes a huge difference itn optimization then why are they even showing results
ans to give better User expierence so we hav to build it but with very high optimization 

debouncing with 200ms means that between 2 key stroke if the gap is less than =200mx than decline api call becaus emaybe be knowing what he she is searchin gor youtube deboucing is very less but flipkart debouncing is more and api for youtube is faster

intigrated youtube debouncing algorithm on search bar to search for any vedio over youtubew
calls api call and bind it with state variable in orre to send reseted state wion place of query now how an i set time 

# dry running debouncing 
    key pressed -i ==> it will render the compoent 
    =>calls use effect 
    => start timer
    =>and make api call after 2 ms 
    suppose if user initiated it again by pressing next key "p"==>ip
    it will trigger reconcillation procees so when it haopens old component needs to be unmount any timer of here will not be completed so we have used return for cleaning in useEffecrt so api call for it 
 => re-render compionnt calls use effect again and now anew timer is setup agai nas this is differenct      constant as reconcillation just happened now suppose 2ms is opassed in and there is no key pressed so        it     will make an api call 
 all the other cals before the set timebout sec api will not be called as again rerenderes has happened and that timeout function is cleared this time 

 # to further optimize it using cache to just like youtube use it should store the api call
now when to decide cache we have to use data structure we have to structure cache well in order to not call
bad api 
if cache :[]as an array time complexity to find in an array is O(N)==>cz we have to iterate some methods like 
array.indexOf() and array.include()will optimize it but in same timecomplexity 
==>
# eg of destrucring object 
const info={
    id=1,
    name:"shashank"=========================>//extract id age and name generally we ave to write{info.id},
    age:23,=================================>//{info.name} to overcome this we can destructure them as 
    {age , name , id}=info==================>{name},{age}

}
[i,ip,iph,iphone]==> of created an object it will take O(1) hash map 0(1) isfar better than O(N) as searching in object if we can also  use new Map();
# rest 
let arr=[3,5,6,7,8]
let a=arr[1]
let b=arr[2]
//destructuring ==>
let [a,b,c,d,e]=arr //one way
let [a,b...rest]=arr//rest will be in a object 
console.log(a,b,rest)==>rest will hold object for rest all 

we will use object.assign
search is usinhg ==>
debouncing 
caching 
and live data

n level comments nesting like reddit where can i find data for n level nestingh 

//pagination infinite scroll we will built infinite scroll now 
there ar etwo ways by which we can handle live chat 
challenges of live chat 
1) first challange is to get data live 
2) how to update the ui from live data
at the end of the day a new div is comming with commenting whenever a new comment is comming page is appending with a new div but right now there are 27 k people watching it so if iu keep putting new div page will blow now we have to update ui for live aklso give a better ui for user ui layer has to update 
data layer ==> data layer should get data 

# problkem 1 to get data layer live data 
# update it with current ui layer with live data

============>
data(live)==>how can i handle data of this application if this is not live we can just call an api and our data is done we can do this using web sockets web sockets basically is a two way connection between ui and server its like a handshake once this cionnection is done you can send data from either side,bi-dierection we can send data from ui to backend and ui to backend initial connection takes some time here
2) api polling is abnother way to update live data ibn this ui request it is a unidirectional method it will send data as==>
UI===========>request=======>server(interval) than server in send data in batches
data (live) ui will keep polling data after seconds 

examples what about gmail is gmail a web socket or polling we dont need to regularize our ui in gmail we can also check in evry 10 sec with out backend to go for it so we can do API polling in gmail 

now suppose theres a application like stock market then we will need sockets as there on every mili secopnd we need to be very real time like type it will use sockets like zerodha
lets talk about watsapp can we do api polling like after 10 sec i will get chunk of message now suppose if i am texting someone very fast order can change because api polling like so we use web socket there 

why this live page is not freezing as it has to createwalot of div for every we dont relise it yputube is also doining cleaning work as its deletetinh alkit  of messages afte new messages youtube removed previous messages after 100 200 messahes 


# don't directly start writing map start build manually then use map 