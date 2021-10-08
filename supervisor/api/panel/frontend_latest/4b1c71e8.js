"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[605],{9605:(e,t,i)=>{i.a(e,(async e=>{i.r(t);i(7724);var r=i(7599),o=i(6767),s=i(5701),a=i(7717),n=i(7352),l=i(7181),c=i(3447),d=(i(8762),i(9381),i(191),i(806),i(2039),i(2814)),u=i(1682),h=i(538),p=i(6765),f=i(1654),m=i(5936),v=i(1595),k=i(3864),y=i(2594),g=e([v]);function b(){b=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(i){t.forEach((function(t){t.kind===i&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var i=e.prototype;["method","field"].forEach((function(r){t.forEach((function(t){var o=t.placement;if(t.kind===r&&("static"===o||"prototype"===o)){var s="static"===o?e:i;this.defineClassElement(s,t)}}),this)}),this)},defineClassElement:function(e,t){var i=t.descriptor;if("field"===t.kind){var r=t.initializer;i={enumerable:i.enumerable,writable:i.writable,configurable:i.configurable,value:void 0===r?void 0:r.call(e)}}Object.defineProperty(e,t.key,i)},decorateClass:function(e,t){var i=[],r=[],o={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,o)}),this),e.forEach((function(e){if(!E(e))return i.push(e);var t=this.decorateElement(e,o);i.push(t.element),i.push.apply(i,t.extras),r.push.apply(r,t.finishers)}),this),!t)return{elements:i,finishers:r};var s=this.decorateConstructor(i,t);return r.push.apply(r,s.finishers),s.finishers=r,s},addElementPlacement:function(e,t,i){var r=t[e.placement];if(!i&&-1!==r.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");r.push(e.key)},decorateElement:function(e,t){for(var i=[],r=[],o=e.decorators,s=o.length-1;s>=0;s--){var a=t[e.placement];a.splice(a.indexOf(e.key),1);var n=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,o[s])(n)||n);e=l.element,this.addElementPlacement(e,t),l.finisher&&r.push(l.finisher);var c=l.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],t);i.push.apply(i,c)}}return{element:e,finishers:r,extras:i}},decorateConstructor:function(e,t){for(var i=[],r=t.length-1;r>=0;r--){var o=this.fromClassDescriptor(e),s=this.toClassDescriptor((0,t[r])(o)||o);if(void 0!==s.finisher&&i.push(s.finisher),void 0!==s.elements){e=s.elements;for(var a=0;a<e.length-1;a++)for(var n=a+1;n<e.length;n++)if(e[a].key===e[n].key&&e[a].placement===e[n].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:i}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return C(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?C(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var i=$(e.key),r=String(e.placement);if("static"!==r&&"prototype"!==r&&"own"!==r)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+r+'"');var o=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var s={kind:t,key:i,placement:r,descriptor:Object.assign({},o)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(o,"get","The property descriptor of a field descriptor"),this.disallowProperty(o,"set","The property descriptor of a field descriptor"),this.disallowProperty(o,"value","The property descriptor of a field descriptor"),s.initializer=e.initializer),s},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:A(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var i=A(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:i}},runClassFinishers:function(e,t){for(var i=0;i<t.length;i++){var r=(0,t[i])(e);if(void 0!==r){if("function"!=typeof r)throw new TypeError("Finishers must return a constructor.");e=r}}return e},disallowProperty:function(e,t,i){if(void 0!==e[t])throw new TypeError(i+" can't have a ."+t+" property.")}};return e}function w(e){var t,i=$(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var r={kind:"field"===e.kind?"field":"method",key:i,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(r.decorators=e.decorators),"field"===e.kind&&(r.initializer=e.value),r}function _(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function E(e){return e.decorators&&e.decorators.length}function P(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function A(e,t){var i=e[t];if(void 0!==i&&"function"!=typeof i)throw new TypeError("Expected '"+t+"' to be a function");return i}function $(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var r=i.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function C(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}v=(g.then?await g:g)[0];!function(e,t,i,r){var o=b();if(r)for(var s=0;s<r.length;s++)o=r[s](o);var a=t((function(e){o.initializeInstanceElements(e,n.elements)}),i),n=o.decorateClass(function(e){for(var t=[],i=function(e){return"method"===e.kind&&e.key===s.key&&e.placement===s.placement},r=0;r<e.length;r++){var o,s=e[r];if("method"===s.kind&&(o=t.find(i)))if(P(s.descriptor)||P(o.descriptor)){if(E(s)||E(o))throw new ReferenceError("Duplicated methods ("+s.key+") can't be decorated.");o.descriptor=s.descriptor}else{if(E(s)){if(E(o))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+s.key+").");o.decorators=s.decorators}_(s,o)}else t.push(s)}return t}(a.d.map(w)),e);o.initializeClassElements(a.F,n.elements),o.runClassFinishers(a.F,n.finishers)}([(0,o.M)("dialog-hassio-backup")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,s.C)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,a.S)()],key:"_error",value:void 0},{kind:"field",decorators:[(0,a.S)()],key:"_backup",value:void 0},{kind:"field",decorators:[(0,a.S)()],key:"_dialogParams",value:void 0},{kind:"field",decorators:[(0,a.S)()],key:"_restoringBackup",value:()=>!1},{kind:"field",decorators:[(0,n.I)("supervisor-backup-content")],key:"_backupContent",value:void 0},{kind:"method",key:"showDialog",value:async function(e){this._backup=await(0,h._P)(this.hass,e.slug),this._dialogParams=e,this._restoringBackup=!1}},{kind:"method",key:"closeDialog",value:function(){this._backup=void 0,this._dialogParams=void 0,this._restoringBackup=!1,this._error=void 0,(0,l.B)(this,"dialog-closed",{dialog:this.localName})}},{kind:"method",key:"render",value:function(){return this._dialogParams&&this._backup?r.dy`
      <ha-dialog
        open
        scrimClickAction
        @closed=${this.closeDialog}
        .heading=${!0}
      >
        <div slot="heading">
          <ha-header-bar>
            <span slot="title">${this._backup.name}</span>
            <mwc-icon-button slot="actionItems" dialogAction="cancel">
              <ha-svg-icon .path=${"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"}></ha-svg-icon>
            </mwc-icon-button>
          </ha-header-bar>
        </div>
        ${this._restoringBackup?r.dy` <ha-circular-progress active></ha-circular-progress>`:r.dy`<supervisor-backup-content
              .hass=${this.hass}
              .supervisor=${this._dialogParams.supervisor}
              .backup=${this._backup}
              .onboarding=${this._dialogParams.onboarding||!1}
              .localize=${this._dialogParams.localize}
            >
            </supervisor-backup-content>`}
        ${this._error?r.dy`<ha-alert alert-type="error">${this._error}</ha-alert>`:""}

        <mwc-button
          .disabled=${this._restoringBackup}
          slot="secondaryAction"
          @click=${this._restoreClicked}
        >
          Restore
        </mwc-button>

        ${this._dialogParams.onboarding?"":r.dy`<ha-button-menu
              fixed
              slot="primaryAction"
              @action=${this._handleMenuAction}
              @closed=${y.U}
            >
              <mwc-icon-button slot="trigger" alt="menu">
                <ha-svg-icon .path=${"M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z"}></ha-svg-icon>
              </mwc-icon-button>
              <mwc-list-item>Download Backup</mwc-list-item>
              <mwc-list-item class="error">Delete Backup</mwc-list-item>
            </ha-button-menu>`}
      </ha-dialog>
    `:r.dy``}},{kind:"get",static:!0,key:"styles",value:function(){return[f.Qx,f.yu,r.iv`
        ha-svg-icon {
          color: var(--primary-text-color);
        }
        ha-circular-progress {
          display: block;
          text-align: center;
        }
        ha-header-bar {
          --mdc-theme-on-primary: var(--primary-text-color);
          --mdc-theme-primary: var(--mdc-theme-surface);
          flex-shrink: 0;
          display: block;
        }
      `]}},{kind:"method",key:"_handleMenuAction",value:function(e){switch(e.detail.index){case 0:this._downloadClicked();break;case 1:this._deleteClicked()}}},{kind:"method",key:"_restoreClicked",value:async function(){const e=this._backupContent.backupDetails();this._restoringBackup=!0,"full"===this._backupContent.backupType?await this._fullRestoreClicked(e):await this._partialRestoreClicked(e),this._restoringBackup=!1}},{kind:"method",key:"_partialRestoreClicked",value:async function(e){var t,i,r,o;void 0===(null===(t=this._dialogParams)||void 0===t?void 0:t.supervisor)||"running"===(null===(i=this._dialogParams)||void 0===i?void 0:i.supervisor.info.state)?await(0,p.g7)(this,{title:"Are you sure you want partially to restore this backup?",confirmText:"restore",dismissText:"cancel"})&&(null!==(r=this._dialogParams)&&void 0!==r&&r.onboarding?((0,l.B)(this,"restoring"),fetch(`/api/hassio/backups/${this._backup.slug}/restore/partial`,{method:"POST",body:JSON.stringify(e)}),this.closeDialog()):this.hass.callApi("POST",`hassio/${(0,k.I)(this.hass.config.version,2021,9)?"backups":"snapshots"}/${this._backup.slug}/restore/partial`,e).then((()=>{this.closeDialog()}),(e=>{this._error=e.body.message}))):await(0,p.Ys)(this,{title:"Could not restore backup",text:`Restoring a backup is not possible right now because the system is in ${null===(o=this._dialogParams)||void 0===o?void 0:o.supervisor.info.state} state.`})}},{kind:"method",key:"_fullRestoreClicked",value:async function(e){var t,i,r,o;void 0===(null===(t=this._dialogParams)||void 0===t?void 0:t.supervisor)||"running"===(null===(i=this._dialogParams)||void 0===i?void 0:i.supervisor.info.state)?await(0,p.g7)(this,{title:"Are you sure you want to wipe your system and restore this backup?",confirmText:"restore",dismissText:"cancel"})&&(null!==(r=this._dialogParams)&&void 0!==r&&r.onboarding?((0,l.B)(this,"restoring"),fetch(`/api/hassio/backups/${this._backup.slug}/restore/full`,{method:"POST",body:JSON.stringify(e)}),this.closeDialog()):this.hass.callApi("POST",`hassio/${(0,k.I)(this.hass.config.version,2021,9)?"backups":"snapshots"}/${this._backup.slug}/restore/full`,e).then((()=>{this.closeDialog()}),(e=>{this._error=e.body.message}))):await(0,p.Ys)(this,{title:"Could not restore backup",text:`Restoring a backup is not possible right now because the system is in ${null===(o=this._dialogParams)||void 0===o?void 0:o.supervisor.info.state} state.`})}},{kind:"method",key:"_deleteClicked",value:async function(){await(0,p.g7)(this,{title:"Are you sure you want to delete this backup?",confirmText:"delete",dismissText:"cancel"})&&this.hass.callApi((0,k.I)(this.hass.config.version,2021,9)?"DELETE":"POST","hassio/"+((0,k.I)(this.hass.config.version,2021,9)?`backups/${this._backup.slug}`:`snapshots/${this._backup.slug}/remove`)).then((()=>{this._dialogParams.onDelete&&this._dialogParams.onDelete(),this.closeDialog()}),(e=>{this._error=e.body.message}))}},{kind:"method",key:"_downloadClicked",value:async function(){let e;try{e=await(0,d.iI)(this.hass,`/api/hassio/${(0,k.I)(this.hass.config.version,2021,9)?"backups":"snapshots"}/${this._backup.slug}/download`)}catch(e){return void await(0,p.Ys)(this,{text:(0,u.js)(e)})}if(window.location.href.includes("ui.nabu.casa")){if(!await(0,p.g7)(this,{title:"Potential slow download",text:"Downloading backups over the Nabu Casa URL will take some time, it is recomended to use your local URL instead, do you want to continue?",confirmText:"continue",dismissText:"cancel"}))return}(0,m.N)(this,e.path,`home_assistant_backup_${(0,c.l)(this._computeName)}.tar`)}},{kind:"get",key:"_computeName",value:function(){return this._backup?this._backup.name||this._backup.slug:"Unnamed backup"}}]}}),r.oi)}))},2594:(e,t,i)=>{i.d(t,{U:()=>r});const r=e=>e.stopPropagation()},3447:(e,t,i)=>{i.d(t,{l:()=>r});const r=(e,t="_")=>{const i="àáäâãåăæąçćčđďèéěėëêęğǵḧìíïîįłḿǹńňñòóöôœøṕŕřßşśšșťțùúüûǘůűūųẃẍÿýźžż·/_,:;",r=`aaaaaaaaacccddeeeeeeegghiiiiilmnnnnooooooprrsssssttuuuuuuuuuwxyyzzz${t}${t}${t}${t}${t}${t}`,o=new RegExp(i.split("").join("|"),"g");return e.toString().toLowerCase().replace(/\s+/g,t).replace(o,(e=>r.charAt(i.indexOf(e)))).replace(/&/g,`${t}and${t}`).replace(/[^\w-]+/g,"").replace(/-/,t).replace(new RegExp(`/${t}${t}+/`,"g"),t).replace(new RegExp(`/^${t}+/`),"").replace(new RegExp("/-+$/"),"")}},2814:(e,t,i)=>{i.d(t,{iI:()=>r});location.protocol,location.host;const r=(e,t)=>e.callWS({type:"auth/sign_path",path:t})},5936:(e,t,i)=>{i.d(t,{N:()=>r});const r=(e,t,i)=>{const r=document.createElement("a");r.target="_blank",r.href=t,r.download=i,e.shadowRoot.appendChild(r),r.dispatchEvent(new MouseEvent("click")),e.shadowRoot.removeChild(r)}}}]);
//# sourceMappingURL=4b1c71e8.js.map