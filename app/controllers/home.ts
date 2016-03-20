export module Application {
    export class HomeController {
        public echo(input : Object) {
            return input.toString();
        }
    }
}