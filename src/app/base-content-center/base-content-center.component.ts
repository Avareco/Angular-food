import {Component, Input, TemplateRef} from '@angular/core';
import {CommonModule, NgTemplateOutlet} from '@angular/common';

@Component({
  selector: 'app-base-content-center',
  standalone: true,
  imports: [CommonModule, NgTemplateOutlet],
  templateUrl: './base-content-center.component.html',
})
export class BaseContentCenterComponent {
  @Input() template!: TemplateRef<any>
}

// This component redundant, was created to try ngOutlet
