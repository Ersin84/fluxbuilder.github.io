self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,B,C,D={
a7o(d,e){return D.eMh(d,e)},
eMh(d,e){var w=0,v=P.v(x.w),u,t=2,s,r=[],q,p,o
var $async$a7o=P.q(function(f,g){if(f===1){s=g
w=t}while(true)switch(w){case 0:t=4
w=7
return P.o($.Du().zx(d),$async$a7o)
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
return P.o($.Du().zx(e),$async$a7o)
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
return P.u($async$a7o,v)},
bVC:function bVC(d,e){var _=this
_.d=null
_.a=d
_.b=e
_.c=null}},E={bJE:function bJE(){},bVM:function bVM(){}},F,G,H,J,K,L,M,N,O,P,Q,R={bKw:function bKw(){}},S,T,U,V,W,X,Y,Z
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
E.bJE.prototype={
b3P(d){d.l(0,"isBuilder",!0)
$.aI().pc(d)}}
E.bVM.prototype={}
R.bKw.prototype={
iI(d){throw H.n(P.c8(null))},
ic(d){throw H.n(P.c8(null))},
CH(d,e,f,g,h){var w=h==null?null:h.length!==0
if(w===!0){h.toString
return S.dFn(d,h,f,g,!0)}return e!=null&&e.a!=null?S.asZ(e,f,g,!0):S.Fk(d,f,g,!0)},
Fv(d,e,f,g,h,i,j,k,l){}}
D.bVC.prototype={
ale(d){switch(this.d){case"fluxlisting":return T.acQ(d)
case"fluxnews":return N.F5(d)
default:return T.a4p(d)}},
bTB(d){var w,v,u
switch(this.d){case"fluxlisting":w=d
w=w
u=new R.f4()
u.auJ(w)
return u
case"fluxnews":u=new R.f4()
u.auK(d)
return u
default:v=d
v=v
u=new R.f4()
u.ZA(v)
return u}},
h2(d){var w=0,v=P.v(x.i),u,t=this,s,r,q,p,o,n
var $async$h2=P.q(function(e,f){if(e===1)return P.r(f,v)
while(true)switch(w){case 0:p=t.c
o=y.b+(p==null?"base":p)+"/mock_categories.json"
N.X("[\ud83e\uddecload mock data] "+o,null)
n=C.t
w=3
return P.o(D.a7o(o,o),$async$h2)
case 3:s=n.af(0,f,null)
r=H.b([],x.a)
for(p=J.ab(s);p.u();){q=p.gw(p)
if(!J.E(J.f(q,"slug"),"uncategorized"))r.push(t.bTB(q))}u=r
w=1
break
case 1:return P.t(u,v)}})
return P.u($async$h2,v)},
ft(d,e,f,g){return this.bWb(d,e,f,g)},
zb(d,e){return this.ft(d,e,!1,null)},
bWb(d,e,f,g){var w=0,v=P.v(x.q),u,t=this,s,r,q,p,o,n,m,l,k
var $async$ft=P.q(function(h,i){if(h===1)return P.r(i,v)
while(true)switch(w){case 0:o=H.b([],x.z)
n=t.c
m=y.b+(n==null?"base":n)+"/mock_products.json"
N.X("[\ud83e\uddecload mock data] fetchProductsLayout "+m,null)
l=J
k=C.t
w=3
return P.o(D.a7o(m,m),$async$ft)
case 3:n=l.ab(k.af(0,i,null)),s=J.L(d)
case 4:if(!n.u()){w=5
break}r=n.gw(n)
q=t.ale(r)
if(s.h(d,"category")!=null&&H.i(s.h(d,"category")).length!==0)q.sbPC(J.K(s.h(d,"category")))
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
return P.u($async$ft,v)},
tJ(d,e){var w=0,v=P.v(x.p),u,t=this,s,r,q,p,o
var $async$tJ=P.q(function(f,g){if(f===1)return P.r(g,v)
while(true)switch(w){case 0:s=H.b([],x.C)
r=t.c
q=y.b+(r==null?"base":r)+"/mock_products.json"
N.X("[\ud83e\uddecload mock data] fetchBlogLayout "+q,null)
p=J
o=C.t
w=3
return P.o(D.a7o(q,q),$async$tJ)
case 3:r=p.ab(o.af(0,g,null))
case 4:if(!r.u()){w=5
break}s.push(t.ale(r.gw(r)))
w=4
break
case 5:u=s
w=1
break
case 1:return P.t(u,v)}})
return P.u($async$tJ,v)},
am6(d){return this.tJ(d,null)},
dU(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4,a5){var w=0,v=P.v(x.q),u,t=this,s,r,q,p,o,n,m,l
var $async$dU=P.q(function(a6,a7){if(a6===1)return P.r(a7,v)
while(true)switch(w){case 0:p=H.b([],x.z)
o=t.c
n=y.b+(o==null?"base":o)+"/mock_products.json"
l=C.t
w=3
return P.o(D.a7o(n,n),$async$dU)
case 3:m=l.af(0,a7,null)
N.X("[\ud83e\uddecload mock data] fetchProductsByCategory",null)
for(o=J.ab(m);o.u();){s=o.gw(o)
r=t.ale(s)
q=J.L(s)
if(q.h(s,"store")!=null)if(J.f(q.h(s,"store"),"errors")!=null){p.push(r)
continue}p.push(r)}u=p
w=1
break
case 1:return P.t(u,v)}})
return P.u($async$dU,v)},
z9(d,e){return this.dU(null,null,d,null,null,null,null,null,null,null,null,e,null,null)},
BS(d,e,f,g,h,i,j){return this.dU(null,null,d,null,e,null,f,g,null,h,i,j,null,null)},
rz(d,e,f){return this.dU(null,null,d,null,e,null,null,null,null,null,null,f,null,null)},
za(d,e,f,g){return this.dU(null,null,d,null,e,null,null,null,null,null,null,f,null,g)},
BT(d,e,f,g,h,i,j,k){return this.dU(null,null,d,null,e,null,f,g,null,h,i,j,null,k)}}
var z=a.updateTypes([]);(function inheritance(){var w=a.inherit
w(E.bVM,P.ai)
w(E.bJE,E.bVM)
w(R.bKw,V.akE)
w(D.bVC,E.akF)})()
H.x8(b.typeUniverse,JSON.parse("{}"))
var y={b:"packages/core_builder/lib/example/templates/"}
var x={C:H.ae("O<cx>"),a:H.ae("O<f4>"),z:H.ae("O<cC>"),i:H.ae("I<f4>"),q:H.ae("I<cC>"),w:H.ae("p"),p:H.ae("I<cx>?")}}
$__dart_deferred_initializers__["006DUNHdi8UIKai21R+rpl/3VHI="] = $__dart_deferred_initializers__.current
