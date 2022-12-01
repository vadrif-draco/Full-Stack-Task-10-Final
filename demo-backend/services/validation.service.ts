import Product from '../interfaces/product.interface';
import Category from '../interfaces/category.interface';
export function validateCategoryData(categoryData: Category): { status: boolean; message: string } {

  if (categoryData === null) return { status: false, message: "missing category" }

  if (categoryData.name === null) return { status: false, message: "missing category name" }
  if (typeof categoryData.name !== 'string') return { status: false, message: "invalid category name (must be a string)" }
  if (categoryData.name === "") return { status: false, message: "empty category name" }

  if (categoryData.image === null) return { status: false, message: "missing category image url" }
  if (typeof categoryData.image !== 'string') return { status: false, message: "invalid category image url (must be a string)" }
  if (categoryData.image === "") return { status: false, message: "empty category image url" }

  if (categoryData.productCount === null) return { status: false, message: "missing category product count" }
  if (typeof categoryData.image !== 'number') return { status: false, message: "invalid category product count (must be an number)" }
  
  if (categoryData.productCount === 0) return { status: false, message: "category product count cannot be 0" }

  return { status: true, message: "ok" }

}

export function validateProductData(productData: Product): { status: boolean; message: string } {

  if (productData === null) return { status: false, message: "missing product" }

  if (productData.name === null) return { status: false, message: "missing product name" }
  if (typeof productData.name !== 'string') return { status: false, message: "invalid product name (must be a string)" }
  if (productData.name === "") return { status: false, message: "empty product name" }

  if (productData.image === null) return { status: false, message: "missing product image url" }
  if (typeof productData.image !== 'string') return { status: false, message: "invalid product image url (must be a string)" }
  if (productData.image === "") return { status: false, message: "empty product image url" }

  if (productData.category_id === null) return { status: false, message: "missing product category id" }
  if (typeof productData.category_id !== 'string') return { status: false, message: "invalid product category id" }
  if (productData.category_id === "") return { status: false, message: "empty product category id" }

  if (productData.description === null) return { status: false, message: "missing product description" }
  if (typeof productData.description !== 'string') return { status: false, message: "invalid product xx (must be a string)" }
  if (productData.description === "") return { status: false, message: "empty product description" }

  if (productData.price === null) return { status: false, message: "missing product price" }
  if (typeof productData.price !== 'number') return { status: false, message: "invalid product price (must be a number)" }

  if (productData.discount === null) return { status: false, message: "missing product discount" }
  if (typeof productData.discount !== 'number') return { status: false, message: "invalid product discount (must be a number)" }

  if (productData.rating === null) return { status: false, message: "missing product rating" }
  if (typeof productData.rating !== 'number') return { status: false, message: "invalid product rating (must be a number)" }

  if (productData.rating_count === null) return { status: false, message: "missing product ratings count" }
  if (typeof productData.rating_count !== 'number') return { status: false, message: "invalid product ratings count (must be a number)" }

  if (productData.is_featured === null) return { status: false, message: "missing product is_featured flag" }
  if (typeof productData.is_featured !== 'boolean') return { status: false, message: "invalid product is_featured flag (must be a boolean)" }

  if (productData.is_recent === null) return { status: false, message: "missing product is_recent flag" }
  if (typeof productData.is_recent !== 'boolean') return { status: false, message: "invalid product is_recent flag (must be a boolean)" }

  return { status: true, message: "ok" }

}

export function validateLoginInfo(loginInfo: any): { status: boolean; message: string } {

  if (loginInfo === null) return { status: false, message: "missing login info" }

  if (loginInfo.email === null) return { status: false, message: "missing email field in login info" }
  if (typeof loginInfo.email !== 'string') return { status: false, message: "invalid email (must be a string)" }

  if (loginInfo.password === null) return { status: false, message: "missing password field in login info" }
  if (typeof loginInfo.password !== 'string') return { status: false, message: "invalid password (must be a string)" }

  return { status: true, message: "ok" }

}

export function validateRegistrationInfo(registrationInfo: any): { status: boolean; message: string } {

  if (registrationInfo === null) return { status: false, message: "missing registration info" }

  if (registrationInfo.first_name === null) return { status: false, message: "missing first_name field in registration info" }
  if (typeof registrationInfo.first_name !== 'string') return { status: false, message: "invalid first_name (must be a string)" }

  if (registrationInfo.last_name === null) return { status: false, message: "missing last_name field in registration info" }
  if (typeof registrationInfo.last_name !== 'string') return { status: false, message: "invalid last_name (must be a string)" }

  if (registrationInfo.email === null) return { status: false, message: "missing email field in registration info" }
  if (typeof registrationInfo.email !== 'string') return { status: false, message: "invalid email (must be a string)" }

  if (registrationInfo.password === null) return { status: false, message: "missing password field in registration info" }
  if (typeof registrationInfo.password !== 'string') return { status: false, message: "invalid password (must be a string)" }

  return { status: true, message: "ok" }

}