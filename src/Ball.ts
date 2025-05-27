export class Ball {
    private x: number = 135;
    private y: number = 135;
    private element: HTMLDivElement;
  
    constructor(element: HTMLDivElement) {
      this.element = element;
      this.updateView();
    }
  
    public move(dx: number, dy: number): void {
      this.x = Math.max(0, Math.min(270, this.x + dx));
      this.y = Math.max(0, Math.min(270, this.y + dy));
      this.updateView();
    }
  
    private updateView(): void {
      this.element.style.left = this.x + "px";
      this.element.style.top = this.y + "px";
    }
  }
  
  
  