import { CategoriesModel } from './CategoriesModel';

export type PortalConfigParamsModelType = {
  contact_phone: string;
  businessUnitUUID: string;
  cover_description: string;
  cover_image_url: string;
  categories: Array<CategoriesModel>;
};

export class PortalConfigParamsModel {
  contact_phone: string;
  businessUnitUUID: string;
  cover_description: string;
  cover_image_url: string;
  categories: Array<CategoriesModel>;

  constructor(
    contact_phone: string,
    businessUnitUUID: string,
    cover_description: string,
    cover_image_url: string,
    categories: Array<CategoriesModel>
  ) {
    this.contact_phone = contact_phone;
    this.businessUnitUUID = businessUnitUUID;
    this.cover_description = cover_description;
    this.cover_image_url = cover_image_url;
    this.categories = categories;
  }
}
