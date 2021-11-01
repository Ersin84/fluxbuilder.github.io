self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,B,C,D,E,F,G,H,J,K,L,M,N,O,P,Q={
e7J(){return new Q.W3(null)},
aYA:function aYA(d){this.b=d},
W3:function W3(d){this.a=d},
aAk:function aAk(d,e,f,g,h){var _=this
_.x=d
_.y=e
_.z=!0
_.Q=f
_.ch=!1
_.d=g
_.a=null
_.b=h
_.c=null},
cwj:function cwj(d){this.a=d},
cwi:function cwi(d){this.a=d},
cwk:function cwk(d,e){this.a=d
this.b=e},
cwl:function cwl(d,e){this.a=d
this.b=e},
cwf:function cwf(d){this.a=d},
cwg:function cwg(d){this.a=d},
cwh:function cwh(d){this.a=d},
cwd:function cwd(){},
cwe:function cwe(d){this.a=d}},R,S,T,U,V,W,X,Y,Z
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
Q.aYA.prototype={
k(d){return this.b}}
Q.W3.prototype={
B(){var x=null
return new Q.aAk(D.aY(x),D.aY(x),C.I,O.cV(!0,x,!0,x,x,!1),C.p)}}
Q.aAk.prototype={
n(d){this.a7(0)},
L(){this.L9()
P.cz(C.R,new Q.cwj(this),y.F)},
b6K(d,e){var x=this
switch(e){case C.adm:x.m(new Q.cwk(x,d))
break
case C.dpS:x.m(new Q.cwl(x,d))
break}},
NB(){var x=0,w=P.v(y.b),v,u=2,t,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$NB=P.q(function(d,a0){if(d===1){t=a0
x=u}while(true)switch(x){case 0:u=4
if(r.ch){x=1
break}r.m(new Q.cwf(r))
k=r.c
k.toString
j=y.r
q=Y.y(k,!1,j).b.Z()
k=r.c
k.toString
p=C.t.cV(B.dRS(K.dAI(k)),null)
i=D.at1("POST",P.cH("https://fluxbuilder.inspireui.com/job",0,null))
k=i.y
h=r.c
h.toString
j=Y.y(h,!1,j).b
h=y.x
j=H.b(H.b(j.gea(j).b.split("."),h).slice(0),h)
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
k.l(0,"recaptcha",$.dL6)
o=i
x=7
return P.n(J.dAl(o),$async$NB)
case 7:n=a0
e=C.t
x=8
return P.n(C.af.amT(n.x),$async$NB)
case 8:m=e.ab(0,a0,null)
x=n.b===200?9:11
break
case 9:N.W("\u2b50\ufe0f Congratulation !!",null)
N.W(H.i(n),null)
x=12
return P.n($.LP().$1$0(y.s).jF("Int","lastTimeRequest",1000*Date.now()),$async$NB)
case 12:r.m(new Q.cwg(r))
x=10
break
case 11:N.W("\ud83d\udd34\ufe0f There is an issue",null)
r.b6K(J.d(m,"message"),C.adm)
r.m(new Q.cwh(r))
case 10:u=2
x=6
break
case 4:u=3
f=t
H.I(f)
l=H.aP(f)
N.W(l,null)
throw f
x=6
break
case 3:x=2
break
case 6:case 1:return P.t(v,w)
case 2:return P.r(t,w)}})
return P.u($async$NB,w)},
b0U(){var x,w,v=H.zC(J.d($.LP().$1$0(y.s).a,"lastTimeRequest"))
if(v==null)return 130
x=C.j.M(v/1000)
if(Math.abs(x)<=864e13)w=!1
else w=!0
if(w)H.j(P.bn("DateTime is outside valid range: "+x,null))
H.zk(!1,"isUtc",y.e)
x=C.d.aT(P.cp(0,0,0,Date.now()-x,0,0).a,1e6)
N.W("\u23f0 the difference run time "+x+" seconds",null)
return x},
p(d,e){var x,w,v,u,t,s=this,r=null,q=s.c
q.toString
x=y.r
w=Y.y(q,!1,x).b.Z()
if(w.h(0,"isBuilder")!=null)w.hh(w,new Q.cwd())
N.W("\ud83e\udd16 serverConfig",r)
q=s.c
q.toString
N.W(Y.y(q,!1,x).b.Z(),r)
N.W("\u2b50\ufe0f get URL",r)
q=s.c
q.toString
N.W(P.LI("fluxbuilder.inspireui.com",r,r,r,Y.y(q,!1,x).b.Z(),"https").gMN(),r)
x=y.n
v=Y.y(e,!0,x)
q=s.x
q.sak(0,w.h(0,"url"))
u=v.a
if(u!=null){u=u.r
if(u==null)u=""
s.y.sak(0,u)}u=y.u
t=H.b([new T.a6(r,e.E(y.A).f.a.b*0.08,r,r),L.w("Build Testing APK",r,r,r,r,r,K.l(e).w.f,r,r,r),C.bn,C.F],u)
C.c.I(t,B.yM("WEBSITE URL",r,B.IS(e,r,r,"Type your own Website URL"),r))
t.push(new Y.a3R(q,r,new Q.cwe(s),r,v.a==null,r))
t.push(C.F)
C.c.I(t,B.yM("YOUR EMAIL",r,B.IS(e,r,r,"The Email Address to get the download APK file"),r))
t.push(new Y.a3R(s.y,r,r,"Please login to verify the email",!0,r))
t.push(C.F)
t.push(M.z(r,B.dAX(e,"This is the Demo APK use for testing on the real Android Device.\nIt could not upload to Google Play store, please use the FluxBuilder Desktop version instead."),C.f,r,C.JS,r,r,r,r,r,r,r,r,r))
t.push(C.a1)
q=s.c
q.toString
v=Y.y(q,!0,x)
q=s.z
x=s.c
if(q){q=s.ch
x.toString
q=B.xR(K.l(x).b,r,C.md,v.a==null,q,r,r,s.gbWf(),"Create APK",r,r,120)}else{x.toString
q=K.l(x).w.Q
q.toString
x=s.c
x.toString
x=K.l(x).q.c
u=T.T(H.b([L.w("The APK is generated and will be sent to your email shortly ",r,r,r,r,r,q.bb(P.V(C.j.M(127.5),x.gj(x)>>>16&255,x.gj(x)>>>8&255,x.gj(x)&255)),r,r,r)],u),C.m,r,C.k,C.i,r,r)
q=u}t.push(q)
t.push(C.a1)
t.push(s.Q)
return new T.X(C.b7,E.bI(T.N(t,C.v,C.k,C.i,r),r,C.q,r,r,r,r,C.A),r)},
gbU(d){return this.Q}}
var z=a.updateTypes(["~()"])
Q.cwj.prototype={
$0(){var x=0,w=P.v(y.F),v=this,u
var $async$$0=P.q(function(d,e){if(d===1)return P.r(e,w)
while(true)switch(x){case 0:u=v.a
if(u.b0U()<30)u.m(new Q.cwi(u))
return P.t(null,w)}})
return P.u($async$$0,w)},
$S:46}
Q.cwi.prototype={
$0(){this.a.z=!1},
$S:0}
Q.cwk.prototype={
$0(){var x=null
this.a.Q=L.w(this.b,x,x,x,x,x,C.nM,x,x,x)},
$S:0}
Q.cwl.prototype={
$0(){var x=null,w=this.a,v=w.c
v.toString
w.Q=L.w(this.b,x,x,x,x,x,A.al(x,x,K.l(v).b,x,x,x,x,x,x,x,x,x,x,x,x,x,!0,x,x,x,x,x,x,x,x),x,x,x)},
$S:0}
Q.cwf.prototype={
$0(){var x=this.a
x.Q=C.I
x.ch=!0},
$S:0}
Q.cwg.prototype={
$0(){var x=this.a
x.ch=x.z=!1},
$S:0}
Q.cwh.prototype={
$0(){this.a.ch=!1},
$S:0}
Q.cwd.prototype={
$2(d,e){return d==="isBuilder"},
$S:52}
Q.cwe.prototype={
$1(d){var x=this.a.c
x.toString
Y.y(x,!1,y.r).alA(d)},
$S:53};(function installTearOffs(){var x=a._instance_0u
x(Q.aAk.prototype,"gbWf","NB",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(Q.aYA,P.aj)
x(Q.W3,N.Q)
x(Q.aAk,O.OD)
w(H.IR,[Q.cwj,Q.cwi,Q.cwk,Q.cwl,Q.cwf,Q.cwg,Q.cwh])
x(Q.cwd,H.Md)
x(Q.cwe,H.yL)})()
H.xn(b.typeUniverse,JSON.parse('{"W3":{"Q":[],"k":[]},"aAk":{"R":["W3"]}}'))
var y={x:H.ad("O<p>"),u:H.ad("O<k>"),A:H.ad("za"),F:H.ad("aL"),s:H.ad("QK"),n:H.ad("Ri"),r:H.ad("Lz"),e:H.ad("U"),b:H.ad("@")};(function constants(){C.adm=new Q.aYA("MessType.error")
C.dpS=new Q.aYA("MessType.success")})()}
$__dart_deferred_initializers__["UVA42xooy+UGmNNWk/R5+rmRaXs="] = $__dart_deferred_initializers__.current
