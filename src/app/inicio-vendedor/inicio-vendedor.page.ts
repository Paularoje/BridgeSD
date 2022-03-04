import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-inicio-vendedor',
  templateUrl: './inicio-vendedor.page.html',
  styleUrls: ['./inicio-vendedor.page.scss'],
})
export class InicioVendedorPage implements OnInit {
  public searchField: FormControl;
  public productoList$: Observable<ProductoItem[]>;

  constructor() {
    this.searchField = new FormControl('');
  }

  ngOnInit() {
  }

}

interface ProductoItem {
  name: string;
}

// import { Component, OnInit } from '@angular/core';
// import { FormControl } from '@angular/forms';
// import { Firestore, collectionData, query, collection } from '@angular/fire/firestore';
// import { combineLatest, Observable } from 'rxjs';
// import { map, startWith } from 'rxjs/operators';

// @Component({
//   selector: 'app-inicio-vendedor',
//   templateUrl: './inicio-vendedor.page.html',
//   styleUrls: ['./inicio-vendedor.page.scss'],
// })

// export class InicioVendedorPage implements OnInit {
//   public searchField: FormControl;
//   public productoList$: Observable<ProductoItem[]>;

//   constructor(private readonly firestore: Firestore) {
//     this.searchField = new FormControl('');
//   }

//   async ngOnInit() {
//     const searchTerm$ = this.searchField.valueChanges.pipe(
//       startWith(this.searchField.value)
//     );

//     const productoList$ = collectionData(query(collection(this.firestore, 'productoList')));

//     this.productoList$ = combineLatest([productoList$, searchTerm$]).pipe(
//       map(([productoList, searchTerm]) =>
//         productoList.filter(
//           (productoItem) =>
//             searchTerm === '' ||
//             productoItem.name.toLowerCase().includes(searchTerm.toLowerCase())
//         )
//       )
//     );
//   }
// }

// interface ProductoItem {
//   name: string;
// }
