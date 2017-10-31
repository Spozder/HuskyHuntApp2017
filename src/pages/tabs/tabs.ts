import { Component } from '@angular/core';

import { LocationsPage } from '../locations/locations';
import { ContactPage } from '../contact/contact';
import { HintsPage } from '../hints/hints';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HintsPage;
  tab2Root = LocationsPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
