import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dessert-image',
  standalone: true,
  imports: [],
  templateUrl: './dessert-image.component.html',
  styleUrl: './dessert-image.component.scss',
})
export class DessertImageComponent {
  @Input({ required: true }) image!: string;
}
