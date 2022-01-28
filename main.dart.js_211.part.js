self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var B={
eDQ(){return new B.a1N(null)},
b99:function b99(d,e){this.a=d
this.b=e},
a1N:function a1N(d){this.a=d},
aK2:function aK2(d,e,f,g,h){var _=this
_.x=d
_.y=e
_.z=!0
_.Q=f
_.ch=!1
_.d=g
_.a=null
_.b=h
_.c=null},
cPU:function cPU(d){this.a=d},
cPT:function cPT(d){this.a=d},
cPV:function cPV(d,e){this.a=d
this.b=e},
cPW:function cPW(d,e){this.a=d
this.b=e},
cPQ:function cPQ(d){this.a=d},
cPR:function cPR(d){this.a=d},
cPS:function cPS(d){this.a=d},
cPO:function cPO(){},
cPP:function cPP(d){this.a=d}},A,C,E,J,D,F,G
a.setFunctionNamesIfNecessary([B])
B=a.updateHolder(c[8],B)
A=c[0]
C=c[2]
E=c[52]
J=c[1]
D=c[62]
F=c[50]
G=c[63]
B.b99.prototype={
l(d){return"MessType."+this.b}}
B.a1N.prototype={
B(){var x=null
return new B.aK2(A.aP(x),A.aP(x),C.E,A.db(!0,x,!0,x,x,!1),C.m)}}
B.aK2.prototype={
n(d){this.a7(0)},
K(){this.Gs()
A.ci(C.M,new B.cPU(this),y.F)},
b2X(d,e){var x=this
switch(e.a){case 0:x.m(new B.cPV(x,d))
break
case 1:x.m(new B.cPW(x,d))
break}},
Mf(){var x=0,w=A.t(y.b),v,u=2,t,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f
var $async$Mf=A.o(function(d,e){if(d===1){t=e
x=u}while(true)switch(x){case 0:u=4
if(r.ch){x=1
break}r.m(new B.cPQ(r))
k=r.c
k.toString
q=A.y(k,!1,y.r).c.T()
k=r.c
k.toString
p=C.q.cw(E.elk(E.ecQ(k)),null)
j=A.aC8("POST",A.cE("https://fluxbuilder.inspireui.com/job",0,null))
k=j.y
k.k(0,"themeJson",p)
k.k(0,"email",r.y.a.a)
k.k(0,"recaptcha",$.edq)
i=y.w
k.F(0,A.ba(q,i,i))
o=j
x=7
return A.l(J.e1H(o),$async$Mf)
case 7:n=e
f=C.q
x=8
return A.l(C.ak.bVf(n.x),$async$Mf)
case 8:m=f.af(0,e,null)
x=n.b===200?9:11
break
case 9:A.U("\u2b50\ufe0f Congratulation !!",null)
A.U(A.i(n),null)
x=12
return A.l($.DB().$1$0(y.s).hJ("Int","lastTimeRequest",1000*Date.now()),$async$Mf)
case 12:r.m(new B.cPR(r))
x=10
break
case 11:A.U("\ud83d\udd34\ufe0f There is an issue",null)
r.b2X(J.f(m,"message"),D.dsO)
r.m(new B.cPS(r))
case 10:u=2
x=6
break
case 4:u=3
g=t
l=A.aS(g)
A.U(l,null)
throw g
x=6
break
case 3:x=2
break
case 6:case 1:return A.q(v,w)
case 2:return A.p(t,w)}})
return A.r($async$Mf,w)},
aXB(){var x,w=A.ev(J.f($.DB().$1$0(y.s).a,"lastTimeRequest"))
if(w==null)return 130
x=C.f.I(w/1000)
new A.aR(x,!1).ri(x,!1)
x=C.c.b1(A.cg(0,0,0,Date.now()-x,0,0).a,1e6)
A.U("\u23f0 the difference run time "+x+" seconds",null)
return x},
p(d,e){var x,w,v,u,t,s=this,r=null,q=s.c
q.toString
x=y.r
w=A.y(q,!1,x).c.T()
if(w.h(0,"isBuilder")!=null)w.em(w,new B.cPO())
A.U("\ud83e\udd16 serverConfig",r)
q=s.c
q.toString
A.U(A.y(q,!1,x).c.T(),r)
A.U("\u2b50\ufe0f get URL",r)
q=s.c
q.toString
A.U(A.Qn("fluxbuilder.inspireui.com",r,r,r,A.y(q,!1,x).c.T(),"https").gHf(),r)
x=y.n
v=A.y(e,!0,x)
q=s.x
q.sat(0,w.h(0,"url"))
u=v.a
if(u!=null){u=u.r
if(u==null)u=""
s.y.sat(0,u)}u=y.u
t=A.b([new A.a5(r,e.D(y.x).f.a.b*0.08,r,r),A.u("Build Testing APK",r,r,r,r,r,A.j(e).w.f,r,r,r),C.b5,C.B],u)
C.b.F(t,A.Ep("WEBSITE URL",r,A.P4(e,r,r,"Type your own Website URL"),r))
t.push(new F.aaU(q,r,new B.cPP(s),!1,r,v.a==null,r))
t.push(C.B)
C.b.F(t,A.Ep("YOUR EMAIL",r,A.P4(e,r,r,"The Email Address to get the download APK file"),r))
t.push(new F.aaU(s.y,r,r,!1,"Please login to verify the email",!0,r))
t.push(C.B)
t.push(A.x(r,A.e2i(e,"You will receive a demo APK which is used for testing only.\nDo not upload to Google Play Store. To build a release APK, please use the desktop version of FluxBuilder instead."),C.e,r,G.Jl,r,r,r,r,r,r,r,r,r))
t.push(C.a1)
q=s.c
q.toString
v=A.y(q,!0,x)
q=s.z
x=s.c
if(q){q=s.ch
x.toString
q=A.fc(A.j(x).b,r,C.mq,v.a==null,q,r,r,s.gbTP(),"Create APK",r,r,120)}else{x.toString
q=A.j(x).w.Q
q.toString
x=s.c
x.toString
x=A.j(x).q.c
u=A.P(A.b([A.u("The APK is generated and will be sent to your email shortly ",r,r,r,r,r,q.b2(A.S(C.f.I(127.5),x.gj(x)>>>16&255,x.gj(x)>>>8&255,x.gj(x)&255)),r,r,r)],u),C.k,r,C.j,C.h,r,r)
q=u}t.push(q)
t.push(C.a1)
t.push(s.Q)
return new A.T(C.b2,A.bu(A.L(t,C.t,r,C.j,C.h,r),r,C.n,r,r,r,r,C.C),r)},
gbM(d){return this.Q}}
var z=a.updateTypes(["~()"])
B.cPU.prototype={
$0(){var x=0,w=A.t(y.F),v=this,u
var $async$$0=A.o(function(d,e){if(d===1)return A.p(e,w)
while(true)switch(x){case 0:u=v.a
if(u.aXB()<30)u.m(new B.cPT(u))
return A.q(null,w)}})
return A.r($async$$0,w)},
$S:42}
B.cPT.prototype={
$0(){this.a.z=!1},
$S:0}
B.cPV.prototype={
$0(){var x=null
this.a.Q=A.u(this.b,x,x,x,x,x,C.k7,x,x,x)},
$S:0}
B.cPW.prototype={
$0(){var x=null,w=this.a,v=w.c
v.toString
w.Q=A.u(this.b,x,x,x,x,x,A.aq(x,x,A.j(v).b,x,x,x,x,x,x,x,x,x,x,x,x,x,!0,x,x,x,x,x,x,x,x),x,x,x)},
$S:0}
B.cPQ.prototype={
$0(){var x=this.a
x.Q=C.E
x.ch=!0},
$S:0}
B.cPR.prototype={
$0(){var x=this.a
x.ch=x.z=!1},
$S:0}
B.cPS.prototype={
$0(){this.a.ch=!1},
$S:0}
B.cPO.prototype={
$2(d,e){return d==="isBuilder"},
$S:21}
B.cPP.prototype={
$1(d){var x=this.a.c
x.toString
A.y(x,!1,y.r).a3i(d)},
$S:49};(function installTearOffs(){var x=a._instance_0u
x(B.aK2.prototype,"gbTP","Mf",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.b99,A.afd)
x(B.a1N,A.M)
x(B.aK2,A.V7)
w(A.NI,[B.cPU,B.cPT,B.cPV,B.cPW,B.cPQ,B.cPR,B.cPS])
x(B.cPO,A.QI)
x(B.cPP,A.Ea)})()
A.eS(b.typeUniverse,JSON.parse('{"a1N":{"M":[],"k":[]},"aK2":{"N":["a1N"]}}'))
var y={u:A.ab("K<k>"),x:A.ab("Db"),F:A.ab("aI"),s:A.ab("Ru"),w:A.ab("n"),n:A.ab("XA"),r:A.ab("RR"),b:A.ab("@")};(function constants(){D.dsO=new B.b99(0,"error")
D.dUA=new B.b99(1,"success")})()}
$__dart_deferred_initializers__["cFu4DIHxVNfDaNkAKZ6ZWMJMw5g="] = $__dart_deferred_initializers__.current
