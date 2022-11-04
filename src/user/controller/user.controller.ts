import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { User} from '../schemas/user.schema'

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post()
    async createUser(@Res() response, @Body() user: User) {
        const newUser = await this.userService.create(user)
        return response.status(HttpStatus.CREATED).json({
            newUser
        })
    }

    @Get()
    async fetchAll(@Res() response) {
        const Users = await this.userService.findAll();
        return response.status(HttpStatus.OK).json({
            Users
        })
    }

    @Get('/:id')
    async findById(@Res() response, @Param('id') id) {
        const User = await this.userService.findById(id);
        return response.status(HttpStatus.OK).json({
            User
        })
    }

    @Put('/:id')
    async update(@Res() response, @Param('id') id, @Body() user: User) {
        const updatedUser = await this.userService.update(id, user);
        return response.status(HttpStatus.OK).json({
            updatedUser
        })
    }

    @Delete('/:id')
    async delete(@Res() response, @Param('id') id) {
        const deletedUser = await this.userService.delete(id);
        return response.status(HttpStatus.OK).json({
            deletedUser
        })
    }
}
