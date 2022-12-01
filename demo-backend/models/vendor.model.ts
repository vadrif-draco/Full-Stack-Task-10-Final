import { _GenericModel } from "./_generic.model"

class VendorModel extends _GenericModel {

  constructor() { super("Vendors", "Vendor") }

}

export const vendorModel = new VendorModel