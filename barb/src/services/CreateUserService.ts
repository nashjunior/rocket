import { getRepository } from 'typeorm';
import { hash } from 'bcrypt';
import User from '../models/User';
import AppError from '../errors/AppError';

interface Request {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  public async execute({ email, password, name }: Request): Promise<User> {
    const usersRepository = getRepository(User);
    const userExists = await usersRepository.findOne({ where: { email } });

    const hashedPassword = await hash(password, 8);

    if (userExists) throw new AppError('Email address already used');
    const user = usersRepository.create({
      name,
      email,
      password: hashedPassword,
    });

    await usersRepository.save(user);
    return user;
  }
}

export default CreateUserService;
