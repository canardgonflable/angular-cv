(self.webpackChunkyacinemeddah=self.webpackChunkyacinemeddah||[]).push([[220],{6220:(e,n,t)=>{"use strict";t.r(n),t.d(n,{StudentsModule:()=>q});var o=t(5425),r=t(2593),i=t(4762);class s{constructor(e){Object.assign(this,e)}}var a=t(6599),u=t(485),c=t(7950),l=t(2306),d=t(8619),p=t(1041),m=t(1116),h=t(5493);let g=(()=>{class e{transform(e,n){if(!e||!e.length)return[];const t=n.toLowerCase();return e.filter(e=>{var n,o;return(null===(n=e.nom)||void 0===n?void 0:n.toLowerCase().includes(t))||(null===(o=e.prenom)||void 0===o?void 0:o.toLowerCase().includes(t))})}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275pipe=d.Yjl({name:"search",type:e,pure:!0}),e})();function Z(e,n){if(1&e){const e=d.EpF();d.TgZ(0,"tr"),d.TgZ(1,"td"),d.TgZ(2,"app-editable",10),d.NdJ("valueChange",function(n){const t=d.CHM(e).$implicit;return d.oxw().submitValue(n,t,"nom")}),d.qZA(),d.qZA(),d.TgZ(3,"td"),d.TgZ(4,"app-editable",10),d.NdJ("valueChange",function(n){const t=d.CHM(e).$implicit;return d.oxw().submitValue(n,t,"prenom")}),d.qZA(),d.qZA(),d.TgZ(5,"td"),d.TgZ(6,"app-editable",10),d.NdJ("valueChange",function(n){const t=d.CHM(e).$implicit;return d.oxw().submitValue(n,t,"ddn")}),d.qZA(),d.qZA(),d.TgZ(7,"td"),d.TgZ(8,"button",11),d.NdJ("click",function(){const n=d.CHM(e).$implicit;return d.oxw().delete(n)}),d._UZ(9,"i",12),d.qZA(),d.qZA(),d.qZA()}if(2&e){const e=n.$implicit;d.xp6(2),d.Q6J("value",e.nom),d.xp6(2),d.Q6J("value",e.prenom),d.xp6(2),d.Q6J("value",e.ddn)}}const f=function(){return["./add"]};let b=(()=>{class e{constructor(e){this.store=e,this.personnes=[],this.searchValue=""}ngOnInit(){this.students$.pipe((0,a.b)(e=>this.personnes=e)).subscribe()}delete(e){this.store.dispatch(new l.g.DeleteStudent(e))}submitValue(e,n,t){this.personnes=this.personnes.map(o=>o==n?new s(Object.assign(Object.assign({},o),{[t]:e})):o)}}return e.\u0275fac=function(n){return new(n||e)(d.Y36(u.yh))},e.\u0275cmp=d.Xpm({type:e,selectors:[["app-students"]],decls:23,vars:7,consts:[[1,"pull-right"],[1,"btn","btn-outline-secondary",3,"routerLink"],[1,"fa","fa-plus"],[1,"input-group","mb-3"],["placeholder","Search text","type","text",1,"form-control",3,"ngModel","ngModelChange"],[1,"input-group-append"],["type","button",1,"btn","btn-outline-secondary"],[1,"fa","fa-search"],[1,"table","table-bordered"],[4,"ngFor","ngForOf"],[3,"value","valueChange"],[1,"btn","btn-danger",3,"click"],[1,"fa","fa-trash"]],template:function(e,n){1&e&&(d.TgZ(0,"div",0),d.TgZ(1,"a",1),d._UZ(2,"i",2),d._uU(3," Ajouter"),d.qZA(),d.qZA(),d.TgZ(4,"div",3),d.TgZ(5,"input",4),d.NdJ("ngModelChange",function(e){return n.searchValue=e}),d.qZA(),d.TgZ(6,"div",5),d.TgZ(7,"button",6),d._UZ(8,"i",7),d.qZA(),d.qZA(),d.qZA(),d.TgZ(9,"table",8),d.TgZ(10,"thead"),d.TgZ(11,"tr"),d.TgZ(12,"th"),d._uU(13,"NOM"),d.qZA(),d.TgZ(14,"th"),d._uU(15,"PRENOM"),d.qZA(),d.TgZ(16,"th"),d._uU(17,"DATE DE NAISSANCE"),d.qZA(),d.TgZ(18,"th"),d._uU(19,"ACTION"),d.qZA(),d.qZA(),d.qZA(),d.TgZ(20,"tbody"),d.YNc(21,Z,10,3,"tr",9),d.ALo(22,"search"),d.qZA(),d.qZA()),2&e&&(d.xp6(1),d.Q6J("routerLink",d.DdM(6,f)),d.xp6(4),d.Q6J("ngModel",n.searchValue),d.xp6(16),d.Q6J("ngForOf",d.xi3(22,3,n.personnes,n.searchValue)))},directives:[r.yS,p.Fj,p.JJ,p.On,m.sg,h.y],pipes:[g],styles:["[_nghost-%COMP%]{display:block}"]}),(0,i.gn)([(0,u.Ph)(c.a.getStudents)],e.prototype,"students$",void 0),e})(),A=(()=>{class e{constructor(){this.innerForm=new p.cw({nom:new p.NI(null,[p.kI.required]),prenom:new p.NI(null,[p.kI.required])}),this.onChange=()=>{},this.onTouch=()=>{}}get nomControl(){return this.innerForm.get("nom")}get prenomControl(){return this.innerForm.get("prenom")}ngOnInit(){this.innerForm.valueChanges.subscribe(e=>{this.onChange(e)})}registerOnChange(e){this.onChange=e}registerOnTouched(e){this.onTouch=e}setDisabledState(e){}writeValue(e){this.innerForm.patchValue(e)}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=d.Xpm({type:e,selectors:[["app-nom-et-prenom"]],features:[d._Bn([{provide:p.JU,useExisting:(0,d.Gpc)(()=>e),multi:!0}])],decls:13,vars:5,consts:[[3,"formGroup"],[1,"input-group"],["for","name",1,"sr-only"],["autocomplete","off","formControlName","nom","id","name","placeholder","nom","type","text",1,"form-control"],[1,"invalid-feedback"],["for","pwd",1,"sr-only"],["autocomplete","off","formControlName","prenom","id","pwd","placeholder","prenom","type","text",1,"form-control"]],template:function(e,n){1&e&&(d.ynx(0,0),d.TgZ(1,"div",1),d.TgZ(2,"label",2),d._uU(3,"Nom"),d.qZA(),d._UZ(4,"input",3),d.TgZ(5,"div",4),d._uU(6," Merci de choisir un nom "),d.qZA(),d.qZA(),d.TgZ(7,"div",1),d.TgZ(8,"label",5),d._uU(9,"Prenom"),d.qZA(),d._UZ(10,"input",6),d.TgZ(11,"div",4),d._uU(12," Merci de choisir un pr\xe9nom "),d.qZA(),d.qZA(),d.BQk()),2&e&&(d.Q6J("formGroup",n.innerForm),d.xp6(4),d.ekj("is-invalid",n.nomControl.invalid&&n.nomControl.touched),d.xp6(6),d.ekj("is-invalid",n.prenomControl.invalid&&n.prenomControl.touched))},directives:[p.JL,p.sg,p.Fj,p.JJ,p.u],styles:[""]}),e})();const v=[{path:"",component:b},{path:"add",component:(()=>{class e{constructor(e,n){this.router=e,this.store=n,this.form=new p.cw({nomPrenom:new p.NI(null,[p.kI.required]),dateNaissance:new p.NI(null,[p.kI.required])})}get dateNaissanceControl(){return this.form.get("dateNaissance")}submit(){if(this.form.valid){const e=this.form.value,n=new s({nom:e.nomPrenom.nom,prenom:e.nomPrenom.prenom,ddn:e.dateNaissance});this.store.dispatch(new l.g.AddStudent(n)),this.router.navigate(["/students"])}}}return e.\u0275fac=function(n){return new(n||e)(d.Y36(r.F0),d.Y36(u.yh))},e.\u0275cmp=d.Xpm({type:e,selectors:[["app-student-add"]],decls:14,vars:6,consts:[[3,"formGroup"],[1,"h3","mb-3"],["formControlName","nomPrenom"],[1,"input-group"],["for","dateNaissance",1,"sr-only"],["autocomplete","off","formControlName","dateNaissance","id","dateNaissance","placeholder","Date de naissance","type","date",1,"form-control"],[1,"invalid-feedback"],["type","submit",1,"btn","btn-lg","btn-primary","btn-block",3,"click"]],template:function(e,n){1&e&&(d._uU(0),d.ALo(1,"json"),d.TgZ(2,"form",0),d.TgZ(3,"h1",1),d._uU(4,"Ajout d'un \xe9tudiant"),d.qZA(),d._UZ(5,"app-nom-et-prenom",2),d.TgZ(6,"div",3),d.TgZ(7,"label",4),d._uU(8,"Date de naissance"),d.qZA(),d._UZ(9,"input",5),d.TgZ(10,"div",6),d._uU(11," Merci de choisir une Date de naissance "),d.qZA(),d.qZA(),d.TgZ(12,"button",7),d.NdJ("click",function(){return n.submit()}),d._uU(13,"Ajouter"),d.qZA(),d.qZA()),2&e&&(d.hij("",d.lcZ(1,4,n.form.value),"\n"),d.xp6(2),d.Q6J("formGroup",n.form),d.xp6(7),d.ekj("is-invalid",n.dateNaissanceControl.invalid&&n.dateNaissanceControl.touched))},directives:[p._Y,p.JL,p.sg,A,p.JJ,p.u,p.Fj],pipes:[m.Ts],styles:[""]}),e})()}];let T=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=d.oAB({type:e}),e.\u0275inj=d.cJS({imports:[[r.Bz.forChild(v)],r.Bz]}),e})(),q=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=d.oAB({type:e}),e.\u0275inj=d.cJS({imports:[[o.m,T]]}),e})()}}]);