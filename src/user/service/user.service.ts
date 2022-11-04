import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDto } from '../dto/user.dto';
import { User, UserDocument } from '../schemas/user.schema';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>){}

    async create(createUserDto: UserDto): Promise<User>{
        const createdUser = new this.userModel(createUserDto);
        return await createdUser.save()
    }

    async findAll(): Promise<User[]> {
        return await this.userModel.find().exec();
    }

    async findById(id: number): Promise<User>{
        return await this.userModel.findById(id).exec();
    }

    async update(id: number, updateUserDto: UserDto): Promise<User> {
        return await this.userModel.findByIdAndUpdate(id,updateUserDto, {new: true})
    }

    async delete(id: number): Promise<any>{
        return await this.userModel.findByIdAndRemove(id);
    }
}
