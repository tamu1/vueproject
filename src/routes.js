import Class from './components/Class'
import HelloWorld from './components/HelloWorld'
import RootEmit from './components/RootEmit'

const routes = [
    {
        name: "Class",
        path: "/",
        component: Class
    },
    {
        name: "HelloWorld",
        path: "/hello-world",
        component: HelloWorld
    },
    {
        name: "RootEmit",
        path: "/root-emit",
        component: RootEmit

    }

     ]
export default routes;

