import { override } from '@microsoft/decorators';
import { Log } from '@microsoft/sp-core-library';
import styles from './Customfooter.module.scss';
//import * as bootstrap from "bootstrap";
require('../../../../MyFooter/node_modules/@fortawesome/fontawesome-free/css/all.min.css');
require('../../../../MyFooter/node_modules/@fortawesome/fontawesome-free/js/all.js');
require('../../../../MyFooter/node_modules/@fortawesome/fontawesome-free/js/brands.js');
require('../../../../MyFooter/node_modules/@fortawesome/fontawesome-free/js/fontawesome.js');
require('../../../../MyFooter/node_modules/@fortawesome/fontawesome-free/js/solid.js');

//require('../../../../node_modules/@fortawesome/fontawesome-free/css/all.min.css');
import {
  BaseApplicationCustomizer,
  PlaceholderContent, 
  PlaceholderName, 
  PlaceholderProvider 
} from '@microsoft/sp-application-base';
import { Dialog } from '@microsoft/sp-dialog';

import * as strings from 'CustomFooterApplicationCustomizerStrings';

const LOG_SOURCE: string = 'CustomFooterApplicationCustomizer';

/**
 * If your command set uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface ICustomFooterApplicationCustomizerProperties {
  // This is an example; replace with your own property
  testMessage: string;
}

/** A Custom Action which can be run during execution of a Client Side Application */
export default class CustomFooterApplicationCustomizer
  extends BaseApplicationCustomizer<ICustomFooterApplicationCustomizerProperties> {

  @override
  public onInit(): Promise<void> {
    Log.info(LOG_SOURCE, `Initialized ${strings.Title}`);

    let message: string = this.properties.testMessage;
    if (!message) {
      message = '(No properties were provided.)';
    }

   // Dialog.alert(`Hello from ${strings.Title}:\n\n${message}`);
    let topPlaceholder: PlaceholderContent = this.context.placeholderProvider.tryCreateContent(PlaceholderName.Top); 
    if (topPlaceholder) { 
     //   topPlaceholder.domElement.innerHTML = '<div><div style="text-align:center" > This is to demo SPFx extension to customize app header. </div> </div>';
    }
    let bottomPlaceholder: PlaceholderContent = this.context.placeholderProvider.tryCreateContent(PlaceholderName.Bottom); 
    if (bottomPlaceholder) { 
      bottomPlaceholder.domElement.innerHTML =
       `<div class="${styles.hiveMenuFooter}">
       <footer class="${styles.footerdistributed}">
 
       <div class="${styles.footerleft}">
       
       <h3>Team<span>Blaze</span></h3>
       
       <p class="${styles.footerlinks}">
       <a href="https://apdebian.sharepoint.com/sites/Blaze2">Home</a>
       ·
       <a href="https://apdebian.sharepoint.com/sites/Blaze2/SitePages/Products.aspx">Product</a>
       ·
       <a href="https://apdebian.sharepoint.com/sites/Blaze2/SitePages/SaleOrders.aspx">Sale Order Form</a>
       ·
       <br/>
       <a href="https://apdebian.sharepoint.com/sites/Blaze2/SitePages/About-Us.aspx">About</a>
       ·
       <a href="https://apdebian.sharepoint.com/sites/Blaze2/Reports/Forms/AllItems.aspx">Monthly Sale Report</a>
       
       
       </p>
       
       <p class="${styles.footercompanyname}">Blaze &copy; 2021</p>
       </div>
       
       <div class="${styles.footercenter}">
       
       <div>
       <i class="fa fa-map-marker ${styles.icon}"></i>
       <p><span>21 Revolution Street</span> Delhi, India</p>
       </div>
       
       <div>
       <i class="fa fa-phone ${styles.icon}"></i>
       <p>+91 xxxxxxxxxx</p>
       </div>
       
       <div>
       <i class="fa fa-envelope ${styles.icon}"></i>
       <p><a href="mailto:support@company.com">contact@teamblaze.com</a></p>
       </div>
       
       </div>
       
       <div class="${styles.footerright}">
       
       <p class="${styles.footercompanyabout}">
       <span>About the company</span>
       Blaze is a $35 billion organisation. It is a leading global automobile manufacturing company.
       </p>
       
       <div class="${styles.footericons}">
       
       <a href="#"><i class="fab fa-facebook-square"></i></a>
       <a href="#"><i class="fab fa-twitter-square"></i></a>
       <a href="#"><i class="fab fa-instagram-square"></i></a>
       <a href="#"><i class="fab fa-github-square"></i></a>
       
       </div>
       
       </div>
       
       </footer>
       
       </div>`;
    }
      return Promise.resolve();
  
    

  }
}
