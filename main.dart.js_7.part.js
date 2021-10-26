self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,B,C,D,E,F,G,H,J,K,L,M,N,O,P,Q={
e5U(){return new Q.VZ(null)},
VZ:function VZ(d){this.a=d},
aA2:function aA2(d,e,f,g){var _=this
_.x=d
_.y=e
_.z=!0
_.d=f
_.a=null
_.b=g
_.c=null},
cv7:function cv7(d){this.a=d},
cv6:function cv6(d){this.a=d},
cv5:function cv5(d){this.a=d},
cv3:function cv3(){},
cv4:function cv4(d){this.a=d}},R,S,T,U,V,W,X,Y,Z
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
Q.VZ.prototype={
B(){var x=null
return new Q.aA2(D.aY(x),D.aY(x),O.cT(!0,x,!0,x,x,!1),C.p)}}
Q.aA2.prototype={
n(d){this.a7(0)},
L(){this.L2()
P.cz(C.R,new Q.cv7(this),y.F)},
UO(){var x=0,w=P.v(y.b),v=1,u,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h
var $async$UO=P.q(function(d,e){if(d===1){u=e
x=v}while(true)switch(x){case 0:v=3
m=s.c
m.toString
l=y.r
r=Y.y(m,!1,l).b.a_()
m=s.c
m.toString
q=C.t.cV(B.dQ7(K.dz4(m)),null)
k=D.asN("POST",P.cO("https://fluxbuilder.inspireui.com/job",0,null))
m=k.y
j=s.c
j.toString
l=Y.y(j,!1,l).b
j=y.x
l=H.b(H.b(l.gea(l).b.split("."),j).slice(0),j)
m.l(0,"type",C.c.gV(l))
m.l(0,"url",J.d(r,"url"))
m.l(0,"themeJson",q)
l=J.d(r,"consumerKey")
m.l(0,"consumerKey",l==null?"":l)
l=J.d(r,"consumerSecret")
m.l(0,"consumerSecret",l==null?"":l)
l=J.d(r,"accessToken")
m.l(0,"accessToken",l==null?"":l)
m.l(0,"email",s.y.a.a)
m.l(0,"recaptcha",$.e7p)
p=k
x=6
return P.n(J.dyJ(p),$async$UO)
case 6:o=e
x=o.b===200?7:9
break
case 7:N.W("\u2b50\ufe0f Congratulation !!",null)
N.W(H.i(o),null)
x=10
return P.n($.LJ().$1$0(y.s).jG("Int","lastTimeRequest",1000*Date.now()),$async$UO)
case 10:s.m(new Q.cv5(s))
x=8
break
case 9:N.W("\ud83d\udd34\ufe0f There is an issue",null)
N.W(H.i(o),null)
case 8:v=1
x=5
break
case 3:v=2
h=u
H.I(h)
n=H.aP(h)
N.W(n,null)
throw h
x=5
break
case 2:x=1
break
case 5:return P.t(null,w)
case 1:return P.r(u,w)}})
return P.u($async$UO,w)},
b0z(){var x,w,v=H.zC(J.d($.LJ().$1$0(y.s).a,"lastTimeRequest"))
if(v==null)return 130
x=C.i.M(v/1000)
if(Math.abs(x)<=864e13)w=!1
else w=!0
if(w)H.j(P.bn("DateTime is outside valid range: "+x,null))
H.zk(!1,"isUtc",y.e)
x=C.d.aT(P.cn(0,0,0,Date.now()-x,0,0).a,1e6)
N.W("\u23f0 the difference run time "+x+" seconds",null)
return x},
p(d,e){var x,w,v,u,t,s=this,r=null,q=s.c
q.toString
x=y.r
w=Y.y(q,!1,x).b.a_()
if(w.h(0,"isBuilder")!=null)w.hg(w,new Q.cv3())
N.W("\ud83e\udd16 serverConfig",r)
q=s.c
q.toString
N.W(Y.y(q,!1,x).b.a_(),r)
N.W("\u2b50\ufe0f get URL",r)
q=s.c
q.toString
N.W(P.LC("fluxbuilder.inspireui.com",r,r,r,Y.y(q,!1,x).b.a_(),"https").gMG(),r)
x=y.n
v=Y.y(e,!0,x)
q=s.x
q.sal(0,w.h(0,"url"))
u=v.a
if(u!=null){u=u.r
if(u==null)u=""
s.y.sal(0,u)}u=y.u
t=H.b([new T.a6(r,e.E(y.A).f.a.b*0.08,r,r),L.w("Build Testing APK",r,r,r,r,r,K.l(e).w.f,r,r,r),C.bm,C.F],u)
C.c.I(t,B.yI("WEBSITE URL",r,B.IQ(e,r,r,"Type your own Website URL"),r))
t.push(new Y.a3L(q,r,new Q.cv4(s),r,v.a==null,r))
t.push(C.F)
C.c.I(t,B.yI("YOUR EMAIL",r,B.IQ(e,r,r,"The Email Address to get the download APK file"),r))
t.push(new Y.a3L(s.y,r,r,"Please login to verify the email",!0,r))
t.push(C.F)
t.push(M.z(r,B.dzi(e,"This is the Demo APK use for testing on the real Android Device.\nIt could not upload to Google Play store, please use the FluxBuilder Desktop version instead."),C.f,r,C.Jz,r,r,r,r,r,r,r,r,r))
t.push(C.a2)
q=s.c
q.toString
v=Y.y(q,!0,x)
q=s.z
x=s.c
if(q){x.toString
q=B.y8(K.l(x).b,r,C.m5,v.a==null,!1,r,r,s.gbVA(),"Create APK",r,r,120)}else{x.toString
q=K.l(x).w.Q
q.toString
x=s.c
x.toString
x=K.l(x).q.c
u=T.T(H.b([L.w("The APK is generated and will be sent to your email shortly ",r,r,r,r,r,q.be(P.V(C.i.M(127.5),x.gj(x)>>>16&255,x.gj(x)>>>8&255,x.gj(x)&255)),r,r,r)],u),C.m,r,C.k,C.j,r,r)
q=u}t.push(q)
t.push(C.a2)
return new T.X(C.aY,E.bH(T.O(t,C.w,C.k,C.j,r),r,C.q,r,r,r,r,C.A),r)}}
var z=a.updateTypes(["~()"])
Q.cv7.prototype={
$0(){var x=0,w=P.v(y.F),v=this,u
var $async$$0=P.q(function(d,e){if(d===1)return P.r(e,w)
while(true)switch(x){case 0:u=v.a
if(u.b0z()<30)u.m(new Q.cv6(u))
return P.t(null,w)}})
return P.u($async$$0,w)},
$S:46}
Q.cv6.prototype={
$0(){this.a.z=!1},
$S:0}
Q.cv5.prototype={
$0(){this.a.z=!1},
$S:0}
Q.cv3.prototype={
$2(d,e){return d==="isBuilder"},
$S:51}
Q.cv4.prototype={
$1(d){var x=this.a.c
x.toString
Y.y(x,!1,y.r).alp(d)},
$S:54};(function installTearOffs(){var x=a._instance_0u
x(Q.aA2.prototype,"gbVA","UO",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(Q.VZ,N.Q)
x(Q.aA2,O.OA)
w(H.IP,[Q.cv7,Q.cv6,Q.cv5])
x(Q.cv3,H.M7)
x(Q.cv4,H.yH)})()
H.xm(b.typeUniverse,JSON.parse('{"VZ":{"Q":[],"k":[]},"aA2":{"R":["VZ"]}}'))
var y={x:H.ad("N<p>"),u:H.ad("N<k>"),A:H.ad("za"),F:H.ad("aL"),s:H.ad("Nu"),n:H.ad("Re"),r:H.ad("Lt"),e:H.ad("U"),b:H.ad("@")};(function staticFields(){$.e7p=""})()}
$__dart_deferred_initializers__["6rgQk/FOWHBJxeYzABChsle+Kbs="] = $__dart_deferred_initializers__.current
