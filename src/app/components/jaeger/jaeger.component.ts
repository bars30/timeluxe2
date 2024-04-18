import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestService } from 'src/app/services/request.service';
import { RequestModS } from 'src/app/models/requestmodel';
import { enviroenment } from 'src/enviroenments/enviroenment';
import { DescripeservService } from 'src/app/services/descripeserv.service';
import { DiscoverComponent } from '../discover/discover.component';

@Component({
  selector: 'app-jaeger',
  standalone: true,
  imports: [CommonModule, DiscoverComponent],
  templateUrl: './jaeger.component.html',
  styleUrls: ['./jaeger.component.css']
})
export class JaegerComponent {
   collectionsJaeger: any = [
    {
      "position": null,
      "exclusivity": "EXCLUSIVITY",
      "img": "https://img.jaeger-lecoultre.com/product-card-3/be1d00a922314bf898f295d9de336d33c0f3a37d.jpg",
      "collname": null,
      "descrip": "45.6 x 27.4 mm, Stainless steel, Manual winding",
      "price": "$ 10,600",
      "coll": null
    },
    {
      "position": null,
      "exclusivity": "EXCLUSIVITY",
      "img": "https://img.jaeger-lecoultre.com/product-card-3/27e636a5ed4c82b0888e283dac08895e458e871f.jpg",
      "collname": null,
      "descrip": "45.6 x 27.4 mm, Stainless steel, Manual winding",
      "price": "$ 10,600",
      "coll": null
    },
    {
      "position": null,
      "exclusivity": "EXCLUSIVITY",
      "img": "https://img.jaeger-lecoultre.com/product-card-3/404ae2a481f89f028d60b9791ad34f5cce71f41a.jpg",
      "collname": null,
      "descrip": "45.6 x 27.4 mm, Stainless steel, Manual winding",
      "price": "$ 10,600",
      "coll": null
    },
    {
      "position": null,
      "exclusivity": "EXCLUSIVITY",
      "img": "https://img.jaeger-lecoultre.com/product-card-3/d43ebfa0af36a56974805f59c2b64bee0327447c.jpg",
      "collname": null,
      "descrip": "45.6 x 27.4 mm, Stainless steel, Manual winding",
      "price": "$ 10,600",
      "coll": null
    },
    {
      "position": null,
      "exclusivity": "",
      "img": "https://img.jaeger-lecoultre.com/product-card-md-3/ca9b518e28bbace6c54aab13d81e66f0fa9cf364.jpg",
      "collname": null,
      "descrip": "45.6 x 27.4 mm, Pink Gold 750/1000 (18 carats), Manual winding",
      "price": "",
      "coll": null
    },
    {
      "position": null,
      "exclusivity": "EXCLUSIVITY",
      "img": "https://img.jaeger-lecoultre.com/product-card-md-3/5a43f292ee6e9a8daf37850d68491c0761ae4b33.jpg",
      "collname": null,
      "descrip": "45.6 x 27.4 mm, Pink Gold 750/1000 (18 carats), Manual winding",
      "price": "$ 22,700",
      "coll": null
    },
    {
      "position": null,
      "exclusivity": "EXCLUSIVITY",
      "img": "https://img.jaeger-lecoultre.com/product-card-md-3/52df4f936e02026b562e563425f10e18ac67b7a2.jpg",
      "collname": null,
      "descrip": "45.6 x 27.4 mm, Pink Gold 750/1000 (18 carats), Manual winding",
      "price": "$ 22,700",
      "coll": null
    },
    {
      "position": null,
      "exclusivity": "",
      "img": "https://img.jaeger-lecoultre.com/product-card-md-3/6b5038eb61cec293b121d1b2e15e78e949369954.jpg",
      "collname": null,
      "descrip": "47 x 28.3 mm, Stainless steel, Manual winding",
      "price": "",
      "coll": null
    },
    {
      "position": null,
      "exclusivity": "",
      "img": "https://img.jaeger-lecoultre.com/product-card-md-3/d004cc2e7863abbf9bd0cd95c7eda1eba2385733.jpg",
      "collname": null,
      "descrip": "49.4 x 29.9 mm, Stainless steel, Manual winding",
      "price": "",
      "coll": null
    },
    {
      "position": null,
      "exclusivity": "",
      "img": "https://img.jaeger-lecoultre.com/product-card-md-3/3490cb33a046a6a6ad9da01132a1df710ed146e1.jpg",
      "collname": null,
      "descrip": "49.4 x 29.9 mm, Pink Gold 750/1000 (18 carats), Manual winding",
      "price": "",
      "coll": null
    },
    {
      "position": null,
      "exclusivity": "EXCLUSIVITY",
      "img": "https://img.jaeger-lecoultre.com/product-card-md-3/6b62e8cd2ad2345e55a48d8e057fbed93939790f.jpg",
      "collname": null,
      "descrip": "49.4 x 29.9 mm, Stainless steel, Manual winding",
      "price": "$ 25,000",
      "coll": null
    },
    {
      "position": null,
      "exclusivity": "EXCLUSIVITY",
      "img": "https://img.jaeger-lecoultre.com/product-card-md-3/2b393be0e6d09f16055dd6d8300de47448c2d03b.jpg",
      "collname": null,
      "descrip": "49.4 x 29.9 mm, Pink Gold 750/1000 (18 carats), Manual winding",
      "price": "$ 38,800",
      "coll": null
    },
    {
      "position": null,
      "exclusivity": "",
      "img": "https://img.jaeger-lecoultre.com/product-card-md-3/f532555d03e11174f3c63b1ae34b96599a5e4f9f.jpg",
      "collname": null,
      "descrip": "40.1 x 20 mm, Stainless steel, Quartz",
      "price": "",
      "coll": null
    },
    {
      "position": null,
      "exclusivity": "",
      "img": "https://img.jaeger-lecoultre.com/product-card-md-3/86a9e19d6459132b817e0f5f0b833d1d6a67d363.jpg",
      "collname": null,
      "descrip": "40.1 x 20 mm, Stainless steel, Quartz",
      "price": "",
      "coll": null
    },
    {
      "position": null,
      "exclusivity": "EXCLUSIVITY",
      "img": "https://img.jaeger-lecoultre.com/product-card-md-3/053355f775a0d80c3898bc4be7de2ba4ead9112f.jpg",
      "collname": null,
      "descrip": "40.1 x 20 mm, Stainless steel, Quartz",
      "price": "$ 7,650",
      "coll": null
    },
    {
      "position": null,
      "exclusivity": "",
      "img": "https://img.jaeger-lecoultre.com/product-card-md-3/16bf9d1e5c996c31e0e6d84a97c678ef30f7879f.jpg",
      "collname": null,
      "descrip": "40.1 x 20 mm, Stainless steel, Quartz",
      "price": "",
      "coll": null
    },
    {
      "position": null,
      "exclusivity": "EXCLUSIVITY",
      "img": "https://img.jaeger-lecoultre.com/product-card-md-3/4c0fe1348603a193632f0e527b3ce42040da3163.jpg",
      "collname": null,
      "descrip": "40.1 x 20 mm, Stainless steel, Manual winding",
      "price": "$ 13,700",
      "coll": null
    },
    {
      "position": null,
      "exclusivity": "EXCLUSIVITY",
      "img": "https://img.jaeger-lecoultre.com/product-light-box-1/f89567b5c5eb6488a1c6c709d6f4b1a9d2da766b.jpg",
      "collname": null,
      "descrip": "40.1 x 20 mm, Pink Gold 750/1000 (18 carats), Manual winding",
      "price": "$ 25,800",
      "coll": null
    },
    {
      "position": null,
      "exclusivity": "EXCLUSIVITY",
      "img": "https://img.jaeger-lecoultre.com/product-card-md-3/547568187422b0dba451186f1735468434a3e959.jpg",
      "collname": null,
      "descrip": "40.1 x 20 mm, Pink Gold 750/1000 (18 carats), Manual winding",
      "price": "$ 40,500",
      "coll": null
    },
    {
      "position": null,
      "exclusivity": "EXCLUSIVITY",
      "img": "https://img.jaeger-lecoultre.com/product-card-md-3/f73f152f67a69e4c94c50fe48d325b6e1455cddb.jpg",
      "collname": null,
      "descrip": "40 x 20 mm, Pink Gold 750/1000 (18 carats), Manual winding",
      "price": "$ 49,900",
      "coll": null
    },
    {
      "position": null,
      "exclusivity": "",
      "img": "https://img.jaeger-lecoultre.com/product-card-md-3/033e0325bba1a7b2e28fb5e8916221ff16c24dde.jpg",
      "collname": null,
      "descrip": "35.78 x 21 mm, Stainless steel, Quartz",
      "price": "",
      "coll": null
    },
    {
      "position": null,
      "exclusivity": "",
      "img": "https://img.jaeger-lecoultre.com/product-card-md-3/9b5d81c5b17faa6a80de574cb0f3b9e9269e280b.jpg",
      "collname": null,
      "descrip": "35.78 x 21 mm, Stainless steel, Quartz",
      "price": "",
      "coll": null
    },
    {
      "position": null,
      "exclusivity": "",
      "img": "https://img.jaeger-lecoultre.com/product-card-md-3/3db64b2b5e02e18a394fad413d068bff55c1f244.jpg",
      "collname": null,
      "descrip": "35.78 x 21 mm, Stainless steel, Manual winding",
      "price": "",
      "coll": null
    },
    {
      "position": null,
      "exclusivity": "",
      "img": "https://img.jaeger-lecoultre.com/product-card-md-3/1accff40056374987f208eb2a0ab1ea1a3620239.jpg",
      "collname": null,
      "descrip": "35.78 x 21 mm, Stainless steel, Manual winding",
      "price": "",
      "coll": null
    },
    {
      "position": null,
      "exclusivity": "",
      "img": "https://img.jaeger-lecoultre.com/product-card-md-3/14ae198ca6f6c5af59d50b347a35b3770f4d72b5.jpg",
      "collname": null,
      "descrip": "35.78 x 21 mm, Pink Gold 750/1000 (18 carats), Manual winding",
      "price": "",
      "coll": null
    },
    {
      "position": null,
      "exclusivity": "",
      "img": "https://img.jaeger-lecoultre.com/product-card-md-3/f2a6f64f443d4d975900f42de04d4f52e3495f3a.jpg",
      "collname": null,
      "descrip": "40.1 x 24.4 mm, Stainless steel, Quartz",
      "price": "",
      "coll": null
    },
    {
      "position": null,
      "exclusivity": "",
      "img": "https://img.jaeger-lecoultre.com/product-card-md-3/9db6d44e03c7942522c78d36d71979c8419cb6a0.jpg",
      "collname": null,
      "descrip": "40.1 x 24.4 mm, Stainless steel, Quartz",
      "price": "",
      "coll": null
    },
    {
      "position": null,
      "exclusivity": "",
      "img": "https://img.jaeger-lecoultre.com/product-card-md-3/643b4dcb8bf6d8fe7e0fb5b9bbcf6ba6f9d15fa5.jpg",
      "collname": null,
      "descrip": "34.2 x 21 mm, Stainless steel, Manual winding",
      "price": "",
      "coll": null
    },
    {
      "position": null,
      "exclusivity": "",
      "img": "https://img.jaeger-lecoultre.com/product-card-md-3/f3e36c38d873aaf11104b70c463c99ac8caf5a70.jpg",
      "collname": null,
      "descrip": "34.2 x 21 mm, Stainless steel, Manual winding",
      "price": "",
      "coll": null
    },
    {
      "position": null,
      "exclusivity": "EXCLUSIVITY",
      "img": "https://img.jaeger-lecoultre.com/product-light-box-1/58ad0a99ed22dc075a70fff4cb46a803919ca735.jpg",
      "collname": null,
      "descrip": "45.5 x 27.4 mm, Pink Gold 750/1000 (18 carats), Manual winding",
      "price": "Price available upon request",
      "coll": null
    },
    {
      "position": null,
      "exclusivity": "",
      "img": "https://img.jaeger-lecoultre.com/product-card-md-3/2a293defef087e0d0e15d15243cb57dfe4ce13e3.jpg",
      "collname": null,
      "descrip": "34.2 x 21 mm, Pink Gold 750/1000 (18 carats), Manual winding",
      "price": "",
      "coll": null
    },
    {
      "position": null,
      "exclusivity": "",
      "img": "https://img.jaeger-lecoultre.com/product-card-md-3/1d673efb89cfe2c757eefa16ac7ba059ac042f2d.jpg",
      "collname": null,
      "descrip": "34.2 x 21 mm, Pink Gold 750/1000 (18 carats), Manual winding",
      "price": "",
      "coll": null
    },
    {
      "position": null,
      "exclusivity": "",
      "img": "https://img.jaeger-lecoultre.com/product-card-md-3/f3ceda69b7009e74f82ecffcbcd34a69b7ca4dc0.jpg",
      "collname": null,
      "descrip": "40 x 24 mm, Stainless steel, Manual winding",
      "price": "",
      "coll": null
    },
    {
      "position": null,
      "exclusivity": "",
      "img": "https://img.jaeger-lecoultre.com/product-card-md-3/e23f76ca038bc04fe19efd23171d4ca0511f1e98.jpg",
      "collname": null,
      "descrip": "40 x 24 mm, Stainless steel, Manual winding",
      "price": "",
      "coll": null
    },
    {
      "position": null,
      "exclusivity": "",
      "img": "https://img.jaeger-lecoultre.com/product-card-md-3/7c39320ea0e7ffce86321fdaf1089be8b13ec6ae.jpg",
      "collname": null,
      "descrip": "40 x 24.4 mm, Stainless steel, Automatic winding",
      "price": "",
      "coll": null
    },
    {
      "position": null,
      "exclusivity": "",
      "img": "https://img.jaeger-lecoultre.com/product-card-md-3/5bd1596c7efa761b31eda2358e339f41769c1c50.jpg",
      "collname": null,
      "descrip": "40 x 24.4 mm, Pink Gold 750/1000 (18 carats), Automatic winding",
      "price": "",
      "coll": null
    },
    {
      "position": null,
      "exclusivity": "",
      "img": "https://img.jaeger-lecoultre.com/product-card-md-3/e75a6d734b87c48193cb4dd37fd9ac73d96153f8.jpg",
      "collname": null,
      "descrip": "42.9 x 25.5 mm, Stainless steel, Manual winding",
      "price": "",
      "coll": null
    },
    {
      "position": null,
      "exclusivity": "",
      "img": "https://img.jaeger-lecoultre.com/product-card-md-3/43942a97287fcb0d47241dc2f4a6b78a0c214a4a.jpg",
      "collname": null,
      "descrip": "42.9 x 25.5 mm, Stainless steel, Manual winding",
      "price": "",
      "coll": null
    },
    {
      "position": null,
      "exclusivity": "",
      "img": "https://img.jaeger-lecoultre.com/product-card-md-3/de98408fd12ed998ad306eab564e17503917fc13.jpg",
      "collname": null,
      "descrip": "45.6 x 27.4 mm, Stainless steel, Manual winding",
      "price": "",
      "coll": null
    },
    {
      "position": null,
      "exclusivity": "",
      "img": "https://img.jaeger-lecoultre.com/product-card-md-3/e75cab975d00e51558bcde8c5e1d970c68913891.jpg",
      "collname": null,
      "descrip": "47 x 28.3 mm, Stainless steel, Manual winding",
      "price": "",
      "coll": null
    },
    {
      "position": null,
      "exclusivity": "",
      "img": "https://img.jaeger-lecoultre.com/product-card-md-3/ce495c8ed7358751dfcbe92b21c3a42eddbf0a10.jpg",
      "collname": null,
      "descrip": "47 x 28.3 mm, Pink Gold 750/1000 (18 carats), Manual winding",
      "price": "",
      "coll": null
    }
  ]
  collectionsJaegerAll: any = [] 
  collectionsJaegerPolaris: any = []

  constructor(private req: RequestService,
    private descripserv: DescripeservService
  ){}

  showDiscoverComp = this.descripserv.showDiscoverComp
  general: boolean = true;
  discoverInputObject = this.descripserv.discoverInputObject;
  openDescribe = this.descripserv.openDescribe;
  closeDiscoverComp = this.descripserv.closeDiscoverComp

  ngOnInit(){
    this.collectionsJaegerAll = this.collectionsJaeger;

  }
  show(num: number){
    if(num  == 1){
      this.collectionsJaegerAll = this.collectionsJaeger
    } else {
      this.collectionsJaegerAll = this.collectionsJaegerPolaris
    }
  }
} 
