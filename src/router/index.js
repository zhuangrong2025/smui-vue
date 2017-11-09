import VueRouter from "vue-router";
import Pages from "../views/pages";
import Index from "../views/Index/index";
import User from "../views/User/user";
import Button from "../views/Components/button";
import Checkbox from "../views/Components/checkbox";
import Radio from "../views/Components/radio";
import Input from "../views/Components/input";
import Textarea from "../views/Components/textarea";
import Switch from "../views/Components/switch";
import Select from "../views/Components/select";
import Cell from "../views/Components/cell";
import Panel from "../views/Components/panel";
import Article from "../views/Components/article";
import Badge from "../views/Components/badge";
import Flex from "../views/Components/flex";
import Space from "../views/Components/space";
import Grid from "../views/Components/grid";
import Icon from "../views/Components/icon";

VueRouter.prototype.goBack = function(){
  this.isBack = true
  window.history.go(-1)
}

const routes = [
    { 
      path: '/',
      component: Pages,
      children: [
        { path: '',        component:Index},
        { path:'/button',   component:Button },
        { path:'/checkbox', component:Checkbox },
        { path:'/radio',    component:Radio },
        { path:'/input',    component:Input },
        { path:'/textarea',    component:Textarea },
        { path:'/switch',    component:Switch },
        { path:'/select',    component:Select },
        { path:'/cell', name: 'cell', component:Cell },
        { path:'/panel', component: Panel },
        { path:'/article', component: Article },
        { path:'/badge', component: Badge },
        { path:'/flex', component: Flex },
        { path:'/space', component: Space },
        { path:'/grid', component: Grid },
        { path:'/icon', component: Icon },
      ]
    }
  ]
const router = new VueRouter({ mode: 'history', routes});


module.exports = router;
