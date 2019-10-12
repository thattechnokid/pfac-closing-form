import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CurrencyPipe, DecimalPipe } from '@angular/common';



@Component({
  selector: 'mwd-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pfac-closing';
  constructor(private currency: CurrencyPipe, private decimal:DecimalPipe){};
 
  // Boolean Variables
  
  drawerIsOver = false;
  drawerIsUnder = false;
  showDocument = false;
  
  //Closing Boolean
  isClosing = false;
  countCash = false;
  depositIsShort = false;
  depositIsOver = false;
  brokeEven = false;



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

    // Under/Over Numbers
    drawerUnderBy:number = 0.00;
    drawerOverBy:number = 0.00;
    drawerIsOkay: boolean = false;
    depositOver = false;
    depositUnder = false;
    depositOkay = false;



    // =============== Closing Variables =================
    totalSales:number = 0.00;
    driverCommissions:number = 0.00;
    paidIns:number = 0.00;
    paidOuts:number = 0.00;
    giftCertSold:number = 0.00; // /\ Number of Gift certificates/cards sold
    subTotal:number = 0.00;
    ccBatchOne:number = 0.00; //Number from 1st Credit Card Batch
    ccBatchTwo:number = 0.00;
    ccBatchTotal:number = 0.00;
    houseAccounts:number = 0.00;
    checksBatch:number = 0.00;
    purchaseOrders:number = 0.00;
    giftCertRecd:number = 0.00; //Total of gift certificates received/redeemed
    totalDeposit:number = 0.00;
    
    countedHundy:number = 0.00;
    countedFifty:number = 0.00;
    countedTwenty:number = 0.00;
    countedTen:number = 0.00;
    countedFive:number = 0.00;
    countedOne:number = 0.00;
    totalMoneyCounted:number = 0.00;
    shortOverEven:number = 0.00; //Number short/over by or broke even
    moneyString:string = '';




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
      this.drawerIsOkay = false;
      this.drawerUnderBy = (150.00 - this.drawerTotal);
      
    } else if (this.drawerTotal > 150.00){
      this.drawerIsUnder = false;
      this.drawerIsOver = true;
      this.drawerIsOkay = false;
      this.drawerOverBy = (this.drawerTotal - 150.00);
    } else if (this.drawerTotal = 150.00){
      this.drawerIsUnder = false;
      this.drawerIsOver = false;
      this.drawerIsOkay = true;
    }

  }
  resetValues(){
    location.reload();
  }

  beginClosing(){
    this.isClosing = true
  }

  calculateDeposit(closingFormOne: NgForm){
    this.totalSales = closingFormOne.form.get('totalSales').value;
    this.driverCommissions = closingFormOne.form.get('driverCommissions').value;
    this.paidIns = closingFormOne.form.get('paidIns').value;
    this.paidOuts = closingFormOne.form.get('paidOuts').value;
    this.giftCertSold = closingFormOne.form.get('giftCertSold').value;
    
    // ------ SubTotal Calculated ------
    this.subTotal = (this.totalSales - this.driverCommissions + this.paidIns - this.paidOuts + this.giftCertSold);


    this.ccBatchOne = closingFormOne.form.get('ccBatchOne').value;
    this.ccBatchTwo = closingFormOne.form.get('ccBatchTwo').value;
    this.houseAccounts = closingFormOne.form.get('houseAccounts').value;
    this.checksBatch = closingFormOne.form.get('checksBatch').value;
    this.purchaseOrders = closingFormOne.form.get('purchaseOrders').value;
    this.giftCertRecd = closingFormOne.form.get('giftCertRecd').value;

    // ------ Total Deposit Calculated ------
this.ccBatchTotal = (this.ccBatchOne + this.ccBatchTwo);

    this.totalDeposit = (this.subTotal - (this.ccBatchTotal) - this.houseAccounts - this.checksBatch - this.purchaseOrders - this.giftCertRecd);

    this.countCash = true;
  }

  finish(closingFormTwo: NgForm){
    this.countedHundy = closingFormTwo.form.get('countedHundy').value;
    this.countedFifty = closingFormTwo.form.get('countedFifty').value;
    this.countedTwenty = closingFormTwo.form.get('countedTwenty').value;
    this.countedTen = closingFormTwo.form.get('countedTen').value;
    this.countedFive = closingFormTwo.form.get('countedFive').value;
    this.countedOne = closingFormTwo.form.get('countedOne').value;

    //Calculating total amount of cash to be deposited
    this.totalMoneyCounted = (this.countedHundy * 100) + (this.countedFifty * 50) + (this.countedTwenty * 20) + (this.countedTen * 10) + (this.countedFive * 5)+ (this.countedOne * 1);

    if (this.totalMoneyCounted < this.totalDeposit) {
        this.shortOverEven = (this.totalDeposit - this.totalMoneyCounted);
        this.depositUnder = true
        
    } else if(this.totalMoneyCounted > this.totalDeposit){
      this.shortOverEven = (this.totalMoneyCounted - this.totalDeposit);
      this.depositOver = true;
    }
    else{
      this.shortOverEven = 0.00;
      // this.moneyString = this.shortOverEven.toString();
      this.depositOkay = true;
    }

    this.showDocument = true;
  }









}//End of AppComponent class
