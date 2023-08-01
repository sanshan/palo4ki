import { Directive, Inject, Input, TemplateRef, ViewContainerRef } from '@angular/core';

class GameLetContext<T> {
  constructor(private readonly internalDirectiveInstance: GameLetDirective<T>) {}

  get $implicit(): T {
    return this.internalDirectiveInstance.gameLet;
  }

  get puiLet(): T {
    return this.internalDirectiveInstance.gameLet;
  }
}

@Directive({
  selector: '[gameLet]',
  standalone: true
})
export class GameLetDirective<T> {
  @Input()
  gameLet!: T;

  constructor(
    @Inject(ViewContainerRef) viewContainer: ViewContainerRef,
    @Inject(TemplateRef) templateRef: TemplateRef<GameLetContext<T>>,
  ) {
    viewContainer.createEmbeddedView(templateRef, new GameLetContext<T>(this));
  }

  static ngTemplateContextGuard<T>(
    _dir: GameLetDirective<T>,
    _ctx: any,
  ): _ctx is GameLetDirective<T> {
    return true;
  }
}