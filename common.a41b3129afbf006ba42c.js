(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"8UPu":function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var o=n("2kYt"),r=n("vQ78"),i=n("DY5j"),l=n("EM62");let a=(()=>{class e{}return e.\u0275mod=l["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=l["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[o.c,r.b,i.a]]}),e})()},ispt:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var o=n("EM62"),r=n("vQ78");let i=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o["\u0275\u0275defineComponent"]({type:e,selectors:[["brpl-workspace-route-loader"]],decls:1,vars:0,consts:[["height","7px","includeSpinner","","color","#E71212"]],template:function(e,t){1&e&&o["\u0275\u0275element"](0,"ngx-loading-bar",0)},directives:[r.a],styles:[""]}),e})()},k4AU:function(e,t,n){"use strict";n.d(t,"a",(function(){return P}));var o=n("dAoM"),r=n("nIj0"),i=n("z8k5"),l=n("OZ4H"),a=n("EM62"),c=n("2kYt"),s=n("qFEQ"),u=n("92b5"),p=n("29Wa"),m=n("Cd2c");const d=["input"];let f=(()=>{class e{constructor(){}onClick(e){e.target.select()}onFocus(e){e.target.select()}onKeyup(e){"Escape"!==e.key&&"Esc"!==e.key||e.target.blur()}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275dir=a["\u0275\u0275defineDirective"]({type:e,selectors:[["","brplWorkspaceMatInputAutoSelectAll",""]],contentQueries:function(e,t,n){var o;1&e&&a["\u0275\u0275contentQuery"](n,d,!0),2&e&&a["\u0275\u0275queryRefresh"](o=a["\u0275\u0275loadQuery"]())&&(t.input=o.first)},hostBindings:function(e,t){1&e&&a["\u0275\u0275listener"]("click",(function(e){return t.onClick(e)}))("focus",(function(e){return t.onFocus(e)}))("keyup",(function(e){return t.onKeyup(e)}))}}),e})();var h=n("R7+U"),g=n("ewGM"),v=n("mFH5"),x=n("S17y"),y=n("bFHC"),C=n("yqOq");const b=["select"],S=["multiInput"];function I(e,t){1&e&&(a["\u0275\u0275elementStart"](0,"mat-icon",19),a["\u0275\u0275text"](1,"cancel"),a["\u0275\u0275elementEnd"]())}function O(e,t){if(1&e){const e=a["\u0275\u0275getCurrentView"]();a["\u0275\u0275elementStart"](0,"mat-chip",17),a["\u0275\u0275listener"]("removed",(function(){a["\u0275\u0275restoreView"](e);const n=t.index;return a["\u0275\u0275nextContext"](2).removeChip(n)})),a["\u0275\u0275text"](1),a["\u0275\u0275template"](2,I,2,0,"mat-icon",18),a["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit,n=a["\u0275\u0275nextContext"](2);a["\u0275\u0275advance"](1),a["\u0275\u0275textInterpolate1"](" ",n.extractingValue(e,n.displayProp)," "),a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("ngIf",n.removable)}}function E(e,t){if(1&e&&(a["\u0275\u0275elementStart"](0,"div",14),a["\u0275\u0275element"](1,"br"),a["\u0275\u0275elementStart"](2,"mat-chip-list",null,15),a["\u0275\u0275template"](4,O,3,2,"mat-chip",16),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"]()),2&e){const e=a["\u0275\u0275nextContext"]();a["\u0275\u0275advance"](4),a["\u0275\u0275property"]("ngForOf",e.getChips())}}function w(e,t){if(1&e&&(a["\u0275\u0275elementStart"](0,"div",14),a["\u0275\u0275element"](1,"br"),a["\u0275\u0275elementStart"](2,"mat-chip-list",null,20),a["\u0275\u0275elementStart"](4,"mat-chip",21),a["\u0275\u0275text"](5),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"]()),2&e){const e=a["\u0275\u0275nextContext"]();a["\u0275\u0275advance"](5),a["\u0275\u0275textInterpolate"](e.emptyMessage)}}function k(e,t){if(1&e){const e=a["\u0275\u0275getCurrentView"]();a["\u0275\u0275elementStart"](0,"mat-option",22,23),a["\u0275\u0275listener"]("onSelectionChange",(function(t){return a["\u0275\u0275restoreView"](e),a["\u0275\u0275nextContext"]().syncWithInput(t)})),a["\u0275\u0275element"](2,"div",24),a["\u0275\u0275pipe"](3,"filterHighlight"),a["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit,n=a["\u0275\u0275nextContext"]();a["\u0275\u0275property"]("value",e),a["\u0275\u0275advance"](2),a["\u0275\u0275property"]("innerHTML",a["\u0275\u0275pipeBind2"](3,2,n.extractingValue(e,n.displayProp),""),a["\u0275\u0275sanitizeHtml"])}}let F=(()=>{class e{constructor(e){this.changeDetector=e,this.FIRST_OPTION="@DAF",this.focusOnInit=!1,this.emptyMessage="",this.source=["Extra cheese","Mushroom","Onion","Pepperoni","Sausage","Tomato"],this.tempSource=[],this.clearValue="",this.placeholder="Multiselect",this.removable=!0,this.chipActionRemove=!1,this.transformDisplay=e=>e?Object(i.extractingValue)(e,this.whatPropType(this.displayProp)):i.EMPTY,this.whatPropType=(e,t="api")=>Object(i.isObject)(e)?e[t]:Object(i.isArray)(e)||Object(i.isString)(e)?e:[]}ngOnInit(){this.formControlx.setValue([this.FIRST_OPTION,...this.formControlx.value]),this.changeDetector.detectChanges()}extractingValue(e,t){return Object(i.extractingValue)(e,t)}ngAfterViewInit(){this.focusOnInit&&Object(i.loadInBackgroud)(()=>{this.focusOnInput(),this.changeDetector.detectChanges()},100)}openSelect(){this.select.panelOpen||(this.removable=!1,this.select.open())}focusOnInput(){this.multiInput.nativeElement.focus()}syncWithInput(e){this.chipActionRemove?Object(i.loadInBackgroud)(()=>this.chipActionRemove=!1,0):Object(i.loadInBackgroud)(()=>this.focusOnInput(),0)}getChips(){const e=[];for(let t=0;t<this.formControlx.value.length;t++)t>0&&e.push(this.formControlx.value[t]);return e}removeChip(e){this.chipActionRemove=!0,this.formControlx.value.splice(e+1,1);const t=[...this.formControlx.value];this.formControlx.setValue(t,{emitEvent:!1,onlySelf:!0})}registerOnChange(e){}registerOnTouched(e){}writeValue(e){}}return e.\u0275fac=function(t){return new(t||e)(a["\u0275\u0275directiveInject"](a.ChangeDetectorRef))},e.\u0275cmp=a["\u0275\u0275defineComponent"]({type:e,selectors:[["brpl-workspace-multiselect"]],viewQuery:function(e,t){var n;1&e&&(a["\u0275\u0275viewQuery"](b,!0),a["\u0275\u0275viewQuery"](S,!0)),2&e&&(a["\u0275\u0275queryRefresh"](n=a["\u0275\u0275loadQuery"]())&&(t.select=n.first),a["\u0275\u0275queryRefresh"](n=a["\u0275\u0275loadQuery"]())&&(t.multiInput=n.first))},inputs:{focusOnInit:"focusOnInit",emptyMessage:"emptyMessage",formControlx:"formControlx",source:"source",tempSource:"tempSource",placeholder:"placeholder",label:"label",displayProp:"displayProp"},features:[a["\u0275\u0275ProvidersFeature"]([{provide:r.NG_VALUE_ACCESSOR,useExisting:e,multi:!0}])],decls:19,vars:8,consts:[["id","-multi","fxLayout","column"],["appearance","outline",2,"z-index","1000"],["type","text","autocomplete","off","brplWorkspaceMatInputAutoSelectAll","","matInput","",3,"placeholder","focus","click"],["multiInput",""],["fxLayout","column",4,"ngIf","ngIfElse"],["defaultChip",""],["id","field-select",2,"z-index","0","margin-top","-79px"],["appearance","outline"],["multiple","",3,"formControl","closed"],["select",""],["pointerEventsMethod","viewport || scrollbar","fxLayout","column"],["fxFlex","100%","fxLayout","column",1,"multiselect-panel"],["disabled","",2,"height","0",3,"value"],[3,"value","onSelectionChange",4,"ngFor","ngForOf"],["fxLayout","column"],["chipList",""],["removable","true",3,"removed",4,"ngFor","ngForOf"],["removable","true",3,"removed"],["matChipRemove","",4,"ngIf"],["matChipRemove",""],["emptyChipList",""],[1,"warn-background","white-color"],[3,"value","onSelectionChange"],["opt",""],["fxFlex","grow",3,"innerHTML"]],template:function(e,t){if(1&e&&(a["\u0275\u0275elementStart"](0,"div",0),a["\u0275\u0275elementStart"](1,"mat-form-field",1),a["\u0275\u0275elementStart"](2,"mat-label"),a["\u0275\u0275text"](3),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](4,"input",2,3),a["\u0275\u0275listener"]("focus",(function(){return t.openSelect()}))("click",(function(){return t.openSelect()})),a["\u0275\u0275elementEnd"](),a["\u0275\u0275template"](6,E,5,1,"div",4),a["\u0275\u0275template"](7,w,6,1,"ng-template",null,5,a["\u0275\u0275templateRefExtractor"]),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](9,"div",6),a["\u0275\u0275elementStart"](10,"mat-form-field",7),a["\u0275\u0275elementStart"](11,"mat-select",8,9),a["\u0275\u0275listener"]("closed",(function(){return t.removable=!0})),a["\u0275\u0275element"](13,"mat-select-trigger"),a["\u0275\u0275elementStart"](14,"ng-scrollbar",10),a["\u0275\u0275elementStart"](15,"div",11),a["\u0275\u0275elementStart"](16,"mat-option",12),a["\u0275\u0275text"](17),a["\u0275\u0275elementEnd"](),a["\u0275\u0275template"](18,k,4,5,"mat-option",13),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"]()),2&e){const e=a["\u0275\u0275reference"](8);a["\u0275\u0275advance"](3),a["\u0275\u0275textInterpolate"](t.label?t.label:t.placeholder),a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("placeholder",t.placeholder),a["\u0275\u0275advance"](2),a["\u0275\u0275property"]("ngIf",t.formControlx.value.length>1)("ngIfElse",e),a["\u0275\u0275advance"](5),a["\u0275\u0275property"]("formControl",t.formControlx),a["\u0275\u0275advance"](5),a["\u0275\u0275property"]("value",t.FIRST_OPTION),a["\u0275\u0275advance"](1),a["\u0275\u0275textInterpolate"](t.FIRST_OPTION),a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("ngForOf",t.source)}},directives:[s.e,p.c,p.g,m.b,f,c.k,h.a,r.NgControlStatus,r.FormControlDirective,h.c,g.a,s.b,v.l,c.j,x.b,x.a,y.a,x.c],pipes:[C.a],styles:[".multiselect-panel[_ngcontent-%COMP%]{padding:10px 0 0}#field-select[_ngcontent-%COMP%]     .mat-form-field-outline{display:none!important}.first-option[_ngcontent-%COMP%]{height:0!important}"]}),e})();var M=n("0yc+"),R=n("UdFe");function V(e,t){if(1&e){const e=a["\u0275\u0275getCurrentView"]();a["\u0275\u0275elementStart"](0,"div",1),a["\u0275\u0275elementStart"](1,"brpl-workspace-dialog-bar",2),a["\u0275\u0275listener"]("closing",(function(){return a["\u0275\u0275restoreView"](e),a["\u0275\u0275nextContext"]().closing()})),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](2,"div",3),a["\u0275\u0275element"](3,"brpl-workspace-multiselect",4),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](4,"brpl-workspace-dialog-action",5),a["\u0275\u0275listener"]("rendered",(function(){a["\u0275\u0275restoreView"](e);const n=t.ngIf;return a["\u0275\u0275nextContext"]().getBoatsSource(n)}))("no",(function(){a["\u0275\u0275restoreView"](e);const n=t.ngIf;return a["\u0275\u0275nextContext"]().skip(n)}))("ok",(function(){a["\u0275\u0275restoreView"](e);const n=t.ngIf;return a["\u0275\u0275nextContext"]().boatSelected(n)})),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"]()}if(2&e){const e=t.ngIf,n=a["\u0275\u0275nextContext"]();a["\u0275\u0275advance"](3),a["\u0275\u0275property"]("formControlx",n.selectBoatControl)("source",n.getBoatsSource(e))}}let P=(()=>{class e{constructor(e,t,n){this.dialogRef=e,this.formService=t,this.data=n,this.selectBoatControl=new r.FormControl([]),this.selectBoatControl.setValue(n.initSource)}ngOnInit(){let e;e=this.dialogRef.beforeClosed().subscribe(t=>{this.formService.isDoingSomething(!0),e.unsubscribe()})}getBoatsSource(e){return Object(i.extractingValue)(e.value,i.DETAILS_CONTROL_NAME)}closing(e){this.dialogRef.close(e)}boatSelected(e){this.selectBoatControl.value.length>1&&this.closing({details:this.getQualifiedLandingDetails(),initSource:this.data.initSource})}getQualifiedLandingDetails(){const e=this.selectBoatControl.value,t=[];for(let n=0;n<e.length;n++)n>0&&t.push(e[n]);return t}skip(e){console.log(e),this.closing()}}return e.\u0275fac=function(t){return new(t||e)(a["\u0275\u0275directiveInject"](l.d),a["\u0275\u0275directiveInject"](o.b),a["\u0275\u0275directiveInject"](l.a))},e.\u0275cmp=a["\u0275\u0275defineComponent"]({type:e,selectors:[["brpl-workspace-select-boat"]],decls:2,vars:3,consts:[["fxLayout","column",4,"ngIf"],["fxLayout","column"],["title","Tentukan Nama Kapal",3,"closing"],["fxFlex","100%",1,"select-boat-container"],["cdkFocusRegionStart","","emptyMessage","Belum ada kapal yang terpilih","focusOnInit","true","placeholder","Kapal","displayProp","boatName",3,"formControlx","source"],["brplWorkspaceElementRendered","","noTitle","Lewati","okTitle","Pilih",3,"rendered","no","ok"]],template:function(e,t){1&e&&(a["\u0275\u0275template"](0,V,5,2,"div",0),a["\u0275\u0275pipe"](1,"async")),2&e&&a["\u0275\u0275property"]("ngIf",a["\u0275\u0275pipeBind1"](1,1,t.formService.landingRef$))},directives:[c.k,s.e,u.a,s.b,F,M.a,R.a],pipes:[c.b],styles:[".select-boat-container[_ngcontent-%COMP%]{padding:20px 24px 0}"]}),e})()}}]);