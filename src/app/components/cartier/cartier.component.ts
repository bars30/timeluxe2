import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestService } from 'src/app/services/request.service';
import { RequestModS } from 'src/app/models/requestmodel';
import { enviroenment } from 'src/enviroenments/enviroenment';
import { DescripeservService } from 'src/app/services/descripeserv.service';
import { DiscoverComponent } from '../discover/discover.component';

@Component({
  selector: 'app-cartier',
  standalone: true,
  imports: [CommonModule, DiscoverComponent],
  templateUrl: './cartier.component.html',
  styleUrls: ['./cartier.component.css']
})
export class CartierComponent {
  constructor(private descripserv: DescripeservService,
    private req: RequestService
  ){}
  showDiscoverComp = this.descripserv.showDiscoverComp
  general: boolean = true;
  discoverInputObject = this.descripserv.discoverInputObject;
  openDescribe = this.descripserv.openDescribe;
  closeDiscoverComp = this.descripserv.closeDiscoverComp


   collectionsCartier: any = [
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dwc11d92a8/images/large/ce8723ba92ff5f018cfea86f43ff3c6f.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "TANK AMÉRICAINE WATCH",
      "descrip": "Mini model, quartz movement, steel, leather",
      "price": "$3,400.00"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw090715ed/images/large/f9cc9097625353888faecb288a323df3.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "TANK AMÉRICAINE WATCH",
      "descrip": "Small model, quartz movement, steel, leather",
      "price": "$4,000.00"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dwe141a210/images/large/d050ffa6fa6f5c4f905bc99366da45eb.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "TANK AMÉRICAINE WATCH",
      "descrip": "Large model, automatic mechanical movement, steel, leather",
      "price": "$6,250.00"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw192f54b9/images/large/25601b47a86c5c58bf70a893e2574242.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "TANK FRANÇAISE WATCH",
      "descrip": "Small model, quartz movement, steel",
      "price": "$3,700.00"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw8851c45b/images/large/c16c43cda84a51bbad3a34f26c164dd3.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "TANK FRANÇAISE WATCH",
      "descrip": "Medium model, quartz movement, steel",
      "price": "$4,700.00"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw378d2028/images/large/980cbb62d27c5873bc623a708168286f.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "TANK FRANÇAISE WATCH",
      "descrip": "Large model, automatic mechanical movement, steel",
      "price": "$5,750.00"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw9a4422a6/images/large/e1241beccaed5f2083389c35e01ed222.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "TANK FRANÇAISE WATCH",
      "descrip": "Small model, quartz movement, yellow gold",
      "price": "$22,300.00"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw09bde499/images/large/592b3a19f40b5df4ab8be11f3cdf9afa.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "TANK FRANÇAISE WATCH",
      "descrip": "Medium model, quartz movement, yellow gold, diamonds",
      "price": "$32,800.00"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw49a3d771/images/large/dbe362d0bc8355d4b42be3eea9b21975.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "TANK LOUIS CARTIER WATCH",
      "descrip": "Small model, quartz movement, yellow gold, leather",
      "price": "$10,200.00"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw8c912177/images/large/e549519ad4075daf8d7b6de5254bd170.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "TANK LOUIS CARTIER WATCH",
      "descrip": "Large model, quartz movement, 18K yellow gold, leather",
      "price": "$11,500.00"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw3230f44b/images/large/e39f7697923d53ec8edcd3d44844a8a5.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "TANK LOUIS CARTIER WATCH",
      "descrip": "Large model, hand-wound mechanical movement, rose gold, leather",
      "price": "$13,000.00"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw554dfb38/images/large/688bda3962b65379b0f0db0daa28525e.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "TANK MUST WATCH",
      "descrip": "Small model, high autonomy quartz movement, steel, diamonds, leather",
      "price": "$6,000.00"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw3da5afe4/images/large/df16e2dad40b5b1faa9f4293ee72c0da.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "TANK MUST WATCH",
      "descrip": "Large model, high autonomy quartz movement, steel, diamonds, leather",
      "price": "$6,850.00"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dwb2ea5026/images/large/5a6e30c284a059c2bb66ec1cd5660cc7.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "TANK MUST WATCH",
      "descrip": "Small model, high autonomy quartz movement, steel",
      "price": "$3,650.00"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw4d353bec/images/large/d1d563b13c1c5d3dbec779d1270cfe1f.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "TANK MUST WATCH",
      "descrip": "Large model, high autonomy quartz movement, steel",
      "price": "$3,850.00"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw192bfe9f/images/large/54402c5a408b55a18a1ee4939266b244.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "TANK MUST WATCH",
      "descrip": "Large model, quartz movement, steel, leather",
      "price": "$3,450.00"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw1795c276/images/large/401b3628e15a551bbd56c247eb73da86.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "TANK MUST WATCH",
      "descrip": "Small model, high autonomy quartz movement, steel, leather",
      "price": "$3,300.00"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw49374306/images/large/a81a5647864359bc858e4c3e44be23c8.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "TANK MUST WATCH",
      "descrip": "Extra-large model, automatic movement, steel, leather",
      "price": "$5,000.00"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw58797613/images/large/a0e111d6b0875fd8a6cbaad08c65dd2e.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "TANK AMÉRICAINE WATCH",
      "descrip": "Mini model, quartz movement, white gold, diamonds",
      "price": "$53,500.00"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dwba7ca6be/images/large/bda04b1568fe51179c3ee708be2919bc.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "TANK MUST SOLARBEAT™ WATCH",
      "descrip": "Small model, SolarBeat™ photovoltaic movement, steel, strap made with non-animal leather",
      "price": "$3,300.00"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dwdc473dcf/images/large/78cf1bfbbbe853d9ae2fc7ec90a0789d.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "TANK LOUIS CARTIER WATCH",
      "descrip": "Large model, hand-wound mechanical movement, rose gold, diamonds, leather",
      "price": "$24,800.00"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw08b17d38/images/large/7275b483f0e258299aaf9cf59301208f.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "TANK MUST WATCH",
      "descrip": "Extra-large model, automatic movement, steel",
      "price": "$5,350.00"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw520930f8/images/large/03abaabd2c58589d901d2445fbf65c94.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "TANK MUST WATCH",
      "descrip": "Large model, quartz movement, steel, leather",
      "price": "$3,450.00"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw259a6b79/images/large/6509d803c319508a978cd5c2e1303209.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "TANK LOUIS CARTIER WATCH",
      "descrip": "Large model, hand-wound mechanical movement, yellow gold, leather",
      "price": "$13,000.00"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw3e746b72/images/large/19d789a8753655ff877417681742ba2a.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "TANK LOUIS CARTIER WATCH",
      "descrip": "Small model, hand-wound mechanical movement, rose gold",
      "price": "$11,700.00"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw3ff181db/images/large/74c394c8a0d950dfb88d04e684af1d30.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "TANK MUST WATCH",
      "descrip": "Small model, quartz movement, steel, leather",
      "price": "$3,300.00"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw9a3619ad/images/large/fbbacf4b979f5f99898be6e6ed5239b5.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "TANK LOUIS CARTIER WATCH",
      "descrip": "Large model, hand-wound mechanical movement, rose gold, leather",
      "price": "$13,900.00"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw899c56a9/images/large/f5043f17d0b95f008013cd5ade491617.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "TANK FRANÇAISE WATCH",
      "descrip": "Medium model, quartz movement, steel, diamonds",
      "price": "$9,800.00"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw61e5c842/images/large/930631d4e9bb50659ecd65786af84f6b.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "TANK LOUIS CARTIER WATCH",
      "descrip": "Large model, hand-wound mechanical movement, yellow gold, leather",
      "price": "$13,000.00"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dwa973b2da/images/large/dc3549a4dce05d3a995961c270dc538c.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "TANK FRANÇAISE WATCH",
      "descrip": "Small model, quartz movement, steel, diamonds",
      "price": "$8,500.00"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw7eaba1ef/images/large/dce3bea465475924a633747dfb284525.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "TANK AMÉRICAINE WATCH",
      "descrip": "Large model, automatic mechanical movement, rose gold, leather",
      "price": "$16,800.00"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw13419292/images/large/25db3a6148c55924b12ac41a0cf349ca.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "TANK LOUIS CARTIER WATCH",
      "descrip": "Large model, hand-wound mechanical movement, yellow gold, leather",
      "price": "$13,000.00"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dwfb44f020/images/large/319be0e077c9532e9a1ef5c239bb2283.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "TANK AMÉRICAINE WATCH",
      "descrip": "Mini model, quartz movement, rose gold, leather",
      "price": "$7,750.00"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw274b5077/images/large/bc2ac06914025e758cc37e9abb5b0116.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "TANK LOUIS CARTIER WATCH",
      "descrip": "Large model, hand-wound mechanical movement, yellow gold, leather",
      "price": "$13,900.00"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw26b8d7de/images/large/4d9afdc6bc475e97aa331391e135d0fb.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "TANK AMÉRICAINE WATCH",
      "descrip": "Small model, quartz movement, rose gold, leather",
      "price": "$11,600.00"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dwc74efbd7/images/large/6af4df91fbd65ce0827982c4f5089ce9.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "TANK AMÉRICAINE WATCH",
      "descrip": "Mini model, quartz movement, rose gold, diamonds",
      "price": "$26,800.00"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dwdc42d37b/images/large/f56c08b6d784591c84001deaabba9fbd.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "TANK AMÉRICAINE WATCH",
      "descrip": "Small model, quartz movement, rose gold, diamonds",
      "price": "$31,600.00"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw7a5b640c/images/large/14c5441c971f5664988facab03fa8116.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "TANK LOUIS CARTIER WATCH",
      "descrip": "Small model, hand-wound mechanical movement, rose gold, diamonds, leather",
      "price": "$19,600.00"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dwf80ac005/images/large/2e177a65ee0958c196ef20f722ce6fb9.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "TANK AMÉRICAINE WATCH",
      "descrip": "Mini model, quartz movement, rose gold, diamonds, leather",
      "price": "$15,000.00"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw298c8284/images/large/749c3c6406f85c7ebc9bc814c2876b1b.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "TANK AMÉRICAINE WATCH",
      "descrip": "Small model, quartz movement, rose gold, diamonds, leather",
      "price": "$19,300.00"
    }
  ];
  collectionsCartierAll: any = this.collectionsCartier;
  collectioncartierantosde: any =  [
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dwca8749ac/images/large/3bde336380345054afd0f92e1c6aefb0.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "SANTOS DE CARTIER WATCH",
      "descrip": "Large model, automatic movement, steel, interchangeable metal and leather bracelets",
      "price": "$7,750.00"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dwe23154e6/images/large/5f00dc8d8a155d4d87be155fdef5eb39.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "SANTOS DE CARTIER WATCH",
      "descrip": "Medium model, automatic movement, steel, interchangeable metal and leather straps",
      "price": "$7,050.00"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw848774a7/images/large/ab421ed7d4355cda90cda269108e7dc0.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "SANTOS DE CARTIER WATCH",
      "descrip": "Medium model, automatic movement, steel, interchangeable metal and leather bracelets",
      "price": "$7,050.00"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw76ac0471/images/large/75d079d25fcd565181d6aadfc4e3d73b.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "SANTOS DE CARTIER WATCH",
      "descrip": "Medium model, automatic movement, yellow gold, steel, interchangeable metal and leather bracelets",
      "price": "$10,300.00"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw6c2c39dc/images/large/81d89e287ba25ec381f6151a8e584a7d.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "SANTOS DE CARTIER WATCH",
      "descrip": "Large model, automatic movement, rose gold, interchangeable metal and leather bracelets",
      "price": "$36,100.00"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw644c2a6f/images/large/39ba249c3c0e520daf50fc69d7f6b85e.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "SANTOS DE CARTIER WATCH",
      "descrip": "Large model, automatic movement, yellow gold, interchangeable metal and leather bracelets",
      "price": "$36,100.00"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw57351681/images/large/bef2c91283b35b56a0b0eee46615f033.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "SANTOS-DUMONT WATCH",
      "descrip": "Large model, quartz movement, steel, leather",
      "price": "$4,200.00"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw5cc7e381/images/large/af772a00930158deb86d91e98ac01c6b.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "SANTOS DE CARTIER WATCH",
      "descrip": "Large model, automatic movement, steel, interchangeable metal and leather bracelets",
      "price": "$7,750.00"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dwcf3e7863/images/large/ed3be62019c45211816b9e1ed471a834.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "SANTOS DE CARTIER WATCH",
      "descrip": "Large model, automatic movement, yellow gold, steel, interchangeable metal and leather bracelets",
      "price": "$11,600.00"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw8318c5e6/images/large/df46aa199e61514597ab0aabd544e1a2.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "SANTOS-DUMONT WATCH",
      "descrip": "Small model, quartz movement, steel, leather",
      "price": "$3,900.00"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dwa80735c1/images/large/33d02f9e0c3c5afb8911d76c9381b769.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "SANTOS-DUMONT WATCH",
      "descrip": "Large model, quartz movement, yellow gold, leather",
      "price": "$13,000.00"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw9dccf249/images/large/d133a600656e5290b377d6e8a23eb7e0.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "SANTOS DE CARTIER WATCH",
      "descrip": "Large model, automatic movement, steel, interchangeable metal and leather bracelets",
      "price": "$7,750.00"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw365af3db/images/large/c0ae8a1d2713509e828829afa855ff05.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "SANTOS DE CARTIER WATCH",
      "descrip": "Large model, automatic movement, steel, ADLC, interchangeable rubber and leather bracelets",
      "price": "$8,300.00"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw09e1df9b/images/large/a3b2fdde384359bfb31cd128f3a440d9.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "SANTOS DE CARTIER WATCH",
      "descrip": "Medium model, automatic movement, steel, interchangeable metal and leather straps",
      "price": "$7,050.00"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw70137dc7/images/large/1575140e50d25eb1ba40b63c347843c1.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "SANTOS DE CARTIER CHRONOGRAPH WATCH",
      "descrip": "Extra-large model, automatic movement, yellow gold, steel, interchangeable metal and rubber bracelets",
      "price": "$14,700.00"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dwb0cddd03/images/large/8c6684f9613a5b7e9af92730d25ab265.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "SANTOS DE CARTIER WATCH",
      "descrip": "Medium model, automatic, steel, diamonds, interchangeable metal and leather bracelets",
      "price": "$13,100.00"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dwd70af2f1/images/large/d9b3a025b23b52bbbf23dd3e43a4ce01.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "SANTOS-DUMONT WATCH",
      "descrip": "Small model, quartz movement, rose gold, steel, leather",
      "price": "$5,600.00"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw13a7906b/images/large/5f734ac42a595781ba76e532f15e880e.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "SANTOS DE CARTIER WATCH",
      "descrip": "Large model, automatic movement, steel, ADLC, interchangeable metal and rubber bracelets",
      "price": "$8,050.00"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw4a44938a/images/large/98b2f25d81785018b214d8b69032806a.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "SANTOS-DUMONT WATCH",
      "descrip": "Large model, quartz movement, rose gold, steel, leather",
      "price": "$6,050.00"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dwbf35e9c2/images/large/d2337996f51958cc848b167cd4b620c8.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "SANTOS-DUMONT SKELETON WATCH WITH MICRO-ROTOR",
      "descrip": "Large model, automatic mechanical skeleton movement, steel, leather",
      "price": "$31,000.00"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw3a4af1e9/images/large/2a6b98879c2e5bbfa944d484b82ba813.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "SANTOS-DUMONT WATCH",
      "descrip": "Large model, quartz movement, yellow gold, steel, leather",
      "price": "$6,050.00"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw9b224e72/images/large/9ea5b30aa1d55caa9849db761f821aac.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "SANTOS-DUMONT WATCH",
      "descrip": "Extra-large model, hand-wound mechanical movement, steel, leather",
      "price": "$6,250.00"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw5f45dd1f/images/large/8e39bc63b3005f1394a7aa101c9a7471.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "SANTOS DE CARTIER WATCH",
      "descrip": "Medium model, automatic movement, steel, diamonds, blue dial, interchangeable metal and leather bracelets",
      "price": "$13,100.00"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw22c7a4bd/images/large/f1e995e706745ec199fc1864a2416656.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "SANTOS-DUMONT WATCH",
      "descrip": "Small model, quartz movement, rose gold, leather",
      "price": "$11,200.00"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dwb5a8ab24/images/large/c27593ecd63451b785881134fa9a1675.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "SANTOS DE CARTIER WATCH",
      "descrip": "Medium model, automatic movement, yellow gold, interchangeable metal and leather bracelets",
      "price": "$32,200.00"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dwbdf51199/images/large/d2f89696edf957dca20278291773435f.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "SANTOS DE CARTIER SKELETON WATCH",
      "descrip": "Large model, hand-wound mechanical movement, steel",
      "price": "$30,400.00"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dwbf7fb08b/images/large/b1549ef9670c5da3b4a0fb7513ab088f.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "SANTOS-DUMONT WATCH",
      "descrip": "Large model, quartz movement, rose gold, leather",
      "price": "$13,000.00"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw6b078143/images/large/e30a1352d1265ab28f1a24cb6b4d40c7.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "SANTOS DE CARTIER SKELETON WATCH",
      "descrip": "Large model, hand-wound mechanical movement, steel, ADLC, leather",
      "price": "$30,400.00"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dwa7de445e/images/large/01f7130d94a55a179d956f8e98fdd7c1.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "SANTOS-DUMONT WATCH",
      "descrip": "Extra-large model, hand-wound mechanical movement, rose gold, steel, leather",
      "price": "$8,800.00"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw387f35d9/images/large/6fdb518ae90c513bbc1a5a0c07ede9fc.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "SANTOS DE CARTIER WATCH",
      "descrip": "Medium model, automatic movement, rose gold, 2 interchangeable leather bracelets",
      "price": "$16,700.00"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw75b3b9d7/images/large/5884da0d032756379504c8d2aded249c.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "SANTOS DE CARTIER WATCH",
      "descrip": "Large model, automatic movement, rose gold, 2 interchangeable leather bracelets",
      "price": "$19,200.00"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw07233bbe/images/large/beaa67f6943d5ac79b183c3360a8d6fc.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "SANTOS DE CARTIER WATCH",
      "descrip": "Medium model, automatic movement, yellow gold, steel, diamonds, interchangeable metal and leather bracelets",
      "price": "$16,600.00"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw4e69606e/images/large/9f6947c5d96553deba75008ca3a960d2.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "SANTOS-DUMONT WATCH",
      "descrip": "Extra-large model, hand-wound mechanical movement, rose gold, leather",
      "price": "$16,800.00"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw09aeaa1b/images/large/c99db24cd3885c6c8bd5297dc1058be4.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "SANTOS DE CARTIER WATCH",
      "descrip": "Medium model, automatic movement, white gold, diamonds, 2 interchangeable leather bracelets",
      "price": "$43,300.00"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw40cd760f/images/large/4a531bfa66375d8d807fef7dc5006f88.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "SANTOS DE CARTIER SKELETON WATCH",
      "descrip": "Large model, hand-wound mechanical movement, rose gold",
      "price": "$68,000.00"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dwd115f284/images/large/0d8f6f9a575251669082fc569b2a50be.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "SANTOS DE CARTIER SKELETON WATCH",
      "descrip": "Large model, hand-wound mechanical movement, steel, interchangeable metal and leather bracelets",
      "price": "$31,500.00"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dwbdf51199/images/large/d2f89696edf957dca20278291773435f.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "SANTOS DE CARTIER SKELETON WATCH",
      "descrip": "Large model, hand-wound mechanical movement, steel, interchangeable metal and leather bracelets",
      "price": ""
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw24aaabe2/images/large/b67205d672445ce9a8f6bfb572606ab6.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "SANTOS DE CARTIER SKELETON WATCH",
      "descrip": "Large model, hand-wound mechanical movement, steel, interchangeable metal and rubber bracelets",
      "price": "$31,500.00"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw86d66706/images/large/e8d4b77c30415ea5bbe6c4b771c10ece.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "SANTOS DE CARTIER SKELETON WATCH",
      "descrip": "Large model, hand-wound mechanical movement, yellow gold, steel, leather",
      "price": "$35,300.00"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw8088c6e9/images/large/150ad2833e115855b2d810506c417e00.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "SANTOS DE CARTIER SKELETON WATCH",
      "descrip": "Large model, hand-wound mechanical movement, steel, interchangeable metal and leather bracelets",
      "price": "$31,500.00"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw793d4505/images/large/8d4e6c3ce36352ed8ff07f3841a83a9e.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "SANTOS-DUMONT SKELETON WATCH WITH MICRO-ROTOR",
      "descrip": "Large model, automatic mechanical skeleton movement, rose gold, leather",
      "price": "$40,400.00"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw71c58a73/images/large/0258ed56e4c9528d97e0657423484bf6.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "SANTOS DE CARTIER WATCH",
      "descrip": "Medium model, automatic movement, rose gold, diamonds, 2 interchangeable leather bracelets",
      "price": "$30,900.00"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw4404ffe7/images/large/ee5896f644365f968a935affe86f1059.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "SANTOS-DUMONT WATCH",
      "descrip": "Large model, quartz movement, rose gold, diamonds, leather",
      "price": "$22,300.00"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw29adcb54/images/large/5d97521ae1f3551e905d2f6963481d17.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "SANTOS DE CARTIER WATCH",
      "descrip": "Medium model, automatic movement, yellow gold, diamonds, 2 interchangeable leather bracelets",
      "price": "$30,900.00"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dwcd6c0135/images/large/c59bbd99981c56f0b06c1dcf2bc0fd02.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "SANTOS-DUMONT WATCH",
      "descrip": "Small model, quartz movement, rose gold, diamonds, leather",
      "price": "$19,200.00"
    }
  ]
  collectioncartierpanterede: any = [
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw0827525f/images/large/ad82bf201a005880b3f07c6a5bf7b2f8.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "PANTHÈRE DE CARTIER WATCH",
      "price": "$23,100.00",
      "descrip": "Small model, quartz movement, yellow gold"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw8fd55eb9/images/large/7b5cb2dd0dc75bc39fb6974103b95faf.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "PANTHÈRE DE CARTIER WATCH",
      "price": "$31,900.00",
      "descrip": "Medium model, quartz movement, rose gold, diamonds"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dwac19c319/images/large/ce5d9ffc84885655a16be75417d84a3b.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "PANTHÈRE DE CARTIER WATCH",
      "price": "$9,100.00",
      "descrip": "Medium model, quartz movement, yellow gold, steel"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw21be18f2/images/large/4b7e4f32a9c05bc4ac8f7630d8b05e5c.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "PANTHÈRE DE CARTIER WATCH",
      "price": "$8,350.00",
      "descrip": "Small model, quartz movement, yellow gold, steel"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dwab1f8bff/images/large/81c2b64b82b251c791e413a1955b7a28.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "PANTHÈRE DE CARTIER WATCH, SMALL MODEL",
      "price": "$4,150.00",
      "descrip": "Small model, quartz movement, steel"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dwe71ba8d9/images/large/6b31cc78e69254c89469bd4149d7133b.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "PANTHÈRE DE CARTIER WATCH",
      "price": "$3,300.00",
      "descrip": "Mini model, quartz movement, steel"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw01feb1df/images/large/28850fc1da645be399a0034a525b97b5.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "PANTHÈRE DE CARTIER WATCH",
      "price": "$8,400.00",
      "descrip": "Small model, quartz movement, steel, diamonds"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dweb8af471/images/large/8d8331888c455408852eee436d2f4877.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "PANTHÈRE DE CARTIER WATCH",
      "price": "$41,300.00",
      "descrip": "Small model, quartz movement, rose gold, diamonds"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw0ab33e02/images/large/a6f9acd09cc85620a50be7e1f8c48ac5.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "PANTHÈRE DE CARTIER WATCH",
      "price": "$5,200.00",
      "descrip": "Medium model, quartz movement, steel"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw3719e945/images/large/27ae33c9002752d6a60fab8974a4c8ee.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "LA PANTHÈRE DE CARTIER WATCH",
      "price": "$47,200.00",
      "descrip": "Small model, quartz movement, rose gold, diamonds"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw9ed51882/images/large/c05e442d1e515bc5b129af2422474761.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "PANTHÈRE DE CARTIER WATCH",
      "price": "$14,000.00",
      "descrip": "Medium model, quartz movement, rose gold, steel, diamonds"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw2e845260/images/large/e46af901c1af5bd28eb465e10e4fab06.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "PANTHÈRE DE CARTIER WATCH",
      "price": "$31,900.00",
      "descrip": "Medium model, quartz movement, yellow gold, diamonds"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dwacc1ddc6/images/large/56cadb0047665e008737943a7e5e32bf.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "PANTHÈRE DE CARTIER WATCH",
      "price": "$9,650.00",
      "descrip": "Medium model, quartz movement, steel, diamonds"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dwfdc40ba0/images/large/84d3c91b6bf2534db4999c8503330c7d.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "PANTHÈRE DE CARTIER WATCH",
      "price": "$12,600.00",
      "descrip": "Small model, quartz movement, rose gold, steel, diamonds"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dwe71ba8d9/images/large/6b31cc78e69254c89469bd4149d7133b.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "PANTHÈRE DE CARTIER WATCH",
      "price": "$3,300.00",
      "descrip": "Mini model, quartz movement, steel"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw4dcb3e59/images/large/2ac3f613bdf75cb9a9d78cf0b8aba03c.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "PANTHÈRE DE CARTIER WATCH",
      "price": "$21,000.00",
      "descrip": "Mini model, quartz movement, yellow gold"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dwbbcbe444/images/large/1fbd2e230710511ba77c11bc025471fe.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "PANTHÈRE DE CARTIER WATCH",
      "price": "$26,500.00",
      "descrip": "Medium model, quartz movement, yellow gold"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw6a59e054/images/large/4b95da8ec3285c039865ea54a04aba80.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "PANTHÈRE DE CARTIER WATCH",
      "price": "$27,500.00",
      "descrip": "Small model, quartz movement, yellow gold, diamonds"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw21be18f2/images/large/4b7e4f32a9c05bc4ac8f7630d8b05e5c.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "PANTHÈRE DE CARTIER WATCH",
      "price": "$8,350.00",
      "descrip": "Small model, quartz movement, yellow gold, steel"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dwab1f8bff/images/large/81c2b64b82b251c791e413a1955b7a28.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "PANTHÈRE DE CARTIER WATCH",
      "price": "$4,150.00",
      "descrip": "Small model, quartz movement, steel"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dwdedf9ecf/images/large/4531b49ca48154fcb8b471ecd536883e.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "LA PANTHÈRE DE CARTIER WATCH",
      "price": "$82,500.00",
      "descrip": "22.2 mm, quartz movement, yellow gold, diamonds, metal strap"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw99c6dbbc/images/large/a5531d162d0e5d46a0ee02e645fca443.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "PANTHÈRE DE CARTIER WATCH",
      "price": "$32,800.00",
      "descrip": "Mini model, quartz movement, white gold"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw0376ae6a/images/large/443f96ceec9a5159a5ee9a8d7c874e6a.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "PANTHÈRE DE CARTIER WATCH",
      "price": "$134,000.00",
      "descrip": "Medium model, quartz movement, white gold, diamonds"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw6144c012/images/large/0f2780e9455254dd9e06ff34b06e54aa.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "PANTHÈRE DE CARTIER WATCH",
      "price": "$27,800.00",
      "descrip": "Small model, quartz movement, yellow gold, diamonds"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw9e9a5cc4/images/large/7f4d7cdb638a54f59b7f345a59dc1cdb.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "LA PANTHÈRE DE CARTIER WATCH",
      "price": "$31,500.00",
      "descrip": "Small model, quartz movement, yellow gold, diamonds, tsavorites, lacquer, leather"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dwfdc40ba0/images/large/84d3c91b6bf2534db4999c8503330c7d.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "PANTHÈRE DE CARTIER WATCH",
      "price": "$12,600.00",
      "descrip": "Small model, quartz movement, rose gold, steel, diamonds"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw310ad7a8/images/large/c759c3dac4f25fa6aa4bea8b412c462a.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "PANTHÈRE DE CARTIER WATCH",
      "price": "$23,100.00",
      "descrip": "Small model, quartz movement, rose gold"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dwb964df7e/images/large/7c03e839497c58399d7e07cc6e56472d.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "LA PANTHÈRE DE CARTIER WATCH",
      "price": "$268,000.00",
      "descrip": "23.6 mm, rhodiumized white gold, diamonds"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw01feb1df/images/large/28850fc1da645be399a0034a525b97b5.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "PANTHÈRE DE CARTIER WATCH",
      "price": "$8,400.00",
      "descrip": "Small model, quartz movement, steel, diamonds"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw568e881a/images/large/341c480701f95bd1bc841e8e0b7c0f31.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "LA PANTHÈRE DE CARTIER WATCH",
      "price": "$47,200.00",
      "descrip": "Small model, quartz movement, yellow gold, diamonds"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw1e6c8502/images/large/b5446e7bd8b858f4bd2b8aa7accfb851.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "PANTHÈRE DE CARTIER WATCH",
      "price": "$23,300.00",
      "descrip": "Small model, quartz movement, yellow gold"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw16744d54/images/large/3092e923008b50178b5e53992ed19f97.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "PANTHÈRE DE CARTIER WATCH",
      "price": "$26,500.00",
      "descrip": "Medium model, quartz movement, rose gold"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dwa8b160ff/images/large/cc9a760244805e55acf744bf523c1cb8.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "PANTHÈRE DE CARTIER WATCH",
      "price": "$27,500.00",
      "descrip": "Small model, quartz movement, rose gold, diamonds"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw8027b4c4/images/large/36f36ed6be335ba7ad5883011065a65b.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "PANTHÈRE DE CARTIER WATCH",
      "price": "$95,000.00",
      "descrip": "Small model, quartz movement, white gold, diamonds"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dwdeaf141a/images/large/fcfcb49d804851aa82dadffde0814f4d.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "PANTHÈRE DE CARTIER WATCH",
      "price": "$161,000.00",
      "descrip": "Medium model, quartz movement, white gold, diamonds, enamel"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw5fa873ed/images/large/5bd5a6f5dfd45c638a7f643fa1affa9e.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "PANTHÈRE DE CARTIER WATCH",
      "price": "$32,400.00",
      "descrip": "Medium model, quartz movement, yellow gold, diamonds"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dwf26c63b6/images/large/56f6e640f71a579b8ca5a8cc94203a35.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "PANTHÈRE DE CARTIER WATCH",
      "price": "$84,000.00",
      "descrip": "Mini model, quartz movement, white gold, diamonds"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw6603fe24/images/large/a609a575670d5ce38ddf050bdf51b96d.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "PANTHÈRE DE CARTIER WATCH",
      "price": "$43,600.00",
      "descrip": "Cuff, quartz movement, yellow gold"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw4301af11/images/large/a8828d2e4f225c2f80c209f113e5d9f9.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "PANTHÈRE DE CARTIER WATCH",
      "price": "$27,900.00",
      "descrip": "Small model, quartz movement, rose gold, diamonds"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dwa7ddd4da/images/large/0c0939c8c0495588978b4b0cdbff4fc2.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "LA PANTHÈRE DE CARTIER WATCH",
      "price": "$121,000.00",
      "descrip": "18mm, quartz movement, yellow gold, diamonds, emeralds, lacquer"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw38e98c75/images/large/7b9cb26fc15754159e942baff47c4825.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "LA PANTHÈRE DE CARTIER WATCH",
      "price": "$195,000.00",
      "descrip": "23.6 mm, rhodiumized white gold, diamonds"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw790325a0/images/large/3c538aca424c5a7888525f257b41a331.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "PANTHÈRE DE CARTIER WATCH",
      "price": "$78,500.00",
      "descrip": "Mini model, quartz movement, rose gold, diamonds"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw76473d27/images/large/8d5438101f4151a0a8c162f381576d81.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "LA PANTHÈRE DE CARTIER WATCH",
      "price": "$70,000.00",
      "descrip": "23.6 mm, yellow gold, diamonds"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw759236e1/images/large/9afca15e1097546f8f9200f8960819f8.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "LA PANTHÈRE DE CARTIER WATCH",
      "price": "$62,000.00",
      "descrip": "18mm, quartz movement, yellow gold, diamonds, tsavorites, lacquer"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw7c78e74a/images/large/119e69ad79745db89705e6d2e5effdbc.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "LA PANTHÈRE DE CARTIER WATCH",
      "price": "$99,000.00",
      "descrip": "23.6 mm, quartz movement, 18K yellow gold, diamonds, metal bracelet"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dwb5405178/images/large/f2df4194ad2c5e39ae4c91eec5b9a3d4.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "LA PANTHÈRE DE CARTIER WATCH",
      "price": "$82,500.00",
      "descrip": "22.2 mm, quartz movement, rose gold, diamonds, metal strap"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dwc42babd7/images/large/c90bb1029fa55e66a3acd37effc3ae6f.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "LA PANTHÈRE DE CARTIER WATCH",
      "price": "$78,000.00",
      "descrip": "23.6 mm, quartz movement, yellow gold, diamonds, metal bracelet"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw258acdfd/images/large/6d93f2d37ef45c5098a7ade484db4190.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "LA PANTHÈRE DE CARTIER WATCH",
      "price": "$59,000.00",
      "descrip": "23.6 mm, quartz movement, 18K yellow gold, diamonds, metal bracelet"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dwe5575298/images/large/35605deecd0859a286c63fc37d4db63c.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "LA PANTHÈRE DE CARTIER WATCH",
      "price": "$31,500.00",
      "descrip": "Small model, quartz movement, rose gold, diamonds, leather"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dwcb3d539b/images/large/89299e3b482b5cbaa1bf0c98226b6c48.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "LA PANTHÈRE DE CARTIER WATCH",
      "price": "$113,000.00",
      "descrip": "23.6 mm, rhodiumized white gold, diamonds, leather"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw759236e1/images/large/9afca15e1097546f8f9200f8960819f8.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "LA PANTHÈRE DE CARTIER WATCH",
      "price": "$62,000.00",
      "descrip": "Small model, quartz movement, yellow gold, diamonds, tsavorites, lacquer"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw759236e1/images/large/9afca15e1097546f8f9200f8960819f8.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "LA PANTHÈRE DE CARTIER WATCH",
      "price": "$62,000.00",
      "descrip": "Small model, quartz movement, yellow gold, diamonds, tsavorites, lacquer"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dwa7ddd4da/images/large/0c0939c8c0495588978b4b0cdbff4fc2.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "LA PANTHÈRE DE CARTIER WATCH",
      "price": "$121,000.00",
      "descrip": "Small model, quartz movement, yellow gold, diamonds, emeralds, lacquer"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dwa7ddd4da/images/large/0c0939c8c0495588978b4b0cdbff4fc2.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "LA PANTHÈRE DE CARTIER WATCH",
      "price": "$121,000.00",
      "descrip": "Small model, quartz movement, yellow gold, diamonds, emeralds, lacquer"
    }
  ]
  collectioncartierballonde: any = [
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw8d817235/images/large/795b74f49c0e57a5b4eded3c83836427.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "BALLON BLEU DE CARTIER WATCH",
      "price": "$13,800.00",
      "descrip": "33 mm, automatic mechanical movement, steel, diamonds"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw3e4f8cff/images/large/55150c035135515298963e0e6115b749.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "BALLON BLEU DE CARTIER WATCH",
      "price": "$14,800.00",
      "descrip": "36 mm, automatic mechanical movement, steel, diamonds"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw5e1293fe/images/large/e4d3cab83d375b0a890932933e090eba.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "BALLON BLEU DE CARTIER WATCH",
      "price": "$6,200.00",
      "descrip": "33 mm, mechanical movement with automatic winding, steel"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw92e97cf6/images/large/222973e707df5810bece7a619c98b6e9.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "BALLON BLEU DE CARTIER WATCH",
      "price": "$7,750.00",
      "descrip": "33 mm, mechanical movement with automatic winding, steel, diamonds"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw430bbec9/images/large/2af2b223af6e5ed986e0f16a70d53360.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "BALLON BLEU DE CARTIER WATCH",
      "price": "$6,600.00",
      "descrip": "36 mm, mechanical movement with automatic winding, steel"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dwf9455bbc/images/large/8508fa30759f54b493734c05f6654a01.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "BALLON BLEU DE CARTIER WATCH",
      "price": "$11,900.00",
      "descrip": "33 mm, automatic movement, steel, diamonds"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw4f98496e/images/large/1ff50b4892c75ea499b690ce9b1e25f4.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "BALLON BLEU DE CARTIER WATCH",
      "price": "$21,400.00",
      "descrip": "33mm, automatic movement, rose gold, diamonds, leather"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw9e964acd/images/large/1a3c856d38a955a3bc8daac4fdf9cdf8.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "BALLON BLEU DE CARTIER WATCH",
      "price": "$12,900.00",
      "descrip": "36 mm, mechanical movement with automatic winding, steel, diamonds"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw1c9322fb/images/large/48292de307c65d8b9199fe5beaaef3e7.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "BALLON BLEU DE CARTIER WATCH",
      "price": "$7,000.00",
      "descrip": "40mm, automatic movement, steel"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dwd726addf/images/large/e0081ab909fc5b348967f7df40807c1a.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "BALLON BLEU DE CARTIER WATCH",
      "price": "$16,500.00",
      "descrip": "33 mm, mechanical movement with automatic winding, rose gold, steel, diamonds"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw61cef8f1/images/large/29134eb36f5c53729160d1ae335e914a.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "BALLON BLEU DE CARTIER WATCH",
      "price": "$7,200.00",
      "descrip": "42 mm, mechanical movement with automatic winding, steel"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw84d6d78d/images/large/1144383e4e8f51adacada91636336fa6.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "BALLON BLEU DE CARTIER WATCH",
      "price": "$11,900.00",
      "descrip": "33 mm, mechanical movement with automatic winding, steel, diamonds"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw16c26e53/images/large/5b1e43c37327544e81fb07739732ef4c.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "BALLON BLEU DE CARTIER WATCH",
      "price": "$9,500.00",
      "descrip": "33 mm, automatic mechanical movement, yellow gold, steel"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dwa2e1479a/images/large/1cd1772356fe54aba3f4f3c418edc621.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "BALLON BLEU DE CARTIER WATCH",
      "price": "$6,200.00",
      "descrip": "33 mm, automatic mechanical movement, steel"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw129689a8/images/large/b96465b94cfb556c836163b1260d7930.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "BALLON BLEU DE CARTIER WATCH",
      "price": "$10,700.00",
      "descrip": "36 mm, automatic mechanical movement, yellow gold, steel"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw5c989c09/images/large/32b4de94767a5960852bb6d28f170daa.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "BALLON BLEU DE CARTIER WATCH",
      "price": "$6,750.00",
      "descrip": "42 mm, steel, leather"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw9be0942d/images/large/e0db68c76233568b8ef0347755f821d5.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "BALLON BLEU DE CARTIER WATCH",
      "price": "$6,750.00",
      "descrip": "42 mm, steel, leather"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw98cf62f1/images/large/0906b2c26ed053bbaaa68b4e39e4633a.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "BALLON BLEU DE CARTIER WATCH",
      "price": "$5,050.00",
      "descrip": "28 mm, quartz movement, steel"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw7783697d/images/large/2409fcd4661252f0a991c9f707173553.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "BALLON BLEU DE CARTIER WATCH",
      "price": "$17,600.00",
      "descrip": "42mm, automatic movement, rose gold, leather"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw9b39fe72/images/large/bc2dd3b3caf85cec8dee5e773a0b51ef.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "BALLON BLEU DE CARTIER WATCH",
      "price": "$21,400.00",
      "descrip": "33 mm, automatic movement, 18K rose gold, diamonds, leather"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw5eb3d1f0/images/large/06ed472b9e1f52329e098150af83d15a.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "BALLON BLEU DE CARTIER WATCH",
      "price": "$17,600.00",
      "descrip": "36 mm, automatic mechanical movement, rose gold, diamonds, leather"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dwacb2fe65/images/large/5d26502a73e054279f4d079dc8a49820.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "BALLON BLEU DE CARTIER WATCH",
      "price": "$15,500.00",
      "descrip": "36mm, automatic movement, rose gold, leather"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dwc6b370da/images/large/00758445c66f565b820eda1144f10eaf.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "BALLON BLEU DE CARTIER WATCH",
      "price": "$6,500.00",
      "descrip": "40mm, automatic movement, steel, leather"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dwc79eaea4/images/large/c417431ad3165df7888890f6fa8d1aa3.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "BALLON BLEU DE CARTIER WATCH",
      "price": "$6,200.00",
      "descrip": "33 mm, automatic movement, steel"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dwa6e667b3/images/large/d71dc26ac3b95a34976326d9bbda8af6.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "BALLON BLEU DE CARTIER WATCH",
      "price": "$6,600.00",
      "descrip": "28 mm, quartz movement, steel, diamonds"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw85c35190/images/large/7dd8cbf5aca85e5dac5a3dce6fd62747.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "BALLON BLEU DE CARTIER WATCH",
      "price": "$41,200.00",
      "descrip": "36 mm, mechanical movement with automatic winding, yellow gold, diamonds"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw59330727/images/large/83bb260b7ed1593b93d728ccc031e93a.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "BALLON BLEU DE CARTIER WATCH",
      "price": "$17,600.00",
      "descrip": "42mm, automatic movement, rose gold, leather"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dwbf162569/images/large/7887da32908a5a56ad74763dd16c42f5.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "BALLON BLEU DE CARTIER WATCH",
      "price": "$5,800.00",
      "descrip": "33 mm, steel, leather"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dwfe86c790/images/large/68116c5fa8e658339847fe2ed499721b.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "BALLON BLEU DE CARTIER WATCH",
      "price": "$6,050.00",
      "descrip": "36 mm, steel, leather"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw1d5b191a/images/large/801b5db8adee542ab640295f536250bb.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "BALLON BLEU DE CARTIER WATCH",
      "price": "$13,600.00",
      "descrip": "33mm, automatic movement, rose gold, leather"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw342ebe9c/images/large/ed8945a7debe5c3da5c38de8e74896d4.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "BALLON BLEU DE CARTIER WATCH",
      "price": "$10,700.00",
      "descrip": "36 mm, mechanical movement with automatic winding, rose gold, steel"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dwb276d0d0/images/large/941118bb57d859da8d7a0860ded34210.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "BALLON BLEU DE CARTIER WATCH",
      "price": "$32,100.00",
      "descrip": "36 mm, mechanical movement with automatic winding, yellow gold"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw67aa8ae3/images/large/2a918b5f434b5a0da3f034881029cd7c.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "BALLON BLEU DE CARTIER WATCH",
      "price": "$9,500.00",
      "descrip": "33 mm, mechanical movement with automatic winding, rose gold, steel"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw168a5f75/images/large/488ae9c7256b525c8cbd5f2e3d5af156.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "BALLON BLEU DE CARTIER WATCH",
      "price": "$12,100.00",
      "descrip": "42 mm, automatic mechanical movement, yellow gold, steel"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw1afed038/images/large/a7812fb982b250a1ab3c30b03fa45e99.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "BALLON BLEU DE CARTIER WATCH",
      "price": "$11,900.00",
      "descrip": "33mm, automatic mechanical movement, steel, diamonds"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw00fd3ee1/images/large/dc447b50435954be956ac16f803b5916.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "BALLON BLEU DE CARTIER WATCH",
      "price": "$26,100.00",
      "descrip": "33 mm, mechanical movement with automatic winding, yellow gold"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw6296aa88/images/large/bb150628b33b5a8f90eaa1a2e74cf145.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "BALLON BLEU DE CARTIER WATCH",
      "price": "$16,500.00",
      "descrip": "40 mm, automatic movement, 18K Rose gold, leather"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw0f4efc6e/images/large/5cbc9d6415245532919be4f6e2156991.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "BALLON BLEU DE CARTIER WATCH",
      "price": "$7,000.00",
      "descrip": "40mm, automatic movement, steel"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw3b7fa7fe/images/large/9630f83510c7548c82965a545949ae15.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "BALLON BLEU DE CARTIER WATCH",
      "price": "$12,100.00",
      "descrip": "42 mm, mechanical movement with automatic winding, rose gold, steel"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw82a93751/images/large/b76dd5407ac25c8ea4546053dc59728e.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "BALLON BLEU DE CARTIER WATCH",
      "price": "$10,100.00",
      "descrip": "28 mm, quartz movement, steel, diamonds"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dwaaba9106/images/large/38e30e0be43a51c3b5659854d70ad623.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "BALLON BLEU DE CARTIER WATCH",
      "price": "$32,900.00",
      "descrip": "33 mm, mechanical movement with automatic winding, yellow gold, diamonds"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw893c4cb6/images/large/2822b4f7e1fd58d6930401421c02050b.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "BALLON BLEU DE CARTIER WATCH",
      "price": "$7,000.00",
      "descrip": "40mm, automatic movement, steel"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dwf7a18e6d/images/large/01a5d9adbdbf577e9f4f068ebfaeca15.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "BALLON BLEU DE CARTIER WATCH",
      "price": "$29,500.00",
      "descrip": "40mm, automatic movement, rose gold, diamonds, leather"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw935fd858/images/large/f61f723ec43f5f4685054c45a1d0dc59.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "BALLON BLEU DE CARTIER WATCH",
      "price": "$25,800.00",
      "descrip": "36mm, automatic movement, rose gold, diamonds, leather"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dwacfa42da/images/large/38f839db06cc57a7ac503e17e07d218b.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "BALLON BLEU DE CARTIER WATCH",
      "price": "$33,300.00",
      "descrip": "40mm, automatic movement, rose gold"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dwaf9fdab3/images/large/44647be2b4e952d8ac224429f225dfc5.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "BALLON BLEU DE CARTIER WATCH",
      "price": "$45,600.00",
      "descrip": "40mm, automatic movement, rose gold, diamonds"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dwd188acd8/images/large/b9b63444d70f541a8980789bc1d61a4d.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "BALLON BLEU DE CARTIER WATCH",
      "price": "$11,500.00",
      "descrip": "33 mm, mechanical movement with automatic winding, rose gold, steel, diamonds"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dwad1c6410/images/large/5ea2bf9e29bc5c0fb111bc01314e0824.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "BALLON BLEU DE CARTIER WATCH",
      "price": "$103,000.00",
      "descrip": "42mm, hand-wound mechanical movement, white gold, diamonds, leather"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dwf08a401e/images/large/7092c253914a54d5b85c1440b8b5f214.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "BALLON BLEU DE CARTIER WATCH",
      "price": "$17,600.00",
      "descrip": "36 mm, mechanical movement with automatic winding, rose gold, steel, diamonds"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw00ecbfa3/images/large/ec61167ca0515604bd2d481db10eb230.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "BALLON BLEU DE CARTIER WATCH",
      "price": "$26,100.00",
      "descrip": "33 mm, mechanical movement with automatic winding, rose gold"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw1b1e19ac/images/large/120d4b4f0268593881c66cbf43b9d074.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "BALLON BLEU DE CARTIER WATCH",
      "price": "$16,500.00",
      "descrip": "40 mm, automatic movement, 18K rose gold, leather"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dwa0df1fb9/images/large/7e47bf483e4a52e197fcc91d232fbd68.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "BALLON BLEU DE CARTIER WATCH",
      "price": "$35,500.00",
      "descrip": "36mm, automatic movement, rose gold, diamonds, leather"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dwa6ed4728/images/large/6f799deaac6256ddb7338555f004454c.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "BALLON BLEU DE CARTIER WATCH",
      "price": "$15,600.00",
      "descrip": "33 mm, automatic mechanical movement, rose gold, diamonds, leather."
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dwc92d3fb5/images/large/cfdd7832ea0d5af3a9f9fe2d32ed1278.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "BALLON BLEU DE CARTIER WATCH",
      "price": "$51,000.00",
      "descrip": "36 mm, mechanical movement with automatic winding, rose gold, diamonds"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw0858b95b/images/large/6b5ab30ae08f57c2aa7be92684448fd7.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "BALLON BLEU DE CARTIER WATCH",
      "price": "$32,900.00",
      "descrip": "33 mm, automatic movement, 18K rose gold, diamonds"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw6ad0006b/images/large/fb586f99a237570781453e2f94e3bb9b.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "BALLON BLEU DE CARTIER WATCH",
      "price": "$32,900.00",
      "descrip": "33 mm, mechanical movement with automatic winding, rose gold, diamonds"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw7f3b3a64/images/large/dd0ca493fd4552228881b345910c64cf.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "BALLON BLEU DE CARTIER WATCH",
      "price": "$23,400.00",
      "descrip": "33 mm, automatic mechanical movement, rose gold, diamonds, leather."
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dwdd6494d8/images/large/4562431b9b165627a4ee1d0f8548a461.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "BALLON BLEU DE CARTIER WATCH",
      "price": "$41,200.00",
      "descrip": "33 mm, mechanical movement with automatic winding, rose gold, diamonds"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw8c3bea6e/images/large/6a4f45ebefa7556da21ce4b9371d780c.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "BALLON BLEU DE CARTIER WATCH",
      "price": "$41,200.00",
      "descrip": "36 mm, mechanical movement with automatic winding, rose gold, diamonds"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw4eef3f9c/images/large/b5e0d971f5f65e19b8513fa790c4adcb.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "BALLON BLEU DE CARTIER WATCH",
      "price": "$147,000.00",
      "descrip": "33mm, automatic movement, white gold, diamonds"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw16edbed9/images/large/ec1f6ea08ab15e6d960d57b06e9a7802.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "BALLON BLEU DE CARTIER WATCH",
      "price": "$30,000.00",
      "descrip": "33mm, automatic movement, rose gold, diamonds, leather"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw4979c569/images/large/5a9f384e6be45fe2b102be7794fef41c.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "BALLON BLEU DE CARTIER WATCH",
      "price": "$43,200.00",
      "descrip": "36 mm, automatic mechanical movement, rose gold, diamonds."
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dwe960c6c7/images/large/f0041c0b3e0c5032bbe64fdad993e85c.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "BALLON BLEU DE CARTIER WATCH",
      "price": "$28,100.00",
      "descrip": "33 mm, automatic mechanical movement, rose gold, diamonds."
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dwd44afa94/images/large/c1874c5c04805b2791530cd4d21ea86d.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "BALLON BLEU DE CARTIER WATCH",
      "price": "$27,800.00",
      "descrip": "36 mm, automatic mechanical movement, rose gold, diamonds, leather"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw27f5558e/images/large/38d05bc5b14e53c0a15df43f0ec51825.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "BALLON BLEU DE CARTIER WATCH",
      "price": "$34,200.00",
      "descrip": "36 mm, automatic mechanical movement, rose gold, diamonds."
    }
  ]
  collectioncartierbaignoire: any = [
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw7b953539/images/large/8912ff49321a5bf8a482ceae6516241d.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "BAIGNOIRE WATCH",
      "price": "$28,800.00",
      "descrip": "Small model, quartz movement, white gold"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dwfaa957e4/images/large/855e5d53a6cc500493e0cd19fe0af243.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "BAIGNOIRE ALLONGÉE WATCH",
      "price": "$41,200.00",
      "descrip": "Medium model, hand-wound mechanical movement, rose gold, diamonds"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw3d6ba217/images/large/bf0c83cf975f56dca6469c9c5f26947c.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "BAIGNOIRE ALLONGÉE WATCH",
      "price": "$44,000.00",
      "descrip": "Medium model, hand-wound mechanical movement, white gold, diamonds"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dwd8d50a59/images/large/b37985c732da5654b33b08abdcbe124f.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "BAIGNOIRE WATCH",
      "price": "$18,600.00",
      "descrip": "Small model, quartz movement, yellow gold, diamonds, leather"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dwce657ae9/images/large/5951b1d98f6858ffa2af7133518b1035.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "BAIGNOIRE WATCH",
      "price": "$12,900.00",
      "descrip": "Mini model, size 17, quartz movement, yellow gold"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dwb7657465/images/large/f6ae22e2f4955b258cec80ce57de72cb.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "BAIGNOIRE WATCH",
      "price": "$12,900.00",
      "descrip": "Mini model, size 17, quartz movement, rose gold"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw3cbbcdca/images/large/7e1214e6b3025d3dacafd0d8cafcf4c4.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "BAIGNOIRE WATCH",
      "price": "$6,900.00",
      "descrip": "Mini model, quartz movement, yellow gold, leather"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dwb7657465/images/large/f6ae22e2f4955b258cec80ce57de72cb.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "BAIGNOIRE WATCH (SIZE 15)",
      "price": "$12,900.00",
      "descrip": "Mini model, quartz movement, rose gold"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dwce657ae9/images/large/5951b1d98f6858ffa2af7133518b1035.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "BAIGNOIRE WATCH (SIZE 15)",
      "price": "$12,900.00",
      "descrip": "Mini model, quartz movement, yellow gold"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dwadf5ee5f/images/large/580095e95d8e5aa789e80ad73c6f7cf2.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "BAIGNOIRE WATCH",
      "price": "$26,200.00",
      "descrip": "Small model, quartz movement, yellow gold"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dwce657ae9/images/large/5951b1d98f6858ffa2af7133518b1035.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "BAIGNOIRE WATCH (SIZE 16)",
      "price": "$12,900.00",
      "descrip": "Mini model, quartz movement, yellow gold"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw0fedacb9/images/large/dc0d9445c302576194e292c4f3b4b13f.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "BAIGNOIRE WATCH",
      "price": "$19,000.00",
      "descrip": "Mini model, quartz movement, white gold, diamonds, leather"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dwc3491735/images/large/f283a755941e53a5a32f891ee25ebdf6.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "BAIGNOIRE WATCH",
      "price": "$18,600.00",
      "descrip": "Small model, quartz movement, rose gold, diamonds, leather"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw08612632/images/large/d209602ca3095ebc92f75f06e0cf7838.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "BAIGNOIRE WATCH (SIZE 16)",
      "price": "$48,800.00",
      "descrip": "Mini model, quartz movement, white gold, diamonds"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw51816dc6/images/large/957d050904875e7b8fc8f43370d6d6a9.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "BAIGNOIRE WATCH",
      "price": "$42,100.00",
      "descrip": "Small model, quartz movement, white gold, diamonds"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw4300cd49/images/large/b1a59d4875b2579c95dda26b6f33d92b.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "BAIGNOIRE WATCH",
      "price": "$102,000.00",
      "descrip": "Small model, quartz movement, white gold, diamonds"
    }
  ]
  collectuioncartierronde: any = [
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dwaff36670/images/large/f233a8d5a6ce58f8b05c8316f538fbad.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "RONDE LOUIS CARTIER WATCH",
      "price": "$13,500.00",
      "descrip": "40 mm, automatic movement, rose gold, leather"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dwd35349e4/images/large/d28a4c90d9cc5f5da0bfe2c1b34d339b.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "RONDE MUST DE CARTIER WATCH",
      "price": "$3,700.00",
      "descrip": "36 mm, quartz movement, steel"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw5fd0cd34/images/large/af600d0ce4a0528593153a7b6f3e6b1d.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "RONDE MUST DE CARTIER WATCH",
      "price": "$4,650.00",
      "descrip": "40 mm, automatic movement, steel, strap made without animal materials"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dwf83cb6b9/images/large/6fe4fc9c6b0756698aa89d013593cb48.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "RONDE MUST DE CARTIER WATCH",
      "price": "$5,050.00",
      "descrip": "40 mm, automatic movement, steel"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw09627c67/images/large/68a076e724d65cff838399f9b02bbadc.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "RONDE LOUIS CARTIER WATCH",
      "price": "$16,200.00",
      "descrip": "29 mm, quartz movement, rose gold, diamonds, leather"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw2ee0d686/images/large/bc54024bc7d058438ad753b1afca78d7.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "RONDE MUST DE CARTIER WATCH",
      "price": "$3,400.00",
      "descrip": "29 mm, quartz movement, steel"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dwfd9aa307/images/large/b5899873f96a56e7aad915dfdcaf8f6d.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "RONDE MUST DE CARTIER WATCH",
      "price": "$3,300.00",
      "descrip": "36 mm, quartz movement, steel, strap made without animal materials"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dwb8c2ad2f/images/large/f7ae9f1afbf352db84cba4a2a94f33cb.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "RONDE MUST DE CARTIER WATCH",
      "price": "$3,050.00",
      "descrip": "29 mm, quartz movement, steel, strap made without animal materials"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw53a35972/images/large/9a1e525166935053acd518d91499e3d5.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "RONDE LOUIS CARTIER WATCH",
      "price": "$19,000.00",
      "descrip": "36 mm, quartz movement, rose gold, diamonds, leather"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw01e28ebe/images/large/4760715376045b3c9d296f75d6bddfd1.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "RONDE LOUIS CARTIER WATCH",
      "price": "$9,000.00",
      "descrip": "29 mm, quartz movement, rose gold, leather"
    },
    {
      "position": null,
      "item": null,
      "img": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dwea4faf5c/images/large/75e3ef8f36ce59caba696be593776c1e.png?sw=350&sh=350&sm=fit&sfrm=png",
      "model": "ROTONDE DE CARTIER WATCH",
      "price": "",
      "descrip": "46 mm, automatic movement, platinum, diamonds, leather"
    }
  ]
  show1: boolean = true;
  show2: boolean = false;
  show3: boolean = false;
  show4: boolean = false;
  ngOnInit(){
    // this.req.getData<RequestModS>(enviroenment.cartier.antosde.get).subscribe((res)=>{
    //   console.log(res);
    //   for (let index = 0; index < res.cont.length; index++) {
    //     this.collectioncartierantosde.push(res.cont[index])
    //   }   
    //   })
      // this.req.getData<RequestModS>(enviroenment.cartier.panterede.get).subscribe((res)=>{
      //   console.log(res);
      //   for (let index = 0; index < res.cont.length; index++) {
      //     if(index == 22 || index == 33 || index == 34 ||
      //       index == 35 || index == 36 || index == 41 ){
      //         return
      //     }
      //     this.collectioncartierpanterede.push(res.cont[index])
      //   }   
      //   })
        // this.req.getData<RequestModS>(enviroenment.cartier.ballonde.get).subscribe((res)=>{
        //   console.log(res);
        //   for (let index = 0; index < res.cont.length; index++) {
        //     this.collectioncartierballonde.push(res.cont[index])
        //   }   
        //   })
          // this.req.getData<RequestModS>(enviroenment.cartier.baignoire.get).subscribe((res)=>{
          //   console.log(res);
          //   for (let index = 0; index < res.cont.length; index++) {
          //     this.collectioncartierbaignoire.push(res.cont[index])
          //   }   
          //   })
            // this.req.getData<RequestModS>(enviroenment.cartier.ronde.get).subscribe((res)=>{
            //   console.log(res);
            //   for (let index = 0; index < res.cont.length; index++) {
            //     this.collectuioncartierronde.push(res.cont[index])
            //   }   
            //   })
      this.collectionsCartierAll = this.collectionsCartier;
  }
  show(num: number){
    if(num  == 1){
      this.collectionsCartierAll = this.collectionsCartier
    } else if(num  == 2){
      this.collectionsCartierAll = this.collectioncartierantosde
    } else if(num  == 3){
      this.collectionsCartierAll = this.collectioncartierpanterede
    } else if (num == 4) {
      this.collectionsCartierAll = this.collectioncartierballonde
    } else if (num == 5) {
      this.collectionsCartierAll = this.collectioncartierbaignoire
    } else {
      this.collectionsCartierAll = this.collectuioncartierronde
    }
  }
}
