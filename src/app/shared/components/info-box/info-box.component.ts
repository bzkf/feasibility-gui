import { Component, OnInit, input } from '@angular/core'
import { TranslateModule } from '@ngx-translate/core'

@Component({
  selector: 'num-info-box',
  templateUrl: './info-box.component.html',
  styleUrls: ['./info-box.component.scss'],
  standalone: true,
  imports: [TranslateModule],
})
export class InfoBoxComponent implements OnInit {
  readonly value = input('')
  readonly label = input<string>(undefined)
  readonly color = input<'default' | 'red'>('default')

  constructor() {}

  ngOnInit(): void {}
}
