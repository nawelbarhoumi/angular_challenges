import { AbstractControl, ValidatorFn } from "@angular/forms";

// export function forbiddenProductNameValidator(control: AbstractControl):{[key:string]: any} | null{
//     const forbidden = /coka/.test(control.value);
//     return forbidden ? { 'forbiddenProductName': { value: control.value}} : null;
// }

//2nd way

// export function forbiddenProductNameValidator(forbiddenProductName: RegExp): ValidatorFn {
//      return (control: AbstractControl):{[key:string]: any} | null => {
//             const forbidden = forbiddenProductName.test(control.value);            
//             return forbidden ? { 'forbiddenProductName': { value: control.value}} : null;
//     }
// }


// export function matchNameDescriptionValidator(formGroup: AbstractControl):{[key:string]: any} | null{
//     const productName = formGroup.get('productName');
//     const productDescription = formGroup.get('productDescription');
//     if (productName==null || productDescription==null){
//         return null;
//     }
//     return productName.value !== productDescription.value ? { 'productName': { value: productName.value}} : null;
// }