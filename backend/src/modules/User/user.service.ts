/* istanbul ignore file */

import { PaginationQueryInput } from '@lib/interfaces/pagination.interface';
import { PaginationQueryBuilder } from '@lib/pagination/pagination.queryBuilder';
import { NotFoundError } from '@lib/errors/errors';
import { BadRequestException, Injectable } from '@nestjs/common';
import { Prisma, User, UserRole } from '@prisma/client';
import { PrismaService } from '../Prisma/prisma.service';
import { Argon2CryptoProvider } from '@modules/Argon2/argon2.provider';

@Injectable()
export class UserService {
  constructor(
    private prisma: PrismaService,
    private queryBuilder: PaginationQueryBuilder<
      Prisma.UserWhereInput,
      Prisma.UserOrderByWithRelationInput
    >,
    private crypto: Argon2CryptoProvider,
  ) {}

  async findUserById(userId: User['id'], includeSensitiveInformation = false) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        email: includeSensitiveInformation,
        password: false,
        role: true,
        createdAt: true,
        updatedAt: true,
        firstName: true,
        lastName: true,
        categories: true,
        address: includeSensitiveInformation,
        about: true,
        likesTo: true,
        phoneNumber: includeSensitiveInformation,
      },
    });
    if (!user) throw new NotFoundError('user_not_found');
    return user;
  }

  async findUserByEmail(userEmail: User['email']): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: { email: userEmail },
    });
    if (!user) throw new NotFoundError('user_not_found');
    return user;
  }

  // Returns all the users, given the correct QueryInput
  async findUsersPagination(query: PaginationQueryInput) {
    const {
      pagination: { skip, take },
      where,
      orderBy,
    } = this.queryBuilder.build(query);
    return this.prisma.user.findMany({
      skip,
      take,
      orderBy,
      where,
      select: {
        id: true,
        email: false,
        password: false,
        role: true,
        createdAt: true,
        updatedAt: true,
        firstName: true,
        lastName: true,
        categories: true,
        likesTo: true,
        about: true,
        address: false,
        phoneNumber: false,
      },
    });
  }

  async createUser({
    email,
    password,
    role,
    phoneNumber,
    firstName,
    lastName,
  }: {
    email: User['email'];
    password: User['password'];
    role: UserRole;
    phoneNumber: User['phoneNumber'];
    firstName: User['firstName'];
    lastName: User['lastName'];
  }) {
    return this.prisma.user.create({
      data: {
        email: email,
        password: await this.crypto.hashPassword(password),
        role: role,
        phoneNumber,
        firstName,
        lastName,
      },
      select: {
        email: true,
        password: false,
        role: true,
        id: true,
        createdAt: true,
        updatedAt: true,
        firstName: true,
        lastName: true,
        phoneNumber: true,
      },
    });
  }

  async editUser(userId: User['id'], user: Partial<User>) {
    await this.findUserById(userId, false);
    try {
      return this.prisma.user.update({
        where: { id: userId },
        data: {
          email: user.email,
          password: user.password
            ? await this.crypto.hashPassword(user.password)
            : undefined,
          phoneNumber: user.phoneNumber,
          firstName: user.firstName,
          lastName: user.lastName,
          about: user.about,
          categories: user.categories,
          likesTo: user.likesTo,
        },
        select: {
          password: false,
          email: true,
          role: true,
          id: true,
        },
      });
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        throw new BadRequestException('email_address_already_in_use');
      }
    }
  }

  async deleteUser(id: string) {
    const user = await this.prisma.user.findUnique({
      where: { id },
      select: { id: true },
    });
    if (!user) throw new NotFoundError('user_not_found');
    return this.prisma.user.delete({ where: { id } });
  }
}
