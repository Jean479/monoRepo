import { Directive, inject, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[btLibsUiIfFalse]',
  standalone: true,
})
export class IfFalseDirective {
  
  private templateRef = inject(TemplateRef);
  private viewContainer = inject(ViewContainerRef);
  private embeddedTemplateAdded = false;

  @Input() set btLibsUiIfFalse(condition: boolean) {
    console.log(' btLibsUiIfFalse set', condition);
    
    if(!condition && !this.embeddedTemplateAdded) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.embeddedTemplateAdded = true;
      console.log('embeddedTemplateAdded added');
      
    } else {
      this.viewContainer.clear();
      this.embeddedTemplateAdded = false;
      console.log('embeddedTemplateAdded   false');

    }
  }
  // constructor() {}




}
