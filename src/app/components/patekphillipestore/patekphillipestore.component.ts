import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DiscoverComponent } from '../discover/discover.component';
import { Router } from '@angular/router';
import { DescripeservService } from 'src/app/services/descripeserv.service';

@Component({
  selector: 'app-patekphillipestore',
  templateUrl: './patekphillipestore.component.html',
  styleUrls: ['./patekphillipestore.component.css'],
  standalone: true,
  imports: [CommonModule, DiscoverComponent]
})
export class PatekphillipestoreComponent {
   collectionsPatekPhillipe: any = [
    {
      "id": "3",
      "model": "5236P-001",
      "img": "https://i.ibb.co/Yj1M34g/3.png",
      "descrip": "Platinum",
      "url": "https://www.patek.com/en/collection/grand-complications/5236P-001",
      "collection": "Grand Complications"
    },
    {
      "id": "1",
      "model": "5327G-001",
      "img": "https://i.ibb.co/BVknFZb/1.png",
      "descrip": "White Gold",
      "url": "https://www.patek.com/en/collection/grand-complications/5327G-001",
      "collection": "Grand Complications"
    },
    {
      "id": "2",
      "model": "5327R-001",
      "img": "https://i.ibb.co/SVBP3VL/2.png",
      "descrip": "Rose Gold",
      "url": "https://www.patek.com/en/collection/grand-complications/5327R-001",
      "collection": "Grand Complications"
    },
    {
      "id": "4",
      "model": "5320G-011",
      "img": "https://i.ibb.co/D1WML8G/4.png",
      "descrip": "White Gold",
      "url": "https://www.patek.com/en/collection/grand-complications/5320G-011",
      "collection": "Grand Complications"
    },
    {
      "id": "5",
      "model": "7140G-001",
      "img": "https://i.ibb.co/dbmjpGS/5.png",
      "descrip": "White Gold",
      "url": "https://www.patek.com/en/collection/grand-complications/7140G-001",
      "collection": "Grand Complications"
    },
    {
      "id": "6",
      "model": "7140R-001",
      "img": "https://i.ibb.co/C8XgtFc/6.png",
      "descrip": "Rose Gold",
      "url": "https://www.patek.com/en/collection/grand-complications/7140R-001",
      "collection": "Grand Complications"
    },
    {
      "id": "7",
      "model": "5270J-001",
      "img": "https://i.ibb.co/gy4SRFY/7.png",
      "descrip": "Yellow Gold",
      "url": "https://www.patek.com/en/collection/grand-complications/5270J-001",
      "collection": "Grand Complications"
    },
    {
      "id": "8",
      "model": "5270P-014",
      "img": "https://i.ibb.co/0rX5mjb/8.png",
      "descrip": "Platinum",
      "url": "https://www.patek.com/en/collection/grand-complications/5270P-014",
      "collection": "Grand Complications"
    },
    {
      "id": "9",
      "model": "5270/1R-001",
      "img": "https://i.ibb.co/wdKv33Z/9.png",
      "descrip": "Rose Gold",
      "url": "https://www.patek.com/en/collection/grand-complications/5270-1R-001",
      "collection": "Grand Complications"
    },
    {
      "id": "10",
      "model": "5271P-010",
      "img": "https://i.ibb.co/0KHLKwH/10.png",
      "descrip": "Platinum",
      "url": "https://www.patek.com/en/collection/grand-complications/5271P-010",
      "collection": "Grand Complications"
    },
    {
      "id": "11",
      "model": "5271/11P-010",
      "img": "https://i.ibb.co/Yp3xnPQ/11.png",
      "descrip": "Platinum",
      "url": "https://www.patek.com/en/collection/grand-complications/5271-11P-010",
      "collection": "Grand Complications"
    },
    {
      "id": "12",
      "model": "5271/12P-010",
      "img": "https://i.ibb.co/9vHdsvr/12.png",
      "descrip": "Platinum",
      "url": "https://www.patek.com/en/collection/grand-complications/5271-12P-010",
      "collection": "Grand Complications"
    },
    {
      "id": "13",
      "model": "5370P-011",
      "img": "https://i.ibb.co/PYhNnv8/13.png",
      "descrip": "Platinum",
      "url": "https://www.patek.com/en/collection/grand-complications/5370P-011",
      "collection": "Grand Complications"
    },
    {
      "id": "14",
      "model": "5373P-001",
      "img": "https://i.ibb.co/nDCrTFj/14.png",
      "descrip": "Platinum",
      "url": "https://www.patek.com/en/collection/grand-complications/5373P-001",
      "collection": "Grand Complications"
    },
    {
      "id": "15",
      "model": "5470P-001",
      "img": "https://i.ibb.co/d0NWBXq/15.png",
      "descrip": "Platinum",
      "url": "https://www.patek.com/en/collection/grand-complications/5470P-001",
      "collection": "Grand Complications"
    },
    {
      "id": "16",
      "model": "5204G-001",
      "img": "https://i.ibb.co/DRnxBvL/16.png",
      "descrip": "White Gold",
      "url": "https://www.patek.com/en/collection/grand-complications/5204G-001",
      "collection": "Grand Complications"
    },
    {
      "id": "17",
      "model": "6102R-001",
      "img": "https://i.ibb.co/Y31sTk4/17.png",
      "descrip": "Rose Gold",
      "url": "https://www.patek.com/en/collection/grand-complications/6102R-001",
      "collection": "Grand Complications"
    },
    {
      "id": "18",
      "model": "6102P-001",
      "img": "https://i.ibb.co/wzgJqVB/18.png",
      "descrip": "Platinum",
      "url": "https://www.patek.com/en/collection/grand-complications/6102P-001",
      "collection": "Grand Complications"
    },
    {
      "id": "19",
      "model": "6104R-001",
      "img": "https://i.ibb.co/PgNvtKD/19.png",
      "descrip": "Rose Gold",
      "url": "https://www.patek.com/en/collection/grand-complications/6104R-001",
      "collection": "Grand Complications"
    },
    {
      "id": "20",
      "model": "5520P-001",
      "img": "https://i.ibb.co/2g4kLWR/20.png",
      "descrip": "Platinum",
      "url": "https://www.patek.com/en/collection/grand-complications/5520P-001",
      "collection": "Grand Complications"
    },
    {
      "id": "21",
      "model": "5260/355R-001",
      "img": "https://i.ibb.co/M9Sm9B5/21.png",
      "descrip": "Rose Gold",
      "url": "https://www.patek.com/en/collection/grand-complications/5260-355R-001",
      "collection": "Grand Complications"
    },
    {
      "id": "22",
      "model": "5260/1455R-001",
      "img": "https://i.ibb.co/cr9znX4/22.png",
      "descrip": "Rose Gold",
      "url": "https://www.patek.com/en/collection/grand-complications/5260-1455R-001",
      "collection": "Grand Complications"
    },
    {
      "id": "23",
      "model": "7040/250G-001",
      "img": "https://i.ibb.co/3MRR1y3/23.png",
      "descrip": "White Gold",
      "url": "https://www.patek.com/en/collection/grand-complications/5260-1455R-001",
      "collection": "Grand Complications"
    },
    {
      "id": "24",
      "model": "5178G-012",
      "img": "https://i.ibb.co/MRgXz4S/24.png",
      "descrip": "White Gold",
      "url": "https://www.patek.com/en/collection/grand-complications/5260-1455R-001",
      "collection": "Grand Complications"
    },
    {
      "id": "25",
      "model": "5531G-001",
      "img": "https://i.ibb.co/3N4Gpv1/25.png",
      "descrip": "White Gold",
      "url": "https://www.patek.com/en/collection/grand-complications/5531G-001",
      "collection": "Grand Complications"
    },
    {
      "id": "26",
      "model": "5303R-001",
      "img": "https://i.ibb.co/Q7VyZ4n/26.png",
      "descrip": "Rose Gold",
      "url": "https://www.patek.com/en/collection/grand-complications/5303R-001",
      "collection": "Grand Complications"
    },
    {
      "id": "27",
      "model": "5304/301R-001",
      "img": "https://i.ibb.co/kD7yjrT/27.png",
      "descrip": "Rose Gold",
      "url": "https://www.patek.com/en/collection/grand-complications/5304-301R-001",
      "collection": "Grand Complications"
    },
    {
      "id": "28",
      "model": "5374G-001",
      "img": "https://i.ibb.co/3WRthdv/28.png",
      "descrip": "White Gold",
      "url": "https://www.patek.com/en/collection/grand-complications/5304-301R-001",
      "collection": "Grand Complications"
    },
    {
      "id": "29",
      "model": "5374/300P-001",
      "img": "https://i.ibb.co/1zchFzf/29.png",
      "descrip": "Platinum",
      "url": "https://www.patek.com/en/collection/grand-complications/5374-300P-001",
      "collection": "Grand Complications"
    },
    {
      "id": "30",
      "model": "5208R-001",
      "img": "https://i.ibb.co/s3qxND0/30.png",
      "descrip": "Rose Gold",
      "url": "https://www.patek.com/en/collection/grand-complications/5208R-001",
      "collection": "Grand Complications"
    },
    {
      "id": "31",
      "model": "5207G-001",
      "img": "https://i.ibb.co/txFBB5G/31.png",
      "descrip": "White Gold",
      "url": "https://www.patek.com/en/collection/grand-complications/5207G-001",
      "collection": "Grand Complications"
    },
    {
      "id": "32",
      "model": "5316/50P-001",
      "img": "https://i.ibb.co/kKpnVZs/32.png",
      "descrip": "Platinum",
      "url": "https://www.patek.com/en/collection/grand-complications/5316-50P-001",
      "collection": "Grand Complications"
    },
    {
      "id": "33",
      "model": "6002R-001",
      "img": "https://i.ibb.co/w45qptL/33.png",
      "descrip": "Rose Gold",
      "url": "https://www.patek.com/en/collection/grand-complications/6002R-001",
      "collection": "Grand Complications"
    },
    {
      "id": "34",
      "model": "6301P-001",
      "img": "https://i.ibb.co/myNZP3D/34.png",
      "descrip": "Platinum",
      "url": "https://www.patek.com/en/collection/grand-complications/6301P-001",
      "collection": "Grand Complications"
    },
    {
      "id": "35",
      "model": "6300GR-001",
      "img": "https://i.ibb.co/wJ3gZxk/35.png",
      "descrip": "White gold and rose gold",
      "url": "https://www.patek.com/en/collection/grand-complications/6300GR-001",
      "collection": "Grand Complications"
    },
    {
      "id": "36",
      "model": "6300/400G-001",
      "img": "https://i.ibb.co/g7r8ccM/36.png",
      "descrip": "White Gold",
      "url": "https://www.patek.com/en/collection/grand-complications/6300-400G-001",
      "collection": "Grand Complications"
    },
    {
      "id": "37",
      "model": "6300/401G-001",
      "img": "https://i.ibb.co/s1VBvym/37.png",
      "descrip": "White Gold",
      "url": "https://www.patek.com/en/collection/grand-complications/6300-401G-001",
      "collection": "Grand Complications"
    },
    {
      "id": "38",
      "model": "6300/403G-001",
      "img": "https://i.ibb.co/Tcy20QX/38.png",
      "descrip": "White gold",
      "url": "https://www.patek.com/en/collection/grand-complications/6300-403G-001",
      "collection": "Grand Complications"
    }
  ];
  
  constructor(private descripserv: DescripeservService){}
  showDiscoverComp = this.descripserv.showDiscoverComp
  general: boolean = true;
  discoverInputObject = this.descripserv.discoverInputObject;
  openDescribe = this.descripserv.openDescribe;
  closeDiscoverComp = this.descripserv.closeDiscoverComp
}
