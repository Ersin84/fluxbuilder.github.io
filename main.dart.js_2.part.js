self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,B,C,D={
a8w(d,e){return D.eXm(d,e)},
eXm(d,e){var w=0,v=P.v(x.w),u,t=2,s,r=[],q,p,o
var $async$a8w=P.q(function(f,g){if(f===1){s=g
w=t}while(true)switch(w){case 0:t=4
w=7
return P.n($.D5().A8(d),$async$a8w)
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
return P.n($.D5().A8(e),$async$a8w)
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
return P.u($async$a8w,v)},
bZh:function bZh(d,e){var _=this
_.d=null
_.a=d
_.b=e
_.c=null}},E={bMV:function bMV(){},bZr:function bZr(){}},F,G,H,J,K,L,M,N,O,P,Q,R={bNO:function bNO(){}},S,T,U,V,W,X,Y,Z
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
E.bMV.prototype={
b6e(d){d.l(0,"isBuilder",!0)
$.aH().pk(d)}}
E.bZr.prototype={}
R.bNO.prototype={
i6(d){throw H.o(P.bx(null))},
hG(d){throw H.o(P.bx(null))},
AY(d,e,f,g,h){var w=h==null?null:h.length!==0
if(w===!0){h.toString
return S.dQ0(d,h,f,g,!0)}return e!=null&&e.a!=null?S.ae0(e,f,g,!0):S.ER(d,f,g,!0)},
Dk(d,e,f,g,h,i,j,k,l){}}
D.bZh.prototype={
amN(d){switch(this.d){case"fluxlisting":return T.ae7(d)
case"fluxnews":return N.D8(d)
default:return T.Zs(d)}},
bXt(d){var w,v,u
switch(this.d){case"fluxlisting":w=d
w=w
u=new R.ec()
u.awx(w)
return u
case"fluxnews":u=new R.ec()
u.acW(d)
return u
default:v=d
v=v
u=new R.ec()
u.RC(v)
return u}},
fJ(d){var w=0,v=P.v(x.i),u,t=this,s,r,q,p,o,n
var $async$fJ=P.q(function(e,f){if(e===1)return P.r(f,v)
while(true)switch(w){case 0:p=t.c
o=y.b+(p==null?"base":p)+"/mock_categories.json"
N.W("[\ud83e\uddecload mock data] "+o,null)
n=C.t
w=3
return P.n(D.a8w(o,o),$async$fJ)
case 3:s=n.aa(0,f,null)
r=H.b([],x.a)
for(p=J.aa(s);p.t();){q=p.gA(p)
if(!J.E(J.d(q,"slug"),"uncategorized"))r.push(t.bXt(q))}u=r
w=1
break
case 1:return P.t(u,v)}})
return P.u($async$fJ,v)},
eV(d,e,f,g){return this.c_d(d,e,f,g)},
xw(d,e){return this.eV(d,e,!1,null)},
c_d(d,e,f,g){var w=0,v=P.v(x.q),u,t=this,s,r,q,p,o,n,m,l,k
var $async$eV=P.q(function(h,i){if(h===1)return P.r(i,v)
while(true)switch(w){case 0:o=H.b([],x.z)
n=t.c
m=y.b+(n==null?"base":n)+"/mock_products.json"
N.W("[\ud83e\uddecload mock data] fetchProductsLayout "+m,null)
l=J
k=C.t
w=3
return P.n(D.a8w(m,m),$async$eV)
case 3:n=l.aa(k.aa(0,i,null)),s=J.L(d)
case 4:if(!n.t()){w=5
break}r=n.gA(n)
q=t.amN(r)
if(s.h(d,"category")!=null&&H.i(s.h(d,"category")).length!==0)q.sbT9(J.J(s.h(d,"category")))
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
return P.u($async$eV,v)},
ud(d,e){var w=0,v=P.v(x.p),u,t=this,s,r,q,p,o
var $async$ud=P.q(function(f,g){if(f===1)return P.r(g,v)
while(true)switch(w){case 0:s=H.b([],x.C)
r=t.c
q=y.b+(r==null?"base":r)+"/mock_products.json"
N.W("[\ud83e\uddecload mock data] fetchBlogLayout "+q,null)
p=J
o=C.t
w=3
return P.n(D.a8w(q,q),$async$ud)
case 3:r=p.aa(o.aa(0,g,null))
case 4:if(!r.t()){w=5
break}s.push(t.amN(r.gA(r)))
w=4
break
case 5:u=s
w=1
break
case 1:return P.t(u,v)}})
return P.u($async$ud,v)},
anC(d){return this.ud(d,null)},
d1(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){return this.c_3(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r)},
xu(d,e){return this.d1(null,null,d,null,null,null,null,null,null,null,null,null,e,null,null)},
zR(d,e,f,g,h,i,j){return this.d1(null,null,d,null,e,null,f,g,null,null,h,i,j,null,null)},
qL(d,e,f){return this.d1(null,null,d,null,e,null,null,null,null,null,null,null,f,null,null)},
xv(d,e,f,g){return this.d1(null,null,d,null,e,null,null,null,null,null,null,null,f,null,g)},
zS(d,e,f,g,h,i,j,k){return this.d1(null,null,d,null,e,null,f,g,null,null,h,i,j,null,k)},
c_3(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4,a5,a6){var w=0,v=P.v(x.q),u,t=this,s,r,q,p,o,n,m,l
var $async$d1=P.q(function(a7,a8){if(a7===1)return P.r(a8,v)
while(true)switch(w){case 0:p=H.b([],x.z)
o=t.c
n=y.b+(o==null?"base":o)+"/mock_products.json"
l=C.t
w=3
return P.n(D.a8w(n,n),$async$d1)
case 3:m=l.aa(0,a8,null)
N.W("[\ud83e\uddecload mock data] fetchProductsByCategory",null)
for(o=J.aa(m);o.t();){s=o.gA(o)
r=t.amN(s)
q=J.L(s)
if(q.h(s,"store")!=null)if(J.d(q.h(s,"store"),"errors")!=null){p.push(r)
continue}p.push(r)}u=p
w=1
break
case 1:return P.t(u,v)}})
return P.u($async$d1,v)}}
var z=a.updateTypes([]);(function inheritance(){var w=a.inherit
w(E.bZr,P.aj)
w(E.bMV,E.bZr)
w(R.bNO,V.alW)
w(D.bZh,E.alX)})()
H.xq(b.typeUniverse,JSON.parse("{}"))
var y={b:"packages/core_builder/lib/example/templates/"}
var x={C:H.ad("P<cr>"),a:H.ad("P<ec>"),z:H.ad("P<cD>"),i:H.ad("K<ec>"),q:H.ad("K<cD>"),w:H.ad("p"),p:H.ad("K<cr>?")}}
$__dart_deferred_initializers__["Y//99Q2bYhlkigPee7GFAf5H5b4="] = $__dart_deferred_initializers__.current
