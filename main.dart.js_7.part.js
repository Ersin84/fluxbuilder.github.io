self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,B,C,D,E,F,G,H,J,K,L,M,N,O,P,Q={
dXN(){return new Q.Vp(null)},
Vp:function Vp(d){this.a=d},
ayG:function ayG(d,e,f,g){var _=this
_.x=d
_.y=e
_.z=!0
_.d=f
_.a=null
_.b=g
_.c=null},
crh:function crh(d){this.a=d},
crg:function crg(d){this.a=d},
crf:function crf(d){this.a=d},
crd:function crd(){},
cre:function cre(d){this.a=d}},R,S,T,U,V,W,X,Y,Z
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
Q.Vp.prototype={
C(){var x=null
return new Q.ayG(D.b7(x),D.b7(x),O.cS(!0,x,!0,x,x,!1),C.p)}}
Q.ayG.prototype={
m(d){this.a7(0)},
M(){this.Kf()
P.cK(C.Q,new Q.crh(this),y.F)},
TV(){var x=0,w=P.v(y.b),v=1,u,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h
var $async$TV=P.q(function(d,e){if(d===1){u=e
x=v}while(true)switch(x){case 0:v=3
m=s.c
m.toString
l=y.r
r=Y.A(m,!1,l).b.a3()
m=s.c
m.toString
q=C.t.cX(B.dH8(K.dqu(m)),null)
k=D.arB("POST",P.cJ("https://fluxbuilder.inspireui.com/job",0,null))
m=k.y
j=s.c
j.toString
l=Y.A(j,!1,l).b
j=y.x
l=H.b(H.b(l.ge9(l).b.split("."),j).slice(0),j)
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
m.l(0,"recaptcha",$.dZe)
p=k
x=6
return P.o(J.dq8(p),$async$TV)
case 6:o=e
x=o.b===200?7:9
break
case 7:N.X("\u2b50\ufe0f Congratulation !!",null)
N.X(H.i(o),null)
x=10
return P.o($.L7().$1$0(y.s).jx("Int","lastTimeRequest",1000*Date.now()),$async$TV)
case 10:s.n(new Q.crf(s))
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
return P.u($async$TV,w)},
aZp(){var x,w,v=H.zr(J.f($.L7().$1$0(y.s).a,"lastTimeRequest"))
if(v==null)return 130
x=C.i.L(v/1000)
if(Math.abs(x)<=864e13)w=!1
else w=!0
if(w)H.j(P.bl("DateTime is outside valid range: "+x,null))
H.z6(!1,"isUtc",y.e)
x=C.d.aR(P.cq(0,0,0,Date.now()-x,0,0).a,1e6)
N.X("\u23f0 the difference run time "+x+" seconds",null)
return x},
p(d,e){var x,w,v,u,t,s=this,r=null,q=s.c
q.toString
x=y.r
w=Y.A(q,!1,x).b.a3()
if(w.h(0,"isBuilder")!=null)w.k5(w,new Q.crd())
N.X("\ud83e\udd16 serverConfig",r)
q=s.c
q.toString
N.X(Y.A(q,!1,x).b.a3(),r)
N.X("\u2b50\ufe0f get URL",r)
q=s.c
q.toString
N.X(P.L1("fluxbuilder.inspireui.com",r,r,r,Y.A(q,!1,x).b.a3(),"https").gLW(),r)
x=y.n
v=Y.A(e,!0,x)
q=s.x
q.saq(0,w.h(0,"url"))
u=v.a
if(u!=null){u=u.r
if(u==null)u=""
s.y.saq(0,u)}u=y.u
t=H.b([new T.a6(r,e.E(y.A).f.a.b*0.08,r,r),L.w("Build Testing APK",r,r,r,r,r,r,r,K.l(e).A.f,r,r,r),C.bp,C.F],u)
C.c.H(t,B.yi("WEBSITE URL",r,B.H3(e,r,r,"Type your own Website URL"),r))
t.push(new Y.a2O(q,r,new Q.cre(s),r,v.a==null,r))
t.push(C.F)
C.c.H(t,B.yi("YOUR EMAIL",r,B.H3(e,r,r,"The Email Address to get the download APK file"),r))
t.push(new Y.a2O(s.y,r,r,"Please login to verify the email",!0,r))
t.push(C.F)
t.push(M.z(r,B.dqJ(e,"This is the Demo APK use for testing on the real Android Device.\nIt could not upload to Google Play store, please use the FluxBuilder Desktop version instead."),C.f,r,C.J4,r,r,r,r,r,r,r,r,r))
t.push(C.a1)
q=s.c
q.toString
v=Y.A(q,!0,x)
q=s.z
x=s.c
if(q){x.toString
q=B.ya(K.l(x).b,r,C.lO,v.a==null,!1,r,r,s.gbS8(),"Create APK",r,r,120)}else{x.toString
q=K.l(x).A.Q
q.toString
x=s.c
x.toString
x=K.l(x).q.c
u=T.T(H.b([L.w("The APK is generated and will be sent to your email shortly ",r,r,r,r,r,r,r,q.bc(P.V(C.i.L(127.5),x.gj(x)>>>16&255,x.gj(x)>>>8&255,x.gj(x)&255)),r,r,r)],u),C.m,r,C.k,C.j,r,r)
q=u}t.push(q)
t.push(C.a1)
return new T.W(C.bd,E.bF(T.Q(t,C.w,C.k,C.j,r),r,C.q,r,r,r,r,C.A),r)}}
var z=a.updateTypes(["~()"])
Q.crh.prototype={
$0(){var x=0,w=P.v(y.F),v=this,u
var $async$$0=P.q(function(d,e){if(d===1)return P.r(e,w)
while(true)switch(x){case 0:u=v.a
if(u.aZp()<30)u.n(new Q.crg(u))
return P.t(null,w)}})
return P.u($async$$0,w)},
$S:43}
Q.crg.prototype={
$0(){this.a.z=!1},
$S:0}
Q.crf.prototype={
$0(){this.a.z=!1},
$S:0}
Q.crd.prototype={
$2(d,e){return d==="isBuilder"},
$S:93}
Q.cre.prototype={
$1(d){var x=this.a.c
x.toString
Y.A(x,!1,y.r).ak_(d)},
$S:54};(function installTearOffs(){var x=a._instance_0u
x(Q.ayG.prototype,"gbS8","TV",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(Q.Vp,N.R)
x(Q.ayG,O.O0)
w(H.Is,[Q.crh,Q.crg,Q.crf])
x(Q.crd,H.Lq)
x(Q.cre,H.yA)})()
H.x8(b.typeUniverse,JSON.parse('{"Vp":{"R":[],"k":[]},"ayG":{"S":["Vp"]}}'))
var y={x:H.ae("O<p>"),u:H.ae("O<k>"),A:H.ae("yY"),F:H.ae("aK"),s:H.ae("MJ"),n:H.ae("QE"),r:H.ae("KT"),e:H.ae("U"),b:H.ae("@")};(function staticFields(){$.dZe=""})()}
$__dart_deferred_initializers__["v3w+dbBGvIOVxYUEETya77UC/WI="] = $__dart_deferred_initializers__.current
