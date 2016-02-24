import {customElement, inject, bindable} from 'aurelia-framework'
import {EventAggregator} from 'aurelia-event-aggregator'

@customElement('light')
@inject(EventAggregator)
export class Light {
  @bindable number
  constructor(eventAggregator) {
    this.on = false
    this.eventAggregator = eventAggregator
  }

  attached() {
    this.eventAggregator.subscribe(`switch-${this.number}`, switchEnabled => {
      if (switchEnabled) {
        this.on = true
      } else {
        this.on = false
      }
    })
  }
}
