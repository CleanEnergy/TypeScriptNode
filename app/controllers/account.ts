import {ServiceResult} from '../common/serviceResult';

export class AccountController {

    public postLogin(username:string, password:string): ServiceResult {
        
        var result = new ServiceResult();
        
        result.AddValidation("Username", "Username not found");
                    
        return result;
    };
}