(this["webpackJsonpvoting-app"]=this["webpackJsonpvoting-app"]||[]).push([[0],{125:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(14),i=n.n(c),s=(n(94),n(29)),o=n(30),r=n(73);const d="FETCH_QUESTIONS_SUCCESS",l="IS_LOADING",j="FETCH_QUESTIONS_ERROR",h="FETCH_QUESTION_SUCCESS";var b=Object(o.c)({questions:(e={},t)=>{switch(t.type){case d:return Object.assign({},e,t.questions);default:return e}},questionsHaveError:(e=!1,t)=>{switch(t.type){case j:return t.hasError;default:return e}},selectedQuestion:(e={},t)=>{switch(t.type){case h:return Object.assign({},e,t.question);default:return e}},isLoading:(e=!1,t)=>{switch(t.type){case l:return t.isLoading;default:return e}}});var u=e=>{const t=(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):o.d)(Object(o.a)(r.a));return Object(o.e)(b,e,t)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var p=n(27),O=n(13),m=n(7),x=n(8),g=n(154),y=n(33),v=n.n(y);const w=e=>({type:j,hasError:e}),S=e=>({type:l,isLoading:e}),f="https://polls.apiblueprint.org";var k=n(74),N=n.n(k);const E={primary:{main:"#00cea5"},secondary:{main:"#164ca3"},highlight:{main:"#131a50"},base:{main:"#ecf7ff",white:"#ffffff",gray:"#c3cad2"}};var q,C,Q,T,_,H=n(3);const L=x.a.div(q||(q=Object(m.a)(["\n  background: ",";\n  border-radius: 5px;\n  box-shadow: 4px 4px 4px -4px ",";\n"])),E.primary.main,E.base.gray);L.displayName="StyledQuestionWrapper";const I=x.a.div(C||(C=Object(m.a)(["\n\tbackground: ",";\n  text-align: center;\n  color: ",";\n  padding: 10px;\n"])),E.secondary.main,E.base.white);I.displayName="StyledQuestionHeader";const D=x.a.div(Q||(Q=Object(m.a)(["\n  display: flex;\n  flex-wrap: row;\n  padding: 10px 15px;\n"])));D.displayName="StyledQuestionBody";const B=x.a.div(T||(T=Object(m.a)(["\n  text-align: right;\n  padding: 15px;\n"])));B.displayName="StyledQuestionFooter";const R=x.a.button(_||(_=Object(m.a)(["\n  font-size: 14px;\n  border: none;\n  background: ",";\n  color: ",";\n  font-weight: bold;\n  padding: 10px 20px;\n  &:hover,\n  &:focus {\n    background-color: ",";\n  }\n"])),E.secondary.main,E.base.white,E.highlight.main);R.displayName="StyledQuestionButton";var F,V,A,P=({question:e,publishedDate:t,choices:n,url:a})=>Object(H.jsxs)(L,{children:[Object(H.jsx)(I,{children:Object(H.jsx)("h5",{children:e})}),Object(H.jsx)(D,{children:Object(H.jsxs)("div",{children:[Object(H.jsxs)("h5",{children:["Published on: ",Object(H.jsx)("span",{children:N()(t).format("MMMM Do YYYY, HH:mm")})]}),Object(H.jsxs)("h5",{children:["Available choices: ",Object(H.jsx)("span",{children:n})]})]})}),Object(H.jsx)(B,{children:Object(H.jsx)(p.b,{to:"".concat(a),children:Object(H.jsx)(R,{"data-hook":"vote-button",children:"Vote"})})})]}),U=n(20),z=n(16),M=n(57),Y=n(164),W=n(167);const X=Object(x.a)(Y.a.Header)(F||(F=Object(m.a)(["\n  background: ",";\n  color: ",";\n"])),E.secondary.main,E.base.white);X.displayName="StyledHeader";const J=x.a.p(V||(V=Object(m.a)(["\n  color: ",";\n  font-size: 20px;\n}\n"])),E.highlight.main);J.displayName="StyledText";const G=Object(x.a)(W.a)(A||(A=Object(m.a)(["\n  background: ",";\n  font-weight: bold;\n\t&:hover {\n\t\tbackground: ",";\n\t}\n"])),E.secondary.main,E.highlight.main);G.displayName="StyledButton";var $,K,Z=e=>Object(H.jsxs)(Y.a,Object(M.a)(Object(M.a)({},e),{},{size:"lg","data-hook":"info-modal",centered:!0,children:[Object(H.jsx)(X,{children:Object(H.jsx)(Y.a.Title,{children:e.header})}),Object(H.jsx)(Y.a.Body,{children:Object(H.jsx)(J,{children:e.body})}),Object(H.jsxs)(Y.a.Footer,{children:[e.showVotingResults&&Object(H.jsx)(G,{"data-hook":"show-results",onClick:e.showVotingResults,children:"Show Results"}),Object(H.jsx)(p.b,{to:"/",children:Object(H.jsx)(G,{"data-hook":"show-home",onClick:e.onHide,children:"Back to Home"})})]})]}));const ee=Object(x.a)(z.a)($||($=Object(m.a)(["\n  background: ",";\n  font-weight: bold;\n  border: none;\n\t&:hover {\n\t\tbackground: ",";\n\t}\n"])),E.secondary.main,E.highlight.main);ee.displayName="StyledButton";const te=Object(x.a)(z.i)(K||(K=Object(m.a)(["\n  font-weight: bold;\n  color: ",";\n"])),E.highlight.main);te.displayName="StyledLabel";var ne,ae,ce,ie=Object(s.b)(null,{createQuestion:e=>t=>t({type:"QUESTION_CREATED",payload:e})})((e=>{const t=Object(a.useState)(""),n=Object(U.a)(t,2),c=n[0],i=n[1],s=Object(a.useState)(""),o=Object(U.a)(s,2),r=o[0],d=o[1],l=Object(a.useState)(!1),j=Object(U.a)(l,2),h=j[0],b=j[1],u=Object(a.useState)(""),p=Object(U.a)(u,2),O=p[0],m=p[1],x=Object(a.useState)(""),g=Object(U.a)(x,2),y=g[0],w=g[1];return Object(H.jsxs)(H.Fragment,{children:[Object(H.jsxs)(z.f,{onSubmit:t=>{const n=r.split(","),a='{"question": "'+c+'", "choices": '+JSON.stringify(n)+"}";v.a.post("".concat(f,"/questions?page=1"),a,{headers:{"Content-Type":"application/json"}}).then((()=>{b(!0),w("Success"),m("The new question has been created successfully.")})).catch((()=>{b(!0),w("Error"),m("The new question could not be created. Please try again.")})),e.createQuestion(a),t.preventDefault()},"data-hook":"question-form",children:[Object(H.jsxs)(z.g,{row:!0,children:[Object(H.jsx)(te,{sm:2,children:"New Question"}),Object(H.jsx)(z.d,{sm:10,children:Object(H.jsx)(z.h,{type:"text","data-hook":"question-name",placeholder:"Type your question here",value:c,onChange:e=>{i(e.target.value)}})})]}),Object(H.jsxs)(z.g,{row:!0,children:[Object(H.jsx)(te,{sm:2,children:"Choices"}),Object(H.jsx)(z.d,{sm:10,children:Object(H.jsx)(z.h,{type:"textarea","data-hook":"choices-list",placeholder:"Type your choices separated by a comma and a space. Example: Cat, Dog, Rat",value:r,onChange:e=>{d(e.target.value)}})})]}),Object(H.jsx)(z.g,{check:!0,row:!0,children:Object(H.jsx)(z.d,{sm:{size:10,offset:5},children:Object(H.jsx)(ee,{children:"Submit Question"})})})]}),Object(H.jsx)(Z,{show:h,onHide:()=>b(!1),header:y,body:O})]})}));const se=Object(x.a)(z.a)(ne||(ne=Object(m.a)(["\n  display: block;\n  text-align: center;\n  background: ",";\n  max-width: 80vw;\n  width: 100%;\n  margin: 20px auto;\n  height: 50px;\n  font-size: 24px;\n  border: none;\n  &:hover,\n  &:focus {\n\t\tbackground: ",";\n\t}\n"])),E.secondary.main,E.highlight.main);se.displayName="StyledButton";const oe=Object(x.a)(z.b)(ae||(ae=Object(m.a)(["\n  width: 81%;\n  margin: 0px auto;\n"])));oe.displayName="StyledCard";const re=Object(x.a)(z.c)(ce||(ce=Object(m.a)(["\n  background: ",";\n"])),E.primary.main);re.displayName="StyledCardBody";var de,le,je,he,be,ue,pe=()=>{const e=Object(a.useState)(!1),t=Object(U.a)(e,2),n=t[0],c=t[1];return Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)(se,{color:"primary",onClick:()=>{c(!n)},"data-hook":"create-question",children:"Create Question"}),Object(H.jsx)(z.e,{isOpen:n,children:Object(H.jsx)(oe,{children:Object(H.jsx)(re,{children:Object(H.jsx)(ie,{})})})})]})},Oe=n(166),me=n(169);function xe(){return Object(H.jsx)("div",{children:Object(H.jsxs)(Oe.a,{severity:"error",children:[Object(H.jsx)(me.a,{children:"Error"}),"This is an error in fetching data - ",Object(H.jsx)("strong",{children:"Please check your internet connection!"})]})})}const ge=x.a.div(de||(de=Object(m.a)(["\n  min-height: 0;\n  display: inline-block;\n  position: relative;\n  margin: 50px 0;\n  color: ",";\n  width: 100%;\n"])),E.highlight.main);ge.displayName="StyledApp";const ye=x.a.div(le||(le=Object(m.a)(["\n  text-align: center;\n  background: ",";\n  max-width: 80vw;\n  width: 100%;\n  margin: 0 auto;\n  height: 75px;\n  padding-top: 12px;\n"])),E.primary.main);ye.displayName="StyledAppHeader";const ve=x.a.div(je||(je=Object(m.a)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-column-gap: 20px;\n  grid-row-gap: 20px;\n  justify-items: stretch;\n  align-items: stretch;\n  width: 81%;\n  margin: 1rem auto;\n\t@media (max-width: 870px) {\n\t  grid-template-columns: 1fr 1fr;\n\t}\n\t@media (max-width: 480px) {\n\t  grid-template-columns: 1fr;\n\t}\n"])));ve.displayName="StyledContainer";const we=x.a.div(he||(he=Object(m.a)(["\n  max-width: 60px;\n  width: 100%;\n  margin: 100px auto;\n"])));we.displayName="StyledLoaderContainer";const Se=Object(x.a)(g.a)(be||(be=Object(m.a)(["\n  color: ",";\n"])),E.secondary.main);Se.displayName="StyledLoader";const fe=x.a.div(ue||(ue=Object(m.a)(["\n  max-width: 80vw;\n  width: 100%;\n  margin: 80px auto;\n"])));fe.displayName="StyledError";var ke,Ne,Ee,qe,Ce,Qe,Te,_e,He,Le,Ie=Object(s.b)((function({questions:e,isLoading:t,questionsHaveError:n}){return{questions:e,isLoading:t,questionsHaveError:n}}),{fetchQuestions:()=>{let e="".concat(f,"/questions"),t=v.a.get(e);return e=>{e(S(!0)),t.then((t=>{var n;e((n=t.data,{type:d,questions:n})),e(S(!1)),e(w(!1))})).catch((()=>{e(w(!0))}))}}})((e=>{Object(a.useEffect)((()=>{e.fetchQuestions()}),[]);const t=e.questions,n=e.isLoading,c=e.questionsHaveError,i=Object.keys(t).map(((e,n)=>Object(H.jsx)(P,{question:t[e].question,publishedDate:t[e].published_at,choices:t[e].choices.length,url:t[e].url},e)));return Object(H.jsxs)(ge,{children:[Object(H.jsx)(ye,{"data-hook":"app-header",children:Object(H.jsx)("h1",{children:"Questions"})}),Object(H.jsx)(pe,{}),n&&!c&&Object(H.jsx)(we,{children:Object(H.jsx)(Se,{})}),n&&c&&Object(H.jsx)(fe,{children:Object(H.jsx)(xe,{})}),Object(H.jsx)(ve,{"data-hook":"questions-container",children:!n&&i})]})})),De=n(10),Be=n(158),Re=n(160),Fe=n(156),Ve=n(157),Ae=n(159),Pe=n(155),Ue=n(126),ze=n(168);const Me=x.a.div(ke||(ke=Object(m.a)(["\n  min-height: 0;\n  display: inline-block;\n  position: relative;\n  margin: 50px 0;\n  color: ",";\n  width: 100%;\n"])),E.highlight.main);Me.displayName="StyledApp";const Ye=x.a.div(Ne||(Ne=Object(m.a)(["\n  text-align: center;\n  background: ",";\n  max-width: 80vw;\n  width: 100%;\n  margin: 0 auto;\n  height: 75px;\n  padding-top: 12px;\n"])),E.primary.main);Ye.displayName="StyledAppHeader";const We=x.a.div(Ee||(Ee=Object(m.a)(["\n  display: block;\n  justify-items: stretch;\n  align-items: stretch;\n  width: 80%;\n  margin: 1rem auto;\n"])));We.displayName="StyledContainer";const Xe=x.a.div(qe||(qe=Object(m.a)(["\n  display: block;\n  background: ",";\n  color: ",";\n  max-width: 80vw;\n  width: 100%;\n  margin: 20px auto;\n  height: 60px;\n  font-size: 24px;\n  padding: 12px 0 0 12px;\n"])),E.secondary.main,E.base.white);Xe.displayName="StyledQuestion";const Je=Object(x.a)(Pe.a)(Ce||(Ce=Object(m.a)(["\n  height: 60px;\n  align-items: center;\n  border-radius: 5px;\n  Width: 100%;\n  &.active {\n\t\tbackground: ","; \n  }\n  &:hover{\n    cursor: pointer;\n\t\tbackground: ",";\n  }\n"])),E.primary.main,E.base.main);Je.displayName="StyledTableBodyRow";const Ge=Object(x.a)(Pe.a)(Qe||(Qe=Object(m.a)(["\n  background: ",";\n"])),E.base.main);Ge.displayName="TableHeadRow";const $e=Object(x.a)(Fe.a)(Te||(Te=Object(m.a)(["\n  color: ",";\n\tfont-weight: bold;\n"])),E.highlight.main);$e.displayName="StyledTableCell";const Ke=x.a.button(_e||(_e=Object(m.a)(["\n  background: ",";\n  font-weight: bold;\n  color: ",";\n\tfloat: right;\n  margin-top: 1rem;\n\tborder: none;\n\tpadding: 10px;\n\t&:hover {\n\t\tbackground: ",";\n\t}\n"])),E.secondary.main,E.base.white,E.highlight.main);Ke.displayName="StyledButton";const Ze=x.a.div(He||(He=Object(m.a)(["\n  max-width: 60px;\n  width: 100%;\n  margin: 100px auto;\n"])));Ze.displayName="StyledLoaderContainer";const et=Object(x.a)(g.a)(Le||(Le=Object(m.a)(["\n  color: ",";\n"])),E.secondary.main);et.displayName="StyledLoader";const tt=Object(De.a)((()=>({root:{height:20,borderRadius:5},colorPrimary:{backgroundColor:"#c3cad2"},bar:{backgroundColor:"#164ca3"}})))(ze.a);var nt,at,ct,it=Object(s.b)((function({selectedQuestion:e,isLoading:t}){return{selectedQuestion:e,isLoading:t}}),{fetchSingleQuestion:e=>{let t="".concat(f,"/questions/").concat(e),n=v.a.get(t);return e=>{e(S(!0)),n.then((t=>{var n;e((n=t.data,{type:h,question:n})),e(S(!1)),e(w(!1))})).catch((()=>{e(w(!0))}))}},postVote:e=>t=>t({type:"VOTE_SELECTED",payload:e})})((e=>{const t=Object(a.useState)({title:"",url:null}),n=Object(U.a)(t,2),c=n[0],i=n[1],s=Object(a.useState)(!1),o=Object(U.a)(s,2),r=o[0],d=o[1],l=Object(a.useState)(""),j=Object(U.a)(l,2),h=j[0],b=j[1],u=Object(a.useState)(""),p=Object(U.a)(u,2),O=p[0],m=p[1],x=e.selectedQuestion,g=x.question,y=x.choices;Object(a.useEffect)((()=>{const t=e.match.params.questionId;e.fetchSingleQuestion(t)}),[]);const w=e=>{const t=y.reduce(((e,{votes:t})=>e+t),0),n=100*parseInt(e)/t;return isNaN(parseInt(n))?0:n.toFixed(2)},S=y?Object.keys(y).map(((e,t)=>Object(H.jsxs)(Je,{className:"".concat(c.title===y[e].choice?"active":""),"data-hook":"question-choice",onClick:t=>{t.preventDefault(),(({choice:e,url:t})=>{i({title:e,url:t})})(y[e])},children:[Object(H.jsxs)($e,{component:"th",scope:"row",children:[t+1,"."]}),Object(H.jsx)($e,{children:y[e].choice}),Object(H.jsx)($e,{children:y[e].votes}),Object(H.jsxs)($e,{children:[w(y[e].votes)," %"]}),Object(H.jsx)($e,{children:Object(H.jsx)(tt,{variant:"determinate",value:parseInt(w(y[e].votes))})})]},e))):null;return Object(H.jsxs)(H.Fragment,{children:[Object(H.jsxs)(Me,{children:[Object(H.jsx)(Ye,{children:Object(H.jsx)("h1",{children:"Details"})}),e.isLoading&&Object(H.jsx)(Ze,{children:Object(H.jsx)(et,{})}),!e.isLoading&&Object(H.jsxs)(We,{children:[Object(H.jsxs)(Xe,{children:["Question: ",g]}),Object(H.jsxs)("form",{onSubmit:t=>{v.a.post("".concat(f).concat(c.url)).then((()=>{d(!0),m("Success"),b("Your vote has been submitted successfully.")})).catch((()=>{d(!0),m("Error"),b("Your vote could not be submitted. Please try again.")})),e.postVote(c),t.preventDefault()},children:[Object(H.jsx)(Ve.a,{component:Ue.a,children:Object(H.jsxs)(Be.a,{children:[Object(H.jsx)(Ae.a,{children:Object(H.jsxs)(Ge,{children:[Object(H.jsx)($e,{children:"No."}),Object(H.jsx)($e,{children:"Choice"}),Object(H.jsx)($e,{children:"Votes"}),Object(H.jsx)($e,{children:"Percent (%)"}),Object(H.jsx)($e,{children:"Progress"})]})}),Object(H.jsx)(Re.a,{"data-hook":"question-table",children:S})]})}),Object(H.jsx)(Ke,{type:"submit","data-hook":"submit-vote",children:"Submit vote"})]})]})]}),Object(H.jsx)(Z,{show:r,onHide:()=>d(!1),showVotingResults:()=>(()=>{d(!1);const t=e.match.params.questionId;e.fetchSingleQuestion(t)})(),header:O,body:h})]})})),st=n(161),ot=n(162),rt=n(163),dt=n(165),lt=n(85),jt=n.n(lt),ht=n.p+"static/media/vote.8d8529c3.png";const bt=Object(st.a)(),ut=Object(x.a)(ot.a)(nt||(nt=Object(m.a)(["\n  background-color: ",";\n"])),E.secondary.main);ut.displayName="StyledAppBar";const pt=x.a.img(at||(at=Object(m.a)(["\n  max-width: 160px;\n  margin-left: 16px;\n"])));pt.displayName="StyledAppBarLogo";const Ot=Object(x.a)(jt.a)(ct||(ct=Object(m.a)(["\n  font-size: 48px;\n  color: ",";\n"])),E.primary.main);Ot.displayName="StyledHomeIcon";var mt=()=>(bt(),Object(H.jsx)(H.Fragment,{children:Object(H.jsx)(ut,{position:"static","data-hook":"app-bar",children:Object(H.jsxs)(rt.a,{children:[Object(H.jsx)(dt.a,{edge:"start","data-hook":"home-button",children:Object(H.jsx)(p.b,{to:"/",children:Object(H.jsx)(Ot,{})})}),Object(H.jsx)(pt,{src:ht,alt:"vote"})]})})}));var xt=()=>Object(H.jsx)(H.Fragment,{children:Object(H.jsxs)(p.a,{children:[Object(H.jsx)(mt,{exact:!0,path:"/",component:Ie}),Object(H.jsx)(O.b,{exact:!0,path:"/",render:()=>Object(H.jsx)(O.a,{to:"/questions"})}),Object(H.jsxs)(O.d,{children:[Object(H.jsx)(O.b,{path:"/questions/:questionId",component:it}),Object(H.jsx)(O.b,{path:"/questions",component:Ie}),'"']})]})});n(124);const gt=u();i.a.render(Object(H.jsx)(s.a,{store:gt,children:Object(H.jsx)(xt,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((e=>{e.unregister()}))},94:function(e,t,n){}},[[125,1,2]]]);
//# sourceMappingURL=main.1bb7d788.chunk.js.map