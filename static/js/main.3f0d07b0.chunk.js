(this["webpackJsonpimage-finder"]=this["webpackJsonpimage-finder"]||[]).push([[0],{11:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__4_eE0",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__3QuuR"}},12:function(e,t,a){e.exports={Overlay:"Modal_Overlay__7gJ4Y",Modal:"Modal_Modal__qYKrj"}},15:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__3Q6Ok",ImageGalleryItem:"ImageGallery_ImageGalleryItem__dbkrJ",ImageGalleryItemImage:"ImageGallery_ImageGalleryItemImage__2Nf89"}},16:function(e,t,a){e.exports={Button:"Button_Button__2J1LZ"}},17:function(e,t,a){e.exports={loader:"Loader_loader__1IzOy"}},22:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(8),c=a.n(o),s=(a(22),a(13)),i=a(3),l=a(4),h=a(6),u=a(5),m=a(9),d=a(14),g=a.n(d),p=a(1);var b=function(e){var t=e.children;return Object(p.jsx)("div",{children:t})},j=a(7),f=a.n(j),y=(a(44),function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={searchQuery:""},e.handleNameChange=function(t){e.setState({searchQuery:t.currentTarget.value.toLowerCase()})},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.searchQuery.trim()?(e.props.onSubmit(e.state.searchQuery),e.setState({searchQuery:""})):m.b.error("Error",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(p.jsx)("header",{className:f.a.Searchbar,children:Object(p.jsxs)("form",{className:f.a.SearchForm,onSubmit:this.handleSubmit,children:[Object(p.jsx)("button",{type:"submit",className:f.a.SearchFormButton,children:Object(p.jsx)("span",{className:f.a.SearchFormButtonLabel,children:"Search"})}),Object(p.jsx)("input",{className:f.a.SearchFormInput,type:"text",autoComplete:"on",autoFocus:!0,placeholder:"Search images and photos",value:this.state.searchQuery,onChange:this.handleNameChange})]})})}}]),a}(n.Component)),O=a(15),_=a.n(O),v=a(11),S=a.n(v),I=a(12),x=a.n(I),w=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(p.jsx)("div",{className:x.a.Overlay,onClick:this.handleBackdropClick,children:Object(p.jsx)("div",{className:x.a.Modal,children:Object(p.jsx)("img",{src:"".concat(this.props.img),alt:""})})})}}]),a}(n.Component),M=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={showModal:!1},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state.showModal;return Object(p.jsxs)("div",{children:[Object(p.jsx)("li",{className:S.a.ImageGalleryItem,children:Object(p.jsx)("img",{id:"".concat(this.props.id),src:"".concat(this.props.URL),alt:"",className:S.a.ImageGalleryItemImage,onClick:this.toggleModal})}),e&&Object(p.jsx)(w,{img:this.props.largeImg,onClose:this.toggleModal})]})}}]),a}(n.Component),k=function(e){var t=e.toggleModal,a=e.imgArr;return Object(p.jsx)("div",{children:a&&Object(p.jsx)("ul",{className:_.a.ImageGallery,children:a.map((function(e){return Object(p.jsx)(M,{id:e.id,URL:e.webformatURL,largeImg:e.largeImageURL,toggleModal:t},e.id)}))})})},C=a(16),F=a.n(C),G=function(e){var t=e.onLoadMore;return Object(p.jsx)("button",{className:F.a.Button,type:"button",onClick:t,children:Object(p.jsx)("span",{children:"Load more"})})},B=a(17),L=a.n(B),N=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={searchQuery:"",images:[],page:1,loading:!1},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.handleFormSubmit=function(t){e.setState({searchQuery:t}),e.setState({page:1})},e.loadMore=function(){e.setState({page:e.state.page+1})},e}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this,n=t.searchQuery,r=this.state.searchQuery;n!==r?(this.setState({loading:!0}),setTimeout((function(){fetch("https://pixabay.com/api/?q=".concat(r,"&page=").concat(a.state.page,"&key=22401387-939474c986f9f27fc379ab5f6&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.json()})).then((function(e){return a.setState({images:e.hits})})).finally((function(){return a.setState({loading:!1})}))}),3e3)):t.page!==this.state.page&&(this.setState({loading:!0}),fetch("https://pixabay.com/api/?q=".concat(r,"&page=").concat(this.state.page,"&key=22401387-939474c986f9f27fc379ab5f6&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.json()})).then((function(e){return a.setState({images:[].concat(Object(s.a)(t.images),Object(s.a)(e.hits))})})).finally((function(){return a.setState({loading:!1})}))),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){return Object(p.jsxs)(b,{children:[Object(p.jsx)(y,{onSubmit:this.handleFormSubmit}),this.state.loading&&Object(p.jsx)("div",{className:L.a.loader,children:Object(p.jsx)(g.a,{type:"Grid",color:"#00BFFF",height:200,width:200,timeout:3e3})}),Object(p.jsx)(k,{imgArr:this.state.images,toggleModal:this.toggleModal}),0!==this.state.images.length&&Object(p.jsx)(G,{onLoadMore:this.loadMore}),Object(p.jsx)(m.a,{position:"top-right",autoClose:3e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0})]})}}]),a}(n.Component);c.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(N,{})}),document.getElementById("root"))},7:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__1MUb1",SearchForm:"Searchbar_SearchForm__2HZH1",SearchFormButton:"Searchbar_SearchFormButton__3Qprm",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__1fYJn",SearchFormInput:"Searchbar_SearchFormInput__2Sv5a"}}},[[45,1,2]]]);
//# sourceMappingURL=main.3f0d07b0.chunk.js.map