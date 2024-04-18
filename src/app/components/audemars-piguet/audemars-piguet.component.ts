import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestService } from 'src/app/services/request.service';
import { enviroenment } from 'src/enviroenments/enviroenment';
import { RequestModS } from 'src/app/models/requestmodel';
import { DescripeservService } from 'src/app/services/descripeserv.service';
import { DiscoverComponent } from '../discover/discover.component';

@Component({
  selector: 'app-audemars-piguet',
  standalone: true,
  imports: [CommonModule, DiscoverComponent],
  templateUrl: './audemars-piguet.component.html',
  styleUrls: ['./audemars-piguet.component.css']
})
export class AudemarsPiguetComponent {
  showDiscoverComp = this.descripserv.showDiscoverComp
  general: boolean = true;
  discoverInputObject = this.descripserv.discoverInputObject;
  openDescribe = this.descripserv.openDescribe;
  closeDiscoverComp = this.descripserv.closeDiscoverComp


   collectionsAudemarsPiguet: any = [
    {
      "position": null,
      "item": "https://www.audemarspiguet.com/com/en/watch-collection/code-1159/26398BC.OO.D002CR.02.html",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010430AA/importer/standup.png.transform.approductmain.png",
      "coo": "26398BC.OO.D002CR.02",
      "code": "Code 11.59 by Audemars Piguet",
      "descrip": "Ultra-Complication Universelle (RD#4)",
      "cont": "42mm, 18-carat white gold"
    },
    {
      "position": null,
      "item": "https://www.audemarspiguet.com/com/en/watch-collection/code-1159/26398BC.OO.D002CR.04.html",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010434AA/importer/standup.png.transform.approductmain.png",
      "coo": "26398BC.OO.D002CR.04",
      "code": "Code 11.59 by Audemars Piguet",
      "descrip": "Ultra-Complication Universelle (RD#4)",
      "cont": "42mm, 18-carat white gold"
    },
    {
      "position": null,
      "item": "https://www.audemarspiguet.com/com/en/watch-collection/code-1159/26398BC.OO.D002CR.99.html",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR009178.00/importer/standup.png.transform.approductmain.png",
      "coo": "26398BC.OO.D002CR.99",
      "code": "Code 11.59 by Audemars Piguet",
      "descrip": "Ultra-Complication Universelle (RD#4)",
      "cont": "42mm, 18-carat white gold"
    },
    {
      "position": null,
      "item": "https://www.audemarspiguet.com/com/en/watch-collection/code-1159/26398OR.OO.D002CR.99.html",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010431AA/importer/standup.png.transform.approductmain.png",
      "coo": "26398OR.OO.D002CR.99",
      "code": "Code 11.59 by Audemars Piguet",
      "descrip": "Ultra-Complication Universelle (RD#4)",
      "cont": "42mm, 18-carat pink gold"
    },
    {
      "position": null,
      "item": "https://www.audemarspiguet.com/com/en/watch-collection/code-1159/26600NB.OO.D346KB.01.html",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR009826.00/importer/standup.png.transform.approductmain.png",
      "coo": "26600NB.OO.D346KB.01",
      "code": "Code 11.59 by Audemars Piguet",
      "descrip": "Tourbillon Openworked",
      "cont": "41mm, Blue ceramic"
    },
    {
      "position": null,
      "item": "https://www.audemarspiguet.com/com/en/watch-collection/code-1159/26397NB.OO.D002KB.01.html",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010565AA/importer/standup.png.transform.approductmain.png",
      "coo": "26397NB.OO.D002KB.01",
      "code": "Code 11.59 by Audemars Piguet",
      "descrip": "Grande Sonnerie Carillon Supersonnerie",
      "cont": "41mm, Black ceramic"
    },
    {
      "position": null,
      "item": "https://www.audemarspiguet.com/com/en/watch-collection/code-1159/26397NR.OO.D002KB.01.html",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010566AA/importer/standup.png.transform.approductmain.png",
      "coo": "26397NR.OO.D002KB.01",
      "code": "Code 11.59 by Audemars Piguet",
      "descrip": "Grande Sonnerie Carillon Supersonnerie",
      "cont": "41mm, Black ceramic"
    },
    {
      "position": null,
      "item": "https://www.audemarspiguet.com/com/en/watch-collection/code-1159/26397QA.OO.D002KB.01.html",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010567AA/importer/standup.png.transform.approductmain.png",
      "coo": "26397QA.OO.D002KB.01",
      "code": "Code 11.59 by Audemars Piguet",
      "descrip": "Grande Sonnerie Carillon Supersonnerie",
      "cont": "41mm, Black ceramic"
    },
    {
      "position": null,
      "item": "https://www.audemarspiguet.com/com/en/watch-collection/code-1159/26395NR.OO.D002KB.01.html",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010600AA/importer/standup.png.transform.approductmain.png",
      "coo": "26395NR.OO.D002KB.01",
      "code": "Code 11.59 by Audemars Piguet",
      "descrip": "Minute Repeater Supersonnerie",
      "cont": "41mm, Black ceramic"
    },
    {
      "position": null,
      "item": "https://www.audemarspiguet.com/com/en/watch-collection/code-1159/26399NR.OO.D002KB.01.html",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR009705.00/importer/standup.png.transform.approductmain.png",
      "coo": "26399NR.OO.D002KB.01",
      "code": "Code 11.59 by Audemars Piguet",
      "descrip": "Selfwinding Flying Tourbillon Chronograph",
      "cont": "41mm, Black ceramic"
    },
    {
      "position": null,
      "item": "https://www.audemarspiguet.com/com/en/watch-collection/code-1159/26396NB.OO.D002KB.01.html",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR009794.00/importer/standup.png.transform.approductmain.png",
      "coo": "26396NB.OO.D002KB.01",
      "code": "Code 11.59 by Audemars Piguet",
      "descrip": "Selfwinding Flying Tourbillon",
      "cont": "41mm, Black ceramic"
    },
    {
      "position": null,
      "item": "https://www.audemarspiguet.com/com/en/watch-collection/code-1159/26396NR.OO.D002KB.01.html",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010459AA/importer/standup.png.transform.approductmain.png",
      "coo": "26396NR.OO.D002KB.01",
      "code": "Code 11.59 by Audemars Piguet",
      "descrip": "Selfwinding Flying Tourbillon",
      "cont": "41mm, Black ceramic"
    },
    {
      "position": null,
      "item": "https://www.audemarspiguet.com/com/en/watch-collection/code-1159/26394BC.OO.D027KB.01.html",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR009943.00/importer/standup.png.transform.approductmain.png",
      "coo": "26394BC.OO.D027KB.01",
      "code": "Code 11.59 by Audemars Piguet",
      "descrip": "Perpetual Calendar",
      "cont": "41mm, 18-carat white gold"
    },
    {
      "position": null,
      "item": "https://www.audemarspiguet.com/com/en/watch-collection/code-1159/26394OR.OO.D027KB.01.html",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010236AA/importer/standup.png.transform.approductmain.png",
      "coo": "26394OR.OO.D027KB.01",
      "code": "Code 11.59 by Audemars Piguet",
      "descrip": "Perpetual Calendar",
      "cont": "41mm, 18-carat pink gold"
    },
    {
      "position": null,
      "item": "https://www.audemarspiguet.com/com/en/watch-collection/code-1159/15212NB.OO.A002KB.01.html",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR009695.00/importer/standup.png.transform.approductmain.png",
      "coo": "15212NB.OO.A002KB.01",
      "code": "Code 11.59 by Audemars Piguet",
      "descrip": "Starwheel",
      "cont": "41mm, Black ceramic"
    },
    {
      "position": null,
      "item": "https://www.audemarspiguet.com/com/en/watch-collection/code-1159/26393BC.OO.A002KB.01.html",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010076.00/importer/standup.png.transform.approductmain.png",
      "coo": "26393BC.OO.A002KB.01",
      "code": "Code 11.59 by Audemars Piguet",
      "descrip": "Selfwinding Chronograph",
      "cont": "41mm, 18-carat white gold"
    },
    {
      "position": null,
      "item": "https://www.audemarspiguet.com/com/en/watch-collection/code-1159/26393BC.OO.A002KB.02.html",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010307AA/importer/standup.png.transform.approductmain.png",
      "coo": "26393BC.OO.A002KB.02",
      "code": "Code 11.59 by Audemars Piguet",
      "descrip": "Selfwinding Chronograph",
      "cont": "41mm, 18-carat white gold"
    },
    {
      "position": null,
      "item": "https://www.audemarspiguet.com/com/en/watch-collection/code-1159/26393CR.OO.A002KB.01.html",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010231AA/importer/standup.png.transform.approductmain.png",
      "coo": "26393CR.OO.A002KB.01",
      "code": "Code 11.59 by Audemars Piguet",
      "descrip": "Selfwinding Chronograph",
      "cont": "41mm, 18-carat pink gold"
    },
    {
      "position": null,
      "item": "https://www.audemarspiguet.com/com/en/watch-collection/code-1159/26393CR.OO.A008KB.01.html",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010232AA/importer/standup.png.transform.approductmain.png",
      "coo": "26393CR.OO.A008KB.01",
      "code": "Code 11.59 by Audemars Piguet",
      "descrip": "Selfwinding Chronograph",
      "cont": "41mm, 18-carat pink gold"
    },
    {
      "position": null,
      "item": "https://www.audemarspiguet.com/com/en/watch-collection/code-1159/26393NB.OO.A002KB.01.html",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR009587.00/importer/standup.png.transform.approductmain.png",
      "coo": "26393NB.OO.A002KB.01",
      "code": "Code 11.59 by Audemars Piguet",
      "descrip": "Selfwinding Chronograph",
      "cont": "41mm, Black ceramic"
    },
    {
      "position": null,
      "item": "https://www.audemarspiguet.com/com/en/watch-collection/code-1159/26393NR.OO.A002KB.01.html",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR009786.00/importer/standup.png.transform.approductmain.png",
      "coo": "26393NR.OO.A002KB.01",
      "code": "Code 11.59 by Audemars Piguet",
      "descrip": "Selfwinding Chronograph",
      "cont": "41mm, Black ceramic"
    },
    {
      "position": null,
      "item": "https://www.audemarspiguet.com/com/en/watch-collection/code-1159/26393NR.OO.A002KB.02.html",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR009700.00/importer/standup.png.transform.approductmain.png",
      "coo": "26393NR.OO.A002KB.02",
      "code": "Code 11.59 by Audemars Piguet",
      "descrip": "Selfwinding Chronograph",
      "cont": "41mm, Black ceramic"
    },
    {
      "position": null,
      "item": "https://www.audemarspiguet.com/com/en/watch-collection/code-1159/26393OR.OO.A002KB.01.html",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010233AA/importer/standup.png.transform.approductmain.png",
      "coo": "26393OR.OO.A002KB.01",
      "code": "Code 11.59 by Audemars Piguet",
      "descrip": "Selfwinding Chronograph",
      "cont": "41mm, 18-carat pink gold"
    },
    {
      "position": null,
      "item": "https://www.audemarspiguet.com/com/en/watch-collection/code-1159/26393OR.OO.A002KB.02.html",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010237AA/importer/standup.png.transform.approductmain.png",
      "coo": "26393OR.OO.A002KB.02",
      "code": "Code 11.59 by Audemars Piguet",
      "descrip": "Selfwinding Chronograph",
      "cont": "41mm, 18-carat pink gold"
    },
    {
      "position": null,
      "item": "https://www.audemarspiguet.com/com/en/watch-collection/code-1159/26393OR.OO.A002KB.03.html",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010234AA/importer/standup.png.transform.approductmain.png",
      "coo": "26393OR.OO.A002KB.03",
      "code": "Code 11.59 by Audemars Piguet",
      "descrip": "Selfwinding Chronograph",
      "cont": "41mm, 18-carat pink gold"
    },
    {
      "position": null,
      "item": "https://www.audemarspiguet.com/com/en/watch-collection/code-1159/26393OR.OO.A027KB.01.html",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010235AA/importer/standup.png.transform.approductmain.png",
      "coo": "26393OR.OO.A027KB.01",
      "code": "Code 11.59 by Audemars Piguet",
      "descrip": "Selfwinding Chronograph",
      "cont": "41mm, 18-carat pink gold"
    },
    {
      "position": null,
      "item": "https://www.audemarspiguet.com/com/en/watch-collection/code-1159/26393OR.OO.A056KB.01.html",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010958AA/importer/standup.png.transform.approductmain.png",
      "coo": "26393OR.OO.A056KB.01",
      "code": "Code 11.59 by Audemars Piguet",
      "descrip": "Selfwinding Chronograph",
      "cont": "41mm, 18-carat pink gold"
    },
    {
      "position": null,
      "item": "https://www.audemarspiguet.com/com/en/watch-collection/code-1159/26393OR.OO.A348KB.01.html",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR009658.00/importer/standup.png.transform.approductmain.png",
      "coo": "26393OR.OO.A348KB.01",
      "code": "Code 11.59 by Audemars Piguet",
      "descrip": "Selfwinding Chronograph",
      "cont": "41mm, 18-carat pink gold"
    },
    {
      "position": null,
      "item": "https://www.audemarspiguet.com/com/en/watch-collection/code-1159/26393QT.OO.A064KB.01.html",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR009884.00/importer/standup.png.transform.approductmain.png",
      "coo": "26393QT.OO.A064KB.01",
      "code": "Code 11.59 by Audemars Piguet",
      "descrip": "Selfwinding Chronograph",
      "cont": "41mm, Black ceramic"
    },
    {
      "position": null,
      "item": "https://www.audemarspiguet.com/com/en/watch-collection/code-1159/26393ST.OO.A056KB.01.html",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010336AA/importer/standup.png.transform.approductmain.png",
      "coo": "26393ST.OO.A056KB.01",
      "code": "Code 11.59 by Audemars Piguet",
      "descrip": "Selfwinding Chronograph",
      "cont": "41mm, Stainless steel"
    },
    {
      "position": null,
      "item": "https://www.audemarspiguet.com/com/en/watch-collection/code-1159/26393ST.OO.A348KB.01.html",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010335AA/importer/standup.png.transform.approductmain.png",
      "coo": "26393ST.OO.A348KB.01",
      "code": "Code 11.59 by Audemars Piguet",
      "descrip": "Selfwinding Chronograph",
      "cont": "41mm, Stainless steel"
    },
    {
      "position": null,
      "item": "https://www.audemarspiguet.com/com/en/watch-collection/code-1159/15210BC.OO.A002KB.01.html",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010081.00/importer/standup.png.transform.approductmain.png",
      "coo": "15210BC.OO.A002KB.01",
      "code": "Code 11.59 by Audemars Piguet",
      "descrip": "Selfwinding",
      "cont": "41mm, 18-carat white gold"
    },
    {
      "position": null,
      "item": "https://www.audemarspiguet.com/com/en/watch-collection/code-1159/15210CR.OO.A002KB.01.html",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010225AA/importer/standup.png.transform.approductmain.png",
      "coo": "15210CR.OO.A002KB.01",
      "code": "Code 11.59 by Audemars Piguet",
      "descrip": "Selfwinding",
      "cont": "41mm, 18-carat pink gold"
    },
    {
      "position": null,
      "item": "https://www.audemarspiguet.com/com/en/watch-collection/code-1159/15210CR.OO.A008KB.01.html",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010226AA/importer/standup.png.transform.approductmain.png",
      "coo": "15210CR.OO.A008KB.01",
      "code": "Code 11.59 by Audemars Piguet",
      "descrip": "Selfwinding",
      "cont": "41mm, 18-carat pink gold"
    },
    {
      "position": null,
      "item": "https://www.audemarspiguet.com/com/en/watch-collection/code-1159/15210OR.OO.A002KB.01.html",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010227AA/importer/standup.png.transform.approductmain.png",
      "coo": "15210OR.OO.A002KB.01",
      "code": "Code 11.59 by Audemars Piguet",
      "descrip": "Selfwinding",
      "cont": "41mm, 18-carat pink gold"
    },
    {
      "position": null,
      "item": "https://www.audemarspiguet.com/com/en/watch-collection/code-1159/15210OR.OO.A002KB.02.html",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010229AA/importer/standup.png.transform.approductmain.png",
      "coo": "15210OR.OO.A002KB.02",
      "code": "Code 11.59 by Audemars Piguet",
      "descrip": "Selfwinding",
      "cont": "41mm, 18-carat pink gold"
    },
    {
      "position": null,
      "item": "https://www.audemarspiguet.com/com/en/watch-collection/code-1159/15210OR.OO.A002KB.03.html",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010228AA/importer/standup.png.transform.approductmain.png",
      "coo": "15210OR.OO.A002KB.03",
      "code": "Code 11.59 by Audemars Piguet",
      "descrip": "Selfwinding",
      "cont": "41mm, 18-carat pink gold"
    },
    {
      "position": null,
      "item": "https://www.audemarspiguet.com/com/en/watch-collection/code-1159/15210OR.OO.A056KB.01.html",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR009930.00/importer/standup.png.transform.approductmain.png",
      "coo": "15210OR.OO.A056KB.01",
      "code": "Code 11.59 by Audemars Piguet",
      "descrip": "Selfwinding",
      "cont": "41mm, 18-carat pink gold"
    },
    {
      "position": null,
      "item": "https://www.audemarspiguet.com/com/en/watch-collection/code-1159/15210OR.OO.A348KB.01.html",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR009698.00/importer/standup.png.transform.approductmain.png",
      "coo": "15210OR.OO.A348KB.01",
      "code": "Code 11.59 by Audemars Piguet",
      "descrip": "Selfwinding",
      "cont": "41mm, 18-carat pink gold"
    },
    {
      "position": null,
      "item": "https://www.audemarspiguet.com/com/en/watch-collection/code-1159/15210QT.OO.A064KB.01.html",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR009588.00/importer/standup.png.transform.approductmain.png",
      "coo": "15210QT.OO.A064KB.01",
      "code": "Code 11.59 by Audemars Piguet",
      "descrip": "Selfwinding",
      "cont": "41mm, Black ceramic"
    },
    {
      "position": null,
      "item": "https://www.audemarspiguet.com/com/en/watch-collection/code-1159/15210ST.OO.A056KB.01.html",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010334AA/importer/standup.png.transform.approductmain.png",
      "coo": "15210ST.OO.A056KB.01",
      "code": "Code 11.59 by Audemars Piguet",
      "descrip": "Selfwinding",
      "cont": "41mm, Stainless steel"
    },
    {
      "position": null,
      "item": "https://www.audemarspiguet.com/com/en/watch-collection/code-1159/15210ST.OO.A348KB.01.html",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010333AA/importer/standup.png.transform.approductmain.png",
      "coo": "15210ST.OO.A348KB.01",
      "code": "Code 11.59 by Audemars Piguet",
      "descrip": "Selfwinding",
      "cont": "41mm, Stainless steel"
    },
    {
      "position": null,
      "item": "https://www.audemarspiguet.com/com/en/watch-collection/code-1159/15210BC.OO.A002KB.02.html",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010306AA/importer/standup.png.transform.approductmain.png",
      "coo": "15210BC.OO.A002KB.02",
      "code": "Code 11.59 by Audemars Piguet",
      "descrip": "Selfwinding",
      "cont": "41mm, 18-carat white gold"
    },
    {
      "position": null,
      "item": "https://www.audemarspiguet.com/com/en/watch-collection/code-1159/15210BC.OO.A021CR.01.html",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010305AA/importer/standup.png.transform.approductmain.png",
      "coo": "15210BC.OO.A021CR.01",
      "code": "Code 11.59 by Audemars Piguet",
      "descrip": "Selfwinding",
      "cont": "41mm, 18-carat white gold"
    },
    {
      "position": null,
      "item": "https://www.audemarspiguet.com/com/en/watch-collection/code-1159/15210BC.ZZ.D128CR.01.html",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR009689AB/importer/standup.png.transform.approductmain.png",
      "coo": "15210BC.ZZ.D128CR.01",
      "code": "Code 11.59 by Audemars Piguet",
      "descrip": "Selfwinding",
      "cont": "41mm, 18-carat white gold"
    },
    {
      "position": null,
      "item": "https://www.audemarspiguet.com/com/en/watch-collection/code-1159/15210OR.ZZ.D208CR.01.html",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR009793AB/importer/standup.png.transform.approductmain.png",
      "coo": "15210OR.ZZ.D208CR.01",
      "code": "Code 11.59 by Audemars Piguet",
      "descrip": "Selfwinding",
      "cont": "41mm, 18-carat pink gold"
    },
    {
      "position": null,
      "item": "https://www.audemarspiguet.com/com/en/watch-collection/code-1159/77410OR.OO.A342CR.01.html",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR011176AA/importer/standup.png.transform.approductmain.png",
      "coo": "77410OR.OO.A342CR.01",
      "code": "Code 11.59 by Audemars Piguet",
      "descrip": "Selfwinding",
      "cont": "38mm, 18-carat pink gold"
    },
    {
      "position": null,
      "item": "https://www.audemarspiguet.com/com/en/watch-collection/code-1159/77410OR.OO.A344CR.01.html",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010953AA/importer/standup.png.transform.approductmain.png",
      "coo": "77410OR.OO.A344CR.01",
      "code": "Code 11.59 by Audemars Piguet",
      "descrip": "Selfwinding",
      "cont": "38mm, 18-carat pink gold"
    },
    {
      "position": null,
      "item": "https://www.audemarspiguet.com/com/en/watch-collection/code-1159/77410OR.OO.A623CR.01.html",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010357AA/importer/standup.png.transform.approductmain.png",
      "coo": "77410OR.OO.A623CR.01",
      "code": "Code 11.59 by Audemars Piguet",
      "descrip": "Selfwinding",
      "cont": "38mm, 18-carat pink gold"
    },
    {
      "position": null,
      "item": "https://www.audemarspiguet.com/com/en/watch-collection/code-1159/77410OR.OO.A825CR.01.html",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR011032AA/importer/standup.png.transform.approductmain.png",
      "coo": "77410OR.OO.A825CR.01",
      "code": "Code 11.59 by Audemars Piguet",
      "descrip": "Selfwinding",
      "cont": "38mm, 18-carat pink gold"
    }
  ];
  collectionsAudemarsPiguetRoyalOak: any =  [
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR009491.00/importer/standup.png.transform.approductmain.png",
      "coo": "26605CB.OO.1248CB.01",
      "code": "Royal Oak",
      "descrip": "Grande Complication",
      "cont": "44mm, White ceramic"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR009127.00/importer/standup.png.transform.approductmain.png",
      "coo": "26605CE.OO.1248CE.01",
      "code": "Royal Oak",
      "descrip": "Grande Complication",
      "cont": "44mm, Black ceramic"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010324AA/importer/standup.png.transform.approductmain.png",
      "coo": "26591CE.OO.D002CA.01",
      "code": "Royal Oak",
      "descrip": "Minute Repeater Supersonnerie",
      "cont": "42mm, Black ceramic"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010323AA/importer/standup.png.transform.approductmain.png",
      "coo": "26591CE.OO.D002CA.02",
      "code": "Royal Oak",
      "descrip": "Minute Repeater Supersonnerie",
      "cont": "42mm, Black ceramic"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010493AA/importer/standup.png.transform.approductmain.png",
      "coo": "26591IP.OO.1252IP.01",
      "code": "Royal Oak",
      "descrip": "Minute Repeater Supersonnerie",
      "cont": "42mm, Titanium"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR009891.00/importer/standup.png.transform.approductmain.png",
      "coo": "26591TI.OO.1252TI.03",
      "code": "Royal Oak",
      "descrip": "Minute Repeater Supersonnerie",
      "cont": "42mm, Titanium"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010313AA/importer/standup.png.transform.approductmain.png",
      "coo": "26730BC.ZZ.1320BC.01",
      "code": "Royal Oak",
      "descrip": "Selfwinding Flying Tourbillon",
      "cont": "41mm, 18-carat white gold"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010622AA/importer/standup.png.transform.approductmain.png",
      "coo": "26730BC.ZZ.1320BC.02",
      "code": "Royal Oak",
      "descrip": "Selfwinding Flying Tourbillon",
      "cont": "41mm, 18-carat white gold"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010346AA/importer/standup.png.transform.approductmain.png",
      "coo": "26730OR.GG.1320OR.01",
      "code": "Royal Oak",
      "descrip": "Selfwinding Flying Tourbillon",
      "cont": "41mm, 18-carat pink gold"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR009710.00/importer/standup.png.transform.approductmain.png",
      "coo": "26730OR.OO.1320OR.02",
      "code": "Royal Oak",
      "descrip": "Selfwinding Flying Tourbillon",
      "cont": "41mm, 18-carat pink gold"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR009725.00/importer/standup.png.transform.approductmain.png",
      "coo": "26730OR.OO.1320OR.05",
      "code": "Royal Oak",
      "descrip": "Selfwinding Flying Tourbillon",
      "cont": "41mm, 18-carat pink gold"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR009709.00/importer/standup.png.transform.approductmain.png",
      "coo": "26730ST.OO.1320ST.02",
      "code": "Royal Oak",
      "descrip": "Selfwinding Flying Tourbillon",
      "cont": "41mm, Stainless steel"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR011370AA/importer/standup.png.transform.approductmain.png",
      "coo": "26730ST.OO.1320ST.05",
      "code": "Royal Oak",
      "descrip": "Selfwinding Flying Tourbillon",
      "cont": "41mm, Stainless steel"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010312AA/importer/standup.png.transform.approductmain.png",
      "coo": "26730ST.OO.1320ST.06",
      "code": "Royal Oak",
      "descrip": "Selfwinding Flying Tourbillon",
      "cont": "41mm, Stainless steel"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR009807.00/importer/standup.png.transform.approductmain.png",
      "coo": "26730TI.OO.1320TI.02",
      "code": "Royal Oak",
      "descrip": "Selfwinding Flying Tourbillon",
      "cont": "41mm, Titanium"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010192AA/importer/standup.png.transform.approductmain.png",
      "coo": "26730TI.OO.1320TI.04",
      "code": "Royal Oak",
      "descrip": "Selfwinding Flying Tourbillon",
      "cont": "41mm, Titanium"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010886AA/importer/standup.png.transform.approductmain.png",
      "coo": "26735SG.OO.1320SG.01",
      "code": "Royal Oak",
      "descrip": "Selfwinding Flying Tourbillon Openworked",
      "cont": "41mm, 18-carat sand gold"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010426AA/importer/standup.png.transform.approductmain.png",
      "coo": "26735ST.OO.1320ST.02",
      "code": "Royal Oak",
      "descrip": "Selfwinding Flying Tourbillon Openworked",
      "cont": "41mm, Stainless steel"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010623AA/importer/standup.png.transform.approductmain.png",
      "coo": "26574BC.GG.1224BC.01",
      "code": "Royal Oak",
      "descrip": "Frosted Gold Perpetual Calendar",
      "cont": "41mm, 18-carat white gold"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010638AA/importer/standup.png.transform.approductmain.png",
      "coo": "26574BC.OO.1220BC.01",
      "code": "Royal Oak",
      "descrip": "Perpetual Calendar",
      "cont": "41mm, 18-carat white gold"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010896AA/importer/standup.png.transform.approductmain.png",
      "coo": "26574BC.OO.1220BC.02",
      "code": "Royal Oak",
      "descrip": "Perpetual Calendar “John Mayer” Limited Edition",
      "cont": "41mm, 18-carat white gold"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR009870.00/importer/standup.png.transform.approductmain.png",
      "coo": "26574OR.OO.1220OR.03",
      "code": "Royal Oak",
      "descrip": "Perpetual Calendar",
      "cont": "41mm, 18-carat pink gold"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR009869.00/importer/standup.png.transform.approductmain.png",
      "coo": "26574ST.OO.1220ST.03",
      "code": "Royal Oak",
      "descrip": "Perpetual Calendar",
      "cont": "41mm, Stainless steel"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR009672.00/importer/standup.png.transform.approductmain.png",
      "coo": "26579CS.OO.1225CS.01",
      "code": "Royal Oak",
      "descrip": "Perpetual Calendar",
      "cont": "41mm, Blue ceramic"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR009137.00/importer/standup.png.transform.approductmain.png",
      "coo": "26585CE.OO.1225CE.01",
      "code": "Royal Oak",
      "descrip": "Perpetual Calendar Openworked",
      "cont": "41mm, Black ceramic"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010321AA/importer/standup.png.transform.approductmain.png",
      "coo": "26585CM.OO.D301VE.01",
      "code": "Royal Oak",
      "descrip": "Perpetual Calendar Openworked \"Cactus Jack\"",
      "cont": "41mm, Brown ceramic"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR009868.00/importer/standup.png.transform.approductmain.png",
      "coo": "26586TI.OO.1240TI.01",
      "code": "Royal Oak",
      "descrip": "Perpetual Calendar Ultra-Thin",
      "cont": "41mm, Titanium"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010639AA/importer/standup.png.transform.approductmain.png",
      "coo": "26598BC.ZZ.1220BC.01",
      "code": "Royal Oak",
      "descrip": "Perpetual Calendar",
      "cont": "41mm, 18-carat white gold"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010625AA/importer/standup.png.transform.approductmain.png",
      "coo": "26625BC.ZZ.1223BC.02",
      "code": "Royal Oak",
      "descrip": "Perpetual Calendar",
      "cont": "41mm, 18-carat white gold"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010743AA/importer/standup.png.transform.approductmain.png",
      "coo": "26240BA.OO.1320BA.02",
      "code": "Royal Oak",
      "descrip": "Selfwinding Chronograph",
      "cont": "41mm, 18-carat yellow gold"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010362AA/importer/standup.png.transform.approductmain.png",
      "coo": "26240BC.GG.1324BC.01",
      "code": "Royal Oak",
      "descrip": "Selfwinding Chronograph",
      "cont": "41mm, 18-carat white gold"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010619AA/importer/standup.png.transform.approductmain.png",
      "coo": "26240BC.GG.1324BC.02",
      "code": "Royal Oak",
      "descrip": "Selfwinding Chronograph",
      "cont": "41mm, 18-carat white gold"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010534AA/importer/standup.png.transform.approductmain.png",
      "coo": "26240BC.OO.1320BC.01",
      "code": "Royal Oak",
      "descrip": "Selfwinding Chronograph",
      "cont": "41mm, 18-carat white gold"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010620AA/importer/standup.png.transform.approductmain.png",
      "coo": "26240BC.SS.1320BC.01",
      "code": "Royal Oak",
      "descrip": "Selfwinding Chronograph",
      "cont": "41mm, 18-carat white gold"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010415AA/importer/standup.png.transform.approductmain.png",
      "coo": "26240CE.OO.1225CE.02",
      "code": "Royal Oak",
      "descrip": "Selfwinding Chronograph",
      "cont": "41mm, Black ceramic"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010404AA/importer/standup.png.transform.approductmain.png",
      "coo": "26240OR.OO.1320OR.05",
      "code": "Royal Oak",
      "descrip": "Selfwinding Chronograph",
      "cont": "41mm, 18-carat pink gold"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010408AA/importer/standup.png.transform.approductmain.png",
      "coo": "26240OR.OO.1320OR.06",
      "code": "Royal Oak",
      "descrip": "Selfwinding Chronograph",
      "cont": "41mm, 18-carat pink gold"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010409AA/importer/standup.png.transform.approductmain.png",
      "coo": "26240OR.OO.1320OR.07",
      "code": "Royal Oak",
      "descrip": "Selfwinding Chronograph",
      "cont": "41mm, 18-carat pink gold"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010411AA/importer/standup.png.transform.approductmain.png",
      "coo": "26240OR.OO.1320OR.08",
      "code": "Royal Oak",
      "descrip": "Selfwinding Chronograph",
      "cont": "41mm, 18-carat pink gold"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010413AA/importer/standup.png.transform.approductmain.png",
      "coo": "26240OR.OO.D002CR.02",
      "code": "Royal Oak",
      "descrip": "Selfwinding Chronograph",
      "cont": "41mm, 18-carat pink gold"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010405AA/importer/standup.png.transform.approductmain.png",
      "coo": "26240OR.OO.D315CR.02",
      "code": "Royal Oak",
      "descrip": "Selfwinding Chronograph",
      "cont": "41mm, 18-carat pink gold"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010414AA/importer/standup.png.transform.approductmain.png",
      "coo": "26240OR.OO.D404CR.02",
      "code": "Royal Oak",
      "descrip": "Selfwinding Chronograph",
      "cont": "41mm, 18-carat pink gold"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010401AA/importer/standup.png.transform.approductmain.png",
      "coo": "26240ST.OO.1320ST.05",
      "code": "Royal Oak",
      "descrip": "Selfwinding Chronograph",
      "cont": "41mm, Stainless steel"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010402AA/importer/standup.png.transform.approductmain.png",
      "coo": "26240ST.OO.1320ST.06",
      "code": "Royal Oak",
      "descrip": "Selfwinding Chronograph",
      "cont": "41mm, Stainless steel"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010403AA/importer/standup.png.transform.approductmain.png",
      "coo": "26240ST.OO.1320ST.07",
      "code": "Royal Oak",
      "descrip": "Selfwinding Chronograph",
      "cont": "41mm, Stainless steel"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010407AA/importer/standup.png.transform.approductmain.png",
      "coo": "26240ST.OO.1320ST.08",
      "code": "Royal Oak",
      "descrip": "Selfwinding Chronograph",
      "cont": "41mm, Stainless steel"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010406AA/importer/standup.png.transform.approductmain.png",
      "coo": "26242OR.ZZ.1322OR.02",
      "code": "Royal Oak",
      "descrip": "Selfwinding Chronograph",
      "cont": "41mm, 18-carat pink gold"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010526AA/importer/standup.png.transform.approductmain.png",
      "coo": "26240BA.OO.1320BA.01",
      "code": "Royal Oak",
      "descrip": "Selfwinding Chronograph",
      "cont": "41mm, 18-carat yellow gold"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010517AA/importer/standup.png.transform.approductmain.png",
      "coo": "26240SA.OO.1320SA.01",
      "code": "Royal Oak",
      "descrip": "Selfwinding Chronograph",
      "cont": "41mm, Stainless steel"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010618AA/importer/standup.png.transform.approductmain.png",
      "coo": "15510BC.OO.1320BC.02",
      "code": "Royal Oak",
      "descrip": "Selfwinding",
      "cont": "41mm, 18-carat white gold"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010420AA/importer/standup.png.transform.approductmain.png",
      "coo": "15510OR.OO.1320OR.03",
      "code": "Royal Oak",
      "descrip": "Selfwinding",
      "cont": "41mm, 18-carat pink gold"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010421AA/importer/standup.png.transform.approductmain.png",
      "coo": "15510OR.OO.1320OR.04",
      "code": "Royal Oak",
      "descrip": "Selfwinding",
      "cont": "41mm, 18-carat pink gold"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010422AA/importer/standup.png.transform.approductmain.png",
      "coo": "15510OR.OO.D002CR.02",
      "code": "Royal Oak",
      "descrip": "Selfwinding",
      "cont": "41mm, 18-carat pink gold"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010419AA/importer/standup.png.transform.approductmain.png",
      "coo": "15510OR.OO.D315CR.02",
      "code": "Royal Oak",
      "descrip": "Selfwinding",
      "cont": "41mm, 18-carat pink gold"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010416AA/importer/standup.png.transform.approductmain.png",
      "coo": "15510ST.OO.1320ST.06",
      "code": "Royal Oak",
      "descrip": "Selfwinding",
      "cont": "41mm, Stainless steel"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010417AA/importer/standup.png.transform.approductmain.png",
      "coo": "15510ST.OO.1320ST.07",
      "code": "Royal Oak",
      "descrip": "Selfwinding",
      "cont": "41mm, Stainless steel"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010418AA/importer/standup.png.transform.approductmain.png",
      "coo": "15510ST.OO.1320ST.08",
      "code": "Royal Oak",
      "descrip": "Selfwinding",
      "cont": "41mm, Stainless steel"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010423AA/importer/standup.png.transform.approductmain.png",
      "coo": "15510ST.OO.1320ST.09",
      "code": "Royal Oak",
      "descrip": "Selfwinding",
      "cont": "41mm, Stainless steel"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010424AA/importer/standup.png.transform.approductmain.png",
      "coo": "15510ST.OO.1320ST.10",
      "code": "Royal Oak",
      "descrip": "Selfwinding",
      "cont": "41mm, Stainless steel"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR001648.00/importer/standup.png.transform.approductmain.png",
      "coo": "15407OR.OO.1220OR.01",
      "code": "Royal Oak",
      "descrip": "Double Balance Wheel Openworked",
      "cont": "41mm, 18-carat pink gold"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR001649.00/importer/standup.png.transform.approductmain.png",
      "coo": "15407ST.OO.1220ST.01",
      "code": "Royal Oak",
      "descrip": "Double Balance Wheel Openworked",
      "cont": "41mm, Stainless steel"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010846AA/importer/standup.png.transform.approductmain.png",
      "coo": "15412BA.YG.1224BA.01-B",
      "code": "Royal Oak",
      "descrip": "Frosted Gold Double Balance Wheel Openworked",
      "cont": "41mm, 18-carat yellow gold"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010849AA/importer/standup.png.transform.approductmain.png",
      "coo": "15412BC.YG.1224BC.03-B",
      "code": "Royal Oak",
      "descrip": "Frosted Gold Double Balance Wheel Openworked",
      "cont": "41mm, 18-carat white gold"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010847AA/importer/standup.png.transform.approductmain.png",
      "coo": "15412OR.YG.1224OR.01-B",
      "code": "Royal Oak",
      "descrip": "Frosted Gold Double Balance Wheel Openworked",
      "cont": "41mm, 18-carat pink gold"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR009321.00/importer/standup.png.transform.approductmain.png",
      "coo": "15416CE.OO.1225CE.01",
      "code": "Royal Oak",
      "descrip": "Double Balance Wheel Openworked",
      "cont": "41mm, Black ceramic"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010208AA/importer/standup.png.transform.approductmain.png",
      "coo": "15417OR.ZZ.1267OR.01.A",
      "code": "Royal Oak",
      "descrip": "Double Balance Wheel Openworked",
      "cont": "41mm, 18-carat pink gold"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010400AA/importer/standup.png.transform.approductmain.png",
      "coo": "26670ST.OO.1240ST.02",
      "code": "Royal Oak",
      "descrip": "Selfwinding Flying Tourbillon Extra-Thin (RD#3)",
      "cont": "39mm, Stainless steel"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010560AA/importer/standup.png.transform.approductmain.png",
      "coo": "16202BA.HH.1241BA.01",
      "code": "Royal Oak",
      "descrip": "“Jumbo” Extra-Thin",
      "cont": "39mm, 18-carat yellow gold"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010397AA/importer/standup.png.transform.approductmain.png",
      "coo": "16202BA.OO.1240BA.02",
      "code": "Royal Oak",
      "descrip": "\"Jumbo\" Extra-Thin",
      "cont": "39mm, 18-carat yellow gold"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010962AA/importer/standup.png.transform.approductmain.png",
      "coo": "16202BC.OO.1240BC.02",
      "code": "Royal Oak",
      "descrip": "“Jumbo” Extra-Thin",
      "cont": "39mm, 18-carat white gold"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010559AA/importer/standup.png.transform.approductmain.png",
      "coo": "16202BC.ZZ.1241BC.01",
      "code": "Royal Oak",
      "descrip": "“Jumbo” Extra-Thin",
      "cont": "39mm, 18-carat white gold"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010621AA/importer/standup.png.transform.approductmain.png",
      "coo": "16202BC.ZZ.1241BC.02",
      "code": "Royal Oak",
      "descrip": "“Jumbo” Extra-Thin",
      "cont": "39mm, 18-carat white gold"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010396AA/importer/standup.png.transform.approductmain.png",
      "coo": "16202OR.OO.1240OR.02",
      "code": "Royal Oak",
      "descrip": "\"Jumbo\" Extra-Thin",
      "cont": "39mm, 18-carat pink gold"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010395AA/importer/standup.png.transform.approductmain.png",
      "coo": "16202ST.OO.1240ST.02",
      "code": "Royal Oak",
      "descrip": "\"Jumbo\" Extra-Thin",
      "cont": "39mm, Stainless steel"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010110.00/importer/standup.png.transform.approductmain.png",
      "coo": "16202XT.OO.1240XT.01",
      "code": "Royal Oak",
      "descrip": "“Jumbo” Extra-Thin",
      "cont": "39mm, Titanium"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010146.00/importer/standup.png.transform.approductmain.png",
      "coo": "16204BA.OO.1240BA.01",
      "code": "Royal Oak",
      "descrip": "“Jumbo” Extra-Thin Openworked",
      "cont": "39mm, 18-carat yellow gold"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010463AA/importer/standup.png.transform.approductmain.png",
      "coo": "16204BC.OO.1240BC.01",
      "code": "Royal Oak",
      "descrip": "“Jumbo” Extra-Thin Openworked",
      "cont": "39mm, 18-carat white gold"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010399AA/importer/standup.png.transform.approductmain.png",
      "coo": "16204OR.OO.1240OR.03",
      "code": "Royal Oak",
      "descrip": "\"Jumbo\" Extra-Thin Openworked",
      "cont": "39mm, 18-carat pink gold"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR009856.00/importer/standup.png.transform.approductmain.png",
      "coo": "26319OR.AY.1256OR.01",
      "code": "Royal Oak",
      "descrip": "Selfwinding Chronograph",
      "cont": "38mm, 18-carat pink gold"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR009988.00/importer/standup.png.transform.approductmain.png",
      "coo": "26715BC.ZZ.1356BC.01",
      "code": "Royal Oak",
      "descrip": "Selfwinding Chronograph",
      "cont": "38mm, 18-carat white gold"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010494AA/importer/standup.png.transform.approductmain.png",
      "coo": "26715BC.ZZ.1356BC.02",
      "code": "Royal Oak",
      "descrip": "Selfwinding Chronograph",
      "cont": "38mm, 18-carat white gold"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR009686.00/importer/standup.png.transform.approductmain.png",
      "coo": "26715OR.OO.1356OR.01",
      "code": "Royal Oak",
      "descrip": "Selfwinding Chronograph",
      "cont": "38mm, 18-carat pink gold"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010047.00/importer/standup.png.transform.approductmain.png",
      "coo": "26715OR.ZZ.1356OR.01",
      "code": "Royal Oak",
      "descrip": "Selfwinding Chronograph",
      "cont": "38mm, 18-carat pink gold"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010495AA/importer/standup.png.transform.approductmain.png",
      "coo": "26715OR.ZZ.1356OR.02",
      "code": "Royal Oak",
      "descrip": "Selfwinding Chronograph",
      "cont": "38mm, 18-carat pink gold"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR009684.00/importer/standup.png.transform.approductmain.png",
      "coo": "26715ST.OO.1356ST.01",
      "code": "Royal Oak",
      "descrip": "Selfwinding Chronograph",
      "cont": "38mm, Stainless steel"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010144.00/importer/standup.png.transform.approductmain.png",
      "coo": "26715ST.OO.1356ST.02",
      "code": "Royal Oak",
      "descrip": "Selfwinding Chronograph",
      "cont": "38mm, Stainless steel"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010046.00/importer/standup.png.transform.approductmain.png",
      "coo": "26715ST.ZZ.1356ST.01",
      "code": "Royal Oak",
      "descrip": "Selfwinding Chronograph",
      "cont": "38mm, Stainless steel"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR011012AA/importer/standup.png.transform.approductmain.png",
      "coo": "26660BC.ZZ.1356BC.01",
      "code": "Royal Oak",
      "descrip": "Selfwinding Flying Tourbillon Extra-Thin RD#3",
      "cont": "37mm, 18-carat white gold"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010394AA/importer/standup.png.transform.approductmain.png",
      "coo": "26660ST.OO.1356ST.02",
      "code": "Royal Oak",
      "descrip": "Selfwinding Flying Tourbillon Extra-Thin (RD#3)",
      "cont": "37mm, Stainless steel"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR011241AA/importer/standup.png.transform.approductmain.png",
      "coo": "15550BA.GG.1356BA.01",
      "code": "Royal Oak",
      "descrip": "Frosted Gold Selfwinding",
      "cont": "37mm, 18-carat yellow gold"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010106.00/importer/standup.png.transform.approductmain.png",
      "coo": "15550BA.OO.1356BA.01",
      "code": "Royal Oak",
      "descrip": "Selfwinding",
      "cont": "37mm, 18-carat yellow gold"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010390AA/importer/standup.png.transform.approductmain.png",
      "coo": "15550SR.OO.1356SR.02",
      "code": "Royal Oak",
      "descrip": "Selfwinding",
      "cont": "37mm, Stainless steel"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010387AA/importer/standup.png.transform.approductmain.png",
      "coo": "15550ST.OO.1356ST.06",
      "code": "Royal Oak",
      "descrip": "Selfwinding",
      "cont": "37mm, Stainless steel"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010388AA/importer/standup.png.transform.approductmain.png",
      "coo": "15550ST.OO.1356ST.07",
      "code": "Royal Oak",
      "descrip": "Selfwinding",
      "cont": "37mm, Stainless steel"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010389AA/importer/standup.png.transform.approductmain.png",
      "coo": "15550ST.OO.1356ST.08",
      "code": "Royal Oak",
      "descrip": "Selfwinding",
      "cont": "37mm, Stainless steel"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR009986.00/importer/standup.png.transform.approductmain.png",
      "coo": "15551BC.ZZ.1356BC.01",
      "code": "Royal Oak",
      "descrip": "Selfwinding",
      "cont": "37mm, 18-carat white gold"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010959AA/importer/standup.png.transform.approductmain.png",
      "coo": "15551BC.ZZ.1356BC.02",
      "code": "Royal Oak",
      "descrip": "Selfwinding",
      "cont": "37mm, 18-carat white gold"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010353AA/importer/standup.png.transform.approductmain.png",
      "coo": "15551BC.ZZ.D405CR.01",
      "code": "Royal Oak",
      "descrip": "Selfwinding",
      "cont": "37mm, 18-carat white gold"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010352AA/importer/standup.png.transform.approductmain.png",
      "coo": "15551OR.ZS.D344CR.01",
      "code": "Royal Oak",
      "descrip": "Selfwinding",
      "cont": "37mm, 18-carat pink gold"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010385AA/importer/standup.png.transform.approductmain.png",
      "coo": "15551OR.ZZ.1356OR.04",
      "code": "Royal Oak",
      "descrip": "Selfwinding",
      "cont": "37mm, 18-carat pink gold"
    }
  ];
  collectionsAudemarsPiguetRoyalOakOffshore: any =  [
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR008841.00/importer/standup.png.transform.approductmain.png",
      "coo": "26582CB.OO.A010CA.01",
      "code": "Royal Oak Offshore",
      "descrip": "Grande Complication",
      "cont": "44mm, White ceramic"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR008842.00/importer/standup.png.transform.approductmain.png",
      "coo": "26582CE.OO.A002CA.01",
      "code": "Royal Oak Offshore",
      "descrip": "Grande Complication",
      "cont": "44mm, Ceramic"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010575AA/importer/standup.png.transform.approductmain.png",
      "coo": "26622CE.OO.D002CA.01",
      "code": "Royal Oak Offshore",
      "descrip": "Selfwinding Tourbillon Chronograph",
      "cont": "43mm, Black ceramic"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010576AA/importer/standup.png.transform.approductmain.png",
      "coo": "26622CE.OO.D002CA.02",
      "code": "Royal Oak Offshore",
      "descrip": "Selfwinding Tourbillon Chronograph",
      "cont": "43mm, Black ceramic"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR009796.00/importer/standup.png.transform.approductmain.png",
      "coo": "26622CE.OO.D062CA.01",
      "code": "Royal Oak Offshore",
      "descrip": "Selfwinding Flying Tourbillon Chronograph",
      "cont": "43mm, Black ceramic"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR011247AA/importer/standup.png.transform.approductmain.png",
      "coo": "26420CE.OO.A005VE.01",
      "code": "Royal Oak Offshore",
      "descrip": "Selfwinding Chronograph",
      "cont": "43mm, Black ceramic"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010548AA/importer/standup.png.transform.approductmain.png",
      "coo": "26420CE.OO.A043VE.01",
      "code": "Royal Oak Offshore",
      "descrip": "Selfwinding Chronograph",
      "cont": "43mm, Black ceramic"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR009469.00/importer/standup.png.transform.approductmain.png",
      "coo": "26420CE.OO.A127CR.01",
      "code": "Royal Oak Offshore",
      "descrip": "Selfwinding Chronograph",
      "cont": "43mm, Black ceramic"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR009461.00/importer/standup.png.transform.approductmain.png",
      "coo": "26420IO.OO.A009CA.01",
      "code": "Royal Oak Offshore",
      "descrip": "Selfwinding Chronograph",
      "cont": "43mm, Titanium"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010549AA/importer/standup.png.transform.approductmain.png",
      "coo": "26420OI.OO.A015VE.01",
      "code": "Royal Oak Offshore",
      "descrip": "Selfwinding Chronograph",
      "cont": "43mm, 18-carat pink gold"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR009462.00/importer/standup.png.transform.approductmain.png",
      "coo": "26420RO.OO.A002CA.01",
      "code": "Royal Oak Offshore",
      "descrip": "Selfwinding Chronograph",
      "cont": "43mm, 18-carat pink gold"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR009463.00/importer/standup.png.transform.approductmain.png",
      "coo": "26420SO.OO.A002CA.01",
      "code": "Royal Oak Offshore",
      "descrip": "Selfwinding Chronograph",
      "cont": "43mm, Stainless steel"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR009791.00/importer/standup.png.transform.approductmain.png",
      "coo": "26420SO.OO.A600CA.01",
      "code": "Royal Oak Offshore",
      "descrip": "Selfwinding Chronograph",
      "cont": "43mm, Stainless steel"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR009604.00/importer/standup.png.transform.approductmain.png",
      "coo": "26420TI.OO.A027CA.01",
      "code": "Royal Oak Offshore",
      "descrip": "Selfwinding Chronograph",
      "cont": "43mm, Titanium"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010083.00/importer/standup.png.transform.approductmain.png",
      "coo": "26423BC.ZZ.2100BC.01",
      "code": "Royal Oak Offshore",
      "descrip": "Selfwinding Chronograph",
      "cont": "43mm, 18-carat white gold"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010082.00/importer/standup.png.transform.approductmain.png",
      "coo": "26423BC.ZZ.D002CA.01",
      "code": "Royal Oak Offshore",
      "descrip": "Selfwinding Chronograph",
      "cont": "43mm, 18-carat white gold"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010084.00/importer/standup.png.transform.approductmain.png",
      "coo": "26424BC.ZZ.D002CA.01",
      "code": "Royal Oak Offshore",
      "descrip": "Selfwinding Chronograph",
      "cont": "43mm, 18-carat white gold"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010085.00/importer/standup.png.transform.approductmain.png",
      "coo": "26425BC.ZZ.D002CA.01",
      "code": "Royal Oak Offshore",
      "descrip": "Selfwinding Chronograph",
      "cont": "43mm, 18-carat white gold"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010087.00/importer/standup.png.transform.approductmain.png",
      "coo": "26425BC.ZZ.8045BC.01",
      "code": "Royal Oak Offshore",
      "descrip": "Selfwinding Chronograph",
      "cont": "43mm, 18-carat white gold"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010086.00/importer/standup.png.transform.approductmain.png",
      "coo": "26425BC.ZZ.D002CA.02",
      "code": "Royal Oak Offshore",
      "descrip": "Selfwinding Chronograph",
      "cont": "43mm, 18-carat white gold"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010136.00/importer/standup.png.transform.approductmain.png",
      "coo": "15605SK.OO.A350CA.01",
      "code": "Royal Oak Offshore",
      "descrip": "Selfwinding",
      "cont": "43mm, Stainless steel"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR009547.00/importer/standup.png.transform.approductmain.png",
      "coo": "15600CE.OO.A002CA.01",
      "code": "Royal Oak Offshore",
      "descrip": "Selfwinding - Music Edition",
      "cont": "43mm, Black ceramic"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010072.00/importer/standup.png.transform.approductmain.png",
      "coo": "15600TI.OO.A343CA.01",
      "code": "Royal Oak Offshore",
      "descrip": "Selfwinding - Music Edition",
      "cont": "43mm, Titanium"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010073.00/importer/standup.png.transform.approductmain.png",
      "coo": "15601BC.YY.D343CA.01",
      "code": "Royal Oak Offshore",
      "descrip": "Selfwinding - Music Edition",
      "cont": "43mm, 18-carat white gold"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010525AA/importer/standup.png.transform.approductmain.png",
      "coo": "26238BA.OO.2000BA.01",
      "code": "Royal Oak Offshore",
      "descrip": "Selfwinding Chronograph",
      "cont": "42mm, 18-carat yellow gold"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010524AA/importer/standup.png.transform.approductmain.png",
      "coo": "26238BC.OO.2000BC.01",
      "code": "Royal Oak Offshore",
      "descrip": "Selfwinding Chronograph",
      "cont": "42mm, 18-carat white gold"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR009454.00/importer/standup.png.transform.approductmain.png",
      "coo": "26238CE.OO.1300CE.01",
      "code": "Royal Oak Offshore",
      "descrip": "Selfwinding Chronograph",
      "cont": "42mm, Black ceramic"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR009924.00/importer/standup.png.transform.approductmain.png",
      "coo": "26238OK.OO.A002CA.01",
      "code": "Royal Oak Offshore",
      "descrip": "Selfwinding Chronograph",
      "cont": "42mm, 18-carat pink gold"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR009590.01/importer/standup.png.transform.approductmain.png",
      "coo": "26238OR.OO.2000OR.01",
      "code": "Royal Oak Offshore",
      "descrip": "Selfwinding Chronograph",
      "cont": "42mm, 18-carat pink gold"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR009591.01/importer/standup.png.transform.approductmain.png",
      "coo": "26238ST.OO.2000ST.01",
      "code": "Royal Oak Offshore",
      "descrip": "Selfwinding Chronograph",
      "cont": "42mm, Stainless steel"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR009932.00/importer/standup.png.transform.approductmain.png",
      "coo": "26238ST.OO.A340CA.01",
      "code": "Royal Oak Offshore",
      "descrip": "Selfwinding Chronograph",
      "cont": "42mm, Stainless steel"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR009605.01/importer/standup.png.transform.approductmain.png",
      "coo": "26238TI.OO.2000TI.01",
      "code": "Royal Oak Offshore",
      "descrip": "Selfwinding Chronograph",
      "cont": "42mm, Titanium"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR009923.00/importer/standup.png.transform.approductmain.png",
      "coo": "26238TI.OO.A056CA.01",
      "code": "Royal Oak Offshore",
      "descrip": "Selfwinding Chronograph",
      "cont": "42mm, Titanium"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR009825.00/importer/standup.png.transform.approductmain.png",
      "coo": "15720ST.OO.A009CA.01",
      "code": "Royal Oak Offshore",
      "descrip": "Diver",
      "cont": "42mm, Stainless steel"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR009663.00/importer/standup.png.transform.approductmain.png",
      "coo": "15720ST.OO.A027CA.01",
      "code": "Royal Oak Offshore",
      "descrip": "Diver",
      "cont": "42mm, Stainless steel"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR009294.00/importer/standup.png.transform.approductmain.png",
      "coo": "15720ST.OO.A052CA.01",
      "code": "Royal Oak Offshore",
      "descrip": "Diver",
      "cont": "42mm, Stainless steel"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR009694.00/importer/standup.png.transform.approductmain.png",
      "coo": "26231OR.ZZ.A085CA.01",
      "code": "Royal Oak Offshore",
      "descrip": "Selfwinding Chronograph",
      "cont": "37mm, 18-carat pink gold"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR008794.00/importer/standup.png.transform.approductmain.png",
      "coo": "26231OR.ZZ.D003CA.01",
      "code": "Royal Oak Offshore",
      "descrip": "Selfwinding Chronograph",
      "cont": "37mm, 18-carat pink gold"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010650AA/importer/standup.png.transform.approductmain.png",
      "coo": "26231ST.ZZ.A178CA.01",
      "code": "Royal Oak Offshore",
      "descrip": "Selfwinding Chronograph",
      "cont": "37mm, Stainless steel"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR003979.00/importer/standup.png.transform.approductmain.png",
      "coo": "26231ST.ZZ.D002CA.01",
      "code": "Royal Oak Offshore",
      "descrip": "Selfwinding Chronograph",
      "cont": "37mm, Stainless steel"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR008954.01/importer/standup.png.transform.approductmain.png",
      "coo": "26231ST.ZZ.D010CA.01.A",
      "code": "Royal Oak Offshore",
      "descrip": "Selfwinding Chronograph",
      "cont": "37mm, Stainless steel"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR008793.00/importer/standup.png.transform.approductmain.png",
      "coo": "26231ST.ZZ.D027CA.01",
      "code": "Royal Oak Offshore",
      "descrip": "Selfwinding Chronograph",
      "cont": "37mm, Stainless steel"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR009812.00/importer/standup.png.transform.approductmain.png",
      "coo": "26236BA.YY.D346CA.01",
      "code": "Royal Oak Offshore",
      "descrip": "Selfwinding Chronograph",
      "cont": "37mm, 18-carat yellow gold"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010573AA/importer/standup.png.transform.approductmain.png",
      "coo": "26236OR.YY.D002CA.01",
      "code": "Royal Oak Offshore",
      "descrip": "Selfwinding Chronograph",
      "cont": "37mm, 18-carat pink gold"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010331AA/importer/standup.png.transform.approductmain.png",
      "coo": "77600CE.OO.A002CA.01",
      "code": "Royal Oak Offshore",
      "descrip": "Selfwinding - Music Edition",
      "cont": "37mm, Black ceramic"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010127.00/importer/standup.png.transform.approductmain.png",
      "coo": "77600TI.OO.A343CA.01",
      "code": "Royal Oak Offshore",
      "descrip": "Selfwinding - Music Edition",
      "cont": "37mm, Titanium"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010125.00/importer/standup.png.transform.approductmain.png",
      "coo": "77601BC.YY.D343CA.01",
      "code": "Royal Oak Offshore",
      "descrip": "Selfwinding - Music Edition",
      "cont": "37mm, 18-carat white gold"
    }
  ]
  collectionsAudemarsPiguetRoyalOakConcept: any = [
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR009784.00/importer/standup.png.transform.approductmain.png",
      "coo": "26589IO.OO.D056CA.01",
      "code": "Royal Oak Concept",
      "descrip": "Flying Tourbillon GMT",
      "cont": "44mm, Titanium"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010187AA/importer/standup.png.transform.approductmain.png",
      "coo": "26589IO.OO.D500CA.01",
      "code": "Royal Oak Concept",
      "descrip": "Flying Tourbillon GMT",
      "cont": "44mm, Titanium"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010309AA/importer/standup.png.transform.approductmain.png",
      "coo": "26577IO.OO.D002CA.01",
      "code": "Royal Oak Concept",
      "descrip": "Minute Repeater Supersonnerie",
      "cont": "44mm, Titanium"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR009585.00/importer/standup.png.transform.approductmain.png",
      "coo": "26650TI.OO.D013CA.01",
      "code": "Royal Oak Concept",
      "descrip": "Split Second Chronograph GMT Large Date",
      "cont": "43mm, Titanium"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010326AA/importer/standup.png.transform.approductmain.png",
      "coo": "26631IO.OO.D002CA.01",
      "code": "Royal Oak Concept",
      "descrip": "Tourbillon \"Spider-Man\"",
      "cont": "42mm, Titanium"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010538AA/importer/standup.png.transform.approductmain.png",
      "coo": "26632CN.OO.D100CA.01",
      "code": "Royal Oak Concept",
      "descrip": "Tourbillon \"Black Suit Spider-Man\"",
      "cont": "42mm, 18-carat white gold"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR009864.00/importer/standup.png.transform.approductmain.png",
      "coo": "26227BC.SS.D314CR.01",
      "code": "Royal Oak Concept",
      "descrip": "Flying Tourbillon",
      "cont": "38.5mm, 18-carat white gold"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR009861.00/importer/standup.png.transform.approductmain.png",
      "coo": "26227BC.SS.D326CR.01",
      "code": "Royal Oak Concept",
      "descrip": "Flying Tourbillon",
      "cont": "38.5mm, 18-carat white gold"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010318AA/importer/standup.png.transform.approductmain.png",
      "coo": "26227BC.YY.D326CR.01-A",
      "code": "Royal Oak Concept",
      "descrip": "Flying Tourbillon",
      "cont": "38.5mm, 18-carat white gold"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR008925.00/importer/standup.png.transform.approductmain.png",
      "coo": "26227BC.ZZ.D011CR.01",
      "code": "Royal Oak Concept",
      "descrip": "Flying Tourbillon",
      "cont": "38.5mm, 18-carat white gold"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR009866.00/importer/standup.png.transform.approductmain.png",
      "coo": "26228BC.SS.D314CR.01",
      "code": "Royal Oak Concept",
      "descrip": "Flying Tourbillon",
      "cont": "38.5mm, 18-carat white gold"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR008926.00/importer/standup.png.transform.approductmain.png",
      "coo": "26228BC.ZZ.D011CR.01",
      "code": "Royal Oak Concept",
      "descrip": "Flying Tourbillon",
      "cont": "38.5mm, 18-carat white gold"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR009865.00/importer/standup.png.transform.approductmain.png",
      "coo": "26228OR.SS.D314CR.01",
      "code": "Royal Oak Concept",
      "descrip": "Flying Tourbillon",
      "cont": "38.5mm, 18-carat pink gold"
    },
    {
      "position": null,
      "item": "undefined",
      "img": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010568AA/importer/standup.png.transform.approductmain.png",
      "coo": "26630OR.GG.D626CR.01",
      "code": "Royal Oak Concept",
      "descrip": "Flying Tourbillon “Tamara Ralph” Limited Edition",
      "cont": "38.5mm, 18-carat pink gold"
    }
  ]
  show1: boolean = true;
  show2: boolean = false;
  show3: boolean = false;
  show4: boolean = false;
  show(num: number){
    if(num  == 1){
      this.show1 = true;
      this.show2 = false;
      this.show3 = false
    } else if(num  == 2){
      this.show2 = true;
      this.show1 = false;
      this.show3 = false
    } else if(num  == 3){
      this.show2 = false;
      this.show1 = false;
      this.show3 = true
    } else {
       this.show4 = true;
       this.show1 = false
       this.show2 = false
       this.show3 = false
    }
  }
  constructor(private req: RequestService,
    private descripserv: DescripeservService
  ){}
  ngOnInit(){
    // this.req.getData<RequestModS>(enviroenment.audemarspiguet.royalOak.get).subscribe((res)=>{
    //   console.log(res);
    //   for (let index = 0; index < res.cont.length; index++) {
    //     this.collectionsAudemarsPiguetRoyalOak.push(res.cont[index])
    //   }   
    // })
    // this.req.getData<RequestModS>(enviroenment.audemarspiguet.royaloakoffshore.get).subscribe((res)=>{
    //   console.log(res);
    //   for (let index = 0; index < res.cont.length; index++) {
    //     this.collectionsAudemarsPiguetRoyalOakOffshore.push(res.cont[index])
    //   }   
    // })
    // this.req.getData<RequestModS>(enviroenment.audemarspiguet.royaloakconcept.get).subscribe((res)=>{
    //   console.log(res);
    //   for (let index = 0; index < res.cont.length; index++) {
    //     this.collectionsAudemarsPiguetRoyalOakConcept.push(res.cont[index])
    //   }   
    // })

  }
  log(){
    console.log(this.collectionsAudemarsPiguetRoyalOakOffshore);
    
  }
}
