var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
import { BaseApplicationCustomizer, PlaceholderName } from '@microsoft/sp-application-base';
import * as strings from 'CustomFooterApplicationCustomizerStrings';
var LOG_SOURCE = 'CustomFooterApplicationCustomizer';
/** A Custom Action which can be run during execution of a Client Side Application */
var CustomFooterApplicationCustomizer = /** @class */ (function (_super) {
    __extends(CustomFooterApplicationCustomizer, _super);
    function CustomFooterApplicationCustomizer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomFooterApplicationCustomizer.prototype.onInit = function () {
        Log.info(LOG_SOURCE, "Initialized " + strings.Title);
        var message = this.properties.testMessage;
        if (!message) {
            message = '(No properties were provided.)';
        }
        // Dialog.alert(`Hello from ${strings.Title}:\n\n${message}`);
        var topPlaceholder = this.context.placeholderProvider.tryCreateContent(PlaceholderName.Top);
        if (topPlaceholder) {
            //   topPlaceholder.domElement.innerHTML = '<div><div style="text-align:center" > This is to demo SPFx extension to customize app header. </div> </div>';
        }
        var bottomPlaceholder = this.context.placeholderProvider.tryCreateContent(PlaceholderName.Bottom);
        if (bottomPlaceholder) {
            bottomPlaceholder.domElement.innerHTML =
                "<div class=\"" + styles.hiveMenuFooter + "\">\n       <footer class=\"" + styles.footerdistributed + "\">\n \n       <div class=\"" + styles.footerleft + "\">\n       \n       <h3>Team<span>Blaze</span></h3>\n       \n       <p class=\"" + styles.footerlinks + "\">\n       <a href=\"https://apdebian.sharepoint.com/sites/Blaze2\">Home</a>\n       \u00B7\n       <a href=\"https://apdebian.sharepoint.com/sites/Blaze2/SitePages/Products.aspx\">Product</a>\n       \u00B7\n       <a href=\"https://apdebian.sharepoint.com/sites/Blaze2/SitePages/SaleOrders.aspx\">Sale Order Form</a>\n       \u00B7\n       <br/>\n       <a href=\"https://apdebian.sharepoint.com/sites/Blaze2/SitePages/About-Us.aspx\">About</a>\n       \u00B7\n       <a href=\"https://apdebian.sharepoint.com/sites/Blaze2/Reports/Forms/AllItems.aspx\">Monthly Sale Report</a>\n       \n       \n       </p>\n       \n       <p class=\"" + styles.footercompanyname + "\">Blaze &copy; 2021</p>\n       </div>\n       \n       <div class=\"" + styles.footercenter + "\">\n       \n       <div>\n       <i class=\"fa fa-map-marker " + styles.icon + "\"></i>\n       <p><span>21 Revolution Street</span> Delhi, India</p>\n       </div>\n       \n       <div>\n       <i class=\"fa fa-phone " + styles.icon + "\"></i>\n       <p>+91 7533860042</p>\n       </div>\n       \n       <div>\n       <i class=\"fa fa-envelope " + styles.icon + "\"></i>\n       <p><a href=\"mailto:support@company.com\">contact@teamblaze.com</a></p>\n       </div>\n       \n       </div>\n       \n       <div class=\"" + styles.footerright + "\">\n       \n       <p class=\"" + styles.footercompanyabout + "\">\n       <span>About the company</span>\n       Blaze is a $35 billion organisation. It is a leading global automobile manufacturing company.\n       </p>\n       \n       <div class=\"" + styles.footericons + "\">\n       \n       <a href=\"#\"><i class=\"fab fa-facebook-square\"></i></a>\n       <a href=\"#\"><i class=\"fab fa-twitter-square\"></i></a>\n       <a href=\"#\"><i class=\"fab fa-instagram-square\"></i></a>\n       <a href=\"#\"><i class=\"fab fa-github-square\"></i></a>\n       \n       </div>\n       \n       </div>\n       \n       </footer>\n       \n       </div>";
        }
        return Promise.resolve();
    };
    __decorate([
        override
    ], CustomFooterApplicationCustomizer.prototype, "onInit", null);
    return CustomFooterApplicationCustomizer;
}(BaseApplicationCustomizer));
export default CustomFooterApplicationCustomizer;
//# sourceMappingURL=CustomFooterApplicationCustomizer.js.map