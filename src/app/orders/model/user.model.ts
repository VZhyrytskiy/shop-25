export class UserModel {
    constructor(
        public id: number,
        public firstName: string,
        public lastName: string,
        public address: string,
        public phone: string
    ) { }
}
