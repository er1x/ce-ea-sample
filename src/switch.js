import {customElement, inject, bindable} from 'aurelia-framework'
import {EventAggregator} from 'aurelia-event-aggregator';

@customElement('switch')
@inject(EventAggregator)
export class Switch {
  @bindable number
  constructor(eventAggregator) {
    this.enabled = false
    this.eventAggregator = eventAggregator
  }
  toggle() {
    this.enabled = !this.enabled
    this.eventAggregator.publish(`switch-${this.number}`, this.enabled)
  }
}
