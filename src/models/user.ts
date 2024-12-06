import {Schema, model, Document} from 'mongoose';


interface IUser extends Document {
    name: string;
    email:string;
    age:number;
    createdAt: Date;
}

const userSchema = new Schema<IUser>({
    name:{type:String, required: true},
    email:{type:String, 
        required: true,
        unique:true,
        lowercase:true,
        trim:true
    },
    age:{type:Number, required:true, in: 0},
    createdAt:{type:Date, default:Date.now}
})

const User= model<IUser>('User', userSchema);

export default User