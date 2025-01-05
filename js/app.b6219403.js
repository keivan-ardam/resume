(function(){"use strict";var a={5442:function(a,e,i){var t=i(5130),n=i(6768);function s(a,e,i,t,s,l){const r=(0,n.g2)("Main");return(0,n.uX)(),(0,n.Wv)(r)}const l={class:"container"};function r(a,e,i,t,s,r){const d=(0,n.g2)("Home"),o=(0,n.g2)("About"),c=(0,n.g2)("About_2"),v=(0,n.g2)("About_3"),f=(0,n.g2)("Skills"),u=(0,n.g2)("Resume"),h=(0,n.g2)("Contact"),m=(0,n.g2)("SideBar");return(0,n.uX)(),(0,n.CE)("section",l,[(0,n.bF)(d,{ref:"Home",menu:s.menu},null,8,["menu"]),(0,n.bF)(o,{ref:"About"},null,512),(0,n.bF)(c),(0,n.bF)(v),(0,n.bF)(f,{ref:"Skills"},null,512),(0,n.bF)(u,{ref:"Resume"},null,512),(0,n.bF)(h,{ref:"Contact"},null,512),(0,n.bF)(m,{menu:s.menu},null,8,["menu"])])}const d=a=>((0,n.Qi)("data-v-6127558e"),a=a(),(0,n.jt)(),a),o={class:"header",id:"header"},c={ref:"starfieldCanvas"},v=d((()=>(0,n.Lk)("div",{class:"container"},[(0,n.Lk)("div",{class:"row"},[(0,n.Lk)("div",{class:"col-lg-12 col-md-12"}),(0,n.Lk)("div",{class:"header-wrapper"},[(0,n.Lk)("h1",null,[(0,n.eW)(" SRE &"),(0,n.Lk)("br"),(0,n.eW)(" Mechanical Engineer ")]),(0,n.Lk)("h2",null,"Keivan Ardam")])])],-1))),f={class:"more-info"},u=d((()=>(0,n.Lk)("i",{class:"fa-solid fa-arrow-down","aria-hidden":"true"},null,-1)));function h(a,e,i,t,s,l){return(0,n.uX)(),(0,n.CE)("div",o,[(0,n.Lk)("canvas",c,null,512),v,(0,n.Lk)("div",f,[(0,n.Lk)("button",{class:"more-info-but",onClick:e[0]||(e[0]=a=>l.scrollToComponent("About"))},[(0,n.eW)(" LEARN MORE "),u])])])}i(4114);var m={props:{menu:{type:Object,required:!0}},data(){return{stars:[],canvas:null,ctx:null,numStars:500}},mounted(){this.initCanvas(),this.generateStars(),this.animate()},methods:{initCanvas(){this.canvas=this.$refs.starfieldCanvas,this.ctx=this.canvas.getContext("2d"),this.canvas.width=window.innerWidth,this.canvas.height=window.innerHeight,window.addEventListener("resize",this.handleResize)},handleResize(){this.canvas.width=window.innerWidth,this.canvas.height=window.innerHeight,this.generateStars()},generateStars(){this.stars=[];for(let a=0;a<this.numStars;a++){const a=Math.random()<.7?"small":Math.random()<.7?"medium":"large",e=15+50*Math.random()+50*Math.random(),i=Math.random()*Math.PI*2,t=.001+.001*Math.random(),n=Math.random()<.004,s=5e3*Math.random()+2e3;this.stars.push({x:Math.random()*this.canvas.width,y:Math.random()*this.canvas.height,radius:e,angle:i,angularSpeed:t,size:a,invisible:n,invisibleTime:n?Date.now()+s:0})}},drawStars(){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.fillStyle="white",this.stars.forEach((a=>{if(!a.invisible||Date.now()>a.invisibleTime){const e=a.x+Math.cos(a.angle)*a.radius+3*Math.cos(a.angle),i=a.y+Math.sin(a.angle)*a.radius+2*Math.cos(a.angle);"small"===a.size?this.ctx.fillRect(e,i,.5,.5):"medium"===a.size?this.ctx.fillRect(e,i,1,1):this.ctx.fillRect(e,i,2,2)}}))},moveStars(){this.stars.forEach((a=>{a.angle+=a.angularSpeed,a.invisible&&Date.now()>a.invisibleTime&&(a.invisible=!1),!a.invisible&&Math.random()<5e-5&&(a.invisible=!0,a.invisibleTime=Date.now()+5e3*Math.random()+2e3)}))},animate(){this.drawStars(),this.moveStars(),requestAnimationFrame(this.animate)},scrollToComponent(a){const e=this.menu.filter((a=>"About"===a.label))[0],i=e.ref;i&&i.$el.scrollIntoView({behavior:"smooth"})}},beforeDestroy(){window.removeEventListener("resize",this.handleResize)}},p=i(1241);const g=(0,p.A)(m,[["render",h],["__scopeId","data-v-6127558e"]]);var b=g;const k=a=>((0,n.Qi)("data-v-1f22b0f0"),a=a(),(0,n.jt)(),a),y={class:"about ss-style-triangles"},w={class:"split-section"},L={class:"first-side col-lg-6 col-lg-12"},C={class:"main-text"},A=k((()=>(0,n.Lk)("h2",null,"About",-1))),x=k((()=>(0,n.Lk)("hr",{class:"line"},null,-1))),S=k((()=>(0,n.Lk)("h3",null,"My Story",-1))),E=["href"],I=k((()=>(0,n.Lk)("i",{class:"fa fa-download cpl","aria-hidden":"true"},null,-1))),_=[I],M=k((()=>(0,n.Lk)("div",{class:"second-side col-lg-6 col-lg-12"},null,-1)));function T(a,e,i,t,s,l){return(0,n.uX)(),(0,n.CE)("section",y,[(0,n.Lk)("div",w,[(0,n.Lk)("div",L,[(0,n.Lk)("div",C,[A,x,S,(0,n.Lk)("p",null,[(0,n.eW)(" Passionate Data Scientist and Service Reliability Engineer with nearly 3 years of expertise in IoT, data analysis, and machine learning. Currently driving building energy efficiency through cutting-edge autonomous AI HVAC tech. Committed to a greener, more efficient future. "),(0,n.Lk)("a",{class:"d-inline-block",tabindex:"0","data-bs-toggle":"tooltip",title:"Download Resume",href:`${s.publicPath}Keivan_Ardam_Resume.pdf`,download:"Keivan_Ardam_Resume.pdf"},_,8,E)])])]),M])])}var O={name:"Section_1",data(){return{publicPath:"/resume/"}},methods:{}};const F=(0,p.A)(O,[["render",T],["__scopeId","data-v-1f22b0f0"]]);var P=F;const R=a=>((0,n.Qi)("data-v-06add4ae"),a=a(),(0,n.jt)(),a),D={class:"expertise"},V={class:"split-section"},X={class:"first-side col-lg-6 col-lg-12"},z=["src"],B=R((()=>(0,n.Lk)("div",{class:"second-side col-lg-6 col-lg-12"},[(0,n.Lk)("div",{class:"main-text"},[(0,n.Lk)("h2",null,"Expertise"),(0,n.Lk)("div",{class:"set"},[(0,n.Lk)("div",{class:"single_progress_bar revealator-slidedown revealator-once"},[(0,n.Lk)("h4",null,"BACKEND - 80%"),(0,n.Lk)("div",{class:"progress"},[(0,n.Lk)("div",{class:"progress-bar",role:"progressbar","aria-valuenow":"60","aria-valuemin":"0","aria-valuemax":"100",style:{width:"80%"}},[(0,n.Lk)("span",{class:"sr-only"},"60% Complete")])])]),(0,n.Lk)("div",{class:"single_progress_bar revealator-slidedown revealator-once"},[(0,n.Lk)("h4",null,"FRONTEND - 65%"),(0,n.Lk)("div",{class:"progress"},[(0,n.Lk)("div",{class:"progress-bar",role:"progressbar","aria-valuenow":"60","aria-valuemin":"0","aria-valuemax":"100",style:{width:"65%"}},[(0,n.Lk)("span",{class:"sr-only"},"60% Complete")])])]),(0,n.Lk)("div",{class:"single_progress_bar revealator-slidedown revealator-once"},[(0,n.Lk)("h4",null,"AI-DRIVEN MODELS - 70%"),(0,n.Lk)("div",{class:"progress"},[(0,n.Lk)("div",{class:"progress-bar",role:"progressbar","aria-valuenow":"60","aria-valuemin":"0","aria-valuemax":"100",style:{width:"70%"}},[(0,n.Lk)("span",{class:"sr-only"},"60% Complete")])])]),(0,n.Lk)("div",{class:"single_progress_bar revealator-slidedown revealator-once"},[(0,n.Lk)("h4",null,"DATA SCIENCE & ANALYSIS - 80%"),(0,n.Lk)("div",{class:"progress"},[(0,n.Lk)("div",{class:"progress-bar",role:"progressbar","aria-valuenow":"60","aria-valuemin":"0","aria-valuemax":"100",style:{width:"80%"}},[(0,n.Lk)("span",{class:"sr-only"},"60% Complete")])])])])])],-1)));function H(a,e,i,t,s,l){return(0,n.uX)(),(0,n.CE)("section",D,[(0,n.Lk)("div",V,[(0,n.Lk)("div",X,[(0,n.Lk)("video",{id:"video_widget_90950318458",src:"https://20662219.fs1.hubspotusercontent-na1.net/hubfs/20662219/Web%20Assets/Video/loop-preview.mp4",loop:!0,muted:!0,playsinline:!0,ref:"videoElement"},null,8,z)]),B])])}var j={mounted(){const a=this.$refs.videoElement;a.play()}};const Q=(0,p.A)(j,[["render",H],["__scopeId","data-v-06add4ae"]]);var W=Q;const N={class:"skills text-center",id:"skills"},$={class:"container-fluid"},q={class:"row"},K={class:"col-md-3 col-md-6 skill"},J={class:"col-md-3 col-md-6 skill"},G={class:"col-md-3 col-md-6 skill"},Y={class:"col-md-3 col-md-6 skill"};function U(a,e,i,t,s,l){const r=(0,n.g2)("Guages");return(0,n.uX)(),(0,n.CE)("div",N,[(0,n.Lk)("div",$,[(0,n.Lk)("div",q,[(0,n.Lk)("div",K,[(0,n.bF)(r,{title:"PYTHON",percentVal:70})]),(0,n.Lk)("div",J,[(0,n.bF)(r,{title:"HTML5",percentVal:60})]),(0,n.Lk)("div",G,[(0,n.bF)(r,{title:"CSS",percentVal:55})]),(0,n.Lk)("div",Y,[(0,n.bF)(r,{title:"JAVASCRIPT",percentVal:55})])])])])}var Z=i(4232);const aa={class:"percent"},ea={ref:"chartCanvas",height:"190",width:"190",style:{height:"152px",width:"152px"}};function ia(a,e,i,t,s,l){return(0,n.uX)(),(0,n.CE)(n.FK,null,[(0,n.Lk)("span",{class:(0,Z.C4)(["chart",{visible:s.isAnimated}]),ref:"chartContainer"},[(0,n.Lk)("span",aa,(0,Z.v_)(i.percentVal),1),(0,n.Lk)("canvas",ea,null,512)],2),(0,n.Lk)("h5",null,(0,Z.v_)(i.title),1)],64)}var ta={props:{title:{default:"-"},percentVal:{default:80}},data(){return{isAnimated:!1}},mounted(){window.addEventListener("scroll",this.checkIfInView),this.checkIfInView()},destroyed(){window.removeEventListener("scroll",this.checkIfInView)},methods:{checkIfInView(){const a=this.$refs.chartContainer,e=a.getBoundingClientRect(),i=window.innerHeight||document.documentElement.clientHeight;e.top<i&&!this.isAnimated&&(this.isAnimated=!0,this.animateChart())},animateChart(){const a=this.$refs.chartCanvas,e=a.getContext("2d"),i=a.width/2,t=a.height/2,n=a.width/2-5,s=2*Math.PI*this.percentVal/100-.5*Math.PI,l=.03;let r=-.5*Math.PI;const d=()=>{e.clearRect(0,0,a.width,a.height),e.beginPath(),e.arc(i,t,n,0,2*Math.PI,!1),e.lineWidth=6,e.strokeStyle="#e0e0e0",e.stroke(),e.beginPath(),e.arc(i,t,n,-.5*Math.PI,r,!1),e.lineWidth=6,e.strokeStyle="#1b1b1b",e.stroke(),r+=l,r<s&&requestAnimationFrame(d)};d()}},watch:{percentVal(){this.isAnimated&&this.animateChart()}}};const na=(0,p.A)(ta,[["render",ia],["__scopeId","data-v-1b4de208"]]);var sa=na,la={components:{Guages:sa}};const ra=(0,p.A)(la,[["render",U],["__scopeId","data-v-a8e832cc"]]);var da=ra;const oa={class:"container ss-style-triangles"},ca=(0,n.Fv)('<h2 data-v-2ff41573>Skills</h2><div class="grid gird-md-3 gird-md-6" data-v-2ff41573><div class="skill" data-v-2ff41573><div class="skill-details" data-v-2ff41573><i class="fa-solid fa-magnifying-glass-chart fa-2xl" data-v-2ff41573></i><h3 data-v-2ff41573>Data Exploration</h3><hr data-v-2ff41573><p data-v-2ff41573> Proficiency in using Python libraries for data manipulation, analysis, and exploration. Pandas is particularly powerful for structured data manipulation, Numpy is widely used for numerical operations, and Beautiful Soup &amp; Selenium are commonly utilized for web scraping. </p></div></div><div class="skill" data-v-2ff41573><div class="skill-details" data-v-2ff41573><i class="fa-solid fa-chart-line fa-2xl" data-v-2ff41573></i><h3 data-v-2ff41573>Data Visualization</h3><hr data-v-2ff41573><p data-v-2ff41573> Competence in creating visual representations of data using Matplotlib for basic plots, Seaborn for visually appealing and informative statistical graphics, as well as Plotly and Chart.js for dynamic and interactive data visualization. This skill is critical for effectively communicating insights from data to a wider audience. </p></div></div><div class="skill" data-v-2ff41573><div class="skill-details" data-v-2ff41573><i class="fa-solid fa-microchip fa-2xl" data-v-2ff41573></i><h3 data-v-2ff41573>ML Pipelines</h3><hr data-v-2ff41573><p data-v-2ff41573> Experience in developing end-to-end machine learning and deep learning pipelines. Scikit-learn is a versatile machine learning library, and Keras simplifies the building and training of neural networks. This skill set involves model development, training, evaluation, and integration into applications. </p></div></div><div class="skill" data-v-2ff41573><div class="skill-details" data-v-2ff41573><i class="fa-brands fa-vuejs fa-2xl" data-v-2ff41573></i><h3 data-v-2ff41573>Web Development</h3><hr data-v-2ff41573><p data-v-2ff41573> Expertise in Vue.js for building interactive and dynamic web application, encompassing component creation, state management, and event handling. Adebt in HTML and CSS, along with proficiency in utilizing Tailwind, contributes to the creation of visually appealing and user-friendly interfaces for data applications. </p></div></div><div class="skill" data-v-2ff41573><div class="skill-details" data-v-2ff41573><i class="fa-solid fa-cloud-arrow-up fa-2xl" data-v-2ff41573></i><h3 data-v-2ff41573>Cloud Expertise</h3><hr data-v-2ff41573><p data-v-2ff41573> Proficient in SQL for comprehensive database management, querying, and manipulation, with a strong foundation in relational databases. Experienced in leveraging Google Cloud Platform services, specifically BigQuery, for effective large-scale dataset management and analytics in a cloud environment. </p></div></div><div class="skill" data-v-2ff41573><div class="skill-details" data-v-2ff41573><i class="fa-solid fa-file-invoice fa-2xl" data-v-2ff41573></i><h3 data-v-2ff41573>Documentation</h3><hr data-v-2ff41573><p data-v-2ff41573> Proficient in MS Office, LATEX: Strong skills in creating clear and comprehensive technical documentation using tools like Microsoft Office and LaTeX. This includes writing reports, manuals, and documentation for projects, ensuring effective communication of complex technical information to various stakeholders. </p></div></div></div>',2),va=[ca];function fa(a,e){return(0,n.uX)(),(0,n.CE)("section",oa,va)}const ua={},ha=(0,p.A)(ua,[["render",fa],["__scopeId","data-v-2ff41573"]]);var ma=ha;const pa=a=>((0,n.Qi)("data-v-a5a6cfe2"),a=a(),(0,n.jt)(),a),ga={class:"container"},ba=pa((()=>(0,n.Lk)("h2",null,"Resume",-1))),ka={class:"nav nav-tabs",id:"myTab",role:"tablist"},ya={class:"nav-item borderFade",role:"presentation"},wa={class:"nav-item borderFade",role:"presentation"},La={class:"tab-content",id:"pills-tabContent"},Ca={key:0,class:"tab-pane fade",id:"home",role:"tabpanel","aria-labelledby":"home-tab",tabindex:"0"},Aa=(0,n.Fv)('<ul class="resume-list" data-v-a5a6cfe2><li data-v-a5a6cfe2><div class="timeline-image" data-v-a5a6cfe2><h4 data-v-a5a6cfe2> Present <br data-v-a5a6cfe2> - <br data-v-a5a6cfe2> Jul 2023 </h4></div><div class="timeline-panel" data-v-a5a6cfe2><div class="timeline-heading" data-v-a5a6cfe2><h4 data-v-a5a6cfe2>BrainBox AI</h4><h4 class="subheading" data-v-a5a6cfe2>AI Service Reliability Engineer</h4></div><div class="timeline-body" data-v-a5a6cfe2><p data-v-a5a6cfe2> As an AI Service Reliability Engineer at BrainBox AI, I&#39;m responsible for creating tools and dashboards that boost system visibility and monitoring efficiency. I collaborate with teams to proactively address issues, ensuring the reliability of our AI services. This role involves using innovative technologies to streamline processes and enhance the user experience, contributing to peak operational performance. </p></div></div></li><li class="timeline-inverted" data-v-a5a6cfe2><div class="timeline-image" data-v-a5a6cfe2><h4 data-v-a5a6cfe2> Jul 2023 <br data-v-a5a6cfe2> - <br data-v-a5a6cfe2> Mar 2022 </h4></div><div class="timeline-panel" data-v-a5a6cfe2><div class="timeline-heading" data-v-a5a6cfe2><h4 data-v-a5a6cfe2>BrainBox AI</h4><h4 class="subheading" data-v-a5a6cfe2> AI HVAC Service Development Specialist </h4></div><div class="timeline-body" data-v-a5a6cfe2><p data-v-a5a6cfe2> As an AI HVAC Service Development Specialist at BrainBox AI, I formulated and implemented automated services for solution deployment and supervision of HVAC systems. I contributed to the development of cutting-edge solutions for predictive maintenance and energy optimization, with a strategic emphasis on scalability enhancement. </p></div></div></li><li data-v-a5a6cfe2><div class="timeline-image" data-v-a5a6cfe2><h4 data-v-a5a6cfe2> Mar 2022 <br data-v-a5a6cfe2> - <br data-v-a5a6cfe2> Mar 2021 </h4></div><div class="timeline-panel" data-v-a5a6cfe2><div class="timeline-heading" data-v-a5a6cfe2><h4 data-v-a5a6cfe2>DataOptima</h4><h4 class="subheading" data-v-a5a6cfe2>Data Scientist &amp; Research Assistant</h4></div><div class="timeline-body" data-v-a5a6cfe2><p data-v-a5a6cfe2> As a Data Scientist at DataOptima, I focused on using machine learning to minimize energy consumption in a medical center. This included cleaning and analyzing sensor data, developing predictive models, and implementing strategies for real-time energy optimization. </p></div></div></li><li class="timeline-inverted" data-v-a5a6cfe2><div class="timeline-image" data-v-a5a6cfe2><h4 data-v-a5a6cfe2> Sept 2017 <br data-v-a5a6cfe2> - <br data-v-a5a6cfe2> Sept 2016 </h4></div><div class="timeline-panel" data-v-a5a6cfe2><div class="timeline-heading" data-v-a5a6cfe2><h4 data-v-a5a6cfe2>ASTA Co.</h4><h4 class="subheading" data-v-a5a6cfe2>Pressure Vessels QC</h4></div><div class="timeline-body" data-v-a5a6cfe2><p data-v-a5a6cfe2> In my role at ASTA Co. in Pressure Vessels QC, I was actively involved in calculating the thermal performance of an innovative boiler. My tasks included ensuring compliance with industry standards and conducting quality control assessments. </p></div></div></li></ul>',1),xa=[Aa],Sa={key:1,class:"tab-pane fade",id:"profile",role:"tabpanel","aria-labelledby":"profile-tab",tabindex:"0"},Ea=(0,n.Fv)('<ul class="resume-list" data-v-a5a6cfe2><li data-v-a5a6cfe2><div class="timeline-image" data-v-a5a6cfe2><h4 data-v-a5a6cfe2> Jun 2020 <br data-v-a5a6cfe2> - <br data-v-a5a6cfe2> Sept 2017 </h4></div><div class="timeline-panel" data-v-a5a6cfe2><div class="timeline-heading" data-v-a5a6cfe2><h4 data-v-a5a6cfe2>Politecnico di Milano</h4><h4 class="subheading" data-v-a5a6cfe2>MSc. in Mechanical Engineering</h4></div><div class="timeline-body" data-v-a5a6cfe2><p data-v-a5a6cfe2> Thesis: Application of Machine Learning in Frictional Pressure Drop Estimation of Two-Phase Flow; Multiphase Flow Lab </p></div></div></li><li class="timeline-inverted" data-v-a5a6cfe2><div class="timeline-image" data-v-a5a6cfe2><h4 data-v-a5a6cfe2> Oct 2015 <br data-v-a5a6cfe2> - <br data-v-a5a6cfe2> Sept 2011 </h4></div><div class="timeline-panel" data-v-a5a6cfe2><div class="timeline-heading" data-v-a5a6cfe2><h4 data-v-a5a6cfe2>Amirkabir University of Technology</h4><h4 class="subheading" data-v-a5a6cfe2>BSc. in Mechanical Engineering</h4></div><div class="timeline-body" data-v-a5a6cfe2><p data-v-a5a6cfe2> Thesis: Design, Fabrication, and Analysis of Different Arrays of Impinging Jets for Heat Transfer Coefficients Investigation; Heat Transfer Laboratory </p></div></div></li></ul>',1),Ia=[Ea];function _a(a,e,i,t,s,l){return(0,n.uX)(),(0,n.CE)("section",ga,[ba,(0,n.Lk)("ul",ka,[(0,n.Lk)("li",ya,[(0,n.Lk)("button",{class:(0,Z.C4)(["nav-link","exp"===s.mode?"active":""]),id:"home-tab","data-bs-toggle":"tab","data-bs-target":"#home",type:"button",role:"tab",onClick:e[0]||(e[0]=a=>s.mode="exp")}," Expirience ",2)]),(0,n.Lk)("li",wa,[(0,n.Lk)("button",{class:(0,Z.C4)(["nav-link","edu"===s.mode?"active":""]),id:"profile-tab","data-bs-toggle":"tab","data-bs-target":"#profile",type:"button",role:"tab","aria-controls":"profile",tabindex:"-1",onClick:e[1]||(e[1]=a=>s.mode="edu")}," Education ",2)])]),(0,n.Lk)("div",La,["exp"===s.mode?((0,n.uX)(),(0,n.CE)("div",Ca,xa)):(0,n.Q3)("",!0),"edu"===s.mode?((0,n.uX)(),(0,n.CE)("div",Sa,Ia)):(0,n.Q3)("",!0)])])}var Ma={data(){return{mode:"exp"}}};const Ta=(0,p.A)(Ma,[["render",_a],["__scopeId","data-v-a5a6cfe2"]]);var Oa=Ta;const Fa={class:"container ss-style-triangles"},Pa=(0,n.Fv)('<h2 data-v-4e9900ca>Contact</h2><div class="contact" data-v-4e9900ca><div class="container-fluid" data-v-4e9900ca><div class="row" data-v-4e9900ca><div class="no-padding col-lg-3 col-md-12 col-xs-12" data-v-4e9900ca><div class="contact-wrap" data-v-4e9900ca><i class="fa-brands fa-linkedin" data-v-4e9900ca></i><h4 data-v-4e9900ca>Linkedin</h4><a href="https://www.linkedin.com/in/keivan-ardam/" target="_blank" data-v-4e9900ca><p data-v-4e9900ca>keivan.ardam</p></a></div></div><div class="no-padding col-lg-3 col-md-12 col-xs-12" data-v-4e9900ca><div class="contact-wrap" data-v-4e9900ca><i class="fa fa-envelope" aria-hidden="true" data-v-4e9900ca></i><h4 data-v-4e9900ca>Email</h4><a href="mailto:keivan.ardam@gmail.com" data-v-4e9900ca><p data-v-4e9900ca>keivan.ardam@gmail.com</p></a></div></div><div class="no-padding col-lg-3 col-md-12 col-xs-12" data-v-4e9900ca><div class="contact-wrap" data-v-4e9900ca><i class="fa fa-phone-square" aria-hidden="true" data-v-4e9900ca></i><h4 data-v-4e9900ca>Mobile</h4><a href="tel:+393318012213" data-v-4e9900ca><p data-v-4e9900ca>+39 331 80 122 13</p></a></div></div><div class="no-padding col-lg-3 col-md-12 col-xs-12" data-v-4e9900ca><div class="contact-wrap" data-v-4e9900ca><i class="fa fa-map-marker" aria-hidden="true" data-v-4e9900ca></i><h4 data-v-4e9900ca>Address</h4><a href="https://maps.app.goo.gl/XczxyNFdESbRZsnTA" target="_blank" data-v-4e9900ca><p data-v-4e9900ca>Piacenza, Italy</p></a></div></div></div></div></div><footer data-v-4e9900ca><h4 data-v-4e9900ca>Copyright © All rights reserved.</h4></footer>',3),Ra=[Pa];function Da(a,e){return(0,n.uX)(),(0,n.CE)("section",Fa,Ra)}const Va={},Xa=(0,p.A)(Va,[["render",Da],["__scopeId","data-v-4e9900ca"]]);var za=Xa;const Ba={key:0,class:"burger-menu"},Ha={key:0,class:"sidebar"},ja={class:"sidebar--options"},Qa=["onClick"];function Wa(a,e,i,s,l,r){return(0,n.uX)(),(0,n.CE)("section",null,[(0,n.bF)(t.eB,{name:"bounce"},{default:(0,n.k6)((()=>[l.ismenuOpen?(0,n.Q3)("",!0):((0,n.uX)(),(0,n.CE)("div",Ba,[(0,n.Lk)("i",{class:"fa-solid fa-bars","aria-hidden":"true",onClick:e[0]||(e[0]=a=>l.ismenuOpen=!0)})]))])),_:1}),(0,n.bF)(t.eB,{name:"slide-fade"},{default:(0,n.k6)((()=>[l.ismenuOpen?((0,n.uX)(),(0,n.CE)("aside",Ha,[(0,n.Lk)("div",ja,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(i.menu,(a=>((0,n.uX)(),(0,n.CE)("button",{onClick:e=>r.scrollToComponent(a.ref)},[(0,n.Lk)("i",{class:(0,Z.C4)(a["icon"]),"aria-hidden":"true"},null,2),(0,n.Lk)("span",null,(0,Z.v_)(a.label),1)],8,Qa)))),256))])])):(0,n.Q3)("",!0)])),_:1})])}var Na={props:{menu:{type:Object,required:!0}},data(){return{ismenuOpen:!1}},methods:{closeMenuOnOutsideClick(a){this.ismenuOpen&&null===a.target.closest(".sidebar")&&null===a.target.closest(".burger-menu")&&(this.ismenuOpen=!1)},scrollToComponent(a){a&&(console.log("scroll",a),a.$el.scrollIntoView({behavior:"smooth"}))}},mounted(){document.addEventListener("click",this.closeMenuOnOutsideClick)},beforeDestroy(){document.removeEventListener("click",this.closeMenuOnOutsideClick)}};const $a=(0,p.A)(Na,[["render",Wa],["__scopeId","data-v-0120403a"]]);var qa=$a,Ka={components:{Home:b,About:P,About_2:W,About_3:da,Skills:ma,Resume:Oa,Contact:za,SideBar:qa},data(){return{menu:[{label:"Home",icon:"fa-solid fa-house",ref:null},{label:"About",icon:"fa-solid fa-user",ref:null},{label:"Skills",icon:"fa-solid fa-bolt",ref:null},{label:"Resume",icon:"fa-solid fa-scroll",ref:null},{label:"Contact",icon:"fa-solid fa-phone",ref:null}]}},mounted(){this.menu.forEach((a=>{a.ref=this.$refs[a.label]}))}};const Ja=(0,p.A)(Ka,[["render",r],["__scopeId","data-v-94b570ba"]]);var Ga=Ja,Ya={name:"App",components:{Main:Ga}};const Ua=(0,p.A)(Ya,[["render",s]]);var Za=Ua;(0,t.Ef)(Za).mount("#app")}},e={};function i(t){var n=e[t];if(void 0!==n)return n.exports;var s=e[t]={exports:{}};return a[t].call(s.exports,s,s.exports,i),s.exports}i.m=a,function(){var a=[];i.O=function(e,t,n,s){if(!t){var l=1/0;for(c=0;c<a.length;c++){t=a[c][0],n=a[c][1],s=a[c][2];for(var r=!0,d=0;d<t.length;d++)(!1&s||l>=s)&&Object.keys(i.O).every((function(a){return i.O[a](t[d])}))?t.splice(d--,1):(r=!1,s<l&&(l=s));if(r){a.splice(c--,1);var o=n();void 0!==o&&(e=o)}}return e}s=s||0;for(var c=a.length;c>0&&a[c-1][2]>s;c--)a[c]=a[c-1];a[c]=[t,n,s]}}(),function(){i.n=function(a){var e=a&&a.__esModule?function(){return a["default"]}:function(){return a};return i.d(e,{a:e}),e}}(),function(){i.d=function(a,e){for(var t in e)i.o(e,t)&&!i.o(a,t)&&Object.defineProperty(a,t,{enumerable:!0,get:e[t]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(a){if("object"===typeof window)return window}}()}(),function(){i.o=function(a,e){return Object.prototype.hasOwnProperty.call(a,e)}}(),function(){var a={524:0};i.O.j=function(e){return 0===a[e]};var e=function(e,t){var n,s,l=t[0],r=t[1],d=t[2],o=0;if(l.some((function(e){return 0!==a[e]}))){for(n in r)i.o(r,n)&&(i.m[n]=r[n]);if(d)var c=d(i)}for(e&&e(t);o<l.length;o++)s=l[o],i.o(a,s)&&a[s]&&a[s][0](),a[s]=0;return i.O(c)},t=self["webpackChunkkeivan_ardam"]=self["webpackChunkkeivan_ardam"]||[];t.forEach(e.bind(null,0)),t.push=e.bind(null,t.push.bind(t))}();var t=i.O(void 0,[504],(function(){return i(5442)}));t=i.O(t)})();
//# sourceMappingURL=app.b6219403.js.map