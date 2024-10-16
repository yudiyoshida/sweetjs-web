import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  imports: [],
})
export class ButtonComponent {
  @Input({ required: true }) public label!: string;

  @Output() public clickEvent = new EventEmitter<void>();
}
