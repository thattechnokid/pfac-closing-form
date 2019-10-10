import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'mwd-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pfac-closing';

  submitted = false;
  calculated = false;
  drawerIsOver = false;
  drawerIsUnder = false;
    //Drawer Variables
    
    //Loose Coins
    drwLooseQuarter:number = 0.00;
    drwLooseDime:number = 0.00;
    drwLooseNickel:number = 0.00;
    drwLoosePenny:number = 0.00;

    //Coin Rolls
    drwQuarterRoll:number = 0.00;
    drwDimeRoll:number = 0.00;
    drwNickelRoll:number = 0.00;
    drwPennyRoll:number = 0.00;

    //Small Loose Bills
    drwLooseFives:number = 0.00;
    drwLooseOnes:number = 0.00;


    // Drawer Totals
    quartersTotal:number = 0.00;
    dimesTotal:number = 0.00;
    nickelsTotal:number = 0.00;
    penniesTotal:number = 0.00;
    fivesTotal:number = 0.00;
    onesTotal:number = 0.00;
    drawerTotal:number = 0.00;

    //======= Under/Over Numbers ======
    drawerUnderBy:number = 0.00;
    drawerOverBy:number = 0.00;





  calculateCash(cashDrawer: NgForm){
    //Getting Values from inputs
    // this.calculated = true;
    this.drwLooseQuarter = cashDrawer.form.get('looseQuarters').value;
    this.drwLooseDime = cashDrawer.form.get('looseDimes').value;
    this.drwLooseNickel = cashDrawer.form.get('looseNickels').value;
    this.drwLoosePenny = cashDrawer.form.get('loosePennies').value;
    this.drwQuarterRoll = cashDrawer.form.get('quarterRoll').value;
    this.drwDimeRoll = cashDrawer.form.get('dimeRoll').value;
    this.drwNickelRoll = cashDrawer.form.get('nickelRoll').value;
    this.drwPennyRoll = cashDrawer.form.get('pennyRoll').value;
    this.drwLooseFives = cashDrawer.form.get('looseFives').value;
    this.drwLooseOnes = cashDrawer.form.get('looseOnes').value;

    // Calculations
    this.quartersTotal = ((this.drwLooseQuarter * 0.25)+(this.drwQuarterRoll * 10.00));

    this.dimesTotal = ((this.drwLooseDime * 0.10)+(this.drwDimeRoll * 5.00));

    this.nickelsTotal = ((this.drwLooseNickel * 0.05)+(this.drwNickelRoll * 2.00));

    this.penniesTotal = ((this.drwLoosePenny * 0.01)+(this.drwPennyRoll * 0.50));

    this.fivesTotal = (this.drwLooseFives * 5.00);
    this.onesTotal = (this.drwLooseOnes * 1.00);

    // Drawer Grand Total
    this.drawerTotal = this.quartersTotal + this.dimesTotal + this.nickelsTotal + this.penniesTotal + this.fivesTotal + this.onesTotal;
    
    if (this.drawerTotal < 150.00) {
      this.drawerIsUnder = true;
      this.drawerIsOver = false;
      this.drawerUnderBy = (150.00 - this.drawerTotal);
      
    } else {
      
    }

  }













}//End of AppComponent class
