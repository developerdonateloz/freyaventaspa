import { Routes } from '@angular/router';
import { ProductcategoryEditComponent } from './pages/productcategories/edit/productcategory-edit.component';
import { ProductcategoriesComponent } from './pages/productcategories/list/productcategories.component';
import { ProductcategoryCreateComponent } from './pages/productcategories/create/productcategory-create.component';
import { ProductsComponent } from './pages/products/list/products.component';
import { ProductEditComponent } from './pages/products/edit/product-edit.component';
import { ProductCreateComponent } from './pages/products/create/product-create.component';
import { ColorsComponent } from './pages/colors/list/colors.component';
import { SizesComponent } from './pages/sizes/list/sizes.component';
import { ColorCreateComponent } from './pages/colors/create/color-create.component';
import { SizeCreateComponent } from './pages/sizes/create/size-create.component';
import { ProductitemsComponent } from './pages/productitems/list/productitems.component';
import { ProductitemCreateComponent } from './pages/productitems/create/productitem-create.component';

export const routes: Routes = [
  {
    path: 'productcategories',
    component: ProductcategoriesComponent,
    title: 'Categorías',
  },
  {
    path: 'productcategories/edit/:id',
    component: ProductcategoryEditComponent,
    title: 'Edición de Categoría',
  },
  {
    path: 'productcategories/create',
    component: ProductcategoryCreateComponent,
    title: 'Creación de Categoría',
  },
  {
    path:'products',
    component:ProductsComponent,
    title:'Productos',
  },
  {
    path:'products/edit/:id',
    component:ProductEditComponent,
    title:'Edición de Producto'
  },
  {
    path:'products/create',
    component:ProductCreateComponent,
    title:'Creación de Producto'
  },
  {
    path:'colors',
    component:ColorsComponent,
    title:'Colores'
  },
  {
    path:'colors/create',
    component:ColorCreateComponent,
    title:'Creación de Color'
  },
  {
    path:'sizes',
    component:SizesComponent,
    title:'Tallas'
  },
  {
    path:'sizes/create',
    component:SizeCreateComponent,
    title:'Creación de Tamaño'
  },
  {
    path:'productitems',
    component:ProductitemsComponent,
    title:'Items'
  },
  {
    path:'productitems/create',
    component:ProductitemCreateComponent,
    title:'Creación de Item'
  }
];
