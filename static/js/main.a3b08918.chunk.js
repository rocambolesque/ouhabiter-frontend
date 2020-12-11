(this.webpackJsonpouhabiter=this.webpackJsonpouhabiter||[]).push([[0],{132:function(e,t,a){},133:function(e,t,a){},157:function(e,t,a){},162:function(e,t,a){},163:function(e,t,a){},165:function(e,t,a){"use strict";a.r(t);var n=a(2),i=a(0),s=a.n(i),o=a(11),r=a.n(o),l=(a(132),a(15)),c=a(12),u=a(38),h=a(37),d=(a(133),a(22)),b=a(30),m=a(208),j=a(196),p=a(210),v=a(65),f=a.n(v),y=a(95),O=a.n(y),x=function(){function e(){Object(l.a)(this,e)}return Object(c.a)(e,null,[{key:"stationToFeature",value:function(e){return{type:"Feature",id:e.stationId,geometry:{type:"Point",coordinates:[e.lng,e.lat]},properties:{id:e.stationId,travelTime:e.travelTime}}}},{key:"buildColorScale",value:function(e,t){var a=(t-e)/5;return["#0A5502",e+a,"#13be00",e+2*a,"#dfff00",e+3*a,"#ffa51f",e+4*a,"#c80000"]}}]),e}(),S=function(){function e(){Object(l.a)(this,e)}return Object(c.a)(e,null,[{key:"hoursToTimeString",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],a=Math.floor(e),n=60*(e-a),i=Math.round(n);return 0===a?i+"min":(i<10&&(i="0"+i),t?a+"h"+i:a+"h")}}]),e}(),g=a(61),T=a.n(g),C=function(){function e(){Object(l.a)(this,e)}return Object(c.a)(e,null,[{key:"getCityOutline",value:function(e){return T()({url:"https://geo.api.gouv.fr/communes/".concat(e),params:{fields:"contour",format:"json",geometry:"centre"}}).then((function(e){return e.data.contour})).catch((function(e){return null}))}}]),e}(),k=a(13),L=(a(157),a(58)),P=a.n(L),I=a(78),M=a(96),V=a.n(M),F=new(function(){function e(){Object(l.a)(this,e);var t=V()("JQA10Z2OZN","ed6d425150c2377e707cd08de17236b7");this.index=t.initIndex("stations"),this.stations=[],this.formerStations={},this.inseeCode=null}return Object(c.a)(e,[{key:"updateStations",value:function(){var e=Object(I.a)(P.a.mark((function e(t){var a,n,i=this;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=null,t!==this.inseeCode){e.next=4;break}return a=new Promise((function(e){e()})),e.abrupt("return",a);case 4:if(!(t in this.formerStations)){e.next=9;break}return this.stations=this.formerStations[t],this.inseeCode=t,a=new Promise((function(e){e()})),e.abrupt("return",a);case 9:return this.formerStations[this.inseeCode]=this.stations,this.inseeCode=t,n=[],e.abrupt("return",this.index.browseObjects({query:"",filters:"fromCityInseeCode=".concat(t),batch:function(e){n=n.concat(e)}}).then((function(){return i.stations=n})));case 13:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"search",value:function(){var e=Object(I.a)(P.a.mark((function e(t){var a=this;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.updateStations(t.fromCityInseeCode).then((function(){var e=[];return a.stations.forEach((function(a){t&&(t.minPopulation&&t.minPopulation>a.cityPopulation||t.maxPopulation&&t.maxPopulation<a.cityPopulation||t.minTravelTime&&t.minTravelTime>a.travelTime||t.maxTravelTime&&t.maxTravelTime<a.travelTime||t.hasFiber&&!a.hasFiber||t.noFiber&&a.hasFiber||t.hasMountains&&!a.hasMountains||t.noMountains&&a.hasMountains||t.hasLake&&!a.hasLake||t.hasCoastline&&!a.hasCoastline||t.noCoastline&&a.hasCoastline||t.hasCountryside&&!a.hasCountryside||t.noCountryside&&a.hasCountryside||t.hasPark&&!a.hasPark)||e.push(a)})),e})));case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getStationById",value:function(e){return e?this.stations.find((function(t){return t.stationId===e})):null}},{key:"getStationBySlug",value:function(e){return e?this.stations.find((function(t){return t.stationName.replace(" ","-").toLowerCase()===e})):null}},{key:"getSlugFromId",value:function(e){if(!e)return null;var t=this.stations.find((function(t){return t.stationId===e}));return t?t.stationName.replace(" ","-").toLowerCase():null}},{key:"getItinerary",value:function(e,t){return T()({url:"https://api.sncf.com/v1/coverage/sncf/journeys",params:{from:e,to:"stop_area:OCE:SA:".concat(t)},auth:{username:"eec588d2-c133-419f-83de-8fc595fb6a4f"}}).then((function(e){if(!e.data.journeys)return null;var t={type:"LineString",coordinates:[]};return e.data.journeys[0].sections.forEach((function(e){var a;e.geojson&&(a=t.coordinates).push.apply(a,Object(d.a)(e.geojson.coordinates))})),t}))}}]),e}()),w=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).onMapLoad=n.onMapLoad.bind(Object(b.a)(n)),n.handleMapClick=n.handleMapClick.bind(Object(b.a)(n)),n.state={colorScale:null,destination:null},n}return Object(c.a)(a,[{key:"componentDidUpdate",value:function(e){e!==this.props&&(this.updateStations(),this.updateColorScale())}},{key:"onMapLoad",value:function(e){e.addSource("stations",{type:"geojson",data:{type:"FeatureCollection",features:[]}}),e.addLayer({id:"stations",type:"circle",source:"stations",paint:{"circle-stroke-width":1,"circle-stroke-color":"#000","circle-radius":{base:3,stops:[[8,4],[8,8],[22,180]]}}}),e.addSource("itinerary",{type:"geojson",data:{type:"LineString",coordinates:[]}}),e.addLayer({id:"itinerary",type:"line",source:"itinerary",layout:{"line-join":"round","line-cap":"round"},paint:{"line-color":"#33302E","line-width":3}}),e.addSource("city-outline",{type:"geojson",data:{type:"Polygon",coordinates:[]}}),e.addLayer({id:"city-outline",type:"line",source:"city-outline",paint:{"line-color":"#000000","line-width":1}}),this.map=e,this.updateStations(),this.updateColorScale(),this.forceUpdate();var t=new URLSearchParams(this.props.location.search);this.setStation(t.get("destination"))}},{key:"updateStations",value:function(){if(this.props.stations){var e=[];this.props.stations.forEach((function(t){e.push(x.stationToFeature(t))})),this.map&&this.map.getSource("stations").setData({type:"FeatureCollection",features:e})}}},{key:"updateColorScale",value:function(){var e=x.buildColorScale(this.props.minTravelTime,this.props.maxTravelTime),t=["step",["get","travelTime"]].concat(Object(d.a)(e));this.setState({colorScale:e}),this.map&&this.map.setPaintProperty("stations","circle-color",t)}},{key:"handleMapClick",value:function(e){var t=this.map.queryRenderedFeatures(e.point,{layers:["stations"]}),a=null;t.length>0&&(a=F.getSlugFromId(t[0].properties.id)),this.setStation(a)}},{key:"setStation",value:function(e){var t=this,a=F.getStationBySlug(e);if(!a)return this.map.getLayer("itinerary").setLayoutProperty("visibility","none"),this.map.getLayer("city-outline").setLayoutProperty("visibility","none"),void this.props.history.push("");this.props.history.push("?destination=".concat(e)),this.map.getLayer("city-outline").setLayoutProperty("visibility","visible"),C.getCityOutline(a.cityInseeCode).then((function(e){e?t.map.getSource("city-outline").setData(e):t.map.getLayer("city-outline").setLayoutProperty("visibility","none")})),this.map.getLayer("itinerary").setLayoutProperty("visibility","visible"),F.getItinerary("admin:fr:75056",a.stationId).then((function(e){e?t.map.getSource("itinerary").setData(e):t.map.getLayer("itinerary").setLayoutProperty("visibility","none")}))}},{key:"render",value:function(){return Object(n.jsxs)("div",{style:{height:"100vh",width:"100%"},children:[Object(n.jsx)(O.a,{accessToken:"pk.eyJ1IjoibWVpbGxldXJzYWdlbnRzIiwiYSI6ImNqMWV5YnRpMDAwMHkyeXRnd3JkdXRiaDEifQ.emcFsn3Ox6WcKmOHhbTOPQ",zoom:"5",mapboxStyle:"mapbox://styles/meilleursagents/ckhf5i46501mv1apg8er3v1b1",coordinates:{lat:46.227638,lng:-.8930568},onLoad:this.onMapLoad,onClick:this.handleMapClick}),this.state.colorScale&&Object(n.jsxs)(m.a,{component:j.a,className:"ColorScaleContainer",children:[Object(n.jsx)(f.a,{}),Object(n.jsx)("div",{className:"ColorScaleStart",children:"- de "+S.hoursToTimeString(this.state.colorScale[1])}),Object(n.jsx)(p.a,{title:"moins de "+S.hoursToTimeString(this.state.colorScale[1]),children:Object(n.jsx)("div",{className:"ColorScaleColor",style:{"background-color":this.state.colorScale[0]}})}),Object(n.jsx)(p.a,{title:"de "+S.hoursToTimeString(this.state.colorScale[1])+" \xe0 "+S.hoursToTimeString(this.state.colorScale[3]),children:Object(n.jsx)("div",{className:"ColorScaleColor",style:{"background-color":this.state.colorScale[2]}})}),Object(n.jsx)(p.a,{title:"de "+S.hoursToTimeString(this.state.colorScale[3])+" \xe0 "+S.hoursToTimeString(this.state.colorScale[5]),children:Object(n.jsx)("div",{className:"ColorScaleColor",style:{"background-color":this.state.colorScale[4]}})}),Object(n.jsx)(p.a,{title:"de "+S.hoursToTimeString(this.state.colorScale[5])+" \xe0 "+S.hoursToTimeString(this.state.colorScale[7]),children:Object(n.jsx)("div",{className:"ColorScaleColor",style:{"background-color":this.state.colorScale[6]}})}),Object(n.jsx)(p.a,{title:"plus de "+S.hoursToTimeString(this.state.colorScale[7]),children:Object(n.jsx)("div",{className:"ColorScaleColor",style:{"background-color":this.state.colorScale[8]}})}),Object(n.jsx)("div",{className:"ColorScaleEnd",children:"+ de "+S.hoursToTimeString(this.state.colorScale[7])})]})]})}}]),a}(i.Component),N=Object(k.e)(w),R=(a(162),a(100)),D=a.n(R),A=a(101),B=a.n(A),E=a(102),J=a.n(E),U=a(103),W=a.n(U),q=a(104),z=a.n(q),Q=a(105),X=a.n(Q),Y=a(106),H=a.n(Y),K=(a(163),function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return Object(n.jsx)("div",{children:this.props.station&&Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:"StationInformation",children:[Object(n.jsx)(D.a,{}),Object(n.jsx)(m.a,{m:1,children:this.props.station.stationName})]}),Object(n.jsxs)("div",{className:"StationInformation",children:[Object(n.jsx)(B.a,{}),Object(n.jsx)(m.a,{m:1,children:this.props.station.cityName})]}),Object(n.jsxs)("div",{className:"StationInformation",children:[Object(n.jsx)(J.a,{}),Object(n.jsx)(m.a,{m:1,children:this.props.station.cityPopulation.toLocaleString()})]}),Object(n.jsxs)("div",{className:"StationInformation",children:[Object(n.jsx)(f.a,{}),Object(n.jsx)(m.a,{m:1,children:S.hoursToTimeString(this.props.station.travelTime)})]}),this.props.station.hasFiber&&Object(n.jsxs)("div",{className:"StationInformation",children:[Object(n.jsx)(W.a,{}),Object(n.jsx)(m.a,{m:1,children:"Fibre"})]}),this.props.station.hasPark&&Object(n.jsxs)("div",{className:"StationInformation",children:[Object(n.jsx)(z.a,{}),Object(n.jsx)(m.a,{m:1,children:"Parc naturel"})]}),this.props.station.hasMountains&&Object(n.jsxs)("div",{className:"StationInformation",children:[Object(n.jsx)(X.a,{}),Object(n.jsx)(m.a,{m:1,children:"Montagne"})]}),this.props.station.hasCoastline&&Object(n.jsxs)("div",{className:"StationInformation",children:[Object(n.jsx)(H.a,{}),Object(n.jsx)(m.a,{m:1,children:"Plage"})]})]})})}}]),a}(i.Component)),Z=a(21),G=a(20),_=a(205),$=a(34),ee=a(204),te=a(213),ae=[{value:0,scaledValue:100,label:"100"},{value:25,scaledValue:1e3,label:"1k"},{value:50,scaledValue:5e3,label:"5k"},{value:75,scaledValue:1e4,label:"10k"},{value:100,scaledValue:25e3,label:"25k"},{value:125,scaledValue:5e4,label:"50k"},{value:150,scaledValue:1e5,label:"100k"},{value:175,scaledValue:2e5,label:"200k"},{value:200,scaledValue:3e6,label:"3M"}],ne=[{value:0,scaledValue:.5,label:S.hoursToTimeString(.5,!1)},{value:2,scaledValue:1,label:S.hoursToTimeString(1,!1)},{value:4,scaledValue:2,label:S.hoursToTimeString(2,!1)},{value:6,scaledValue:3,label:S.hoursToTimeString(3,!1)},{value:8,scaledValue:4,label:S.hoursToTimeString(4,!1)},{value:10,scaledValue:5,label:S.hoursToTimeString(5,!1)},{value:12,scaledValue:8,label:S.hoursToTimeString(8,!1)},{value:14,scaledValue:10,label:S.hoursToTimeString(10,!1)},{value:16,scaledValue:12,label:S.hoursToTimeString(12,!1)},{value:18,scaledValue:16,label:S.hoursToTimeString(16,!1)},{value:20,scaledValue:20,label:S.hoursToTimeString(20,!1)}];function ie(e){return oe(ae,e,25)}function se(e){return oe(ne,e,2)}function oe(e,t,a){var n=Math.floor(t/a),i=e[n],s=t%a;return 0===s?i.scaledValue:s*((e[n+1].scaledValue-i.scaledValue)/a)+i.scaledValue}function re(e){return e>=1e6?"".concat(Math.trunc(e/1e6),"M"):e>1e3?"".concat(Math.trunc(e/1e3),"K"):e}function le(e){return"".concat(S.hoursToTimeString(e,e<5))}var ce=a(109),ue=a.n(ce),he=a(209),de=a(212),be=a(202),me=function(){var e=Object(G.e)();return s.a.useEffect((function(){e.values!==e.initialValues&&e.submitForm()}),[e.values]),null},je=[{name:"Paris",inseeCode:"75056"},{name:"Lyon",inseeCode:"69123"},{name:"Marseille",inseeCode:"13055"}],pe=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={minTravelTime:0,maxTravelTime:20,travelTimeRange:[0,20],minPopulation:0,maxPopulation:200,populationRange:[0,200],fromCityInseeCode:je[0].inseeCode},n}return Object(c.a)(a,[{key:"onSliderChange",value:function(e,t,a,n){"travelTime"===n?(a("minTravelTime",se(t[0])),a("maxTravelTime",se(t[1])),this.setState({travelTimeRange:t})):(a("minPopulation",ie(t[0])),a("maxPopulation",ie(t[1])),this.setState({populationRange:t}))}},{key:"onSelectChange",value:function(e,t){t(e.target.name,e.target.value),this.setState(Object(Z.a)({},e.target.name,e.target.value))}},{key:"doSearch",value:function(e){this.props.onSearchChange(e)}},{key:"render",value:function(){var e=this;return Object(n.jsx)("div",{children:Object(n.jsx)(G.c,{initialValues:{travelTime:this.state.travelTimeRange,population:this.state.populationRange,minTravelTime:this.state.minTravelTime,maxTravelTime:this.state.maxTravelTime,fromCityInseeCode:this.state.fromCityInseeCode},onSubmit:ue()((function(t){e.doSearch(t)}),100),children:function(t){var a=t.handleSubmit,i=t.setFieldValue;return Object(n.jsxs)(G.b,{onSubmit:a,onChange:e.handleFormChange,children:[Object(n.jsx)(me,{}),Object(n.jsxs)(m.a,{pb:2,children:[Object(n.jsx)(ee.a,{id:"travel-time",gutterBottom:!0,children:"D\xe9part"}),Object(n.jsx)(be.a,{variant:"outlined",style:{width:"95%"},children:Object(n.jsx)(he.a,{name:"fromCityInseeCode",value:e.state.fromCityInseeCode,onChange:function(t){return e.onSelectChange(t,i)},children:je.map((function(e){return Object(n.jsx)(de.a,{value:e.inseeCode,children:e.name})}))})})]}),Object(n.jsx)(ee.a,{id:"travel-time",gutterBottom:!0,children:"Temps de trajet"}),Object(n.jsx)(m.a,{m:2,children:Object(n.jsx)(te.a,{value:e.state.travelTimeRange,onChange:function(t,a){return e.onSliderChange(t,a,i,"travelTime")},valueLabelDisplay:"auto",valueLabelFormat:le,min:e.state.minTravelTime,max:e.state.maxTravelTime,scale:function(e){return se(e)},marks:ne,style:{width:"95%"}})}),Object(n.jsx)(ee.a,{id:"population",gutterBottom:!0,children:"Population"}),Object(n.jsx)(m.a,{m:2,children:Object(n.jsx)(te.a,{value:e.state.populationRange,onChange:function(t,a){return e.onSliderChange(t,a,i,"population")},valueLabelDisplay:"auto",valueLabelFormat:re,min:e.state.minPopulation,max:e.state.maxPopulation,scale:function(e){return ie(e)},marks:ae,style:{width:"95%"}})}),Object(n.jsxs)("div",{style:{display:"flex",marginTop:10},children:[Object(n.jsxs)("div",{children:[Object(n.jsx)(G.a,{component:$.a,type:"checkbox",name:"hasFiber",Label:{label:"Avec la fibre"},disabled:!1}),Object(n.jsx)("br",{}),Object(n.jsx)(G.a,{component:$.a,type:"checkbox",name:"hasCountryside",Label:{label:"\xc0 la campagne"},disabled:!1}),Object(n.jsx)("br",{}),Object(n.jsx)(G.a,{component:$.a,type:"checkbox",name:"hasMountains",Label:{label:"\xc0 la montagne"},disabled:!1}),Object(n.jsx)("br",{}),Object(n.jsx)(G.a,{component:$.a,type:"checkbox",name:"hasCoastline",Label:{label:"\xc0 la mer"},disabled:!1}),Object(n.jsx)("br",{}),Object(n.jsx)(G.a,{component:$.a,type:"checkbox",name:"hasLake",disabled:!1,Label:{label:"Pr\xe8s d'un grand lac"}}),Object(n.jsx)("br",{})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)(G.a,{component:$.a,type:"checkbox",name:"noFiber",Label:{label:"Sans la fibre"},disabled:!1}),Object(n.jsx)("br",{}),Object(n.jsx)(G.a,{component:$.a,type:"checkbox",name:"noCountryside",Label:{label:"En ville"},disabled:!1}),Object(n.jsx)("br",{}),Object(n.jsx)(G.a,{component:$.a,type:"checkbox",name:"noMountains",Label:{label:"Pas \xe0 la montagne"},disabled:!1}),Object(n.jsx)("br",{}),Object(n.jsx)(G.a,{component:$.a,type:"checkbox",name:"noCoastline",Label:{label:"Pas \xe0 la mer"},disabled:!1}),Object(n.jsx)("br",{}),Object(n.jsx)(G.a,{component:$.a,type:"checkbox",name:"hasPark",Label:{label:"Dans un parc naturel"},disabled:!1}),Object(n.jsx)("br",{})]})]}),Object(n.jsx)(_.a,{variant:"contained",color:"primary",type:"submit",disabled:!1,style:{marginTop:10},children:"Filtrer"})]})}})})}}]),a}(i.Component),ve=a(206),fe=a(110),ye=a.n(fe),Oe=a(203),xe=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;Object(l.a)(this,a),(n=t.call(this,e)).handleCloseStation=n.handleCloseStation.bind(Object(b.a)(n));var i=null,s=!0,o=new URLSearchParams(e.location.search).get("destination");return o&&((i=F.getStationBySlug(o))?s=!1:o=null),n.state={searchActive:s,station:i,destination:o},n}return Object(c.a)(a,[{key:"componentDidUpdate",value:function(e){var t=new URLSearchParams(this.props.location.search);if(this.state.destination&&!t.get("destination"))this.setState({searchActive:!0,station:null,destination:null});else if(!this.state.destination&&t.get("destination")||this.state.destination!==t.get("destination")){var a=F.getStationBySlug(t.get("destination"));this.setState({searchActive:!1,station:a,destination:t.get("destination")})}}},{key:"handleCloseStation",value:function(){this.props.history.push(""),this.setState({searchActive:!0})}},{key:"render",value:function(){return Object(n.jsxs)(m.a,{pl:1,className:"SidePanel",children:[Object(n.jsx)("img",{alt:"logo",src:"/logo.png",width:"30%"}),Object(n.jsx)(ve.a,{in:this.state.searchActive,children:Object(n.jsx)(pe,{onSearchChange:this.props.onSearchChange})}),!this.state.searchActive&&Object(n.jsxs)(m.a,{m:2,children:[Object(n.jsx)(m.a,{display:"flex",justifyContent:"flex-end",children:Object(n.jsx)(Oe.a,{onClick:this.handleCloseStation,children:Object(n.jsx)(ye.a,{})})}),Object(n.jsx)(K,{station:this.state.station})]})]})}}]),a}(i.Component),Se=Object(k.e)(xe),ge=a(59),Te=(a(164),function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={stations:[],search:{minTravelTime:0,maxTravelTime:20,fromCityInseeCode:"75056"}},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;F.search(this.state.search).then((function(t){e.setState({stations:t})})),this.handleSearchChange=this.handleSearchChange.bind(this)}},{key:"handleSearchChange",value:function(e){var t=this;e!==this.state.search&&F.search(e).then((function(a){t.setState({search:e,stations:a})}))}},{key:"render",value:function(){return Object(n.jsx)("div",{children:Object(n.jsx)(ge.a,{children:Object(n.jsxs)(k.a,{path:"",children:[Object(n.jsx)(Se,{onSearchChange:this.handleSearchChange}),Object(n.jsx)(N,{stations:this.state.stations,minTravelTime:this.state.search.minTravelTime,maxTravelTime:this.state.search.maxTravelTime})]})})})}}]),a}(i.Component)),Ce=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,215)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,o=t.getTTFB;a(e),n(e),i(e),s(e),o(e)}))};r.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(Te,{})}),document.getElementById("root")),Ce()}},[[165,1,2]]]);
//# sourceMappingURL=main.a3b08918.chunk.js.map