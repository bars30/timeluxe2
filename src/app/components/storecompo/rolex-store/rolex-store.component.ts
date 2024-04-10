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
  @Input() collectionsRolex: any = [];
  showDiscoverComp: boolean = false;
  showSpinner: boolean = false;

  discoverInputObject = {
    id: '',
    coll: '',
    model: '',
    img: '',
    href: '',
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
 