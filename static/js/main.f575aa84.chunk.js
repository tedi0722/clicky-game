(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e){e.exports=[{id:1,name:"SpongeBob",image:"https://upload.wikimedia.org/wikipedia/en/thumb/4/47/Spongebob-squarepants.svg/666px-Spongebob-squarepants.svg.png",occupation:"Fry Cook",location:"A Pineapple Under the Sea"},{id:2,name:"Mr. Krabs",image:"https://vignette3.wikia.nocookie.net/vsbattles/images/8/80/Mr._Krabs.png/revision/latest?cb=20150919162131",occupation:"Restaurant Owner",location:"A Giant Anchor"},{id:3,name:"Squidward",image:"https://vignette2.wikia.nocookie.net/fictionalcharacters/images/a/ac/Squidward.png/revision/latest?cb=20131121012626",occupation:"Cashier",location:"An Easter Island Head"},{id:4,name:"Dexter",image:"https://s-media-cache-ak0.pinimg.com/originals/fe/32/49/fe32495d45283cd6860ae122f0aeaad9.png",occupation:"Boy Genius",location:"A Secret Laboratory"},{id:5,name:"Courage",image:"https://vignette4.wikia.nocookie.net/vsbattles/images/3/39/Courage-0.png/revision/latest?cb=20160719055423",occupation:"A Cowardly Dog",location:"Nowhere, Kansas"},{id:6,name:"Doug Funnie",image:"https://vignette1.wikia.nocookie.net/doug/images/3/3b/Doug001.gif/revision/latest?cb=20110807170511",occupation:"Student",location:"Bluffington"},{id:7,name:"Bugs Bunny",image:"https://vignette2.wikia.nocookie.net/deathbattlefanon/images/2/2b/Bugs_Bunny.png/revision/latest?cb=20151206010607",occupation:"Looney Toon",location:"A Rabbit Burrow"},{id:8,name:"Johnny Bravo",image:"http://vignette3.wikia.nocookie.net/p__/images/9/9a/Johnny_Bravo.png/revision/latest?cb=20131031233339&path-prefix=protagonist",occupation:"Ladies Man",location:"Aron City"},{id:9,name:"Tommy Pickles",image:"https://vignette4.wikia.nocookie.net/uncyclopedia/images/e/e4/Tommy_Pickles.png/revision/latest?cb=20110530102641",occupation:"Adventurer",location:"California"},{id:10,name:"Rocko",image:"http://vignette3.wikia.nocookie.net/rockosmodernlife/images/9/9e/Rockos-modern-life-4e582a8f06a41.png/revision/latest?cb=20130522173416",occupation:"Cashier",location:"O-Town, California"},{id:11,name:"Captain Planet",image:"http://vignette2.wikia.nocookie.net/dragon-rap-battles/images/b/b6/Captain_Planet.png/revision/latest?cb=20160911200836",occupation:"Superhero",location:"Earth"},{id:12,name:"Ickis",image:"http://static.tvtropes.org/pmwiki/pub/images/ickis.png",occupation:"Ahhhh! A Real Monster!",location:"Under a City Dump"}]},35:function(e,t,a){e.exports=a(76)},41:function(e,t,a){},74:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(24),c=a.n(o),r=(a(41),a(25)),s=a(26),l=a(33),d=a(27),m=a(34),g=a(78),p={headerContainerStyle:{display:"flex",justifyContent:"space-around",alignItems:"center"},h1Style:{margin:0},h2Style:{margin:0,fontSize:20},scoresStyle:{fontSize:20}},h=function(e){return i.a.createElement(g.a,null,i.a.createElement("div",{style:p.headerContainerStyle},i.a.createElement("div",null,i.a.createElement("h1",{style:p.h1Style},"Clicky Game!")),i.a.createElement("div",null,i.a.createElement("h2",null,e.message)),i.a.createElement("div",{className:"scores"},i.a.createElement("h2",{style:p.h2Style},"Score: ",e.score),i.a.createElement("h2",{style:p.h2Style},"Top Score: ",e.topScore))))},u={cardStyle:{borderRadius:10,background:"white",height:200,margin:10,position:"relative",width:200,textAlign:"center",boxShadow:"0 3px 6px #333, 0 3px 6px #333"},imgContainerStyle:{borderRadius:10,height:200,overflow:"hidden",textAlign:"center",background:"#4682b4"},imgStyle:{width:"60%"}},f=function(e){return i.a.createElement("div",{className:"card",style:u.cardStyle,onClick:function(){return e.handleClick(e.id)}},i.a.createElement("div",{className:"img-container",style:u.imgContainerStyle},i.a.createElement("img",{alt:e.name,src:e.image,style:u.imgStyle})))},S=a(12);a(74);var k=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).state={cards:S,score:0,topScore:0,clickedCards:[],message:""},a.handleClick=function(e){-1===a.state.clickedCards.indexOf(e)?(a.handleScore(),a.setState({clickedCards:a.state.clickedCards.concat(e)})):a.handleReset()},a.handleShuffle=function(){var e=function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),n=[e[a],e[t]];e[t]=n[0],e[a]=n[1]}return e}(S);a.setState({cards:e})},a.handleScore=function(){var e=a.state.score+1;a.setState({score:e,message:""}),e>a.state.topScore?a.setState({topScore:e}):12===e&&console.log("test"),a.handleShuffle()},a.handleReset=function(){a.setState({score:0,topScore:a.state.topScore,clickedCards:[]}),a.handleShuffle()},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement(h,{score:this.state.score,topScore:this.state.topScore,message:this.state.message}),i.a.createElement("div",{className:"card-wrapper"},this.state.cards.map(function(t){return i.a.createElement(f,{id:t.id,key:t.id,name:t.name,handleClick:e.handleClick,handleShuffle:e.handleShuffle,handleScore:e.handleScore,handleReset:e.handleReset,image:t.image})})))}}]),t}(n.Component);c.a.render(i.a.createElement(k,null),document.getElementById("root"))}},[[35,2,1]]]);
//# sourceMappingURL=main.f575aa84.chunk.js.map