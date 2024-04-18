import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RolexStoreService } from 'src/app/services/rolex-store.service';
import { RequestService } from 'src/app/services/request.service';
import { RequestModS } from 'src/app/models/requestmodel';
import { enviroenment } from 'src/enviroenments/enviroenment';
import { forkJoin } from 'rxjs';
import { RouterModule } from '@angular/router';
import { DiscoverComponent } from '../../discover/discover.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rolex-store',
  standalone: true, 
  imports: [CommonModule, RouterModule, DiscoverComponent],
  templateUrl: './rolex-store.component.html',
  styleUrls: ['./rolex-store.component.css']
})
export class RolexStoreComponent {
   collectionsRolex: any = [
    {
      "id": "1",
      "model": "Oyster, 36 mm, Oystersteel and yellow gold",
      "img1": "https://i.ibb.co/5jY3cNK/1-01.png",
      "img2": "https://i.ibb.co/64ZXrFr/1-02.png",
      "img3": "https://i.ibb.co/6XwFfhr/1-03.png",
      "img4": "https://i.ibb.co/2KW1sf3/1-04.png",
      "img5": "https://i.ibb.co/L1M9KdY/1-05.png",
      "url": "https://www.rolex.com/watches/datejust/m126233-0039#/m126233-0039/dial"
    },
    {
      "id": "2",
      "model": "Oyster, 36 mm, Oystersteel",
      "img1": "https://i.ibb.co/5cHWdWf/1-02.png",
      "img2": "https://i.ibb.co/L8cX7FH/2-02.png",
      "img3": "https://i.ibb.co/MNg5RB7/2-03.png",
      "img4": "https://i.ibb.co/2NvHchV/2-04.png",
      "img5": "https://i.ibb.co/qW0hWP2/2-05.png",
      "url": "https://www.rolex.com/ru/watches/datejust/m126200-0020#/m126200-0020/dial"
    },
    {
      "id": "3",
      "model": "Oyster, 31 mm, Everose gold and diamonds",
      "img1": "https://i.ibb.co/fkQx6R0/1-03.png",
      "img2": "https://i.ibb.co/PQpcHb8/3-02.png",
      "img3": "https://i.ibb.co/8Ph0WRJ/3-03.png",
      "img4": "https://i.ibb.co/G3SkSYX/3-04.png",
      "img5": "https://i.ibb.co/TLV2dbv/3-05.png",
      "url": "https://www.rolex.com/ru/watches/datejust/m278285rbr-0025#/m278285rbr-0025/dial"
    },
    {
      "id": "4",
      "model": "Oyster, 41 mm, Oystersteel and white gold",
      "img1": "https://i.ibb.co/DWxbB7y/1-04.png",
      "img2": "https://i.ibb.co/5YBV447/4-02.png",
      "img3": "https://i.ibb.co/hdTWvBH/4-03.png",
      "img4": "https://i.ibb.co/TgnqxSX/4-04.png",
      "img5": "https://i.ibb.co/s6Msfsd/4-05.png",
      "url": "https://www.rolex.com/ru/watches/datejust/m126334-0023#/m126334-0023/dial"
    },
    {
      "id": "1",
      "model": "Oyster, 41 mm, Oystersteel",
      "img": "https://i.ibb.co/L8QBY0c/1-01.png",
      "url": null
    },
    {
      "id": "2",
      "model": "Oyster, 41 mm, Oystersteel and yellow gold",
      "img": "https://i.ibb.co/SQGvPc8/2-01.png",
      "url": "https://www.rolex.com/ru/watches/submariner/m126613lb-0002#/m126613lb-0002/bezel"
    },
    {
      "id": "3",
      "model": "Oyster, 41 mm, Oystersteel",
      "img": "https://i.ibb.co/Zx802pH/3-01.png",
      "url": "https://www.rolex.com/ru/watches/submariner/m126610lv-0002#/m126610lv-0002/bezel"
    },
    {
      "id": "4",
      "model": "Oyster, 41 mm, yellow gold",
      "img": "https://i.ibb.co/tK9y7q9/4-01.png",
      "url": "https://www.rolex.com/ru/watches/submariner/m126618ln-0002#/m126618ln-0002/bezel"
    },
    {
      "id": "1",
      "model": "Oyster, 40 mm, Oystersteel",
      "img": "https://i.ibb.co/sJzKB7m/1-01.png",
      "url": "https://www.rolex.com/ru/watches/gmt-master-ii/m126720vtnr-0001#/m126720vtnr-0001/dial"
    },
    {
      "id": "2",
      "model": "Oyster, 40 mm, white gold",
      "img": "https://i.ibb.co/DtHMnFb/2-01.png",
      "url": "https://www.rolex.com/ru/watches/gmt-master-ii/m126719blro-0003#/m126719blro-0003/dial"
    },
    {
      "id": "3",
      "model": "Oyster, 40 mm, Oystersteel and Everose gold",
      "img": "https://i.ibb.co/NZpKT80/3-01.png",
      "url": "https://www.rolex.com/ru/watches/gmt-master-ii/m126711chnr-0002"
    },
    {
      "id": "4",
      "model": "Oyster, 40 mm, Oystersteel and yellow gold",
      "img": "https://i.ibb.co/Cvj9nnh/4-01.png",
      "url": "https://www.rolex.com/ru/watches/gmt-master-ii/m126713grnr-0001"
    },
    {
      "id": "1",
      "model": "Oyster, 40 mm, platinum",
      "img": "https://i.ibb.co/r6NQ2yK/1-01.png",
      "url": "https://www.rolex.com/ru/watches/day-date/m228236-0012#/m228236-0012/dial"
    },
    {
      "id": "2",
      "model": "Oyster, 36 mm, yellow gold",
      "img": "https://i.ibb.co/DCX76zG/2-01.png",
      "url": "https://www.rolex.com/ru/watches/day-date/m128238-0076#/m128238-0076/dial"
    },
    {
      "id": "3",
      "model": "Oyster, 36 mm, Everose gold and diamonds",
      "img": "https://i.ibb.co/hy5nJjN/3-01.png",
      "url": "https://www.rolex.com/ru/watches/day-date/m128345rbr-0068#/m128345rbr-0068/dial"
    },
    {
      "id": "4",
      "model": "Oyster, 40 mm, white gold and diamonds",
      "img": "https://i.ibb.co/1b0fV87/4-01.png",
      "url": "https://www.rolex.com/ru/watches/day-date/m228349rbr-0003#/m228349rbr-0003/dial"
    },
    {
      "id": "1",
      "model": "Oyster, 40 mm, platinum",
      "img": "https://i.ibb.co/yfzTrmj/1-01.png",
      "url": "https://www.rolex.com/ru/watches/cosmograph-daytona/m126506-0001#/m126506-0001/dial"
    },
    {
      "id": "2",
      "model": "Oyster, 40 mm, Everose gold",
      "img": "https://i.ibb.co/txjKdFr/2-01.png",
      "url": "https://www.rolex.com/ru/watches/cosmograph-daytona/m126505-0001#/m126505-0001/dial"
    },
    {
      "id": "3",
      "model": "Oyster, 40 mm, yellow gold",
      "img": "https://i.ibb.co/4PKV7Lc/3-01.png",
      "url": "https://www.rolex.com/watches/cosmograph-daytona/m126508-0002#/m126508-0002/dial"
    },
    {
      "id": "4",
      "model": "Oyster, 40 mm, white gold",
      "img": "https://i.ibb.co/N3SDv6m/4-01.png",
      "url": "https://www.rolex.com/watches/cosmograph-daytona/m126519ln-0006#/m126519ln-0006/dial"
    },
    {
      "id": "5",
      "model": "Oyster, 40 mm, white gold",
      "img": "https://i.ibb.co/YR7HH7s/5-01.png",
      "url": "https://www.rolex.com/watches/cosmograph-daytona/m126529ln-0001"
    },
    {
      "id": "1",
      "model": "Oyster, 41 mm, Oystersteel (36mm, 34mm, 31mm, 28mm)",
      "img": "https://i.ibb.co/S69rckx/1-01.png",
      "url": "https://www.rolex.com/watches/oyster-perpetual/m124300-0002#/m124300-0002/dial"
    },
    {
      "id": "1",
      "model": "Oyster, 42 mm, RLX titanium",
      "img": "https://i.ibb.co/3pzTy4P/1-01.png",
      "url": "https://www.rolex.com/watches/yacht-master/m226627-0001"
    },
    {
      "id": "1",
      "model": "Oyster, 43 mm, Oystersteel",
      "img": "https://i.ibb.co/sJJnD8Q/1-01.png",
      "url": "https://www.rolex.com/watches/sea-dweller/m126600-0002"
    },
    {
      "id": "2",
      "model": "Oyster, 43 mm, Oystersteel and yellow gold",
      "img": "https://i.ibb.co/Krrp2Yb/2-01.png",
      "url": "https://www.rolex.com/watches/sea-dweller/m126603-0001"
    },
    {
      "id": "1",
      "model": "Oyster, 44 mm, Oystersteel",
      "img": "https://i.ibb.co/vZY8fCG/1-01.png",
      "url": "https://www.rolex.com/watches/deepsea/m136660-0004#/m136660-0004/dial"
    },
    {
      "id": "1",
      "model": "Oyster, 40 mm, Oystersteel",
      "img": "https://i.ibb.co/TL5KzNB/1-01.png",
      "url": "https://www.rolex.com/watches/air-king/m126900-0001"
    },
    {
      "id": "1",
      "model": "Oyster, 36 mm, Oystersteel and yellow gold",
      "img": "https://i.ibb.co/4TnPfrg/1-01.png",
      "url": "https://www.rolex.com/watches/explorer/m124273-0001"
    },
    {
      "id": "2",
      "model": "Oyster, 36 mm, Oystersteel, (40mm)",
      "img": "https://i.ibb.co/MhHcq8h/2-01.png",
      "url": "https://www.rolex.com/watches/explorer/m124270-0001"
    },
    {
      "id": "1",
      "model": "Oyster, 28 mm, Oystersteel and Everose gold",
      "img": "https://i.ibb.co/d24DPcM/1-01.png",
      "url": "https://www.rolex.com/watches/lady-datejust/m279161-0018#/m279161-0018/dial"
    },
    {
      "id": "2",
      "model": "Oyster, 28 mm, Everose gold",
      "img": "https://i.ibb.co/s9Dt2hZ/2-01.png",
      "url": "https://www.rolex.com/watches/lady-datejust/m279175-0009#/m279175-0009/dial"
    },
    {
      "id": "3",
      "model": "Oyster, 28 mm, yellow gold",
      "img": "https://i.ibb.co/xg7yRLg/3-01.png",
      "url": "https://www.rolex.com/watches/lady-datejust/m279178-0030#/m279178-0030/dial"
    },
    {
      "id": "4",
      "model": "Oyster, 28 mm, white gold and diamonds",
      "img": "https://i.ibb.co/DKR5xYJ/4-01.png",
      "url": "https://www.rolex.com/watches/lady-datejust/m279139rbr-0008#/m279139rbr-0008/dial"
    },
    {
      "id": "5",
      "model": "Oyster, 28 mm, Oystersteel and white gold",
      "img": "https://i.ibb.co/dm9NKb0/5-01.png",
      "url": "https://www.rolex.com/watches/lady-datejust/m279174-0008#/m279174-0008/dial"
    },
    {
      "id": "6",
      "model": "Oyster, 28 mm, Oystersteel, yellow gold and diamonds",
      "img": "https://i.ibb.co/Fhgf9NV/6-01.png",
      "url": "https://www.rolex.com/watches/lady-datejust/m279383rbr-0004#/m279383rbr-0004/dial"
    },
    {
      "id": "1",
      "model": "Oyster, 42 mm, white gold",
      "img": "https://i.ibb.co/NWbCmmC/1-01.png",
      "url": "https://www.rolex.com/watches/sky-dweller/m336239-0002#/m336239-0002/dial"
    },
    {
      "id": "2",
      "model": "Oyster, 42 mm, Oystersteel and white gold",
      "img": "https://i.ibb.co/zHp5k5f/2-01.png",
      "url": "https://www.rolex.com/watches/sky-dweller/m336934-0002#/m336934-0002/dial"
    },
    {
      "id": "3",
      "model": "Oyster, 42 mm, Everose gold",
      "img": "https://i.ibb.co/6nSY7rt/3-01.png",
      "url": "https://www.rolex.com/watches/sky-dweller/m336935-0001#/m336935-0001/dial"
    },
    {
      "id": "4",
      "model": "Oyster, 42 mm, Oystersteel and yellow gold",
      "img": "https://i.ibb.co/Ypsndyy/4-01.png",
      "url": "https://www.rolex.com/watches/sky-dweller/m336933-0002#/m336933-0002/dial"
    },
    {
      "id": "1",
      "model": "39 mm, 18 ct yellow gold, polished finish",
      "img": "https://i.ibb.co/89LDDPk/1-01.png",
      "url": "https://www.rolex.com/watches/1908/m52508-0006#/m52508-0006/dial"
    },
    {
      "id": "2",
      "model": "39 mm, 18 ct white gold, polished finish",
      "img": "https://i.ibb.co/p3VWd0B/2-01.png",
      "url": "https://www.rolex.com/watches/1908/m52509-0006#/m52509-0006/dial"
    }
  ];
  showDiscoverComp: boolean = false;
  showSpinner: boolean = true;
empty: any = []

  discoverInputObject = {
    id: '',
    coll: '',
    model: '',
    img: '',
    href: '',
  }
  ngAfterViewInit(){
    if(this.collectionsRolex == this.empty){
      this.showSpinner = true
    } else {
      this.showSpinner = false
      
    }
  }

  constructor(private req: RequestService,
    private router: Router){}


  openDescribe(id : any, collection: any, model: any, img: any, href: any ){
    this.discoverInputObject.id = id;
    this.discoverInputObject.coll = collection;
    this.discoverInputObject.model = model;
    this.discoverInputObject.img = img;
    this.discoverInputObject.href = href;
    this.showDiscoverComp = true;


  }
  closeDiscoverComp(){
    this.showDiscoverComp = false;
    this.router.navigate(['/store']);
  }
} 
 