(this["webpackJsonpseries-test"]=this["webpackJsonpseries-test"]||[]).push([[0],{11:function(e,t,n){e.exports=n(12)},12:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(2),l=n(4),c=n(3),s=n(6),i=n(5),u=n(0),o=n.n(u),m=n(10),b=n.n(m),h=n(7),E=n.n(h),g=(n(21),function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(l.a)(this,Object(c.a)(t).call(this,e))).state={Stage:0,Diverges:!1,Converges:!1},n.incrementStage=n.incrementStage.bind(Object(s.a)(n)),n.resetStage=n.resetStage.bind(Object(s.a)(n)),n.setConverges=n.setConverges.bind(Object(s.a)(n)),n.setDiverges=n.setDiverges.bind(Object(s.a)(n)),n}return Object(i.a)(t,e),Object(r.a)(t,[{key:"incrementStage",value:function(){this.setState({Stage:this.state.Stage+1})}},{key:"resetStage",value:function(){this.setState({Stage:0,Diverges:!1,Converges:!1})}},{key:"setConverges",value:function(){this.setState({Converges:!0})}},{key:"setDiverges",value:function(){this.setState({Diverges:!0})}},{key:"render",value:function(){if(this.state.Diverges)return o.a.createElement("div",null,o.a.createElement("button",{onClick:this.resetStage},"Reset"),o.a.createElement(p,null));if(this.state.Converges)return o.a.createElement("div",null,o.a.createElement("button",{onClick:this.resetStage},"Reset"),o.a.createElement(v,null));var e;switch(this.state.Stage){case 0:e=o.a.createElement(d,{inc:this.incrementStage,conv:this.setConverges,div:this.setDiverges});break;case 1:e=o.a.createElement(f,{inc:this.incrementStage,conv:this.setConverges,div:this.setDiverges});break;case 2:e=o.a.createElement(k,{inc:this.incrementStage,conv:this.setConverges,div:this.setDiverges});break;case 3:e=o.a.createElement(S,{inc:this.incrementStage,conv:this.setConverges,div:this.setDiverges});break;case 4:e=o.a.createElement(j,{inc:this.incrementStage,conv:this.setConverges,div:this.setDiverges});break;case 5:e=o.a.createElement(O,{inc:this.incrementStage,conv:this.setConverges,div:this.setDiverges});break;case 6:e=o.a.createElement(y,{inc:this.incrementStage,conv:this.setConverges,div:this.setDiverges});break;case 7:e=o.a.createElement(C,{inc:this.incrementStage,conv:this.setConverges,div:this.setDiverges})}return o.a.createElement("div",null,o.a.createElement("button",{onClick:this.resetStage},"Reset"),e)}}]),t}(o.a.Component)),p=function(e){function t(){return Object(a.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{class:"center"},o.a.createElement("h1",null,"Your series diverges."),o.a.createElement("p",null,"I'm so sorry, I know this was sudden."))}}]),t}(o.a.Component),v=function(e){function t(){return Object(a.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{class:"center"},o.a.createElement("h1",null,"Your series converges."),o.a.createElement("p",null,"Congratulations\u2026 I guess."))}}]),t}(o.a.Component),d=function(e){function t(){return Object(a.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=o.a.createElement(w,{Formula:"\\lim_{n \\to \\infty} a_{n} = 0"});return o.a.createElement("div",{class:"center"},o.a.createElement("h1",null,o.a.createElement("u",null,"Nth Term Test")),o.a.createElement("br",null),o.a.createElement("p",null,"Does ",e," ?"),o.a.createElement("br",null),o.a.createElement("button",{onClick:this.props.inc},"Yes"),o.a.createElement("button",{onClick:this.props.div},"No"))}}]),t}(o.a.Component),f=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(l.a)(this,Object(c.a)(t).call(this,e))).state={Substage:0},n.incrementSubstage=n.incrementSubstage.bind(Object(s.a)(n)),n}return Object(i.a)(t,e),Object(r.a)(t,[{key:"incrementSubstage",value:function(){console.log("test"),this.setState({Substage:this.state.Substage+1})}},{key:"render",value:function(){switch(this.state.Substage){case 0:return o.a.createElement("div",{class:"center"},o.a.createElement("h1",null,o.a.createElement("u",null,"P-Series Test")),o.a.createElement("br",null),o.a.createElement("p",null,"Does your sum look ",o.a.createElement("i",null,"sum"),"thing like this?"),o.a.createElement(D,{Summand:"\\frac{1}{n^{p}}"}),o.a.createElement("br",null),o.a.createElement("button",{onClick:this.incrementSubstage},"Yes"),o.a.createElement("button",{onClick:this.props.inc},"No"));case 1:return o.a.createElement("div",{class:"center"},o.a.createElement("h1",null,o.a.createElement("u",null,"P-Series Test")),o.a.createElement("br",null),o.a.createElement("p",null,"Is   ",o.a.createElement(w,{Formula:"p > 1"})," ?"),o.a.createElement("br",null),o.a.createElement("button",{onClick:this.props.conv},"Yes"),o.a.createElement("button",{onClick:this.props.div},"No"))}}}]),t}(o.a.Component),k=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(l.a)(this,Object(c.a)(t).call(this,e))).state={Substage:0},n.incrementSubstage=n.incrementSubstage.bind(Object(s.a)(n)),n}return Object(i.a)(t,e),Object(r.a)(t,[{key:"incrementSubstage",value:function(){console.log("test"),this.setState({Substage:this.state.Substage+1})}},{key:"render",value:function(){switch(this.state.Substage){case 0:return o.a.createElement("div",{class:"center"},o.a.createElement("h1",null,o.a.createElement("u",null,"Alternating Series Test")),o.a.createElement("br",null),o.a.createElement("p",null,"Does your sum look something like this?"),o.a.createElement(_,{Formula:"\\sum_{n=1}^{\\infty} \\frac{(-1)^{n}}{a_{n}}"}),o.a.createElement("p",null,"or"),o.a.createElement(_,{Formula:"\\sum_{n=1}^{\\infty} \\frac{cos(\\pi n)}{a_{n}}"}),o.a.createElement("br",null),o.a.createElement("button",{onClick:this.incrementSubstage},"Yes"),o.a.createElement("button",{onClick:this.props.inc},"No"));case 1:return o.a.createElement("div",{class:"center"},o.a.createElement("h1",null,o.a.createElement("u",null,"Alternating Series Test")),o.a.createElement("br",null),o.a.createElement("p",null,"Does your series meet the folliwng conditions?"),o.a.createElement("ul",null,o.a.createElement("li",null,"Subsequent terms in the series are decreasing in magnitude"),o.a.createElement("li",null,"The series approaches 0"),o.a.createElement("li",null,"Terms alternate")),o.a.createElement("br",null),o.a.createElement("button",{onClick:this.props.conv},"Yes"),o.a.createElement("button",{onClick:this.props.inc},"No"))}}}]),t}(o.a.Component),S=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(l.a)(this,Object(c.a)(t).call(this,e))).state={Substage:0},n.incrementSubstage=n.incrementSubstage.bind(Object(s.a)(n)),n}return Object(i.a)(t,e),Object(r.a)(t,[{key:"incrementSubstage",value:function(){console.log("test"),this.setState({Substage:this.state.Substage+1})}},{key:"render",value:function(){switch(this.state.Substage){case 0:return o.a.createElement("div",{class:"center"},o.a.createElement("h1",null,o.a.createElement("u",null,"Geometric Series Test")),o.a.createElement("br",null),o.a.createElement("p",null,"Does your sum look something like this?"),o.a.createElement(D,{Summand:"ar^{n}"}),o.a.createElement("br",null),o.a.createElement("button",{onClick:this.incrementSubstage},"Yes"),o.a.createElement("button",{onClick:this.props.inc},"No"));case 1:return o.a.createElement("div",{class:"center"},o.a.createElement("h1",null,o.a.createElement("u",null,"Geometric Series Test")),o.a.createElement("br",null),o.a.createElement("p",null,"Is ",o.a.createElement(w,{Formula:"r < 1"})," ?"),o.a.createElement("br",null),o.a.createElement("button",{onClick:this.props.conv},"Yes"),o.a.createElement("button",{onClick:this.props.div},"No"))}}}]),t}(o.a.Component),j=function(e){function t(){return Object(a.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{class:"center"},o.a.createElement("h1",null,o.a.createElement("u",null,"Telescoping Series Test")),o.a.createElement("br",null),o.a.createElement("p",null,"Does your sum look something like this?"),o.a.createElement(D,{Summand:"\\frac{a}{(n+b)(n+c)}"}),o.a.createElement("p",null,"Or, if you write out the terms, do they begin to cancel?"),o.a.createElement("br",null),o.a.createElement("button",{onClick:this.props.conv},"Yes"),o.a.createElement("button",{onClick:this.props.inc},"No"))}}]),t}(o.a.Component),O=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(l.a)(this,Object(c.a)(t).call(this,e))).state={Substage:0},n.incrementSubstage=n.incrementSubstage.bind(Object(s.a)(n)),n}return Object(i.a)(t,e),Object(r.a)(t,[{key:"incrementSubstage",value:function(){console.log("test"),this.setState({Substage:this.state.Substage+1})}},{key:"render",value:function(){switch(this.state.Substage){case 0:return o.a.createElement("div",{class:"center"},o.a.createElement("h1",null,o.a.createElement("u",null,"Integral Test")),o.a.createElement("br",null),o.a.createElement("p",null,o.a.createElement(w,{Formula:"Let f(n)"})," such that ",o.a.createElement(w,{Formula:"f(n)=a_{n}"})),o.a.createElement("p",null,"Is ",o.a.createElement(w,{Formula:"f(n)"})," continuous, decreasing, and positive on the same interval as your sum?"),o.a.createElement("br",null),o.a.createElement("button",{onClick:this.incrementSubstage},"Yes"),o.a.createElement("button",{onClick:this.props.inc},"No"));case 1:return o.a.createElement("div",{class:"center"},o.a.createElement("h1",null,o.a.createElement("u",null,"Integral Test")),o.a.createElement("br",null),o.a.createElement("p",null,"Could you actually evaluate this integral?"),o.a.createElement(_,{Formula:"\\int_{a}^{\\infty} f(n)dn"}),o.a.createElement("br",null),o.a.createElement("button",{onClick:this.incrementSubstage},"Yes"),o.a.createElement("button",{onClick:this.props.inc},"No"));case 2:return o.a.createElement("div",{class:"center"},o.a.createElement("h1",null,o.a.createElement("u",null,"Integral Test")),o.a.createElement("br",null),o.a.createElement("p",null,"Ok, so do that. Did the integral converge?"),o.a.createElement("br",null),o.a.createElement("button",{onClick:this.props.conv},"Yes"),o.a.createElement("button",{onClick:this.props.div},"No"))}}}]),t}(o.a.Component),y=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(l.a)(this,Object(c.a)(t).call(this,e))).state={Substage:0,Alt:!1},n.incrementSubstage=n.incrementSubstage.bind(Object(s.a)(n)),n.setAlt=n.setAlt.bind(Object(s.a)(n)),n}return Object(i.a)(t,e),Object(r.a)(t,[{key:"incrementSubstage",value:function(){console.log("test"),this.setState({Substage:this.state.Substage+1})}},{key:"setAlt",value:function(){console.log("alt"),this.setState({Alt:!0})}},{key:"render",value:function(){if(this.state.Alt)return o.a.createElement("div",{class:"center"},o.a.createElement("h1",null,"Ratio Test"),o.a.createElement("p",null,"I suppose I can't make you evaluate that, but what does this accomplish? I mean, I've put a lot of time into this assignment and you're just going to press a button that says \"no\" just for the sake of it? You know you have to restart from the beginning now, right? You know that because of this, I have to ",o.a.createElement("i",null,"make"),"that reset button, right? You're just making more work for me. Why would you do that? And now that I've typed out this block of text, I've lost even more time. Because of you. Thanks."));switch(this.state.Substage){case 0:return o.a.createElement("div",{class:"center"},o.a.createElement("h1",null,o.a.createElement("u",null,"Ratio Test")),o.a.createElement("br",null),o.a.createElement("p",null,"Does your series look like a geometric series, but isn't actually a geometric series?"),o.a.createElement("p",null,"or"),o.a.createElement("p",null,"Does your series contain factorials or exponentials?"),o.a.createElement("br",null),o.a.createElement("button",{onClick:this.incrementSubstage},"Yes"),o.a.createElement("button",{onClick:this.props.inc},"No"));case 1:return o.a.createElement("div",{class:"center"},o.a.createElement("h1",null,o.a.createElement("u",null,"Ratio Test")),o.a.createElement("br",null),o.a.createElement("p",null,"Would you be so kind as to evaluate the following limit and state the result?"),o.a.createElement(_,{Formula:"\\lim_{n\\to\\infty} \\Big|\\frac{a_{n+1}}{a_{n}}\\Big| = L"}),o.a.createElement("br",null),o.a.createElement("button",{onClick:this.props.conv},"L < 1"),o.a.createElement("button",{onClick:this.props.div},"L > 1"),o.a.createElement("button",{onClick:this.props.inc},"L = 1"),o.a.createElement("button",{onClick:this.setAlt},"No"))}}}]),t}(o.a.Component),C=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(l.a)(this,Object(c.a)(t).call(this,e))).state={Substage:0},n.incrementSubstage=n.incrementSubstage.bind(Object(s.a)(n)),n}return Object(i.a)(t,e),Object(r.a)(t,[{key:"incrementSubstage",value:function(e){console.log("test"),this.setState({Substage:this.state.Substage+e})}},{key:"render",value:function(){var e=this;switch(this.state.Substage){case 0:return o.a.createElement("div",{class:"center"},o.a.createElement("h1",null,o.a.createElement("u",null,"Comparison")),o.a.createElement("br",null),o.a.createElement("p",null,"All that's left to do is try comparison."),o.a.createElement("p",null,"Would you like to try limit comparison or direct comparison?"),o.a.createElement("button",{onClick:function(){return e.incrementSubstage(1)}},"Limit comparison"),o.a.createElement("button",{onClick:function(){return e.incrementSubstage(2)}},"Direct comparison"),o.a.createElement("button",{onClick:function(){return e.incrementSubstage(3)}},"No"));case 1:return o.a.createElement("div",{class:"center"},o.a.createElement("h1",null,o.a.createElement("u",null,"Limit Comparison")),o.a.createElement("br",null),o.a.createElement("p",null,"Try to think of another series ",o.a.createElement(w,{Formula:"b_{n}"})," such that"),o.a.createElement(_,{Formula:"\\lim_{n\\to\\infty} \\Big|\\frac{a_{n}}{b_{n}}\\Big| \\in\\mathbb{R}^{+}"}),o.a.createElement("p",null,"or"),o.a.createElement(_,{Formula:"\\lim_{n\\to\\infty} \\Big|\\frac{b_{n}}{a_{n}}\\Big| \\in\\mathbb{R}^{+}"}),o.a.createElement("p",null,"Did the series you compared to diverge or converge?"),o.a.createElement("button",{onClick:this.props.conv},"Converge"),o.a.createElement("button",{onClick:this.props.div},"Diverge"),o.a.createElement("button",{onClick:function(){return e.incrementSubstage(2)}},"No"));case 2:return o.a.createElement("div",{class:"center"},o.a.createElement("h1",null,o.a.createElement("u",null,"Direct Comparison")),o.a.createElement("br",null),o.a.createElement("p",null,"Try to think of another series ",o.a.createElement(w,{Formula:"b_{n}"})," such that"),o.a.createElement("p",null,o.a.createElement(w,{Formula:"\\sum_{n=1}^{\\infty}b_{n}\\in\\mathbb{R}"})," and ",o.a.createElement(w,{Formula:"0\\leq a_{n}\\leq b_{n}"})),o.a.createElement("p",null,"or"),o.a.createElement("p",null,o.a.createElement(w,{Formula:"\\sum_{n=1}^{\\infty}b_{n}\\notin\\mathbb{R}"})," and ",o.a.createElement(w,{Formula:"0\\leq b_{n}\\leq a_{n}"})),o.a.createElement("p",null,"Did the series you compared to diverge or converge?"),o.a.createElement("button",{onClick:this.props.conv},"Converge"),o.a.createElement("button",{onClick:this.props.div},"Diverge"),o.a.createElement("button",{onClick:function(){return e.incrementSubstage(1)}},"No"));case 3:return o.a.createElement("div",{class:"center"},o.a.createElement("h1",null,o.a.createElement("u",null,"seriously")),o.a.createElement("br",null),o.a.createElement("p",null,"you got this far and you're just going to say no?"))}}}]),t}(o.a.Component),D=function(e){function t(){return Object(a.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement(_,{Formula:"\\sum_{n=1}^{\\infty}"+this.props.Summand})}}]),t}(o.a.Component),_=function(e){function t(){return Object(a.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement(E.a.Provider,null,o.a.createElement(E.a.Node,{formula:this.props.Formula}))}}]),t}(o.a.Component),w=function(e){function t(){return Object(a.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement(E.a.Provider,null,o.a.createElement(E.a.Node,{inline:!0,formula:this.props.Formula}))}}]),t}(o.a.Component);b.a.render(o.a.createElement(g,null),document.getElementById("root"))},21:function(e,t,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.c9446d3b.chunk.js.map