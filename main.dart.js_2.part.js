self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,B,C,D={
a7n(d,e){return D.eMo(d,e)},
eMo(d,e){var w=0,v=P.v(x.w),u,t=2,s,r=[],q,p,o
var $async$a7n=P.q(function(f,g){if(f===1){s=g
w=t}while(true)switch(w){case 0:t=4
w=7
return P.o($.Dw().zB(d),$async$a7n)
case 7:q=g
u=q
w=1
break
t=2
w=6
break
case 4:t=3
o=s
H.J(o)
w=8
return P.o($.Dw().zB(e),$async$a7n)
case 8:q=g
u=q
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return P.t(u,v)
case 2:return P.r(s,v)}})
return P.u($async$a7n,v)},
bVU:function bVU(d,e){var _=this
_.d=null
_.a=d
_.b=e
_.c=null}},E={aQF:function aQF(){},bW3:function bW3(){}},F,G,H,J,K,L,M,N,O,P,Q,R={bKr:function bKr(){}},S,T,U,V,W,X,Y,Z
a.setFunctionNamesIfNecessary([D,E,R])
A=c[0]
B=c[1]
C=c[2]
D=a.updateHolder(c[3],D)
E=a.updateHolder(c[4],E)
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
Q=c[15]
R=a.updateHolder(c[16],R)
S=c[17]
T=c[18]
U=c[19]
V=c[20]
W=c[21]
X=c[22]
Y=c[23]
Z=c[24]
E.aQF.prototype={
asr(d){d.l(0,"isBuilder",!0)
$.aI().ob(d)}}
E.bW3.prototype={}
R.bKr.prototype={
iG(d){throw H.n(P.c9(null))},
ib(d){throw H.n(P.c9(null))},
CI(d,e,f,g,h){var w=h==null?null:h.length!==0
if(w===!0){h.toString
return S.dFq(d,h,f,g,!0)}return e!=null&&e.a!=null?S.asT(e,f,g,!0):S.Fh(d,f,g,!0)},
FB(d,e,f,g,h,i,j,k,l){}}
D.bVU.prototype={
ali(d){switch(this.d){case"fluxlisting":return T.acO(d)
case"fluxnews":return N.F4(d)
default:return T.a4l(d)}},
bTg(d){var w,v,u
switch(this.d){case"fluxlisting":w=d
w=w
u=new R.f4()
u.auM(w)
return u
case"fluxnews":u=new R.f4()
u.auN(d)
return u
default:v=d
v=v
u=new R.f4()
u.ZE(v)
return u}},
h1(d){var w=0,v=P.v(x.i),u,t=this,s,r,q,p,o,n
var $async$h1=P.q(function(e,f){if(e===1)return P.r(f,v)
while(true)switch(w){case 0:p=t.c
o=y.b+(p==null?"base":p)+"/mock_categories.json"
N.X("[\ud83e\uddecload mock data] "+o,null)
n=C.t
w=3
return P.o(D.a7n(o,o),$async$h1)
case 3:s=n.ag(0,f,null)
r=H.b([],x.a)
for(p=J.ab(s);p.u();){q=p.gw(p)
if(!J.E(J.f(q,"slug"),"uncategorized"))r.push(t.bTg(q))}u=r
w=1
break
case 1:return P.t(u,v)}})
return P.u($async$h1,v)},
fp(d,e,f,g){return this.bVS(d,e,f,g)},
zg(d,e){return this.fp(d,e,!1,null)},
bVS(d,e,f,g){var w=0,v=P.v(x.q),u,t=this,s,r,q,p,o,n,m,l,k
var $async$fp=P.q(function(h,i){if(h===1)return P.r(i,v)
while(true)switch(w){case 0:o=H.b([],x.z)
n=t.c
m=y.b+(n==null?"base":n)+"/mock_products.json"
N.X("[\ud83e\uddecload mock data] fetchProductsLayout "+m,null)
l=J
k=C.t
w=3
return P.o(D.a7n(m,m),$async$fp)
case 3:n=l.ab(k.ag(0,i,null)),s=J.L(d)
case 4:if(!n.u()){w=5
break}r=n.gw(n)
q=t.ali(r)
if(s.h(d,"category")!=null&&H.i(s.h(d,"category")).length!==0)q.sbPd(J.K(s.h(d,"category")))
p=J.L(r)
if(p.h(r,"store")!=null)if(J.f(p.h(r,"store"),"errors")!=null){o.push(q)
w=4
break}o.push(q)
w=4
break
case 5:u=o
w=1
break
case 1:return P.t(u,v)}})
return P.u($async$fp,v)},
tL(d,e){var w=0,v=P.v(x.p),u,t=this,s,r,q,p,o
var $async$tL=P.q(function(f,g){if(f===1)return P.r(g,v)
while(true)switch(w){case 0:s=H.b([],x.C)
r=t.c
q=y.b+(r==null?"base":r)+"/mock_products.json"
N.X("[\ud83e\uddecload mock data] fetchBlogLayout "+q,null)
p=J
o=C.t
w=3
return P.o(D.a7n(q,q),$async$tL)
case 3:r=p.ab(o.ag(0,g,null))
case 4:if(!r.u()){w=5
break}s.push(t.ali(r.gw(r)))
w=4
break
case 5:u=s
w=1
break
case 1:return P.t(u,v)}})
return P.u($async$tL,v)},
ama(d){return this.tL(d,null)},
dT(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4,a5){var w=0,v=P.v(x.q),u,t=this,s,r,q,p,o,n,m,l
var $async$dT=P.q(function(a6,a7){if(a6===1)return P.r(a7,v)
while(true)switch(w){case 0:p=H.b([],x.z)
o=t.c
n=y.b+(o==null?"base":o)+"/mock_products.json"
l=C.t
w=3
return P.o(D.a7n(n,n),$async$dT)
case 3:m=l.ag(0,a7,null)
N.X("[\ud83e\uddecload mock data] fetchProductsByCategory",null)
for(o=J.ab(m);o.u();){s=o.gw(o)
r=t.ali(s)
q=J.L(s)
if(q.h(s,"store")!=null)if(J.f(q.h(s,"store"),"errors")!=null){p.push(r)
continue}p.push(r)}u=p
w=1
break
case 1:return P.t(u,v)}})
return P.u($async$dT,v)},
ze(d,e){return this.dT(null,null,d,null,null,null,null,null,null,null,null,e,null,null)},
BU(d,e,f,g,h,i,j,k){return this.dT(null,null,d,null,e,null,f,g,null,h,i,j,null,k)},
rz(d,e,f){return this.dT(null,null,d,null,e,null,null,null,null,null,null,f,null,null)},
BT(d,e,f,g,h,i,j){return this.dT(null,null,d,null,e,null,f,g,null,h,i,j,null,null)},
zf(d,e,f,g){return this.dT(null,null,d,null,e,null,null,null,null,null,null,f,null,g)}}
var z=a.updateTypes([]);(function inheritance(){var w=a.inherit
w(E.bW3,P.ak)
w(E.aQF,E.bW3)
w(R.bKr,V.akz)
w(D.bVU,E.akA)})()
H.x8(b.typeUniverse,JSON.parse("{}"))
var y={b:"packages/core_builder/lib/example/templates/"}
var x={C:H.ae("O<cw>"),a:H.ae("O<f4>"),z:H.ae("O<cD>"),i:H.ae("I<f4>"),q:H.ae("I<cD>"),w:H.ae("p"),p:H.ae("I<cw>?")}}
$__dart_deferred_initializers__["vWapzG12awy42/m4rY3XmcmkTX8="] = $__dart_deferred_initializers__.current
