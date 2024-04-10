import mongoose, {Schema, Document} from 'mongoose';

export interface Message extends Document {
    content: string;
    createdAt: Date;
}

const MessageSchema: Schema<Message> = new Schema({
    content: {type: String, required: true},
    createdAt: {type: Date, required: true, default: Date.now}
});

export interface User extends Document {
    username: string;
    email: string;
    password: string;
    verifyCode: string;
    verifyCodeExpiry: Date;
    isVerified: boolean;
    isAcceptingMessages: boolean;
    message: Message[];
}

const UserSchema: Schema<User> = new Schema({
    username: {
        type: String, 
        required: true,
        unique: true,
        trim: true,
    },
    email: {
        type: String, 
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Please enter a valid e-mail address']
    },
    password: {
        type: String, 
        required: [true, 'Password is required'],
    },
    verifyCode: {
        type: String, 
        required: [true, 'Verification code is required']
    },
    isVerified: {
        type: Boolean, 
        required: true, 
        default: false
    },
    isAcceptingMessages: {
        type: Boolean, 
        required: true, 
        default: true
    },
    verifyCodeExpiry: {
        type: Date, 
        required: true
    },
    message: [MessageSchema]
});


const UserModel = (mongoose.models.User as mongoose.Model<User>) || mongoose.model<User>('User', UserSchema);

export default UserModel;