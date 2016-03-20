module Common {
    export class KeyValuePair<T> {
            
        Key: string;
        Value: T;
        
        constructor(key: string, value: T) {
            this.Key = key;
            this.Value = value;
        }
        
    }
}
export = Common;