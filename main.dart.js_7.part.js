self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,B,C,D,E,F,G,H,J,K,L,M,N,O,P,Q={
e6r(){return new Q.W0(null)},
aY9:function aY9(d){this.b=d},
W0:function W0(d){this.a=d},
aA5:function aA5(d,e,f,g,h){var _=this
_.x=d
_.y=e
_.z=!0
_.Q=f
_.ch=!1
_.d=g
_.a=null
_.b=h
_.c=null},
cvt:function cvt(d){this.a=d},
cvs:function cvs(d){this.a=d},
cvu:function cvu(d,e){this.a=d
this.b=e},
cvv:function cvv(d,e){this.a=d
this.b=e},
cvp:function cvp(d){this.a=d},
cvq:function cvq(d){this.a=d},
cvr:function cvr(d){this.a=d},
cvn:function cvn(){},
cvo:function cvo(d){this.a=d}},R,S,T,U,V,W,X,Y,Z
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
Q.aY9.prototype={
k(d){return this.b}}
Q.W0.prototype={
B(){var x=null
return new Q.aA5(D.aY(x),D.aY(x),C.I,O.cS(!0,x,!0,x,x,!1),C.p)}}
Q.aA5.prototype={
n(d){this.a7(0)},
L(){this.L6()
P.cz(C.R,new Q.cvt(this),y.F)},
b6u(d,e){var x=this
switch(e){case C.ad7:x.m(new Q.cvu(x,d))
break
case C.dpj:x.m(new Q.cvv(x,d))
break}},
Ny(){var x=0,w=P.v(y.b),v,u=2,t,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$Ny=P.q(function(d,a0){if(d===1){t=a0
x=u}while(true)switch(x){case 0:u=4
if(r.ch){x=1
break}r.m(new Q.cvp(r))
k=r.c
k.toString
j=y.r
q=Y.x(k,!1,j).b.Z()
k=r.c
k.toString
p=C.t.cV(B.dQF(K.dzB(k)),null)
i=D.asS("POST",P.cJ("https://fluxbuilder.inspireui.com/job",0,null))
k=i.y
h=r.c
h.toString
j=Y.x(h,!1,j).b
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
k.l(0,"recaptcha",$.dJY)
o=i
x=7
return P.n(J.dzf(o),$async$Ny)
case 7:n=a0
e=C.t
x=8
return P.n(C.af.amO(n.x),$async$Ny)
case 8:m=e.ab(0,a0,null)
x=n.b===200?9:11
break
case 9:N.W("\u2b50\ufe0f Congratulation !!",null)
N.W(H.i(n),null)
x=12
return P.n($.LM().$1$0(y.s).jF("Int","lastTimeRequest",1000*Date.now()),$async$Ny)
case 12:r.m(new Q.cvq(r))
x=10
break
case 11:N.W("\ud83d\udd34\ufe0f There is an issue",null)
r.b6u(J.d(m,"message"),C.ad7)
r.m(new Q.cvr(r))
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
return P.u($async$Ny,w)},
b0F(){var x,w,v=H.zC(J.d($.LM().$1$0(y.s).a,"lastTimeRequest"))
if(v==null)return 130
x=C.i.M(v/1000)
if(Math.abs(x)<=864e13)w=!1
else w=!0
if(w)H.j(P.bn("DateTime is outside valid range: "+x,null))
H.zk(!1,"isUtc",y.e)
x=C.e.aT(P.cn(0,0,0,Date.now()-x,0,0).a,1e6)
N.W("\u23f0 the difference run time "+x+" seconds",null)
return x},
p(d,e){var x,w,v,u,t,s=this,r=null,q=s.c
q.toString
x=y.r
w=Y.x(q,!1,x).b.Z()
if(w.h(0,"isBuilder")!=null)w.hg(w,new Q.cvn())
N.W("\ud83e\udd16 serverConfig",r)
q=s.c
q.toString
N.W(Y.x(q,!1,x).b.Z(),r)
N.W("\u2b50\ufe0f get URL",r)
q=s.c
q.toString
N.W(P.LF("fluxbuilder.inspireui.com",r,r,r,Y.x(q,!1,x).b.Z(),"https").gMK(),r)
x=y.n
v=Y.x(e,!0,x)
q=s.x
q.sak(0,w.h(0,"url"))
u=v.a
if(u!=null){u=u.r
if(u==null)u=""
s.y.sak(0,u)}u=y.u
t=H.b([new T.a6(r,e.E(y.A).f.a.b*0.08,r,r),L.w("Build Testing APK",r,r,r,r,r,K.l(e).w.f,r,r,r),C.bm,C.F],u)
C.c.I(t,B.yI("WEBSITE URL",r,B.IR(e,r,r,"Type your own Website URL"),r))
t.push(new Y.a3O(q,r,new Q.cvo(s),r,v.a==null,r))
t.push(C.F)
C.c.I(t,B.yI("YOUR EMAIL",r,B.IR(e,r,r,"The Email Address to get the download APK file"),r))
t.push(new Y.a3O(s.y,r,r,"Please login to verify the email",!0,r))
t.push(C.F)
t.push(M.z(r,B.dzP(e,"This is the Demo APK use for testing on the real Android Device.\nIt could not upload to Google Play store, please use the FluxBuilder Desktop version instead."),C.f,r,C.JD,r,r,r,r,r,r,r,r,r))
t.push(C.a2)
q=s.c
q.toString
v=Y.x(q,!0,x)
q=s.z
x=s.c
if(q){q=s.ch
x.toString
q=B.y8(K.l(x).b,r,C.m5,v.a==null,q,r,r,s.gbVN(),"Create APK",r,r,120)}else{x.toString
q=K.l(x).w.Q
q.toString
x=s.c
x.toString
x=K.l(x).q.c
u=T.T(H.b([L.w("The APK is generated and will be sent to your email shortly ",r,r,r,r,r,q.be(P.V(C.i.M(127.5),x.gj(x)>>>16&255,x.gj(x)>>>8&255,x.gj(x)&255)),r,r,r)],u),C.m,r,C.k,C.j,r,r)
q=u}t.push(q)
t.push(C.a2)
t.push(s.Q)
return new T.X(C.aY,E.bH(T.O(t,C.w,C.k,C.j,r),r,C.q,r,r,r,r,C.A),r)},
gbU(d){return this.Q}}
var z=a.updateTypes(["~()"])
Q.cvt.prototype={
$0(){var x=0,w=P.v(y.F),v=this,u
var $async$$0=P.q(function(d,e){if(d===1)return P.r(e,w)
while(true)switch(x){case 0:u=v.a
if(u.b0F()<30)u.m(new Q.cvs(u))
return P.t(null,w)}})
return P.u($async$$0,w)},
$S:44}
Q.cvs.prototype={
$0(){this.a.z=!1},
$S:0}
Q.cvu.prototype={
$0(){var x=null
this.a.Q=L.w(this.b,x,x,x,x,x,C.nG,x,x,x)},
$S:0}
Q.cvv.prototype={
$0(){var x=null,w=this.a,v=w.c
v.toString
w.Q=L.w(this.b,x,x,x,x,x,A.aq(x,x,K.l(v).b,x,x,x,x,x,x,x,x,x,x,x,x,x,!0,x,x,x,x,x,x,x,x),x,x,x)},
$S:0}
Q.cvp.prototype={
$0(){var x=this.a
x.Q=C.I
x.ch=!0},
$S:0}
Q.cvq.prototype={
$0(){var x=this.a
x.ch=x.z=!1},
$S:0}
Q.cvr.prototype={
$0(){this.a.ch=!1},
$S:0}
Q.cvn.prototype={
$2(d,e){return d==="isBuilder"},
$S:51}
Q.cvo.prototype={
$1(d){var x=this.a.c
x.toString
Y.x(x,!1,y.r).alv(d)},
$S:55};(function installTearOffs(){var x=a._instance_0u
x(Q.aA5.prototype,"gbVN","Ny",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(Q.aY9,P.aj)
x(Q.W0,N.Q)
x(Q.aA5,O.OC)
w(H.IQ,[Q.cvt,Q.cvs,Q.cvu,Q.cvv,Q.cvp,Q.cvq,Q.cvr])
x(Q.cvn,H.Ma)
x(Q.cvo,H.yH)})()
H.xm(b.typeUniverse,JSON.parse('{"W0":{"Q":[],"k":[]},"aA5":{"R":["W0"]}}'))
var y={x:H.ad("N<p>"),u:H.ad("N<k>"),A:H.ad("za"),F:H.ad("aL"),s:H.ad("Nw"),n:H.ad("Rg"),r:H.ad("Lw"),e:H.ad("U"),b:H.ad("@")};(function constants(){C.ad7=new Q.aY9("MessType.error")
C.dpj=new Q.aY9("MessType.success")})()}
$__dart_deferred_initializers__["LG/UxjL7MpZzROnkbWaCFahEYro="] = $__dart_deferred_initializers__.current
