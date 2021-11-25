(this["webpackJsonphowdiy-client"]=this["webpackJsonphowdiy-client"]||[]).push([[0],{109:function(e,t,a){},114:function(e,t,a){},118:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),r=a(34),c=a.n(r),s=(a(88),a(2)),o=a(8),l=a(9),h=a(11),d=a(10),u=(a(89),a(13)),j=a(6),p=a(15),b=a.n(p),m=new function e(){var t=this;Object(o.a)(this,e),this.signup=function(e,a,n,i,r){return t.service.post("/signup",{firstName:e,lastName:a,email:n,username:i,password:r})},this.login=function(e,a){return t.service.post("/login",{email:e,password:a})},this.logout=function(){return t.service.post("/logout")},this.loggedin=function(){return t.service.get("/loggedin")},this.service=b.a.create({baseURL:"".concat("https://howdiy.herokuapp.com/api","/auth"),withCredentials:!0})},g=a(0),O=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={firstName:"",lastName:"",email:"",username:"",password:""},e.handleChange=function(t){var a=t.target,n=a.name,i=a.value;e.setState(Object(j.a)({},n,i))},e.handleSubmit=function(t){t.preventDefault();var a=e.state,n=a.firstName,i=a.lastName,r=a.email,c=a.username,s=a.password;m.signup(n,i,r,c,s).then((function(t){e.setState({firstName:"",lastName:"",email:"",username:"",password:""}),e.props.setUser(t.data,!0)}))},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state,t=e.firstName,a=e.lastName,n=e.email,i=e.username,r=e.password;return Object(g.jsx)("div",{children:Object(g.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(g.jsx)("input",{onChange:this.handleChange,type:"text",name:"firstName",placeholder:"First Name",value:t}),Object(g.jsx)("input",{onChange:this.handleChange,type:"text",name:"lastName",placeholder:"Last Name",value:a}),Object(g.jsx)("input",{onChange:this.handleChange,type:"text",name:"email",placeholder:"Email",value:n}),Object(g.jsx)("input",{onChange:this.handleChange,type:"text",name:"username",placeholder:"Username",value:i}),Object(g.jsx)("input",{onChange:this.handleChange,type:"text",name:"password",placeholder:"Password",value:r}),Object(g.jsx)("button",{type:"submit",children:"Submit"})]})})}}]),a}(n.Component),f=O,y=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={email:"",password:""},e.handleChange=function(t){var a=t.target,n=a.name,i=a.value;e.setState(Object(j.a)({},n,i))},e.handleSubmit=function(t){t.preventDefault();var a=e.state,n=a.email,i=a.password;m.login(n,i).then((function(t){e.setState({email:"",password:""}),e.props.setUser(t.data,!0)}))},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.password;return Object(g.jsx)("div",{children:Object(g.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(g.jsx)("input",{onChange:this.handleChange,type:"text",name:"email",value:t}),Object(g.jsx)("input",{onChange:this.handleChange,type:"text",name:"password",value:a}),Object(g.jsx)("button",{type:"submit",children:"Login"})]})})}}]),a}(n.Component),x=y,v=a(128),w=a(124),C=a(130),N=a(127),I=(a(109),a.p+"static/media/howdiyWhite.b46e4d89.png");var L=function(e){var t=e.isLoggedIn,a=e.user,n=e.setUser;return Object(g.jsx)("div",{children:Object(g.jsx)(v.a,{collapseOnSelect:!0,expand:"lg",className:"navbarBg",children:Object(g.jsxs)(w.a,{className:"navbarMain",children:[Object(g.jsx)(v.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(g.jsxs)(v.a.Collapse,{id:"responsive-navbar-nav",children:[Object(g.jsxs)(C.a,{className:"me-auto",children:[Object(g.jsx)(v.a.Brand,{href:"#home",children:Object(g.jsx)("img",{src:I,width:"100",height:"50",className:"d-inline-block align-top",alt:"React Bootstrap logo"})}),Object(g.jsxs)(N.a,{title:Object(g.jsx)("img",{src:I,alt:"navbarimg",width:"100",height:"50"}),id:"collasible-nav-dropdown",children:[Object(g.jsx)(N.a.Item,{href:"/",children:"Home"}),Object(g.jsx)(N.a.Item,{href:"/join",children:"Join the Community"}),t&&a&&Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(N.a.Divider,{}),Object(g.jsx)(N.a.Item,{href:"/categories",children:"Categories"}),Object(g.jsx)(N.a.Item,{href:"/howdiy/create",children:"Create a Howdiy!"})]})]})]}),Object(g.jsxs)(C.a,{children:[!t&&Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("li",{children:Object(g.jsx)(C.a.Link,{href:"/signup",children:"Sign up"})}),Object(g.jsx)("li",{children:Object(g.jsx)(C.a.Link,{href:"/login",children:"Log in"})})]}),t&&a&&Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)(N.a,{title:"O",id:"collasible-nav-dropdown",children:[Object(g.jsx)(N.a.Item,{href:"/profile",children:"Profile"}),Object(g.jsx)(N.a.Divider,{}),Object(g.jsx)(N.a.Item,{href:"/",onClick:function(){m.logout().then((function(){n(null,!1)}))},children:"Log out"})]})})]})]})]})})})},S=a(32),k=new function e(){var t=this;Object(o.a)(this,e),this.getCategoryList=function(e){return t.service.get("/categorylist/".concat(e))},this.createHowdiy=function(e){var a=e.category,n=e.descriptiveName,i=e.ingredients,r=e.preparation,c=e.productImg,s=e.isGiftable,o=e.gallery,l=e.timeOfPreparation,h=e.costRating,d=e.difficultyRating;return t.service.post("/create",{category:a,descriptiveName:n,ingredients:i,preparation:r,productImg:c,isGiftable:s,gallery:o,timeOfPreparation:l,costRating:h,difficultyRating:d})},this.service=b.a.create({baseURL:"".concat("https://howdiy.herokuapp.com/api","/recipes"),withCredentials:!0})},F=(a(65),a(114),function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={myHowdiys:null,isLoadingHowdiy:!0},e.deleteHowdiy=function(t){b.a.delete("".concat("https://howdiy.herokuapp.com/api","/recipes/delete/").concat(t),{withCredentials:!0}).then((function(a){var n=e.state.myHowdiys.filter((function(e){return e._id!==t}));e.setState({myHowdiys:n})})).catch((function(t){console.log(t.response.status),403===t.response.status&&e.props.history.push("/login")}))},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;b.a.get("".concat("https://howdiy.herokuapp.com/api","/profile/recipes"),{withCredentials:!0}).then((function(t){e.setState({myHowdiys:t.data,isLoadingHowdiy:!1})})).catch((function(t){console.log(t.response.status),403===t.response.status&&e.props.history.push("/login")}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.myHowdiys,n=t.isLoadingHowdiy,i=this.props.user;return Object(g.jsxs)("div",{children:[i&&Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("div",{className:"profileSection",children:[Object(g.jsxs)("h1",{children:["Howdiy ",i.username,"!"]}),Object(g.jsx)("div",{className:"profileChild"}),Object(g.jsxs)("div",{className:"profileText",children:[Object(g.jsxs)("h6",{children:[" First Name: ",i.firstName]}),Object(g.jsxs)("h6",{children:[" Last Name: ",i.lastName]}),Object(g.jsxs)("h6",{children:[" Username: ",i.username]}),Object(g.jsxs)("h6",{children:[" Logging in with: ",i.email]})]})]}),Object(g.jsx)("br",{}),Object(g.jsx)("hr",{}),Object(g.jsx)("h2",{className:"profileSection",children:" Your Howdiys:"})]}),n&&Object(g.jsx)("h1",{children:"...isLoading!"}),!n&&a.map((function(t){return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)("div",{className:"howdiyListed",children:Object(g.jsxs)("div",{className:"howdiyListChild",children:[Object(g.jsx)("img",{className:"howdiyListImg",src:t.productImg,alt:"productImage"}),Object(g.jsxs)("div",{className:"howdiyListText",children:[Object(g.jsx)("h4",{children:t.funName}),Object(g.jsx)("h5",{children:t.descriptiveName}),Object(g.jsx)(S.b,{className:"link",to:"/howdiy/".concat(t._id),children:"VIEW"},t._id),Object(g.jsx)("hr",{}),Object(g.jsx)(S.b,{className:"link",to:"/howdiy/edit/".concat(t._id),children:"EDIT"}),Object(g.jsx)("br",{}),Object(g.jsx)("button",{className:"link",onClick:function(){e.deleteHowdiy(t._id)},children:"Delete"})]})]})})})}))]})}}]),a}(n.Component)),R=F,P=a.p+"static/media/categoriesTitle.4a1f399b.png",H=a(125),D=a(126),G=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={categories:["Facecare","Bodycare","Housecare","Play","Food","Drink"]},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state.categories;return Object(g.jsxs)("div",{children:[Object(g.jsx)("img",{src:P,alt:"title",className:"title"}),Object(g.jsx)("div",{className:"listContainer",children:Object(g.jsx)(w.a,{children:Object(g.jsx)(H.a,{className:"justify-content-md-center",children:e.map((function(e){return Object(g.jsx)(D.a,{xs:!0,lg:"4",children:Object(g.jsx)(S.b,{activeClassName:"navlink",className:"buttonStyles",to:"/".concat(e.toLowerCase(),"/howdiy"),children:e})},e)}))})})})]})}}]),a}(n.Component),U=G,A=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={search:""},e.handleChange=function(t){var a=t.target,n=a.name,i=a.value;console.log(n),e.setState(Object(j.a)({},n,i)),e.props.handleFilter(i)},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state.search;return Object(g.jsx)("div",{children:Object(g.jsx)("label",{htmlFor:"search",children:Object(g.jsx)("input",{type:"text",name:"search",id:"search-form",className:"search-input",placeholder:"Search for...",value:e,onChange:this.handleChange})})})}}]),a}(n.Component),B=A,q=a.p+"static/media/housecareGrey.2beb45b1.png",T=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={howdiyList:null,filteredList:null,isLoading:!0,difficultyRating:null,costRating:null,createdBy:null},e.handleFilter=function(t){var a=e.state.howdiyList.filter((function(e){return e.descriptiveName.toLowerCase().includes(t.toLowerCase())}));e.setState({filteredList:a})},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.category;k.getCategoryList(t).then((function(t){e.setState({howdiyList:t.data,filteredList:t.data,createdBy:t.data,costRating:t.data,difficultyRating:t.data,isLoading:!1})})).catch((function(t){e.props.history.push("/500")}))}},{key:"render",value:function(){var e=this.props.match.params.category,t=this.state,a=t.filteredList,n=t.isLoading,i=t.costRating,r=t.difficultyRating;Math.round(i),Math.round(r);return Object(g.jsxs)("div",{children:[Object(g.jsx)("h1",{children:"".concat(e[0].toUpperCase()).concat(e.slice(1))}),Object(g.jsx)("img",{src:q,alt:"title",className:"title"}),Object(g.jsx)(B,{handleFilter:this.handleFilter}),n&&Object(g.jsx)("h1",{children:"is loading"}),!n&&a.map((function(e){return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)("div",{className:"howdiyListed",children:Object(g.jsxs)("div",{className:"howdiyListChild",children:[Object(g.jsx)("img",{className:"howdiyListImg",src:e.productImg,alt:"productImage"}),Object(g.jsxs)("div",{className:"howdiyListText",children:[Object(g.jsx)("h4",{children:e.funName}),Object(g.jsx)("h5",{children:e.descriptiveName}),Object(g.jsx)(S.b,{className:"link",to:"/howdiy/".concat(e._id),children:"VIEW"},e._id),Object(g.jsx)("hr",{}),Object(g.jsxs)("p",{children:["Created by: ",e.createdBy.username]})]})]})})})}))]})}}]),a}(n.Component),_=T,M=a(27),Y=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={name:"",quantity:0,measure:""},e.handleChange=function(t){var a=t.target,n=a.name,i=a.value;e.setState(Object(j.a)({},n,i))},e.handleSubmit=function(t){t.preventDefault();var a=e.state,n={name:a.name,quantity:a.quantity,measure:a.measure};e.props.handleAddIngredient(n),e.setState({name:"",quantity:0,measure:""})},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state,t=e.name,a=e.quantity,n=e.measure;return Object(g.jsx)("div",{children:Object(g.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(g.jsx)("label",{htmlFor:"name",children:"Name"}),Object(g.jsx)("input",{onChange:this.handleChange,type:"text",name:"name",value:t}),Object(g.jsx)("br",{}),Object(g.jsx)("label",{htmlFor:"quantity",children:"Quantity"}),Object(g.jsx)("input",{onChange:this.handleChange,type:"number",name:"quantity",value:a}),Object(g.jsx)("br",{}),Object(g.jsx)("label",{htmlFor:"measure",children:"Measure"}),Object(g.jsx)("input",{onChange:this.handleChange,type:"text",name:"measure",value:n}),Object(g.jsx)("br",{}),Object(g.jsx)("button",{children:" Add New Ingredient "})]})})}}]),a}(n.Component),E=Y,J=a(68),K=a.n(J),W=a(129),V=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={funName:"",categoryList:["facecare","bodycare","housecare","play","food","drink"],category:"",descriptiveName:"",ingredients:[],preparation:[],step:0,description:"",productImg:"",isGiftable:!0,gallery:[],galleryImg:"",timeOfPreparation:0,costRating:0,difficultyRating:0,imageUrl:""},e.handleChange=function(t){var a=t.target,n=a.name,i=a.type,r=a.checked,c=a.value;e.setState(Object(j.a)({},n,"checkbox"===i?r:c))},e.handleSubmit=function(t){t.preventDefault();var a=e.state,n=a.category,i=a.descriptiveName,r=a.ingredients,c=a.preparation,s=a.productImg,o=a.isGiftable,l=a.gallery,h=a.timeOfPreparation,d=a.costRating,u=a.difficultyRating,j=a.createdBy,p=K()();b.a.post("".concat("https://howdiy.herokuapp.com/api","/recipes/create"),{category:n,funName:p,descriptiveName:i,ingredients:r,preparation:c,productImg:s,isGiftable:o,gallery:l,timeOfPreparation:h,costRating:d,difficultyRating:u,createdBy:j},{withCredentials:!0}).then((function(){return e.props.history.push("/")})).catch((function(){return e.props.history.push("/500")}))},e.handleAddIngredient=function(t){var a=e.state.ingredients,n=[].concat(Object(M.a)(a),[t]);e.setState({ingredients:n})},e.handleDeleteIngredient=function(t){b.a.delete("".concat("https://howdiy.herokuapp.com/api","/addIngredient/delete/").concat(t),{withCredentials:!0}).then((function(a){var n=e.state.commentList.filter((function(e){return e._id!==t}));e.setState({ingredients:n})})).catch((function(t){console.log(t.response.status),403===t.response.status&&e.props.history.push("/login")}))},e.handlePreparationSubmit=function(t){t.preventDefault();var a=e.state,n=(a.step,a.description),i=a.preparation,r=i.length+1;e.setState({step:r});var c=[].concat(Object(M.a)(i),[{step:r,description:n}]);e.setState({preparation:c})},e.handleImageUpload=function(t){e.setState({imageIsUploading:!0});var a=new FormData;a.append("imageUrl",t.target.files[0]),b.a.post("".concat("https://howdiy.herokuapp.com/api","/upload"),a).then((function(t){e.setState({imageUrl:t.data.imagePath})})).catch((function(){return e.props.history.push("/500")}))},e.handleGallerySubmit=function(t){t.preventDefault();var a=e.state,n=a.galleryImg,i=a.gallery,r=[].concat(Object(M.a)(i),[n]);e.setState({gallery:r})},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=K()();this.setState({funName:e})}},{key:"render",value:function(){var e=this,t=this.state,a=t.funName,n=t.descriptiveName,r=t.preparation,c=(t.productImg,t.isGiftable),s=t.gallery,o=t.galleryImg,l=t.timeOfPreparation,h=t.costRating,d=t.difficultyRating,u=t.description,j=t.ingredients,p=t.imageUrl;return Object(g.jsx)("div",{children:Object(g.jsxs)(W.a,{defaultActiveKey:"0",children:[Object(g.jsxs)(W.a.Item,{eventKey:"0",children:[Object(g.jsx)(W.a.Header,{children:"Part One"}),Object(g.jsx)(W.a.Body,{children:Object(g.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(g.jsx)("label",{htmlFor:"category",children:"Category"}),Object(g.jsxs)("select",{onChange:this.handleChange,name:"category",id:"category-select",children:[Object(g.jsx)("option",{value:"",children:"Please select the category of your product"}),Object(g.jsx)("option",{value:"facecare",children:"Facecare"}),Object(g.jsx)("option",{value:"bodycare",children:"Bodycare"}),Object(g.jsx)("option",{value:"housecare",children:"Housecare"}),Object(g.jsx)("option",{value:"play",children:"Play"}),Object(g.jsx)("option",{value:"food",children:"Food"}),Object(g.jsx)("option",{value:"drink",children:"Drink"})]}),Object(g.jsx)("br",{}),Object(g.jsx)("label",{htmlFor:"descriptiveName",children:"Descriptive Name"}),Object(g.jsx)("input",{onChange:this.handleChange,type:"text",name:"descriptiveName",value:n}),Object(g.jsx)("br",{}),Object(g.jsx)("label",{htmlFor:"funName",children:"Fun Name"}),Object(g.jsx)("input",{value:a,readonly:!0}),Object(g.jsx)("label",{htmlFor:"imageUrl",children:"Display Image for your Product:"}),p&&Object(g.jsx)("img",{htmlFor:"imageUrl",src:p,alt:"productImg"}),Object(g.jsx)("input",{onChange:this.handleImageUpload,type:"file"}),Object(g.jsx)("br",{}),Object(g.jsx)("br",{}),Object(g.jsx)("br",{}),Object(g.jsx)("label",{htmlFor:"isGiftable",children:"is Giftable"}),Object(g.jsx)("input",{onChange:this.handleChange,type:"checkbox",name:"isGiftable",checked:c}),Object(g.jsx)("br",{}),Object(g.jsx)("label",{htmlFor:"timeOfPreparation",children:"Rate how time consuming the Howdiy is"}),Object(g.jsx)("input",{onChange:this.handleChange,type:"number",name:"timeOfPreparation",value:l}),Object(g.jsx)("br",{}),Object(g.jsx)("label",{htmlFor:"costRating",children:"Rate how cost intense the Howdiy is"}),Object(g.jsx)("input",{onChange:this.handleChange,type:"number",max:3,min:1,name:"costRating",value:h}),Object(g.jsx)("br",{}),Object(g.jsx)("label",{htmlFor:"difficultyRating",children:"Rate how difficult the Howdiy is"}),Object(g.jsx)("input",{onChange:this.handleChange,type:"number",name:"difficultyRating",value:d}),Object(g.jsx)("button",{type:"submit",children:"Create your Howdiy"})]})})]}),Object(g.jsxs)(W.a.Item,{eventKey:"1",children:[Object(g.jsx)(W.a.Header,{children:"Part Two"}),Object(g.jsxs)(W.a.Body,{children:[Object(g.jsx)("label",{htmlFor:"ingredientsTable",children:"Here are your ingredients:"}),Object(g.jsx)("ul",{children:j.map((function(t){return Object(g.jsx)(i.a.Fragment,{children:Object(g.jsxs)("li",{children:[t.name," ",t.quantity," ",t.measure," ",Object(g.jsx)("button",{onClick:function(){e.handleDeleteIngredient(t._id)},children:"Delete"})]})},t.name+t.quantity)}))}),Object(g.jsx)(E,{handleAddIngredient:this.handleAddIngredient}),Object(g.jsx)("br",{}),Object(g.jsx)("label",{htmlFor:"preparationTable",children:"Here are your Preparation Steps:"}),Object(g.jsx)("ul",{children:r.map((function(e){return Object(g.jsxs)(i.a.Fragment,{children:[Object(g.jsx)("li",{children:e.step}),Object(g.jsx)("li",{children:e.description})]},e.step+e.description)}))}),Object(g.jsxs)("form",{onSubmit:this.handlePreparationSubmit,children:[Object(g.jsx)("input",{onChange:this.handleChange,placeholder:"Please explain this step here ... ",type:"text",name:"description",value:u}),Object(g.jsx)("button",{type:"submit",children:"Add a Preparation Step"})]})]})]}),Object(g.jsxs)(W.a.Item,{eventKey:"2",children:[Object(g.jsx)(W.a.Header,{children:"Part Three"}),Object(g.jsxs)(W.a.Body,{children:[Object(g.jsx)("label",{htmlFor:"galleryTable",children:"Here is your Gallery:"}),Object(g.jsx)("ul",{children:s.map((function(e){return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)("li",{children:Object(g.jsx)("img",{src:e,alt:"galleryImg"})},e)})}))}),Object(g.jsxs)("form",{onSubmit:this.handleGallerySubmit,children:[Object(g.jsx)("label",{for:"galleryImg",htmlFor:"gallery",alt:"Your-uploaded-Howdiys",children:"Gallery of your Howdiys:"}),Object(g.jsx)("input",{onChange:this.handleChange,type:"file",name:o}),Object(g.jsx)("button",{type:"submit",children:"Add a Photo to your Gallery"})]})]})]})]})})}}]),a}(n.Component),z=V,Q=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={funName:null,descriptiveName:null,ingredients:[],preparation:[],productImg:null,isGiftable:!1,gallery:[],timeOfPreparation:0,costRating:0,difficultyRating:0,createdBy:null,isLoadingHowdiy:!0,isLoadingComments:!0,input:"",commentList:null,name:"",quantity:"",measure:""},e.handleChange=function(t){var a=t.target,n=a.name,i=a.value;e.setState(Object(j.a)({},n,i))},e.handleCommentSubmit=function(t){t.preventDefault();var a=e.state,n=a.input,i=a.commentList;b.a.post("".concat("https://howdiy.herokuapp.com/api","/comments/create/").concat(e.props.match.params.id),{input:n},{withCredentials:!0}).then((function(t){var a=Object(s.a)({},t.data);a.createdBy=Object(s.a)({},e.props.user),console.log(a);var n=[].concat(Object(M.a)(i),[a]);e.setState({commentList:n})})).catch((function(){return e.props.history.push("/500")}))},e.handleIngredientSubmit=function(t){t.preventDefault();var a=e.state,n=a.name,i=a.quantity,r=a.measure,c=a.ingredients,s=[].concat(Object(M.a)(c),[{name:n,quantity:i,measure:r}]);b.a.post("".concat("https://howdiy.herokuapp.com/api","/recipes/").concat(e.props.match.params.id,"/addIngredient"),{name:n,quantity:i,measure:r},{withCredentials:!0}).then((function(){e.setState({ingredients:s,name:"",quantity:"",measure:""})})).catch((function(){return e.props.history.push("/500")}))},e.handleDeleteComment=function(t){b.a.delete("".concat("https://howdiy.herokuapp.com/api","/comments/delete/").concat(t),{withCredentials:!0}).then((function(a){var n=e.state.commentList.filter((function(e){return e._id!==t}));e.setState({commentList:n})})).catch((function(t){console.log(t.response.status),403===t.response.status&&e.props.history.push("/login")}))},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;b.a.get("".concat("https://howdiy.herokuapp.com/api","/recipes/howdiy/").concat(this.props.match.params.id),{withCredentials:!0}).then((function(t){var a=t.data,n=a.funName,i=a.descriptiveName,r=a.ingredients,c=a.preparation,s=a.productImg,o=a.isGiftable,l=a.gallery,h=a.timeOfPreparation,d=a.costRating,u=a.difficultyRating,j=a.createdBy;e.setState({funName:n,descriptiveName:i,ingredients:r,preparation:c,productImg:s,isGiftable:o,gallery:l,timeOfPreparation:h,costRating:d,difficultyRating:u,createdBy:j,isLoadingHowdiy:!1})})).catch((function(t){e.props.history.push("/500")})),b.a.get("".concat("https://howdiy.herokuapp.com/api","/comments/all/").concat(this.props.match.params.id),{withCredentials:!0}).then((function(t){e.setState({commentList:t.data,isLoadingComments:!1})})).catch((function(t){e.props.history.push("/500")}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.funName,n=t.descriptiveName,i=t.ingredients,r=(t.preparation,t.productImg,t.isGiftable),c=(t.gallery,t.timeOfPreparation),s=t.costRating,o=t.difficultyRating,l=t.createdBy,h=t.isLoadingHowdiy,d=t.isLoadingComments,u=t.input,j=t.commentList,p=t.name,b=t.quantity,m=t.measure,O=this.props.user;return Object(g.jsxs)(g.Fragment,{children:[h&&Object(g.jsx)("h1",{children:"...isLoading!"}),!h&&Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("h5",{children:["Descriptive Name: ",n]}),Object(g.jsxs)("h5",{children:["Also Known As: ",a," "]}),Object(g.jsxs)("h5",{children:[" ","Cost Rating xxx ",s," / Difficulty Rating xxx"," ",o," "]}),Object(g.jsxs)("h5",{children:[" Created By: ",l.username," "]}),Object(g.jsxs)("h5",{children:[" ","Time to prepare: ",c," mins (to show in hours divide /60)"," "]}),Object(g.jsxs)("h5",{children:[" is Giftable: ",r?"Yes!":"Possibly Not"]}),Object(g.jsx)("h5",{children:"Ingredients:"}),Object(g.jsx)("ul",{children:i.map((function(e){return Object(g.jsxs)("li",{children:[e.name," ",e.quantity,e.measure]},e)}))}),Object(g.jsxs)("form",{onSubmit:this.handleIngredientSubmit,children:[Object(g.jsx)("input",{onChange:this.handleChange,placeholder:"Your ingredient here",type:"text",name:"name",value:p}),Object(g.jsx)("input",{onChange:this.handleChange,placeholder:"Its quantity here",type:"text",name:"quantity",value:b}),Object(g.jsx)("input",{onChange:this.handleChange,placeholder:"Unit of measure",type:"text",name:"measure",value:m}),Object(g.jsx)("button",{type:"submit",children:"Add"})]})]}),Object(g.jsx)("hr",{}),Object(g.jsxs)("form",{onSubmit:this.handleCommentSubmit,children:[Object(g.jsx)("input",{onChange:this.handleChange,placeholder:"write here...",type:"text",name:"input",value:u}),Object(g.jsx)("button",{type:"submit",children:"Add a comment"})]}),d&&Object(g.jsx)("h1",{children:"...isLoading!"}),!d&&j.map((function(t){return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("p",{children:[" ",t.input," "]}),Object(g.jsx)("h6",{children:t.createdBy.username}),Object(g.jsx)("h6",{children:"timestamp"}),O&&t.createdBy._id===O._id&&Object(g.jsx)("button",{onClick:function(){e.handleDeleteComment(t._id)},children:"Delete"}),Object(g.jsx)("hr",{})]})}))]})}}]),a}(n.Component),X=Q,Z=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={categoryList:["facecare","bodycare","housecare","play","food","drink"],category:"",descriptiveName:"",ingredients:[{name:"",quantity:""}],preparation:[],productImg:"",isGiftable:!1,gallery:[],timeOfPreparation:0,costRating:0,difficultyRating:0,isLoadingHowdiy:!0},e.handleChange=function(t){e.setState(Object(j.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){t.preventDefault();var a=e.state,n=a.category,i=a.descriptiveName,r=a.ingredients,c=a.preparation,s=a.productImg,o=a.isGiftable,l=a.gallery,h=a.timeOfPreparation,d=a.costRating,u=a.difficultyRating;b.a.patch("".concat("https://howdiy.herokuapp.com/api","/recipes/edit/").concat(e.props.match.params.id),{category:n,descriptiveName:i,ingredients:r,preparation:c,productImg:s,isGiftable:o,gallery:l,timeOfPreparation:h,costRating:d,difficultyRating:u},{withCredentials:!0}).then((function(t){console.log(t,"this is the axios post in edit page"),e.props.history.push("/")})).catch((function(){return e.props.history.push("/500")}))},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;b.a.get("".concat("https://howdiy.herokuapp.com/api","/recipes/edit/").concat(this.props.match.params.id),{withCredentials:!0}).then((function(t){console.log(t.data,"this is the axios get in the edit page");var a=t.data,n=a.category,i=a.descriptiveName,r=a.ingredients,c=a.preparation,s=a.productImg,o=a.isGiftable,l=a.gallery,h=a.timeOfPreparation,d=a.costRating,u=a.difficultyRating;e.setState({category:n,descriptiveName:i,ingredients:r,preparation:c,productImg:s,isGiftable:o,gallery:l,timeOfPreparation:h,costRating:d,difficultyRating:u,isLoadingHowdiy:!1})})).catch((function(e){console.log("error in the edit - axios get")}))}},{key:"render",value:function(){var e=this.state,t=e.category,a=e.descriptiveName,n=e.ingredients,i=e.preparation,r=e.productImg,c=e.isGiftable,s=(e.gallery,e.timeOfPreparation),o=e.costRating,l=e.difficultyRating;return Object(g.jsx)("div",{children:Object(g.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(g.jsxs)("label",{htmlFor:"category",children:["Previous category: ",t,", change to:"," "]}),Object(g.jsxs)("select",{name:"category",id:"category-select",children:[Object(g.jsx)("option",{value:"facecare",children:"Facecare"}),Object(g.jsx)("option",{value:"bodycare",children:"Bodycare"}),Object(g.jsx)("option",{value:"housecare",children:"Housecare"}),Object(g.jsx)("option",{value:"play",children:"Play"}),Object(g.jsx)("option",{value:"food",children:"Food"}),Object(g.jsx)("option",{value:"drink",children:"Drink"})]}),Object(g.jsx)("br",{}),Object(g.jsx)("label",{htmlFor:"title",children:"Descriptive Name"}),Object(g.jsx)("input",{onChange:this.handleChange,type:"text",name:"descriptiveName",value:a}),Object(g.jsx)("br",{}),Object(g.jsx)("label",{htmlFor:"ingredients",children:"Ingredients"}),Object(g.jsx)("input",{onChange:this.handleChange,type:"text",name:"ingredients",value:n}),Object(g.jsx)("br",{}),Object(g.jsx)("label",{htmlFor:"preparation",children:"Preparation"}),Object(g.jsx)("input",{onChange:this.handleChange,type:"text",name:"preparation",value:i}),Object(g.jsx)("br",{}),Object(g.jsx)("label",{htmlFor:"productImg",alt:"Product Image",children:"Product Image"}),Object(g.jsx)("input",{onChange:this.handleChange,type:"text",name:"productImg",value:r}),Object(g.jsx)("br",{}),Object(g.jsx)("label",{htmlFor:"isGiftable",children:"is Giftable"}),Object(g.jsx)("input",{onChange:this.handleChange,type:"radio",name:"isGiftable",value:c}),Object(g.jsx)("br",{}),Object(g.jsx)("label",{htmlFor:"timeOfPreparation",children:"Rate how time consuming the Howdiy is"}),Object(g.jsx)("input",{onChange:this.handleChange,type:"number",name:"timeOfPreparation",value:s}),Object(g.jsx)("br",{}),Object(g.jsx)("label",{htmlFor:"costRating",children:"Rate how cost intense the Howdiy is"}),Object(g.jsx)("input",{onChange:this.handleChange,type:"number",name:"costRating",value:o}),Object(g.jsx)("br",{}),Object(g.jsx)("label",{htmlFor:"difficultyRating",children:"Rate how difficult the Howdiy is"}),Object(g.jsx)("input",{onChange:this.handleChange,type:"number",name:"difficultyRating",value:l}),Object(g.jsx)("br",{}),Object(g.jsx)("br",{}),Object(g.jsx)("button",{type:"submit",children:"Edit your Howdiy"})]})})}}]),a}(n.Component),$=Z,ee=a.p+"static/media/howdiyGreen.397b630a.png",te=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(g.jsxs)("div",{children:[Object(g.jsx)("img",{src:ee,alt:"title",className:"title"}),Object(g.jsx)("h3",{children:"DIY straight from your Pantry"}),Object(g.jsx)("p",{children:"6 Categories to choose from:"}),Object(g.jsx)("h1",{children:"little representative icons?"}),Object(g.jsx)("p",{children:"Join a community of DIY lovers who have plenty ideas on how to use the ingredients all around us to create fun useful homemade products! Find out more about how we started below:"}),Object(g.jsx)("button",{children:" to the Join!"})]})}}]),a}(n.Component),ae=te,ne=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(g.jsxs)("div",{children:[Object(g.jsx)("h1",{children:" JOIN!! "}),Object(g.jsx)("p",{children:"HOWDiy is an app where like-minded people share the favorite DIY recipes in the categories a fresh type of cleaning -  beauty - play - food - gifting"}),Object(g.jsx)("p",{children:'Aggressive chemical cleaning agents, hidden baddies in cosmetics and toys pumped full of chemicals are no use to anyone: with simple home remedies you can make the most amazing things yourself. You save plastic waste and money - and protect your health and the environment at the same time. Let\'s share knowledge about great "recipes" and become part of a movement. '})]})}}]),a}(n.Component),ie=ne,re=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={isLoggedIn:null,user:null},e.setUser=function(t,a){e.setState({user:t,isLoggedIn:a})},e.getUser=function(){null===e.state.user&&m.loggedin().then((function(t){e.setState({user:t.data.user,isLoggedIn:!0})})).catch((function(t){e.setState({isLoggedIn:!1})}))},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.getUser()}},{key:"render",value:function(){var e=this,t=this.state,a=t.user,n=t.isLoggedIn;return Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)(L,{isLoggedIn:n,user:a,setUser:this.setUser}),Object(g.jsxs)(u.c,{children:[Object(g.jsx)(u.a,{exact:!0,path:"/",render:function(e){return Object(g.jsx)(ae,Object(s.a)({},e))}}),Object(g.jsx)(u.a,{exact:!0,path:"/join",render:function(e){return Object(g.jsx)(ie,Object(s.a)({},e))}}),Object(g.jsx)(u.a,{path:"/signup",render:function(t){return Object(g.jsx)(f,Object(s.a)(Object(s.a)({},t),{},{setUser:e.setUser}))}}),Object(g.jsx)(u.a,{path:"/login",render:function(t){return Object(g.jsx)(x,Object(s.a)(Object(s.a)({},t),{},{setUser:e.setUser}))}}),Object(g.jsx)(u.a,{path:"/profile",render:function(e){return Object(g.jsx)(R,Object(s.a)(Object(s.a)({},e),{},{isLoggedIn:n,user:a}))}}),Object(g.jsx)(u.a,{path:"/categories",render:function(e){return Object(g.jsx)(U,Object(s.a)(Object(s.a)({},e),{},{isLoggedIn:n}))}}),Object(g.jsx)(u.a,{path:"/:category/howdiy",render:function(e){return Object(g.jsx)(_,Object(s.a)({},e))}}),Object(g.jsx)(u.a,{path:"/howdiy/create",render:function(e){return Object(g.jsx)(z,Object(s.a)({},e))}}),Object(g.jsx)(u.a,{exact:!0,path:"/howdiy/:id",render:function(e){return Object(g.jsx)(X,Object(s.a)(Object(s.a)({},e),{},{user:a}))}}),Object(g.jsx)(u.a,{path:"/howdiy/edit/:id",render:function(e){return Object(g.jsx)($,Object(s.a)({},e))}})]})]})}}]),a}(n.Component),ce=re,se=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,131)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),i(e),r(e),c(e)}))};a(117);c.a.render(Object(g.jsx)(i.a.StrictMode,{children:Object(g.jsx)(S.a,{children:Object(g.jsx)(ce,{})})}),document.getElementById("root")),se()},65:function(e,t,a){},88:function(e,t,a){},89:function(e,t,a){}},[[118,1,2]]]);
//# sourceMappingURL=main.21874343.chunk.js.map