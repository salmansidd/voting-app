(this["webpackJsonpvoting-app"]=this["webpackJsonpvoting-app"]||[]).push([[0],{125:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(14),o=n.n(c),i=(n(94),n(29)),s=n(30),r=n(73);const d="FETCH_QUESTIONS_SUCCESS",l="IS_LOADING",h="FETCH_QUESTIONS_ERROR",j="FETCH_QUESTION_SUCCESS";var b=Object(s.c)({questions:(e={},t)=>{switch(t.type){case d:return Object.assign({},e,t.questions);default:return e}},questionsHaveError:(e=!1,t)=>{switch(t.type){case h:return t.hasError;default:return e}},selectedQuestion:(e={},t)=>{switch(t.type){case j:return Object.assign({},e,t.question);default:return e}},isLoading:(e=!1,t)=>{switch(t.type){case l:return t.isLoading;default:return e}}});var u=e=>{const t=(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):s.d)(Object(s.a)(r.a));return Object(s.e)(b,e,t)};const p=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function O(e,t){navigator.serviceWorker.register(e).then((e=>{e.onupdatefound=()=>{const n=e.installing;null!=n&&(n.onstatechange=()=>{"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((e=>{console.error("Error during service worker registration:",e)}))}var g=n(27),m=n(13),x=n(7),y=n(8),v=n(154),w=n(33),f=n.n(w);const S=e=>({type:h,hasError:e}),k=e=>({type:l,isLoading:e}),N="https://polls.apiblueprint.org";var E=n(74),q=n.n(E);const C={primary:{main:"#00cea5"},secondary:{main:"#164ca3"},highlight:{main:"#131a50"},base:{main:"#ecf7ff",white:"#ffffff",gray:"#c3cad2"}};var T,Q,_,L,H,R=n(3);const I=y.a.div(T||(T=Object(x.a)(["\n  background: ",";\n  border-radius: 5px;\n  box-shadow: 4px 4px 4px -4px ",";\n"])),C.primary.main,C.base.gray);I.displayName="StyledQuestionWrapper";const D=y.a.div(Q||(Q=Object(x.a)(["\n\tbackground: ",";\n  text-align: center;\n  color: ",";\n  padding: 10px;\n"])),C.secondary.main,C.base.white);D.displayName="StyledQuestionHeader";const A=y.a.div(_||(_=Object(x.a)(["\n  display: flex;\n  flex-wrap: row;\n  padding: 10px 15px;\n"])));A.displayName="StyledQuestionBody";const B=y.a.div(L||(L=Object(x.a)(["\n  text-align: right;\n  padding: 15px;\n"])));B.displayName="StyledQuestionFooter";const F=y.a.button(H||(H=Object(x.a)(["\n  font-size: 14px;\n  border: none;\n  background: ",";\n  color: ",";\n  font-weight: bold;\n  padding: 10px 20px;\n  &:hover,\n  &:focus {\n    background-color: ",";\n  }\n"])),C.secondary.main,C.base.white,C.highlight.main);F.displayName="StyledQuestionButton";var P,U,V,W=({question:e,publishedDate:t,choices:n,url:a})=>Object(R.jsxs)(I,{children:[Object(R.jsx)(D,{children:Object(R.jsx)("h5",{children:e})}),Object(R.jsx)(A,{children:Object(R.jsxs)("div",{children:[Object(R.jsxs)("h5",{children:["Published on: ",Object(R.jsx)("span",{children:q()(t).format("MMMM Do YYYY, HH:mm")})]}),Object(R.jsxs)("h5",{children:["Available choices: ",Object(R.jsx)("span",{children:n})]})]})}),Object(R.jsx)(B,{children:Object(R.jsx)(g.b,{to:"".concat(a),children:Object(R.jsx)(F,{"data-hook":"vote-button",children:"Vote"})})})]}),z=n(20),M=n(16),Y=n(57),X=n(164),J=n(167);const G=Object(y.a)(X.a.Header)(P||(P=Object(x.a)(["\n  background: ",";\n  color: ",";\n"])),C.secondary.main,C.base.white);G.displayName="StyledHeader";const $=y.a.p(U||(U=Object(x.a)(["\n  color: ",";\n  font-size: 20px;\n}\n"])),C.highlight.main);$.displayName="StyledText";const K=Object(y.a)(J.a)(V||(V=Object(x.a)(["\n  background: ",";\n  font-weight: bold;\n\t&:hover {\n\t\tbackground: ",";\n\t}\n"])),C.secondary.main,C.highlight.main);K.displayName="StyledButton";var Z,ee,te=e=>Object(R.jsxs)(X.a,Object(Y.a)(Object(Y.a)({},e),{},{size:"lg","data-hook":"info-modal",centered:!0,children:[Object(R.jsx)(G,{children:Object(R.jsx)(X.a.Title,{children:e.header})}),Object(R.jsx)(X.a.Body,{children:Object(R.jsx)($,{children:e.body})}),Object(R.jsxs)(X.a.Footer,{children:[e.showVotingResults&&Object(R.jsx)(K,{"data-hook":"show-results",onClick:e.showVotingResults,children:"Show Results"}),Object(R.jsx)(g.b,{to:"/",children:Object(R.jsx)(K,{"data-hook":"show-home",onClick:e.onHide,children:"Back to Home"})})]})]}));const ne=Object(y.a)(M.a)(Z||(Z=Object(x.a)(["\n  background: ",";\n  font-weight: bold;\n  border: none;\n\t&:hover {\n\t\tbackground: ",";\n\t}\n"])),C.secondary.main,C.highlight.main);ne.displayName="StyledButton";const ae=Object(y.a)(M.i)(ee||(ee=Object(x.a)(["\n  font-weight: bold;\n  color: ",";\n"])),C.highlight.main);ae.displayName="StyledLabel";var ce,oe,ie,se=Object(i.b)(null,{createQuestion:e=>t=>t({type:"QUESTION_CREATED",payload:e})})((e=>{const t=Object(a.useState)(""),n=Object(z.a)(t,2),c=n[0],o=n[1],i=Object(a.useState)(""),s=Object(z.a)(i,2),r=s[0],d=s[1],l=Object(a.useState)(!1),h=Object(z.a)(l,2),j=h[0],b=h[1],u=Object(a.useState)(""),p=Object(z.a)(u,2),O=p[0],g=p[1],m=Object(a.useState)(""),x=Object(z.a)(m,2),y=x[0],v=x[1];return Object(R.jsxs)(R.Fragment,{children:[Object(R.jsxs)(M.f,{onSubmit:t=>{const n=r.split(","),a='{"question": "'+c+'", "choices": '+JSON.stringify(n)+"}";f.a.post("".concat(N,"/questions?page=1"),a,{headers:{"Content-Type":"application/json"}}).then((()=>{b(!0),v("Success"),g("The new question has been created successfully.")})).catch((()=>{b(!0),v("Error"),g("The new question could not be created. Please try again.")})),e.createQuestion(a),t.preventDefault()},"data-hook":"question-form",children:[Object(R.jsxs)(M.g,{row:!0,children:[Object(R.jsx)(ae,{sm:2,children:"New Question"}),Object(R.jsx)(M.d,{sm:10,children:Object(R.jsx)(M.h,{type:"text","data-hook":"question-name",placeholder:"Type your question here",value:c,onChange:e=>{o(e.target.value)}})})]}),Object(R.jsxs)(M.g,{row:!0,children:[Object(R.jsx)(ae,{sm:2,children:"Choices"}),Object(R.jsx)(M.d,{sm:10,children:Object(R.jsx)(M.h,{type:"textarea","data-hook":"choices-list",placeholder:"Type your choices separated by a comma and a space. Example: Cat, Dog, Rat",value:r,onChange:e=>{d(e.target.value)}})})]}),Object(R.jsx)(M.g,{check:!0,row:!0,children:Object(R.jsx)(M.d,{sm:{size:10,offset:5},children:Object(R.jsx)(ne,{children:"Submit Question"})})})]}),Object(R.jsx)(te,{show:j,onHide:()=>b(!1),header:y,body:O})]})}));const re=Object(y.a)(M.a)(ce||(ce=Object(x.a)(["\n  display: block;\n  text-align: center;\n  background: ",";\n  max-width: 80vw;\n  width: 100%;\n  margin: 20px auto;\n  height: 50px;\n  font-size: 24px;\n  border: none;\n  &:hover,\n  &:focus {\n\t\tbackground: ",";\n\t}\n"])),C.secondary.main,C.highlight.main);re.displayName="StyledButton";const de=Object(y.a)(M.b)(oe||(oe=Object(x.a)(["\n  width: 81%;\n  margin: 0px auto;\n"])));de.displayName="StyledCard";const le=Object(y.a)(M.c)(ie||(ie=Object(x.a)(["\n  background: ",";\n"])),C.primary.main);le.displayName="StyledCardBody";var he,je,be,ue,pe,Oe,ge=()=>{const e=Object(a.useState)(!1),t=Object(z.a)(e,2),n=t[0],c=t[1];return Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)(re,{color:"primary",onClick:()=>{c(!n)},"data-hook":"create-question",children:"Create Question"}),Object(R.jsx)(M.e,{isOpen:n,children:Object(R.jsx)(de,{children:Object(R.jsx)(le,{children:Object(R.jsx)(se,{})})})})]})},me=n(166),xe=n(169);function ye(){return Object(R.jsx)("div",{children:Object(R.jsxs)(me.a,{severity:"error",children:[Object(R.jsx)(xe.a,{children:"Error"}),"This is an error in fetching data - ",Object(R.jsx)("strong",{children:"Please check your internet connection!"})]})})}const ve=y.a.div(he||(he=Object(x.a)(["\n  min-height: 0;\n  display: inline-block;\n  position: relative;\n  margin: 50px 0;\n  color: ",";\n  width: 100%;\n"])),C.highlight.main);ve.displayName="StyledApp";const we=y.a.div(je||(je=Object(x.a)(["\n  text-align: center;\n  background: ",";\n  max-width: 80vw;\n  width: 100%;\n  margin: 0 auto;\n  height: 75px;\n  padding-top: 12px;\n"])),C.primary.main);we.displayName="StyledAppHeader";const fe=y.a.div(be||(be=Object(x.a)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-column-gap: 20px;\n  grid-row-gap: 20px;\n  justify-items: stretch;\n  align-items: stretch;\n  width: 81%;\n  margin: 1rem auto;\n\t@media (max-width: 870px) {\n\t  grid-template-columns: 1fr 1fr;\n\t}\n\t@media (max-width: 480px) {\n\t  grid-template-columns: 1fr;\n\t}\n"])));fe.displayName="StyledContainer";const Se=y.a.div(ue||(ue=Object(x.a)(["\n  max-width: 60px;\n  width: 100%;\n  margin: 100px auto;\n"])));Se.displayName="StyledLoaderContainer";const ke=Object(y.a)(v.a)(pe||(pe=Object(x.a)(["\n  color: ",";\n"])),C.secondary.main);ke.displayName="StyledLoader";const Ne=y.a.div(Oe||(Oe=Object(x.a)(["\n  max-width: 80vw;\n  width: 100%;\n  margin: 80px auto;\n"])));Ne.displayName="StyledError";var Ee,qe,Ce,Te,Qe,_e,Le,He,Re,Ie,De=Object(i.b)((function({questions:e,isLoading:t,questionsHaveError:n}){return{questions:e,isLoading:t,questionsHaveError:n}}),{fetchQuestions:()=>{let e="".concat(N,"/questions"),t=f.a.get(e);return e=>{e(k(!0)),t.then((t=>{var n;e((n=t.data,{type:d,questions:n})),e(k(!1)),e(S(!1))})).catch((()=>{e(S(!0))}))}}})((e=>{Object(a.useEffect)((()=>{e.fetchQuestions()}),[]);const t=e.questions,n=e.isLoading,c=e.questionsHaveError,o=Object.keys(t).map(((e,n)=>Object(R.jsx)(W,{question:t[e].question,publishedDate:t[e].published_at,choices:t[e].choices.length,url:t[e].url},e)));return Object(R.jsxs)(ve,{children:[Object(R.jsx)(we,{"data-hook":"app-header",children:Object(R.jsx)("h1",{children:"Questions"})}),Object(R.jsx)(ge,{}),n&&!c&&Object(R.jsx)(Se,{children:Object(R.jsx)(ke,{})}),n&&c&&Object(R.jsx)(Ne,{children:Object(R.jsx)(ye,{})}),Object(R.jsx)(fe,{"data-hook":"questions-container",children:!n&&o})]})})),Ae=n(10),Be=n(158),Fe=n(160),Pe=n(156),Ue=n(157),Ve=n(159),We=n(155),ze=n(126),Me=n(168);const Ye=y.a.div(Ee||(Ee=Object(x.a)(["\n  min-height: 0;\n  display: inline-block;\n  position: relative;\n  margin: 50px 0;\n  color: ",";\n  width: 100%;\n"])),C.highlight.main);Ye.displayName="StyledApp";const Xe=y.a.div(qe||(qe=Object(x.a)(["\n  text-align: center;\n  background: ",";\n  max-width: 80vw;\n  width: 100%;\n  margin: 0 auto;\n  height: 75px;\n  padding-top: 12px;\n"])),C.primary.main);Xe.displayName="StyledAppHeader";const Je=y.a.div(Ce||(Ce=Object(x.a)(["\n  display: block;\n  justify-items: stretch;\n  align-items: stretch;\n  width: 80%;\n  margin: 1rem auto;\n"])));Je.displayName="StyledContainer";const Ge=y.a.div(Te||(Te=Object(x.a)(["\n  display: block;\n  background: ",";\n  color: ",";\n  max-width: 80vw;\n  width: 100%;\n  margin: 20px auto;\n  height: 60px;\n  font-size: 24px;\n  padding: 12px 0 0 12px;\n"])),C.secondary.main,C.base.white);Ge.displayName="StyledQuestion";const $e=Object(y.a)(We.a)(Qe||(Qe=Object(x.a)(["\n  height: 60px;\n  align-items: center;\n  border-radius: 5px;\n  Width: 100%;\n  &.active {\n\t\tbackground: ","; \n  }\n  &:hover{\n    cursor: pointer;\n\t\tbackground: ",";\n  }\n"])),C.primary.main,C.base.main);$e.displayName="StyledTableBodyRow";const Ke=Object(y.a)(We.a)(_e||(_e=Object(x.a)(["\n  background: ",";\n"])),C.base.main);Ke.displayName="TableHeadRow";const Ze=Object(y.a)(Pe.a)(Le||(Le=Object(x.a)(["\n  color: ",";\n\tfont-weight: bold;\n"])),C.highlight.main);Ze.displayName="StyledTableCell";const et=y.a.button(He||(He=Object(x.a)(["\n  background: ",";\n  font-weight: bold;\n  color: ",";\n\tfloat: right;\n  margin-top: 1rem;\n\tborder: none;\n\tpadding: 10px;\n\t&:hover {\n\t\tbackground: ",";\n\t}\n"])),C.secondary.main,C.base.white,C.highlight.main);et.displayName="StyledButton";const tt=y.a.div(Re||(Re=Object(x.a)(["\n  max-width: 60px;\n  width: 100%;\n  margin: 100px auto;\n"])));tt.displayName="StyledLoaderContainer";const nt=Object(y.a)(v.a)(Ie||(Ie=Object(x.a)(["\n  color: ",";\n"])),C.secondary.main);nt.displayName="StyledLoader";const at=Object(Ae.a)((()=>({root:{height:20,borderRadius:5},colorPrimary:{backgroundColor:"#c3cad2"},bar:{backgroundColor:"#164ca3"}})))(Me.a);var ct,ot,it,st=Object(i.b)((function({selectedQuestion:e,isLoading:t}){return{selectedQuestion:e,isLoading:t}}),{fetchSingleQuestion:e=>{let t="".concat(N,"/questions/").concat(e),n=f.a.get(t);return e=>{e(k(!0)),n.then((t=>{var n;e((n=t.data,{type:j,question:n})),e(k(!1)),e(S(!1))})).catch((()=>{e(S(!0))}))}},postVote:e=>t=>t({type:"VOTE_SELECTED",payload:e})})((e=>{const t=Object(a.useState)({title:"",url:null}),n=Object(z.a)(t,2),c=n[0],o=n[1],i=Object(a.useState)(!1),s=Object(z.a)(i,2),r=s[0],d=s[1],l=Object(a.useState)(""),h=Object(z.a)(l,2),j=h[0],b=h[1],u=Object(a.useState)(""),p=Object(z.a)(u,2),O=p[0],g=p[1],m=e.selectedQuestion,x=m.question,y=m.choices;Object(a.useEffect)((()=>{const t=e.match.params.questionId;e.fetchSingleQuestion(t)}),[]);const v=e=>{const t=y.reduce(((e,{votes:t})=>e+t),0),n=100*parseInt(e)/t;return isNaN(parseInt(n))?0:n.toFixed(2)},w=y?Object.keys(y).map(((e,t)=>Object(R.jsxs)($e,{className:"".concat(c.title===y[e].choice?"active":""),"data-hook":"question-choice",onClick:t=>{t.preventDefault(),(({choice:e,url:t})=>{o({title:e,url:t})})(y[e])},children:[Object(R.jsxs)(Ze,{component:"th",scope:"row",children:[t+1,"."]}),Object(R.jsx)(Ze,{children:y[e].choice}),Object(R.jsx)(Ze,{children:y[e].votes}),Object(R.jsxs)(Ze,{children:[v(y[e].votes)," %"]}),Object(R.jsx)(Ze,{children:Object(R.jsx)(at,{variant:"determinate",value:parseInt(v(y[e].votes))})})]},e))):null;return Object(R.jsxs)(R.Fragment,{children:[Object(R.jsxs)(Ye,{children:[Object(R.jsx)(Xe,{children:Object(R.jsx)("h1",{children:"Details"})}),e.isLoading&&Object(R.jsx)(tt,{children:Object(R.jsx)(nt,{})}),!e.isLoading&&Object(R.jsxs)(Je,{children:[Object(R.jsxs)(Ge,{children:["Question: ",x]}),Object(R.jsxs)("form",{onSubmit:t=>{f.a.post("".concat(N).concat(c.url)).then((()=>{d(!0),g("Success"),b("Your vote has been submitted successfully.")})).catch((()=>{d(!0),g("Error"),b("Your vote could not be submitted. Please try again.")})),e.postVote(c),t.preventDefault()},children:[Object(R.jsx)(Ue.a,{component:ze.a,children:Object(R.jsxs)(Be.a,{children:[Object(R.jsx)(Ve.a,{children:Object(R.jsxs)(Ke,{children:[Object(R.jsx)(Ze,{children:"No."}),Object(R.jsx)(Ze,{children:"Choice"}),Object(R.jsx)(Ze,{children:"Votes"}),Object(R.jsx)(Ze,{children:"Percent (%)"}),Object(R.jsx)(Ze,{children:"Progress"})]})}),Object(R.jsx)(Fe.a,{"data-hook":"question-table",children:w})]})}),Object(R.jsx)(et,{type:"submit","data-hook":"submit-vote",children:"Submit vote"})]})]})]}),Object(R.jsx)(te,{show:r,onHide:()=>d(!1),showVotingResults:()=>(()=>{d(!1);const t=e.match.params.questionId;e.fetchSingleQuestion(t)})(),header:O,body:j})]})})),rt=n(161),dt=n(162),lt=n(163),ht=n(165),jt=n(85),bt=n.n(jt),ut=n.p+"static/media/vote.8d8529c3.png";const pt=Object(rt.a)(),Ot=Object(y.a)(dt.a)(ct||(ct=Object(x.a)(["\n  background-color: ",";\n"])),C.secondary.main);Ot.displayName="StyledAppBar";const gt=y.a.img(ot||(ot=Object(x.a)(["\n  max-width: 160px;\n  margin-left: 16px;\n"])));gt.displayName="StyledAppBarLogo";const mt=Object(y.a)(bt.a)(it||(it=Object(x.a)(["\n  font-size: 48px;\n  color: ",";\n"])),C.primary.main);mt.displayName="StyledHomeIcon";var xt=()=>(pt(),Object(R.jsx)(R.Fragment,{children:Object(R.jsx)(Ot,{position:"static","data-hook":"app-bar",children:Object(R.jsxs)(lt.a,{children:[Object(R.jsx)(ht.a,{edge:"start","data-hook":"home-button",children:Object(R.jsx)(g.b,{to:"/",children:Object(R.jsx)(mt,{})})}),Object(R.jsx)(gt,{src:ut,alt:"vote"})]})})}));var yt=()=>Object(R.jsx)(R.Fragment,{children:Object(R.jsxs)(g.a,{children:[Object(R.jsx)(xt,{exact:!0,path:"/",component:De}),Object(R.jsx)(m.b,{exact:!0,path:"/",render:()=>Object(R.jsx)(m.a,{to:"/questions"})}),Object(R.jsxs)(m.d,{children:[Object(R.jsx)(m.b,{path:"/questions/:questionId",component:st}),Object(R.jsx)(m.b,{path:"/questions",component:De}),'"']})]})});n(124);const vt=u();o.a.render(Object(R.jsx)(i.a,{store:vt,children:Object(R.jsx)(yt,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/voting-app",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(()=>{const t="".concat("/voting-app","/service-worker.js");p?(!function(e,t){fetch(e).then((n=>{const a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((e=>{e.unregister().then((()=>{window.location.reload()}))})):O(e,t)})).catch((()=>{console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((()=>{console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")}))):O(t,e)}))}}()},94:function(e,t,n){}},[[125,1,2]]]);
//# sourceMappingURL=main.89e7ce7e.chunk.js.map