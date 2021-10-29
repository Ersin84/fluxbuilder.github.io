self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,B,C,D={
a8r(d,e){return D.eW9(d,e)},
eW9(d,e){var w=0,v=P.v(x.w),u,t=2,s,r=[],q,p,o
var $async$a8r=P.q(function(f,g){if(f===1){s=g
w=t}while(true)switch(w){case 0:t=4
w=7
return P.n($.D7().A2(d),$async$a8r)
case 7:q=g
u=q
w=1
break
t=2
w=6
break
case 4:t=3
o=s
H.I(o)
w=8
return P.n($.D7().A2(e),$async$a8r)
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
return P.u($async$a8r,v)},
bYy:function bYy(d,e){var _=this
_.d=null
_.a=d
_.b=e
_.c=null}},E={aSo:function aSo(){},bYI:function bYI(){}},F,G,H,J,K,L,M,N,O,P,Q,R={bN7:function bN7(){}},S,T,U,V,W,X,Y,Z
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
E.aSo.prototype={
atT(d){d.l(0,"isBuilder",!0)
$.aJ().ot(d)}}
E.bYI.prototype={}
R.bN7.prototype={
i4(d){throw H.o(P.bx(null))},
hF(d){throw H.o(P.bx(null))},
AT(d,e,f,g,h){var w=h==null?null:h.length!==0
if(w===!0){h.toString
return S.dOP(d,h,f,g,!0)}return e!=null&&e.a!=null?S.adU(e,f,g,!0):S.EQ(d,f,g,!0)},
Dg(d,e,f,g,h,i,j,k,l){}}
D.bYy.prototype={
amN(d){switch(this.d){case"fluxlisting":return T.ae0(d)
case"fluxnews":return N.Da(d)
default:return T.Zo(d)}},
bWZ(d){var w,v,u
switch(this.d){case"fluxlisting":w=d
w=w
u=new R.eq()
u.awr(w)
return u
case"fluxnews":u=new R.eq()
u.acW(d)
return u
default:v=d
v=v
u=new R.eq()
u.a_T(v)
return u}},
fL(d){var w=0,v=P.v(x.i),u,t=this,s,r,q,p,o,n
var $async$fL=P.q(function(e,f){if(e===1)return P.r(f,v)
while(true)switch(w){case 0:p=t.c
o=y.b+(p==null?"base":p)+"/mock_categories.json"
N.W("[\ud83e\uddecload mock data] "+o,null)
n=C.t
w=3
return P.n(D.a8r(o,o),$async$fL)
case 3:s=n.ab(0,f,null)
r=H.b([],x.a)
for(p=J.aa(s);p.t();){q=p.gA(p)
if(!J.E(J.d(q,"slug"),"uncategorized"))r.push(t.bWZ(q))}u=r
w=1
break
case 1:return P.t(u,v)}})
return P.u($async$fL,v)},
eT(d,e,f,g){return this.bZF(d,e,f,g)},
xt(d,e){return this.eT(d,e,!1,null)},
bZF(d,e,f,g){var w=0,v=P.v(x.q),u,t=this,s,r,q,p,o,n,m,l,k
var $async$eT=P.q(function(h,i){if(h===1)return P.r(i,v)
while(true)switch(w){case 0:o=H.b([],x.z)
n=t.c
m=y.b+(n==null?"base":n)+"/mock_products.json"
N.W("[\ud83e\uddecload mock data] fetchProductsLayout "+m,null)
l=J
k=C.t
w=3
return P.n(D.a8r(m,m),$async$eT)
case 3:n=l.aa(k.ab(0,i,null)),s=J.L(d)
case 4:if(!n.t()){w=5
break}r=n.gA(n)
q=t.amN(r)
if(s.h(d,"category")!=null&&H.i(s.h(d,"category")).length!==0)q.sbSD(J.J(s.h(d,"category")))
p=J.L(r)
if(p.h(r,"store")!=null)if(J.d(p.h(r,"store"),"errors")!=null){o.push(q)
w=4
break}o.push(q)
w=4
break
case 5:u=o
w=1
break
case 1:return P.t(u,v)}})
return P.u($async$eT,v)},
ub(d,e){var w=0,v=P.v(x.p),u,t=this,s,r,q,p,o
var $async$ub=P.q(function(f,g){if(f===1)return P.r(g,v)
while(true)switch(w){case 0:s=H.b([],x.C)
r=t.c
q=y.b+(r==null?"base":r)+"/mock_products.json"
N.W("[\ud83e\uddecload mock data] fetchBlogLayout "+q,null)
p=J
o=C.t
w=3
return P.n(D.a8r(q,q),$async$ub)
case 3:r=p.aa(o.ab(0,g,null))
case 4:if(!r.t()){w=5
break}s.push(t.amN(r.gA(r)))
w=4
break
case 5:u=s
w=1
break
case 1:return P.t(u,v)}})
return P.u($async$ub,v)},
anC(d){return this.ub(d,null)},
d1(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4,a5){var w=0,v=P.v(x.q),u,t=this,s,r,q,p,o,n,m,l
var $async$d1=P.q(function(a6,a7){if(a6===1)return P.r(a7,v)
while(true)switch(w){case 0:p=H.b([],x.z)
o=t.c
n=y.b+(o==null?"base":o)+"/mock_products.json"
l=C.t
w=3
return P.n(D.a8r(n,n),$async$d1)
case 3:m=l.ab(0,a7,null)
N.W("[\ud83e\uddecload mock data] fetchProductsByCategory",null)
for(o=J.aa(m);o.t();){s=o.gA(o)
r=t.amN(s)
q=J.L(s)
if(q.h(s,"store")!=null)if(J.d(q.h(s,"store"),"errors")!=null){p.push(r)
continue}p.push(r)}u=p
w=1
break
case 1:return P.t(u,v)}})
return P.u($async$d1,v)},
xr(d,e){return this.d1(null,null,d,null,null,null,null,null,null,null,null,e,null,null)},
zM(d,e,f,g,h,i,j,k){return this.d1(null,null,d,null,e,null,f,g,null,h,i,j,null,k)},
qE(d,e,f){return this.d1(null,null,d,null,e,null,null,null,null,null,null,f,null,null)},
zL(d,e,f,g,h,i,j){return this.d1(null,null,d,null,e,null,f,g,null,h,i,j,null,null)},
xs(d,e,f,g){return this.d1(null,null,d,null,e,null,null,null,null,null,null,f,null,g)}}
var z=a.updateTypes([]);(function inheritance(){var w=a.inherit
w(E.bYI,P.aj)
w(E.aSo,E.bYI)
w(R.bN7,V.alM)
w(D.bYy,E.alN)})()
H.xm(b.typeUniverse,JSON.parse("{}"))
var y={b:"packages/core_builder/lib/example/templates/"}
var x={C:H.ad("N<cr>"),a:H.ad("N<eq>"),z:H.ad("N<cB>"),i:H.ad("K<eq>"),q:H.ad("K<cB>"),w:H.ad("p"),p:H.ad("K<cr>?")}}
$__dart_deferred_initializers__["RWU+ugb/kn0VZm9C94DRujrxxqU="] = $__dart_deferred_initializers__.current
