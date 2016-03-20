import {KeyValuePair} from './keyValuePair';
module Common {
    export class ServiceResult {
            
        private ValidationMessages:Array<KeyValuePair<string>>;
        
        constructor() {
            this.ValidationMessages = new Array<KeyValuePair<string>>();
        }
        
        /**
         * AddValidation
         */
        public AddValidation(property:string="", message:string) {
            this.ValidationMessages.push(new KeyValuePair(property, message));
        }
        
        /**
         * GetValidations
         */
        public GetValidations() {
            return this.ValidationMessages;
        }
    }
}
export = Common;
