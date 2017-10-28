import VueRouter from "vue-router";
import Index from "../views/Index/index";
import User from "../views/User/user";
import Button from "../views/Components/button";
import Checkbox from "../views/Components/checkbox";

const routes = [
{
  path:'/',
  component:Index
},
{ 
  path:'/user', //这里是path不是指文件目录，而是指子组件 router-link to = "user" 的vue文件
  component:User
},
{ 
  path:'/button',
  component:Button
},
{ 
  path:'/checkbox',
  component:Checkbox
}];
const router = new VueRouter({ mode: 'history', routes});
module.exports = router;