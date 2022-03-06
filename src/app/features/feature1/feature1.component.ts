import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'feature1',
  templateUrl: 'feature1.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Feature1Component implements OnInit {
  constructor() {}
  ngOnInit() {}
}
