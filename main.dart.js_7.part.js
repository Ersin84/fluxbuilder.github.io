self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,B,C,D,E,F,G,H,J,K,L,M,N,O,P,Q={
dXP(){return new Q.Vt(null)},
Vt:function Vt(d){this.a=d},
ayJ:function ayJ(d,e,f,g){var _=this
_.x=d
_.y=e
_.z=!0
_.d=f
_.a=null
_.b=g
_.c=null},
cr4:function cr4(d){this.a=d},
cr3:function cr3(d){this.a=d},
cr2:function cr2(d){this.a=d},
cr0:function cr0(){},
cr1:function cr1(d){this.a=d}},R,S,T,U,V,W,X,Y,Z
a.setFunctionNamesIfNecessary([Q])
A=c[0]
B=c[1]
C=c[2]
D=c[3]
E=c[4]
F=c[5]
G=c[6]
H=c[7]
J=c[8]
K=c[9]
L=c[10]
M=c[11]
N=c[12]
O=c[13]
P=c[14]
Q=a.updateHolder(c[15],Q)
R=c[16]
S=c[17]
T=c[18]
U=c[19]
V=c[20]
W=c[21]
X=c[22]
Y=c[23]
Z=c[24]
Q.Vt.prototype={
C(){var x=null
return new Q.ayJ(D.bf(x),D.bf(x),O.cQ(!0,x,!0,x,x,!1),C.p)}}
Q.ayJ.prototype={
m(d){this.a8(0)},
M(){this.Kc()
P.cJ(C.Q,new Q.cr4(this),y.F)},
TP(){var x=0,w=P.v(y.b),v=1,u,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h
var $async$TP=P.q(function(d,e){if(d===1){u=e
x=v}while(true)switch(x){case 0:v=3
m=s.c
m.toString
l=y.r
r=Y.A(m,!1,l).b.a5()
m=s.c
m.toString
q=C.t.cU(B.dH5(K.dqd(m)),null)
k=D.arG("POST",P.cM("https://fluxbuilder.inspireui.com/job",0,null))
m=k.y
j=s.c
j.toString
l=Y.A(j,!1,l).b
j=y.x
l=H.b(H.b(l.ge8(l).b.split("."),j).slice(0),j)
m.l(0,"type",C.c.gV(l))
m.l(0,"url",J.f(r,"url"))
m.l(0,"themeJson",q)
l=J.f(r,"consumerKey")
m.l(0,"consumerKey",l==null?"":l)
l=J.f(r,"consumerSecret")
m.l(0,"consumerSecret",l==null?"":l)
l=J.f(r,"accessToken")
m.l(0,"accessToken",l==null?"":l)
m.l(0,"email",s.y.a.a)
m.l(0,"recaptcha",$.dZf)
p=k
x=6
return P.o(J.dpS(p),$async$TP)
case 6:o=e
x=o.b===200?7:9
break
case 7:N.X("\u2b50\ufe0f Congratulation !!",null)
N.X(H.i(o),null)
x=10
return P.o($.NI().$1$0(y.s).jQ("Int","lastTimeRequest",1000*Date.now()),$async$TP)
case 10:s.n(new Q.cr2(s))
x=8
break
case 9:N.X("\ud83d\udd34\ufe0f There is an issue",null)
N.X(H.i(o),null)
case 8:v=1
x=5
break
case 3:v=2
h=u
H.J(h)
n=H.aT(h)
N.X(n,null)
throw h
x=5
break
case 2:x=1
break
case 5:return P.t(null,w)
case 1:return P.r(u,w)}})
return P.u($async$TP,w)},
aZv(){var x,w,v=H.zt(J.f($.NI().$1$0(y.s).a,"lastTimeRequest"))
if(v==null)return 130
x=C.i.L(v/1000)
if(Math.abs(x)<=864e13)w=!1
else w=!0
if(w)H.j(P.bl("DateTime is outside valid range: "+x,null))
H.z6(!1,"isUtc",y.e)
x=C.d.aR(P.cr(0,0,0,Date.now()-x,0,0).a,1e6)
N.X("\u23f0 the difference run time "+x+" seconds",null)
return x},
p(d,e){var x,w,v,u,t,s=this,r=null,q=s.c
q.toString
x=y.r
w=Y.A(q,!1,x).b.a5()
if(w.h(0,"isBuilder")!=null)w.k8(w,new Q.cr0())
N.X("\ud83e\udd16 serverConfig",r)
q=s.c
q.toString
N.X(Y.A(q,!1,x).b.a5(),r)
N.X("\u2b50\ufe0f get URL",r)
q=s.c
q.toString
N.X(P.L5("fluxbuilder.inspireui.com",r,r,r,Y.A(q,!1,x).b.a5(),"https").gLV(),r)
x=y.n
v=Y.A(e,!0,x)
q=s.x
q.sap(0,w.h(0,"url"))
u=v.a
if(u!=null){u=u.r
if(u==null)u=""
s.y.sap(0,u)}u=y.u
t=H.b([new T.a6(r,e.E(y.A).f.a.b*0.08,r,r),L.w("Build Testing APK",r,r,r,r,r,r,r,K.l(e).A.f,r,r,r),C.bn,C.G],u)
C.c.H(t,B.zd("WEBSITE URL",r,B.H6(e,r,r,"Type your own Website URL"),r))
t.push(new Y.a2S(q,r,new Q.cr1(s),r,v.a==null,r))
t.push(C.G)
C.c.H(t,B.zd("YOUR EMAIL",r,B.H6(e,r,r,"The Email Address to get the download APK file"),r))
t.push(new Y.a2S(s.y,r,r,"Please login to verify the email",!0,r))
t.push(C.G)
t.push(M.z(r,B.dqs(e,"This is the Demo APK use for testing on the real Android Device.\nIt could not upload to Google Play store, please use the FluxBuilder Desktop version instead."),C.f,r,C.J7,r,r,r,r,r,r,r,r,r))
t.push(C.a1)
q=s.c
q.toString
v=Y.A(q,!0,x)
q=s.z
x=s.c
if(q){x.toString
q=B.yh(K.l(x).b,r,C.lO,v.a==null,!1,r,r,s.gbSt(),"Create APK",r,r,120)}else{x.toString
q=K.l(x).A.Q
q.toString
x=s.c
x.toString
x=K.l(x).q.c
u=T.T(H.b([L.w("The APK is generated and will be sent to your email shortly ",r,r,r,r,r,r,r,q.bb(P.V(C.i.L(127.5),x.gj(x)>>>16&255,x.gj(x)>>>8&255,x.gj(x)&255)),r,r,r)],u),C.m,r,C.k,C.j,r,r)
q=u}t.push(q)
t.push(C.a1)
return new T.W(C.bc,E.bF(T.Q(t,C.w,r,C.k,C.j,r),r,C.q,r,r,r,r,C.A),r)}}
var z=a.updateTypes(["~()"])
Q.cr4.prototype={
$0(){var x=0,w=P.v(y.F),v=this,u
var $async$$0=P.q(function(d,e){if(d===1)return P.r(e,w)
while(true)switch(x){case 0:u=v.a
if(u.aZv()<30)u.n(new Q.cr3(u))
return P.t(null,w)}})
return P.u($async$$0,w)},
$S:43}
Q.cr3.prototype={
$0(){this.a.z=!1},
$S:0}
Q.cr2.prototype={
$0(){this.a.z=!1},
$S:0}
Q.cr0.prototype={
$2(d,e){return d==="isBuilder"},
$S:89}
Q.cr1.prototype={
$1(d){var x=this.a.c
x.toString
Y.A(x,!1,y.r).ajY(d)},
$S:56};(function installTearOffs(){var x=a._instance_0u
x(Q.ayJ.prototype,"gbSt","TP",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(Q.Vt,N.R)
x(Q.ayJ,O.O0)
w(H.Io,[Q.cr4,Q.cr3,Q.cr2])
x(Q.cr0,H.Ls)
x(Q.cr1,H.yC)})()
H.x8(b.typeUniverse,JSON.parse('{"Vt":{"R":[],"k":[]},"ayJ":{"S":["Vt"]}}'))
var y={x:H.ae("O<p>"),u:H.ae("O<k>"),A:H.ae("yX"),F:H.ae("aL"),s:H.ae("Q8"),n:H.ae("QD"),r:H.ae("KW"),e:H.ae("U"),b:H.ae("@")};(function staticFields(){$.dZf=""})()}
$__dart_deferred_initializers__["wNvvgwubQbhjWh83vh3h98jy6go="] = $__dart_deferred_initializers__.current
