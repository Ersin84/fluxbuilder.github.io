self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,B,C,D,E,F,G,H,J,K,L,M,N,O,P,Q={
e7K(){return new Q.W4(null)},
aYx:function aYx(d){this.b=d},
W4:function W4(d){this.a=d},
aAo:function aAo(d,e,f,g,h){var _=this
_.x=d
_.y=e
_.z=!0
_.Q=f
_.ch=!1
_.d=g
_.a=null
_.b=h
_.c=null},
cvZ:function cvZ(d){this.a=d},
cvY:function cvY(d){this.a=d},
cw_:function cw_(d,e){this.a=d
this.b=e},
cw0:function cw0(d,e){this.a=d
this.b=e},
cvV:function cvV(d){this.a=d},
cvW:function cvW(d){this.a=d},
cvX:function cvX(d){this.a=d},
cvT:function cvT(){},
cvU:function cvU(d){this.a=d}},R,S,T,U,V,W,X,Y,Z
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
Q.aYx.prototype={
k(d){return this.b}}
Q.W4.prototype={
B(){var x=null
return new Q.aAo(D.b1(x),D.b1(x),C.I,O.cX(!0,x,!0,x,x,!1),C.p)}}
Q.aAo.prototype={
n(d){this.a7(0)},
K(){this.H_()
P.cw(C.R,new Q.cvZ(this),y.F)},
b6L(d,e){var x=this
switch(e){case C.adi:x.m(new Q.cw_(x,d))
break
case C.dpR:x.m(new Q.cw0(x,d))
break}},
NC(){var x=0,w=P.v(y.b),v,u=2,t,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$NC=P.q(function(d,a0){if(d===1){t=a0
x=u}while(true)switch(x){case 0:u=4
if(r.ch){x=1
break}r.m(new Q.cvV(r))
k=r.c
k.toString
j=y.r
q=Y.y(k,!1,j).c.X()
k=r.c
k.toString
p=C.t.cU(B.dRT(K.dAA(k)),null)
i=D.at8("POST",P.cM("https://fluxbuilder.inspireui.com/job",0,null))
k=i.y
h=r.c
h.toString
j=Y.y(h,!1,j).c
h=y.x
j=H.b(H.b(j.ged(j).b.split("."),h).slice(0),h)
k.l(0,"type",C.c.gV(j))
k.l(0,"url",J.d(q,"url"))
k.l(0,"themeJson",p)
j=J.d(q,"consumerKey")
k.l(0,"consumerKey",j==null?"":j)
j=J.d(q,"consumerSecret")
k.l(0,"consumerSecret",j==null?"":j)
j=J.d(q,"accessToken")
k.l(0,"accessToken",j==null?"":j)
k.l(0,"email",r.y.a.a)
k.l(0,"recaptcha",$.dL7)
o=i
x=7
return P.n(J.dAd(o),$async$NC)
case 7:n=a0
e=C.t
x=8
return P.n(C.af.amO(n.x),$async$NC)
case 8:m=e.aa(0,a0,null)
x=n.b===200?9:11
break
case 9:N.W("\u2b50\ufe0f Congratulation !!",null)
N.W(H.i(n),null)
x=12
return P.n($.Op().$1$0(y.s).jY("Int","lastTimeRequest",1000*Date.now()),$async$NC)
case 12:r.m(new Q.cvW(r))
x=10
break
case 11:N.W("\ud83d\udd34\ufe0f There is an issue",null)
r.b6L(J.d(m,"message"),C.adi)
r.m(new Q.cvX(r))
case 10:u=2
x=6
break
case 4:u=3
f=t
H.I(f)
l=H.aR(f)
N.W(l,null)
throw f
x=6
break
case 3:x=2
break
case 6:case 1:return P.t(v,w)
case 2:return P.r(t,w)}})
return P.u($async$NC,w)},
b0W(){var x,w,v=H.zz(J.d($.Op().$1$0(y.s).a,"lastTimeRequest"))
if(v==null)return 130
x=C.i.M(v/1000)
if(Math.abs(x)<=864e13)w=!1
else w=!0
if(w)H.j(P.bo("DateTime is outside valid range: "+x,null))
H.zj(!1,"isUtc",y.e)
x=C.e.aU(P.co(0,0,0,Date.now()-x,0,0).a,1e6)
N.W("\u23f0 the difference run time "+x+" seconds",null)
return x},
p(d,e){var x,w,v,u,t,s=this,r=null,q=s.c
q.toString
x=y.r
w=Y.y(q,!1,x).c.X()
if(w.h(0,"isBuilder")!=null)w.hb(w,new Q.cvT())
N.W("\ud83e\udd16 serverConfig",r)
q=s.c
q.toString
N.W(Y.y(q,!1,x).c.X(),r)
N.W("\u2b50\ufe0f get URL",r)
q=s.c
q.toString
N.W(P.K8("fluxbuilder.inspireui.com",r,r,r,Y.y(q,!1,x).c.X(),"https").gI8(),r)
x=y.n
v=Y.y(e,!0,x)
q=s.x
q.sak(0,w.h(0,"url"))
u=v.a
if(u!=null){u=u.r
if(u==null)u=""
s.y.sak(0,u)}u=y.u
t=H.b([new T.a8(r,e.E(y.A).f.a.b*0.08,r,r),L.w("Build Testing APK",r,r,r,r,r,K.l(e).w.f,r,r,r),C.bs,C.F],u)
C.c.G(t,B.A2("WEBSITE URL",r,B.IU(e,r,r,"Type your own Website URL"),r))
t.push(new Y.a3S(q,r,new Q.cvU(s),r,v.a==null,r))
t.push(C.F)
C.c.G(t,B.A2("YOUR EMAIL",r,B.IU(e,r,r,"The Email Address to get the download APK file"),r))
t.push(new Y.a3S(s.y,r,r,"Please login to verify the email",!0,r))
t.push(C.F)
t.push(M.z(r,B.dAO(e,"You will receive a demo APK which is used for testing only.\nDo not upload to Google Play Store. To build a release APK, please use the desktop version of FluxBuilder instead."),C.f,r,C.JP,r,r,r,r,r,r,r,r,r))
t.push(C.a2)
q=s.c
q.toString
v=Y.y(q,!0,x)
q=s.z
x=s.c
if(q){q=s.ch
x.toString
q=B.xX(K.l(x).b,r,C.me,v.a==null,q,r,r,s.gbWh(),"Create APK",r,r,120)}else{x.toString
q=K.l(x).w.Q
q.toString
x=s.c
x.toString
x=K.l(x).q.c
u=T.T(H.b([L.w("The APK is generated and will be sent to your email shortly ",r,r,r,r,r,q.bc(P.V(C.i.M(127.5),x.gj(x)>>>16&255,x.gj(x)>>>8&255,x.gj(x)&255)),r,r,r)],u),C.m,r,C.k,C.j,r,r)
q=u}t.push(q)
t.push(C.a2)
t.push(s.Q)
return new T.X(C.b3,E.bI(T.O(t,C.w,C.k,C.j,r),r,C.q,r,r,r,r,C.A),r)},
gbV(d){return this.Q}}
var z=a.updateTypes(["~()"])
Q.cvZ.prototype={
$0(){var x=0,w=P.v(y.F),v=this,u
var $async$$0=P.q(function(d,e){if(d===1)return P.r(e,w)
while(true)switch(x){case 0:u=v.a
if(u.b0W()<30)u.m(new Q.cvY(u))
return P.t(null,w)}})
return P.u($async$$0,w)},
$S:45}
Q.cvY.prototype={
$0(){this.a.z=!1},
$S:0}
Q.cw_.prototype={
$0(){var x=null
this.a.Q=L.w(this.b,x,x,x,x,x,C.nK,x,x,x)},
$S:0}
Q.cw0.prototype={
$0(){var x=null,w=this.a,v=w.c
v.toString
w.Q=L.w(this.b,x,x,x,x,x,A.am(x,x,K.l(v).b,x,x,x,x,x,x,x,x,x,x,x,x,x,!0,x,x,x,x,x,x,x,x),x,x,x)},
$S:0}
Q.cvV.prototype={
$0(){var x=this.a
x.Q=C.I
x.ch=!0},
$S:0}
Q.cvW.prototype={
$0(){var x=this.a
x.ch=x.z=!1},
$S:0}
Q.cvX.prototype={
$0(){this.a.ch=!1},
$S:0}
Q.cvT.prototype={
$2(d,e){return d==="isBuilder"},
$S:51}
Q.cvU.prototype={
$1(d){var x=this.a.c
x.toString
Y.y(x,!1,y.r).alu(d)},
$S:44};(function installTearOffs(){var x=a._instance_0u
x(Q.aAo.prototype,"gbWh","NC",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(Q.aYx,P.aj)
x(Q.W4,N.Q)
x(Q.aAo,O.OE)
w(H.IT,[Q.cvZ,Q.cvY,Q.cw_,Q.cw0,Q.cvV,Q.cvW,Q.cvX])
x(Q.cvT,H.Mb)
x(Q.cvU,H.yK)})()
H.xq(b.typeUniverse,JSON.parse('{"W4":{"Q":[],"k":[]},"aAo":{"R":["W4"]}}'))
var y={x:H.ad("P<p>"),u:H.ad("P<k>"),A:H.ad("yG"),F:H.ad("aL"),s:H.ad("Ur"),n:H.ad("Re"),r:H.ad("LA"),e:H.ad("U"),b:H.ad("@")};(function constants(){C.adi=new Q.aYx("MessType.error")
C.dpR=new Q.aYx("MessType.success")})()}
$__dart_deferred_initializers__["UDO7pt2vzCTX5rQ8hm58uSakvKM="] = $__dart_deferred_initializers__.current
